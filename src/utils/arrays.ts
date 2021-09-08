/**
 * Adds items to middle of array
 * @param arr T[]
 * @param input any
 * @returns T[]
 */
export function addItemToMiddleOfArr<T extends number | string>(
  arr: T[],
  input: T
): T[] {
  arr.splice(Math.ceil(arr.length) / 2, 0, input);
  return arr;
}
