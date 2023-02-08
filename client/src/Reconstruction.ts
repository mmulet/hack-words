import { Tensor, InferenceSession } from "onnxruntime-web";
import { write_output_to_data } from "./write_output_to_data";
import { MatrixInfo, make_matrix_info } from "./MatrixInfo";
export declare const ort: typeof import("onnxruntime-web");

export class Reconstruction {
  done = false;

  reconstruction: Tensor;
  previous_diffs: Tensor;
  iteration = 0;

  start_time = performance.now();
  matrix_info: MatrixInfo;

  constructor(
    public readonly size: number,
    public readonly samples: Tensor,
    public readonly model: InferenceSession,
    public readonly reconstruct: InferenceSession,
    public readonly number_of_iterations: number
  ) {
    this.matrix_info = make_matrix_info(size);
    this.reconstruction = new ort.Tensor(
      new Float32Array(this.matrix_info.number_of_elements)
    );
    this.previous_diffs = new ort.Tensor(
      new Float32Array(this.matrix_info.number_of_elements)
    );
  }

  update = async () => {
    if (this.done) {
      return;
    }
    const stop_iteration = this.iteration + 5;
    for (
      ;
      this.iteration < this.number_of_iterations &&
      this.iteration < stop_iteration;
      this.iteration++
    ) {
      const output = await this.model.run({
        samples: this.samples,
        "reconstruction.1": this.reconstruction,
        previous_diffs: this.previous_diffs,
      });
      this.reconstruction = output.reconstruction;
      this.previous_diffs = output.diffs;
    }
    if (this.iteration < this.number_of_iterations) {
      return;
    }
    console.log(performance.now() - this.start_time);
    this.done = true;
  };
  draw = async (to: ImageData) => {
    if (this.done) {
      return;
    }
    const output = await this.reconstruct.run({
      reconstruction: this.reconstruction,
    });
    console.log(this.matrix_info.number_of_elements)
    write_output_to_data(this.matrix_info, output.image.data, to);
  };
}
