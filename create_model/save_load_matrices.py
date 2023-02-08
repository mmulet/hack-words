from typing_extensions import TypedDict
import torch
from dataclasses import dataclass


class MatricesDict(TypedDict):
    measurement: torch.Tensor
    inverse_transform: torch.Tensor


@dataclass
class Matrices:
    measurement: torch.Tensor
    inverse_transform: torch.Tensor


def matrix_path_for_size(size: int):
    return f"./data/matrices_{size:02}.pt"


def save_matrices(matrices: MatricesDict, size: int):
    torch.save(matrices, matrix_path_for_size(size))


def load_matrices(size: int) -> Matrices:
    loaded_dict: MatricesDict = torch.load(matrix_path_for_size(size))
    return Matrices(**loaded_dict)
