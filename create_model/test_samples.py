import torch
from save_load_matrices import load_matrices
from datasets import load_dataset
from suppported_sizes import supported_sizes

if __name__ == "__main__":
   

    tiny_imagenet = load_dataset('Maysee/tiny-imagenet', split='train')
    input_image = tiny_imagenet[2]['image'].convert('YCbCr').split()[0]
    input_tensor = torch.tensor(list(input_image.getdata()), dtype=torch.float32)

    for i in supported_sizes:

    

    samples = torch.matmul(matrices.measurement, input_tensor)
    torch.save(samples,  f"tests/samples.pt")

