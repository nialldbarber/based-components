// TODO: tests!

/**
 * Generate a random array based on a given callback
 * @param callback any
 * @returns Array<number | string>
 */
export function generate(
  callback: (...args: any) => any
): Array<number | string> {
  let generatedArr = Array.from({length: 26}, callback);
  // limit length of arr
  generatedArr = generatedArr.splice(0, 7);
  // add dash
  generatedArr.splice(generatedArr.length / 2, 0, '-');
  return generatedArr;
}

/**
 * Generate a random number
 * @returns number
 */
export function generateNumber(): number {
  return Math.floor(Math.random() * 10);
}

/**
 * Fuses generate & generateNumber to generate a random string to be used for keys/IDs
 * @returns string
 */
export function randomIdGenerator(): string {
  let arr: Array<number | string> = [];

  // generate random values
  let numbers = generate(() => generateNumber());
  let lowerCaseLetters = generate((_: any, i: number) =>
    String.fromCharCode('a'.charCodeAt(0) + i)
  );
  let upperCaseLetters = generate((_: any, i: number) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  );

  arr
    .push(...numbers, ...lowerCaseLetters, ...upperCaseLetters)
    .toString()
    .split('')
    .filter((char: string) => /\S/.test(char));
  return arr.sort(() => Math.random() * 2 - 1).join('');
}
