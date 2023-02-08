declare const ort: typeof import("onnxruntime-web");

export const load_tensor = async (path: string) => {
  const response = await fetch(path);
  const array_buffer = await response.arrayBuffer();

  const float_array = new Float32Array(array_buffer);
  console.log(float_array.length);

  for (let i = 0; i < 50; i++) {
    float_array[i] = 0;
  }

  return new ort.Tensor(float_array);
};
