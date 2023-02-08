
class MatrixInfo:
    def __init__(self, size: int):
        self.number_of_elements = size*size
        if(size == 8):
            self.number_of_measurements = 32
        elif(size == 16):
            self.number_of_measurements = 128
        elif(size == 32):
            self.number_of_measurements = 1024
        else:
            self.number_of_measurements = int(self.number_of_elements/4)