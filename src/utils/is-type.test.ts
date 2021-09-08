import {isFunction, isArrayType} from './is-type';

const arrNums = [1, 2, 3];
const arrStr = ['one', 'two', 'three'];

describe('isFunction', () => {
  test('a valid function should return true', () => {
    expect(isFunction(() => console.log('test'))).toBe(true);
  });

  test('null should return false', () => {
    expect(isFunction(null)).toBe(false);
  });
});

describe('isArrayType', () => {
  test('an array of numbers to equal a number array', () => {
    expect(isArrayType(arrNums, 'number')).toBe(true);
  });

  test('an array of numbers to not equal a string array', () => {
    expect(isArrayType(arrNums, 'string')).toBe(false);
  });

  test('an array of strings to equal a string array', () => {
    expect(isArrayType(arrStr, 'string')).toBe(true);
  });

  test('an array of strings to not equal a number array', () => {
    expect(isArrayType(arrStr, 'number')).toBe(false);
  });
});
