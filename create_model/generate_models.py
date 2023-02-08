import torch
from save_load_matrices import load_matrices
from GradientDescent import GradientDescent
from MatrixInfo import MatrixInfo
from Reconstruction import Reconstruction
from Sample import Sample


def generate_models(size: int):
    matrices = load_matrices(size)
    info = MatrixInfo(size)
    measurement_and_inverse = torch.matmul(
        matrices.measurement, matrices.inverse_transform)
    gradient_descent_model = GradientDescent(measurement_and_inverse)
    torch.onnx.export(gradient_descent_model,
                      (torch.zeros((info.number_of_measurements), dtype=torch.int16),
                       torch.zeros((info.number_of_elements)),
                          torch.zeros((info.number_of_elements))),
                      f"./docs/static/web_gradient_descent_{size:02}.onnx",
                      input_names=["samples",
                                   "reconstruction",
                                   "previous_diffs"],
                      output_names=["reconstruction", "diffs"])

    reconstruction_model = Reconstruction(matrices.inverse_transform)
    torch.onnx.export(reconstruction_model,
                      (torch.zeros((info.number_of_elements)),),
                      f"./docs/static/web_reconstruction_{size:02}.onnx",
                      input_names=["reconstruction"],
                      output_names=["image"])
    sample_model = Sample(matrices.measurement)
    torch.onnx.export(sample_model,
                      (torch.zeros((info.number_of_elements), dtype=torch.uint8),),
                      f"./docs/static/web_sample_{size:02}.onnx",
                      input_names=["image"],
                      output_names=["samples"])


if __name__ == "__main__":
    from suppported_sizes import supported_sizes
    for i in supported_sizes:
        generate_models(i)
