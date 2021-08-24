import React from 'react';
import styled from 'styled-components';
import {SHAPE} from './constants';

const BasedButton = styled.button`
  display: flex;
`;

export type ReactButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonPropsT = {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  shape?: keyof typeof SHAPE;
  isLoading?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
} & ReactButtonProps;

export default function Button({
  text,
  type = 'button',
  className,
  shape,
  children,
  isLoading = false,
  isActive = false,
  onClick,
  disabled = false,
  ...rest
}: ButtonPropsT): JSX.Element {
  return (
    <BasedButton
      type={type}
      {...rest}
      onClick={onClick}
      className={[className, shape].join(' ')}
    >
      {text && <span>{text}</span>}
      {children || ''}
      {isLoading && <p>Spinner here</p>}
    </BasedButton>
  );
}
