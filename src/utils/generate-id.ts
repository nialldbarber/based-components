import {addItemToMiddleOfArr} from './arrays';
import {floorAndRoundNumber} from './number-helpers';

/**
 * Generate a random array based on a given callback
 * @param callback any
 * @returns Array<number | string>
 */
export function generate(
  callback: (...args: any) => any
): Array<number | string> {
  const generatedArr = Array.from({length: 26}, callback);
  // limit length of arr
  return generatedArr.splice(0, 7) as string[];
}

/**
 * Generate a random letter
 * @param typeCase string
 * @returns string
 */
export function generateLetter(typeCase: string): string {
  const randomLetter = String.fromCharCode(
    typeCase.charCodeAt(0) + floorAndRoundNumber()
  );
  return randomLetter;
}

/**
 * Generate a random number
 * @returns number
 */
export const generateNumber = (): number => floorAndRoundNumber();

/**
 * Generates a random string to be used for keys/IDs
 * @returns string
 */
export function randomIdGenerator(): string {
  const arr: Array<number | string> = [];

  // generate random values
  const numbers = generate(() => generateNumber());
  const lowerCaseLetters = generate(() => generateLetter('a'));
  const upperCaseLetters = generate(() => generateLetter('A'));
  // format into an acceptable string
  arr
    .push(...numbers, ...lowerCaseLetters, ...upperCaseLetters)
    .toString()
    .split('')
    // remove any whitespace
    .filter((char: string) => /\S/.test(char))
    .sort(() => Math.random() * 2 - 1);
  // add a dash in the middle
  addItemToMiddleOfArr(arr, '-');
  return arr.join('');
}
