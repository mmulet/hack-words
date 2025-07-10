import { load_tensor } from "./load_tensor";
export declare const ort: typeof import("onnxruntime-web");

export const get_models_and_data = async (size: number) => {
  const start_time = performance.now();
  const num = size.toString().padStart(2, "0");
  const [samples, model, reconstruct, sample_func] = await Promise.all([
    load_tensor(`static/samples_${num}.bin`),
    ort.InferenceSession.create(`static/web_gradient_descent_${num}.onnx`, {}),
    ort.InferenceSession.create(`static/web_reconstruction_${num}.onnx`),
    ort.InferenceSession.create(`static/web_sample_${num}.onnx`),
  ]);
  console.log(performance.now() - start_time);
  console.log("session created");

  return {
    samples,
    model,
    reconstruct,
    sample_func,
  };
};
