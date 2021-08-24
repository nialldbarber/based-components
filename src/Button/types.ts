import {ReactNode, DetailedHTMLProps, ButtonHTMLAttributes} from 'react';
import {SHAPE} from './constants';

export type Shape = keyof typeof SHAPE;

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonPropsT = {
  text: string;
  className: string;
  children: ReactNode;
  shape: Shape;
  isLoading: boolean;
  isActive: boolean;
  onClick: () => void;
  disabled: boolean;
} & ReactButtonProps;
