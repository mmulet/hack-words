import { Tensor } from "onnxruntime-web";
import { answer_to_byte_pattern } from "./answer_to_byte_pattern";

export const adjust_samples_for_current_guess = (
  answer: string,
  current_guess: string,
  samples: Tensor
) => {
  const byte_pattern = answer_to_byte_pattern(answer);
  const current_guess_pattern = answer_to_byte_pattern(current_guess);

  let current_sample_index = 0;
  let times_through_all_samples = 0;
  for (let i = 0; i < byte_pattern.length; i++) {
    /**
     * Iterate through the samples until we find a sample that
     * matches the current byte pattern. this will ensure that
     * the correct answer will generate the correct image
     */
    while (true) {
      const sample_data = (samples.data as Int16Array)[current_sample_index];
      current_sample_index++;
      if (current_sample_index >= samples.dims[0]) {
        current_sample_index = 0;
        times_through_all_samples++;
        if (times_through_all_samples > 2) {
          break;
        }
      }
      const value = (sample_data & 0xc000) >> 14;
      switch (value) {
        case 0:
          if (byte_pattern[i] != 0) {
            continue;
          }
          break;
        case 3:
          if (byte_pattern[i] != 1) {
            continue;
          }
          break;
        default:
          continue;
      }

      (samples.data as Int16Array)[current_sample_index] =
        (sample_data & 0x3fff) |
        ((current_guess_pattern[i] == 1 ? 3 : 0) << 14);
      break;
    }
  }
  return samples;
};
