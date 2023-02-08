import { MatrixInfo } from "./MatrixInfo";


export const write_output_to_data = (matrix_info: MatrixInfo, output: Float32Array, data: ImageData) => {
  for (let i = 0; i < matrix_info.number_of_elements; i++) {
    const value = output[i];
    data.data[i * 4] = value;
    data.data[i * 4 + 1] = value;
    data.data[i * 4 + 2] = value*0.4;
    data.data[i * 4 + 3] = 255;
  }
};
