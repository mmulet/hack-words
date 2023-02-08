from typing import Tuple
import torch
import math
import numpy as np

def generate_dct_transform(n: int) -> Tuple[torch.Tensor, torch.Tensor]:
    """Generate a DCT transform matrix of size n x n."""
    size_factor = torch.pi/n
    scale_factror = math.sqrt(2/n)
    num = np.array([math.cos(size_factor * (i + 0.5) * j) for i in range(n) for j in range(n)], dtype=np.float32).reshape(n, n)
    out = scale_factror*torch.from_numpy(num)
    out_inverted = torch.transpose(out, 0, 1)
    return (out, out_inverted)