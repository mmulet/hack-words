export interface MatrixInfo {
  number_of_elements: number;
  number_of_measurements: number;
}

export const make_matrix_info = (size: number): MatrixInfo => {
  return {
    number_of_elements: size * size,
    number_of_measurements: (size * size) / 4,
  };
};
