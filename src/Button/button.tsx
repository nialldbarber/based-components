import React, {
  Fragment,
  forwardRef,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactElement,
  CSSProperties,
  ComponentPropsWithoutRef,
  MouseEvent,
} from 'react';
import {LoadingSpinner} from '../LoadingSpinner';
import {BasedButton} from './styles';
import {classNames} from '../utils/classNames';
import {white} from '../constants/colors';

export const SHAPE: Record<string, string> = {
  default: 'default',
  pill: 'pill',
};

export const KIND: Record<string, string> = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  ghost: 'ghost',
  danger: 'danger',
};

export type Shape = keyof typeof SHAPE;
export type Kind = keyof typeof KIND;

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonPropsT
  extends ReactButtonProps,
    ComponentPropsWithoutRef<'button'> {
  text?: string;
  className?: string;
  kind?: Kind;
  children?: ReactNode;
  customStyles?: CSSProperties;
  shape?: Shape;
  isLoading?: boolean;
  loadingSize?: number;
  loadingColor?: string;
  isActive?: boolean;
  disabled?: boolean;
  iconPre?: ReactNode;
  iconEnd?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonPropsT>(
  (
    {
      text,
      type = 'button',
      className,
      kind = KIND.primary,
      children,
      customStyles,
      shape = SHAPE.default,
      isLoading = false,
      loadingColor = white,
      loadingSize = 10,
      isActive = false,
      disabled = false,
      iconPre,
      iconEnd,
      onClick,
      ...rest
    },
    ref
  ): ReactElement => {
    return (
      <BasedButton
        ref={ref}
        style={customStyles}
        className={classNames(className, shape)}
        onClick={onClick}
        aria-label={isLoading ? 'Loading' : null}
        {...{type, kind, isLoading, isActive, disabled, iconPre, iconEnd}}
        {...rest}
      >
        {isLoading ? (
          <LoadingSpinner {...{loadingColor, loadingSize, kind}} />
        ) : (
          <Fragment>
            {iconPre || null}
            {<span>{text}</span> || null}
            {children || null}
            {iconEnd || null}
          </Fragment>
        )}
      </BasedButton>
    );
  }
);

export default Button;
