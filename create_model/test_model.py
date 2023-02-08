from model import Model
from datasets import load_dataset
from PIL import Image
import os
import torch
from generate_bernoulli_measurement_matrix import generate_bernoulli_measurement_matrix
from generate_wavelet_transform import generate_wavelet_transform


if __name__ == "__main__":
    torch.manual_seed(842)
    project_root_directory = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    output_dir = f"{project_root_directory}/tests/manual_64_by_64"
    os.makedirs(output_dir, exist_ok=True)
    measurement_matrix = generate_bernoulli_measurement_matrix(1000, 4096)
    (_transform, inverse_transform) = generate_wavelet_transform(
                 torch.zeros((4096)), 64, "haar", 5)
    inverse_transform = inverse_transform.to_dense()

    tiny_imagenet = load_dataset('Maysee/tiny-imagenet', split='train')
    input_image = tiny_imagenet[2]['image'].convert('YCbCr').split()[0]
    input_tensor = torch.tensor(list(input_image.getdata()), dtype=torch.float32)
    Image.fromarray(input_tensor.numpy().reshape(input_image.size)).convert(
        "L").save(f"{output_dir}/original_image.png")

    model = Model(measurement_matrix, inverse_transform)
    

    samples = torch.matmul(model.measurement_matrix, input_tensor)

    # we start with a reconstruction of all zeros
    reconstruction = torch.zeros((4096))
    # we start with no previous diffs
    previous_diffs = None
    # we start with a loss of 0
    for i in range(50):
        # we generate a new set of samples
        reconstruction,previous_diffs = model(samples, reconstruction, previous_diffs)
    reconstructed_image = torch.matmul(model.inverse_transform, reconstruction)
    reconstructed_image = Image.fromarray(reconstructed_image.numpy().reshape((64, 64))).convert("L")
    reconstructed_image.save(f"{output_dir}/reconstructed_image_test{4096}.png")

    torch.save(measurement_matrix,  f"{output_dir}/measurement_matrix.pt")
    torch.save(inverse_transform,  f"{output_dir}/inverse_transform.pt")
    torch.save(samples,  f"{output_dir}/samples.pt")