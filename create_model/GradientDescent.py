import torch



class GradientDescent(torch.nn.Module):
    def __init__(self, measurement_and_inverse: torch.Tensor):
        super(GradientDescent, self, ).__init__()
        self.measurement_and_inverse = measurement_and_inverse
        self.measurement_and_inverse_transpose = measurement_and_inverse.t()
       

    
    def forward(self, samples : torch.Tensor, reconstruction: torch.Tensor, previous_diffs: torch.Tensor):
        #forward pass
        
        measured = torch.matmul(
            self.measurement_and_inverse, reconstruction)
        difference = measured - samples.to(torch.float32)
        # don't need to actually compute the loss function
        # but here is what it would be
        # loss = 0.5*torch.square(difference).sum() + \
        # 10_0000 * torch.norm(weights, p=1)


        # start with a derivative of 1
        # derivative of 10_0000 * x with respect to x is 10_0000
        # derivative of x + y .... z with respect to x is 1,
        # of the norm.
        # derivative of abs(x) is sign(x),
        # so derivative of 10_0000 *abs(weights).sum is 10_0000 * sign(x)
        d_weights_1 = 10_000*torch.sign(reconstruction)
        # similar to the above, 0.5 *x with respect to x is 0.5
        # derivative of x + y ... z with respect to x is 1, so ignore the sum
        # derivative of x^2 with respect to x is 2*x
        # so the 0.5 and the 2 cancel out so our grad is x (the difference, ie reconstruction - samples)
        # then the derivative of reconstruction - samples is 1
        #   because we ignore the sum
        # so now we have the derivative of the matrix multiplication functions
        # which is transpose(bernoulli_measurement_matrix) * difference
        # which is transpose(inverse_transform) 
        d_weights_2 = torch.matmul(self.measurement_and_inverse_transpose, difference)

        # then we add the two paths
        diffs = d_weights_1 + d_weights_2
        # doing SGD with momentum of 0.9
        diffs += 0.9 * previous_diffs
        # then we update the weights using a learning rate of 0.0003
        reconstruction -= 0.0003 * diffs
        return (reconstruction, diffs)

if __name__ == "__main__":
    torch.manual_seed(842)
    measurement_matrix = torch.load("tests/manual_64_by_64/measurement_matrix.pt")
    inverse_transform = torch.load("tests/manual_64_by_64/inverse_transform.pt")
    measurement_and_inverse = torch.matmul(measurement_matrix, inverse_transform)

    torch.onnx.export(GradientDescent(measurement_and_inverse), 
    (torch.zeros((1000)), torch.zeros((4096)), torch.zeros((4096))),
     "./docs/static/model.onnx", 
    input_names=["samples", "reconstruction", "previous_diffs"], 
    output_names=["reconstruction", "diffs"])
    

