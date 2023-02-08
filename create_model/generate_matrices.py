from generate_bernoulli_measurement_matrix import generate_bernoulli_measurement_matrix
import torch
from math import log2
from generate_wavelet_transform import generate_wavelet_transform
from save_load_matrices import save_matrices
from MatrixInfo import MatrixInfo


def generate_matrices(size: int):
    """
    size should be a power of 2
    """
    info = MatrixInfo(size)
    bernoulli = generate_bernoulli_measurement_matrix(
        info.number_of_measurements, info.number_of_elements)

    # (_transform, inverse_transform) = generate_dct_transform(info.number_of_elements)
    # (_transform, inverse_transform) = generate_wavelet_transform(
    #              torch.zeros((info.number_of_elements)), size, "haar", int(log2(size)) - 1)
    (_transform, inverse_transform) = generate_wavelet_transform(
                torch.zeros((info.number_of_elements)), size, "haar", int(log2(size)) - 1)
    save_matrices({
        "measurement": bernoulli,
        "inverse_transform": inverse_transform.to_dense(),
    }, size)


if __name__ == "__main__":
    from suppported_sizes import supported_sizes
    torch.manual_seed(842)  # type: ignore
    for i in supported_sizes:
        generate_matrices(i)
