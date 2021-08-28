import {ReactNode, CSSProperties} from 'react';
import styled, {css} from 'styled-components';
import {ButtonPropsT, Kind} from './button';
import {KIND_COLOURS, anim} from '../constants/colors';

export type KindT = keyof typeof KIND_COLOURS;

interface BackgroundT extends ButtonPropsT {
  backgroundColor?: string;
  background?: string;
}

export interface ButtonStylesT extends BackgroundT {
  kind?: Kind;
  isLoading?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  iconPre?: ReactNode;
  iconEnd?: ReactNode;
  style?: CSSProperties;
  rest?: any;
  ref?: any;
}

const getKindStyles = (kind: string) => {
  const {main, counter, hovered, hoveredColor, outline} = KIND_COLOURS[kind];
  return css`
    background: ${main};
    color: ${counter};
    border: 1px solid ${outline || 'transparent'};
    transition: background 70ms cubic-bezier(${anim}),
      box-shadow 70ms cubic-bezier(${anim}),
      border-color 70ms cubic-bezier(${anim}),
      outline 70ms cubic-bezier(${anim});

    &:hover {
      background-color: ${hovered};
      color: ${hoveredColor && hoveredColor
        ? hoveredColor && hoveredColor
        : counter};
    }
  `;
};

const getActiveStyles = (kind: string) => {
  const {main, counter, outline} = KIND_COLOURS[kind];
  return css`
    &:focus {
      border-color: ${outline || main};
      box-shadow: inset 0 0 0 1px ${main}, inset 0 0 0 2px ${counter};
      background-color: ${outline || main};
      color: ${outline ? main : counter};
    }
  `;
};

export const BasedButton = styled.button<ButtonStylesT>`
  display: inline-flex;
  flex-direction: ${({isLoading}) => (isLoading ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  min-width: 80px;
  min-height: 35px;
  border-width: 0;
  border-style: none;
  outline: none;
  text-decoration: none;
  appearance: none;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  transition: 0.125s ease;

  ${({kind}) => getKindStyles(kind as KindT)}
  ${({kind}) => getActiveStyles(kind as KindT)}

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

  p {
    margin: 0;
  }
`;
