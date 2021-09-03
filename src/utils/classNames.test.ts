import {classNames} from './classNames';

describe('classNames', () => {
  test('an empty string should return an empty string', () => {
    expect(classNames('')).toBe('');
  });

  test('a letter/word should return a string', () => {
    expect(classNames('test')).toBe('test');
  });

  test('letters/words should return a string', () => {
    expect(classNames('one', 'two', 'three')).toBe('one two three');
  });

  test('a number should return a string with that number', () => {
    expect(classNames(400)).toBe('400');
  });

  test('a number should not return a number', () => {
    expect(classNames(42)).not.toBe(42);
  });

  test('numbers should return a string with those numbers', () => {
    expect(classNames(1, 2, 3, 4)).toBe('1 2 3 4');
  });

  test('an array containing an object should be skipped', () => {
    expect(classNames({})).toBe('');
  });

  test('an array that is null should be skipped', () => {
    expect(classNames(null)).toBe('');
  });

  test('an array that is null should not return null', () => {
    expect(classNames(null)).not.toBe(null);
  });

  test('an array that is undefined should be skipped', () => {
    expect(classNames(undefined)).toBe('');
  });

  test('an array that is undefined not return undefined', () => {
    expect(classNames(undefined)).not.toBe(undefined);
  });
});
