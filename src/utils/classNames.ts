import {isArrayType} from './isType';

/**
 * Return list of class names as a string
 *
 * Example:
 * classNames('one', TWO, 3) // = 'one two 3'
 *
 * @param classes unknown[]
 * @returns string
 */
export function classNames(...classes: unknown[]): string {
  // if empty return an empty string
  if (
    classes.length === 0 ||
    isArrayType(classes, 'object') ||
    isArrayType(classes, 'null') ||
    isArrayType(classes, 'undefined')
  )
    return '';
  // if any element is a number, convert it to a string
  if (isArrayType(classes, 'number')) {
    classes = classes.map((n: number) => n.toString());
  }
  return classes.filter(Boolean).join(' ');
}
