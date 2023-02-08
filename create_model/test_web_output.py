from test_data import test_data
from PIL import Image
import torch
def main():
    inverse_transform = torch.load("tests/manual_64_by_64/inverse_transform.pt")
    reconstruction = torch.tensor(test_data, dtype=torch.float32)
    reconstructed_image = torch.matmul(inverse_transform, reconstruction)
    reconstructed_image = Image.fromarray(reconstructed_image.numpy().reshape((64, 64))).convert("L")
    reconstructed_image.save(f"web_test.png")

if __name__ == "__main__":
    main()
 