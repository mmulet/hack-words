import { get_models_and_data } from "./get_models_and_data";
export declare const ort: typeof import("onnxruntime-web");
import { Tensor, InferenceSession } from "onnxruntime-web";
import { Reconstruction } from "./Reconstruction";
import { load_image } from "./load_image";
import { image_to_samples } from "./image_to_samples";
import { puzzles } from "./puzzles";
import { adjust_samples_for_current_guess } from "./adjust_samples_for_current_guess";
import { filter_text_input } from "./filter_text_input";
import { get_computer_controller } from "./globals";

export class Controller {
  canvas: HTMLCanvasElement = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;
  context: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

  color_data: ImageData;

  samples: Tensor;
  model: InferenceSession;
  reconstruct: InferenceSession;
  sample_func: InferenceSession;
  reconstruction: Reconstruction | null = null;

  // puzzle_index = 1; // Math.floor(Math.random() * puzzles.length);
  // image_index = 29; //Math.floor(Math.random() * 25 * 8);

  puzzle_index = Math.floor(Math.random() * Object.keys(puzzles).length);

  tileset = load_image("static/fantasy-tileset.png");
  image_data_canvas = document.createElement("canvas");
  image_data_context = this.image_data_canvas.getContext("2d")!;

  solve_count = 0;
  current_guess = "";
  question_box = document.getElementById("question-box") as HTMLDivElement;
  left_button = document.getElementById("left-button") as HTMLButtonElement;
  right_button = document.getElementById("right-button") as HTMLButtonElement;
  win_status = document.getElementById("win-status") as HTMLDivElement;

  terminal_input = document.getElementById(
    "terminal-input"
  ) as HTMLTextAreaElement;

  constructor(
    data: Awaited<ReturnType<typeof get_models_and_data>>,
    public readonly test_size: number
  ) {
    this.canvas.width = test_size;
    this.canvas.height = test_size;
    this.samples = data.samples;
    this.model = data.model;
    this.reconstruct = data.reconstruct;
    this.sample_func = data.sample_func;
    this.color_data = this.context.createImageData(test_size, test_size);
    this.image_data_canvas.width = 32;
    this.image_data_canvas.height = 32;
    this.image_data_context.imageSmoothingEnabled = false;
    this.re_run_reconstruction();
    this.setup_question_box();

    this.terminal_input.addEventListener("input", this.on_input_change);
    this.left_button.addEventListener("click", this.on_previous);
    this.right_button.addEventListener("click", this.on_next);
    requestAnimationFrame(this.update_and_draw);
  }

  on_previous = () => {
    let next_index = this.puzzle_index - 1;
    if (next_index < 0) {
      next_index = Object.keys(puzzles).length - 1;
    }
    this.move_to_new_index(next_index);
  };
  on_next = () => {
    this.move_to_new_index(
      (this.puzzle_index + 1) % Object.keys(puzzles).length
    );
  };
  move_to_new_index = (index: number) => {
    this.puzzle_index = index;
    const { solved, answer } = puzzles[this.puzzle_index];
    const guess = solved ? answer : "";
    this.terminal_input.value = guess;
    this.current_guess = guess;
    this.setup_question_box();
    this.re_run_reconstruction();
  };

  on_input_change = () => {
    const filtered_input = filter_text_input(this.terminal_input.value);
    if (filtered_input !== this.terminal_input.value) {
      this.terminal_input.value = filtered_input;
    }

    this.current_guess = filtered_input;
    this.check_answer();
    this.re_run_reconstruction();
  };

  check_answer = () => {
    const puzzle = puzzles[this.puzzle_index];
    const { solved, answer } = puzzle;
    if (solved) {
      /**
       * can't solve it twice
       */
      return;
    }
    const guess_substring = this.current_guess.substring(0, answer.length);
    if (guess_substring !== answer) {
      return;
    }
    puzzle.solved = true;
    this.setup_question_box();
    this.solve_count += 1;
    get_computer_controller()?.on_puzzle_solved();
    this.win_status.innerText = `#solved: ${this.solve_count}`;
    if (this.solve_count === 7) {
      this.win_status.innerText = "Press the big button!";
      get_computer_controller()?.play_win_animation();
    }
    if (this.solve_count === Object.keys(puzzles).length) {
      this.win_status.innerText = "Solved all puzzles!";
    }
  };
  setup_question_box = () => {
    const { solved, question } = puzzles[this.puzzle_index];
    this.question_box.innerText =
      `#${this.puzzle_index}:${solved ? " ✓ solved" : ""}\n` + question;
  };

  re_run_reconstruction = async () => {
    const { answer, image_index } = puzzles[this.puzzle_index];

    const column = image_index % 8;
    const row = Math.floor(image_index / 8);
    this.samples = await image_to_samples(
      this.tileset,
      column * 32,
      row * 32,
      32,
      32,
      this.image_data_context,
      this.sample_func
    );
    this.samples = adjust_samples_for_current_guess(
      answer,
      this.current_guess,
      this.samples
    );
    this.reconstruction = new Reconstruction(
      this.test_size,
      this.samples,
      this.model,
      this.reconstruct,
      50
    );
  };

  update_and_draw = async () => {
    await this.update();
    await this.draw();
    requestAnimationFrame(this.update_and_draw);
  };
  update = async () => {
    if (this.reconstruction === null) {
      return;
    }
    await this.reconstruction.update();
  };
  draw = async () => {
    if (this.reconstruction === null) {
      return;
    }
    await this.reconstruction.draw(this.color_data);
    this.context.putImageData(this.color_data, 0, 0);
  };
}
