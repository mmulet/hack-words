import torch
from save_load_matrices import load_matrices
from datasets import load_dataset
from torchvision.transforms import Resize
from suppported_sizes import supported_sizes

def generate_test_samples():
    tiny_imagenet = load_dataset('Maysee/tiny-imagenet', split='train')
    input_image = tiny_imagenet[2]['image'].convert('YCbCr').split()[0]
    for size in supported_sizes:
        resized_image = Resize((size,size))(input_image)
        input_tensor = torch.tensor(list(resized_image.getdata()), dtype=torch.float32)

        matrices = load_matrices(size)  
        samples = torch.matmul(matrices.measurement, input_tensor)
        with open(f"docs/static/samples_{size:02}.bin", "wb") as f:
            samples.numpy().tofile(f)

if __name__ == "__main__":
    generate_test_samples()

    
    

   

