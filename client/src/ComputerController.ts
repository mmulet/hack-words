import { ColorTube, draw_tube } from "./ColorTube";
import { load_image } from "./load_image";
import { animate_fuel, FuelAnimation } from "./animate_fuel";
import { draw_win_state, update_win_state, You_Win_State } from "./WinState";

const colors = [
  "#FF6E40",
  "#04E762",
  "#BD10E0",
  "#50E3C2",
  "#FFD300",
  "#E86363",
  "#8B572A",
  "#B8E986",
  "#9013FE",
  "#4A90E2",
  "#F5A623",
];

export class ComputerController {
  output_canvas: HTMLCanvasElement = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;

  canvas: HTMLCanvasElement = document.getElementById(
    "computer_canvas"
  ) as HTMLCanvasElement;
  context: CanvasRenderingContext2D = this.canvas.getContext("2d")!;

  big_button_canvas: HTMLCanvasElement = document.getElementById(
    "big-button-canvas"
  ) as HTMLCanvasElement;
  big_button_context: CanvasRenderingContext2D =
    this.big_button_canvas.getContext("2d")!;

  win_letter: HTMLDivElement = document.getElementById(
    "win-letter"
  ) as HTMLDivElement;

  big_button: HTMLButtonElement = document.getElementById(
    "big-button"
  ) as HTMLButtonElement;

  computer_image: HTMLImageElement = load_image("/static/computer0001.png");
  tube_images: HTMLImageElement = load_image("/static/tubes.png");

  win_images: HTMLImageElement = load_image("/static/win.png");

  tubes: ColorTube[] = [
    {
      x: 103,
      y: 697,
      color: "red",
      height: 0.0,
    },
    {
      x: 35,
      y: 742,
      color: "green",
      height: 0,
    },
    {
      x: 135,
      y: 875,
      color: "blue",
      height: 0.0,
    },
    {
      x: 315,
      y: 689,
      color: "red",
      height: 0.0,
    },
    {
      x: 400,
      y: 742,
      color: "green",
      height: 0.0,
    },
    {
      x: 316,
      y: 875,
      color: "blue",
      height: 0.0,
    },
  ];

  scanlines = load_image("/static/scanlines.png");

  constructor() {
    const ratio = window.devicePixelRatio || 1;
    this.context.imageSmoothingEnabled = false;
    const canvasRect = this.canvas.getBoundingClientRect();
    canvasRect.width;
    const terminal = document.getElementById("terminal")!;
    //If canvas has been scaled, we need to scale the terminal as well
    terminal.style.left = 113 * (canvasRect.width / 512) + "px";
    terminal.style.top = 256 * (canvasRect.height / 1024) + "px";
    terminal.style.width = 265 * (canvasRect.width / 512) + "px";
    terminal.style.height = 168 * (canvasRect.height / 1024) + "px";
    this.big_button.addEventListener("click", this.big_button_click);
    requestAnimationFrame(this.update_and_draw);
  }
  color_index = 0;

  on_puzzle_solved = () => {
    this.fuel_animation.push({
      time: 0,
      color: colors[this.color_index],
    });
    this.color_index = (this.color_index + 1) % colors.length;
  };

  play_win_animation = () => {
    if (this.win_state.type != "not_won") {
      return;
    }
    this.big_button.style.display = "unset";
    this.win_state = {
      type: "waiting_for_big_button",
      time: 0,
    };
  };
  big_button_click = () => {
    if (this.win_state.type != "waiting_for_big_button") {
      return;
    }
    this.win_state = {
      type: "won",
      time: 0,
    };
    this.win_letter.style.display = "unset";
  };

  fuel_animation: FuelAnimation[] = [];

  lastFrameTime: number | null = null;
  timeSinceLastAnimationFrame: number = 0;

  win_state: You_Win_State = {
    type: "not_won",
  };

  update_and_draw = async (totalTimeElapsed: number) => {
    const timeDifference =
      this.lastFrameTime == null ? 0 : totalTimeElapsed - this.lastFrameTime;
    this.lastFrameTime = totalTimeElapsed;
    const timeIncrement = timeDifference / 1000;

    this.context.clearRect(0, 0, 512, 1024);
    this.context.drawImage(this.computer_image, 0, 0);

    for (const tube of this.tubes) {
      draw_tube(this, tube);
    }

    this.context.fillStyle = `rgb(${(this.tubes[0].height / 0.7) * 255}, ${
      (this.tubes[1].height / 0.7) * 255
    }, ${(this.tubes[2].height / 0.7) * 255})`;
    this.context.beginPath();

    this.context.ellipse(214, 836, 14, 14, 0, 0, 2 * Math.PI);
    this.context.fill();

    this.context.fillStyle = `rgb(${(this.tubes[3].height / 0.7) * 255}, ${
      (this.tubes[4].height / 0.7) * 255
    }, ${(this.tubes[5].height / 0.7) * 255})`;
    this.context.beginPath();

    this.context.ellipse(306, 838, 14, 14, 0, 0, 2 * Math.PI);
    this.context.fill();

    this.context.font = "60px Mono";

    this.context.drawImage(this.output_canvas, 132, 50, 128, 128);

    // for (let i = 0; i < vertices.length; i++) {
    //   const [x, y] = vertices[i];
    //   this.context.fillStyle = "white";
    //   this.context.fillRect(x, y, 1, 1);
    //   this.context.font = "16px Mono";
    //   this.context.fillStyle = "green";
    //   this.context.fillText(`${i}`, x, y);
    // }
    const indices_to_remove: number[] = [];
    for (let i = 0; i < this.fuel_animation.length; i++) {
      const fuel = this.fuel_animation[i];
      fuel.time += timeIncrement;
      animate_fuel(this.context, fuel);
      if (fuel.time > 12) {
        indices_to_remove.push(i);
      }
    }
    for (const index of indices_to_remove.reverse()) {
      this.fuel_animation.splice(index, 1);
    }
    if (indices_to_remove.length > 0) {
      for (const tube of this.tubes) {
        tube.height = Math.min(
          0.7,
          tube.height + 0.1 * indices_to_remove.length
        );
      }
    }
    update_win_state(this.win_state, timeIncrement);
    draw_win_state(this);

    // this.context.drawImage(this.output_canvas, 164, 82, 64, 64);
    // this.context.drawImage(this.scanlines, 0, 0, 128, 128, 132, 50, 128, 128);

    requestAnimationFrame(this.update_and_draw);
  };
}
