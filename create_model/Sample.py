import torch


class Sample(torch.nn.Module):
    def __init__(self, measurement_matrix: torch.Tensor):
        super(Sample, self).__init__()
        self.measurement_matrix = measurement_matrix

    def forward(self, image_tensor: torch.Tensor):
        return torch.matmul(self.measurement_matrix, image_tensor.to(torch.float32)).to(torch.int16)
