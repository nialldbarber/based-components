/**
 * Tests if input is a function
 * @param test any
 * @returns boolean
 */
export function isFunction(test: any): boolean {
  return typeof test === 'function';
}

/**
 * Tests array is populated with `type` input
 *
 * Example:
 * isArrayType([1, 2, 3], 'number') // = true
 * isArrayType(['foo', 'bar', 'boz'], 'number') // = false
 *
 * @param test any[]
 * @param type string
 * @returns boolean
 */
export function isArrayType(test: any[], type: string): boolean {
  return Array.isArray(test) && !test.some((value) => typeof value !== type);
}
