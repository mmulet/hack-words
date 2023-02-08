import { InferenceSession } from "onnxruntime-web";
export declare const ort: typeof import("onnxruntime-web");

export const image_to_samples = async (
  image: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
  context: CanvasRenderingContext2D,
  sample_func: InferenceSession
) => {
  context.clearRect(0, 0, 32, 32);
  context.drawImage(image, x, y, w, h, 0, 0, 32, 32);
  const image_data = context.getImageData(0, 0, 32, 32);
  const out_data = new Uint8Array(image_data.data.byteLength / 4);
  for (let i = 0, k = 0; i < image_data.data.length; i += 4, k++) {
    /**
     * RGBA to grayscale
     */
    out_data[k] =
      image_data.data[i] * 0.2126 +
      image_data.data[i + 1] * 0.7152 +
      image_data.data[i + 2] * 0.0722;
  }
  const image_tensor = new ort.Tensor(out_data);

  const result = await sample_func.run({
    image: image_tensor,
  });
  return result.samples;
};
