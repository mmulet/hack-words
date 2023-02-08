import torch

#package PyWavelets
import pywt
import ptwt

import numpy as np
from WaveletType import WaveletType

def generate_wavelet_transform(input_tensor: torch.Tensor, width: int, wavelet: WaveletType, level: int = 1):
    """
    Generates a wavelet transform matrix and its inverse
    """
    
    matrixfwt = ptwt.MatrixWavedec2(pywt.Wavelet(wavelet), level=level)
    mat_coeff = matrixfwt(input_tensor.reshape((1,width, width)))

    matrixifwt = ptwt.MatrixWaverec2(pywt.Wavelet(wavelet))
    matrixifwt(mat_coeff)
    return (matrixfwt.sparse_fwt_operator, matrixifwt.sparse_ifwt_operator)

if __name__ == "__main__":
    # (t, i) = generate_db2_wavelet_transform(8)
    # print(torch.matmul(t,i))
    print(generate_db4_wavelet_transform(16)[0])
    # print(generate_wavelet_transform(2, wavelet='haar', level=1))
    # print(generate_wavelet_transform(4, wavelet='haar'))
    # print(generate_wavelet_transform(4, wavelet='haar'))