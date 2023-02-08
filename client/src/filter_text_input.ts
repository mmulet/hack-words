import { letter_to_code } from "./answer_to_byte_pattern";

export const filter_text_input = (input: string) => {
  let new_text = Array.from(input.toLowerCase())
    .filter((char) => letter_to_code[char] !== undefined)
    .join("");
  if (new_text.length > 8) {
    new_text = new_text.slice(0, 8);
  }
  return new_text;
};
