/**
 * Floor and round number
 * @returns number
 */
export const floorAndRoundNumber = (): number => Math.floor(Math.random() * 10);

/**
 * Adds items to middle of array
 * @param arr T[]
 * @param input any
 * @returns T[]
 */
export function addItemToMiddleOfArr<T extends number | string>(
  arr: T[],
  input: any
): T[] {
  arr.splice(Math.ceil(arr.length) / 2, 0, input);
  return arr;
}
