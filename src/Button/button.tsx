import React, {
  forwardRef,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactElement,
  CSSProperties,
  ComponentPropsWithoutRef,
} from 'react';
import {LoadingSpinner} from '../LoadingSpinner';
import {BasedButton} from './styles';
import {SHAPE} from './constants';
import {white} from '../constants/colors';

export type Shape = keyof typeof SHAPE;

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonPropsT
  extends ReactButtonProps,
    ComponentPropsWithoutRef<'button'> {
  text?: string;
  className?: string;
  children?: ReactNode;
  customStyles?: CSSProperties;
  shape?: Shape;
  isLoading?: boolean;
  loadingColor?: string;
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
      children,
      customStyles,
      shape = 'default',
      isLoading = false,
      loadingColor = white,
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
        style={customStyles}
        className={[className, shape].join(' ')}
        onClick={onClick}
        {...{
          isLoading,
          isActive,
          disabled,
          iconPre,
          iconEnd,
        }}
      >
        {iconPre && iconPre}
        {text && <span>{text}</span>}
        {children || ''}
        {isLoading && <LoadingSpinner {...{loadingColor}} />}
        {iconEnd && iconEnd}
      </BasedButton>
    );
  }
);

export default Button;
