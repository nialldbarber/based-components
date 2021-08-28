import {isArrayType} from './isType';

/**
 * Return list of class names as a string
 * @param classes unknown[]
 * @returns string
 */
export function classNames(...classes: unknown[]): string {
  if (isArrayType(classes, 'number')) {
    classes = classes.map((n: number) => n.toString());
  }
  return classes.filter(Boolean).join(' ');
}
