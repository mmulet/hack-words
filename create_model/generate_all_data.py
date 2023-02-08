from generate_matrices import generate_matrices
from generate_models import generate_models
from generate_test_samples import generate_test_samples
from suppported_sizes import supported_sizes
def generate_all_data():
    for i in supported_sizes:
        generate_matrices(i)
        generate_models(i)
    generate_test_samples()

if __name__ == "__main__":
    generate_all_data()