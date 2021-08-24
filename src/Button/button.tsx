import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {Shape, ButtonPropsT} from './types';

type StyledButtonT = {
  shape?: Shape;
  isLoading?: boolean;
};

const BasedButton = styled.button<StyledButtonT>`
  display: ${({isLoading}) => (isLoading ? 'column' : 'row')};
  flex-direction: column;

  &.default {
    border-radius: 0;
  }
  &.pill {
    border-radius: 30px;
  }
  &.round {
    border-radius: 50%;
    padding-left: 14px;
    padding-right: 14px;
  }
  &.circle {
    border-radius: 50%;
  }
`;

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
