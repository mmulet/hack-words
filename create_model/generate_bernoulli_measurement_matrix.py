import torch

def generate_bernoulli_measurement_matrix(row: int, columns: int) -> torch.Tensor:
    """Generate a m x n matrix with entries sampled from a Bernoulli distribution."""
    one =  torch.bernoulli(torch.empty(row, columns).uniform_(0, 1))
    two = one - 1
    # return two
    return one + two
    # return one

