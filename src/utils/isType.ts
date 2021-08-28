export function isFunction(test: any): boolean {
  return typeof test === 'function';
}

export function isArrayType(test: any[], type: string): boolean {
  return Array.isArray(test) && !test.some((value) => typeof value !== type);
}
