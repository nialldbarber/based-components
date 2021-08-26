import React, {
  forwardRef,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactElement,
  CSSProperties,
} from 'react';
import {CircleSpinnerLoader} from '../LoadingSpinner';
import {BasedButton} from './styles';
import {SHAPE} from './constants';

export type Shape = keyof typeof SHAPE;

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonPropsT
  extends ReactButtonProps,
    React.ComponentPropsWithoutRef<'button'> {
  text?: string;
  className?: string;
  children?: ReactNode;
  customStyles?: CSSProperties;
  shape?: Shape;
  isLoading?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  iconPre?: ReactNode;
  iconEnd?: ReactNode;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonPropsT>(
  (
    {
      text,
      type = 'button',
      className,
      customStyles,
      shape = 'default',
      children,
      isLoading = false,
      isActive = false,
      disabled = false,
      iconPre,
      iconEnd,
      onClick,
    },
    ref
  ): ReactElement => {
    return (
      <BasedButton
        ref={ref}
        type={type}
        onClick={onClick}
        className={[className, shape].join(' ')}
        style={customStyles}
        isLoading={isLoading}
        disabled={disabled}
        iconPre={iconPre}
        iconEnd={iconEnd}
        isActive={isActive}
      >
        {iconPre && iconPre}
        {text && <span>{text}</span>}
        {children || ''}
        {isLoading && <CircleSpinnerLoader />}
        {iconEnd && iconEnd}
      </BasedButton>
    );
  }
);

export default Button;
