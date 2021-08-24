import React, {
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactElement,
} from 'react';
import {BasedButton} from './styles';
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

export default function Button({
  text,
  type = 'button',
  className,
  shape = 'default',
  children,
  isLoading = false,
  isActive = false,
  onClick,
  disabled = false,
}: Partial<ButtonPropsT>): ReactElement {
  return (
    <BasedButton
      type={type}
      onClick={onClick}
      className={[className, shape, isActive, disabled].join(' ')}
    >
      {text && <span>{text}</span>}
      {children || ''}
      {isLoading && <p>Spinner here</p>}
    </BasedButton>
  );
}
