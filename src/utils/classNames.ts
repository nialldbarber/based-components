import {isArrayType} from './isType';

export function classNames(...classes: unknown[]): string {
  if (isArrayType(classes, 'number')) {
    classes = classes.map((n: number) => n.toString());
  }
  return classes.filter(Boolean).join(' ');
}
