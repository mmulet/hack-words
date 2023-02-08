import torch
class Reconstruction(torch.nn.Module):
    def __init__(self, inverse_wavelet_transform: torch.Tensor):
        super(Reconstruction, self ).__init__()
        self.inverse_transform = inverse_wavelet_transform

    def forward(self, reconstruction: torch.Tensor):
        return torch.matmul(self.inverse_transform, reconstruction)


if __name__ == "__main__":
    torch.manual_seed(842)
    inverse_transform = torch.load("tests/manual_64_by_64/inverse_transform.pt")
    torch.onnx.export(Reconstruction(inverse_transform), 
        ( torch.zeros((4096)), ), 
        "./docs/static/web_reconstruction.onnx", 
        input_names=["reconstruction"], 
        output_names=["image"], 
        )
