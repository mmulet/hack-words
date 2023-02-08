export const letter_to_code = {
  a: [0, 0, 0, 0],
  b: [0, 0, 0, 1],
  c: [0, 0, 1, 0],
  d: [0, 0, 1, 1],
  e: [0, 1, 0, 0],
  f: [0, 1, 0, 1],
  /**
   * no g
   */
  h: [0, 1, 1, 0],
  i: [0, 1, 1, 1],
  /**
   * no j or k
   */
  l: [1, 0, 0, 0],
  m: [1, 0, 0, 1],
  n: [1, 0, 1, 0],
  o: [1, 0, 1, 1],
  p: [1, 1, 0, 0],
  r: [1, 1, 0, 1],
  s: [1, 1, 1, 0],
  t: [1, 1, 1, 1],
  /**
   * no u through z
   */
};

export const answer_to_byte_pattern = (answer: string) => {
  const lowercase = answer.toLowerCase();
  const pattern: number[] = [];
  for (let i = 0; i < 8; i++) {
    const letter = lowercase[i] ?? "a";
    const code = letter_to_code[letter] ?? letter_to_code["a"];
    pattern.push(...code);
  }
  return pattern;
};
