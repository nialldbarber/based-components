import {ReactNode, CSSProperties} from 'react';
import styled, {css} from 'styled-components';
import {ButtonPropsT, Kind} from './button';
import {b} from '../system/based-provider';
import {getBaseDefaults} from '../system/base-mixins';
import {KIND_COLOURS} from '../constants/colors';

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
  'aria-label'?: any;
  rest?: any;
  ref?: any;
}

const getKindStyles = (kind: string) => {
  return css`
    background-color: var(--${b}-${kind});
    color: var(--${b}-${kind}-color);
    border: 1px solid var(--${b}-${kind}-outline);
    transition: background 0.2s cubic-bezier(var(--${b}-anim)),
      box-shadow 0.2s cubic-bezier(var(--${b}-anim)),
      border-color 0.2s cubic-bezier(var(--${b}-anim)),
      outline 0.2s cubic-bezier(var(--${b}-anim));

    &:hover {
      background-color: var(--${b}-${kind}-hovered);
      border: 1px solid var(--${b}-${kind}-hovered);
      color: var(--${b}-${kind}-color-hovered);
    }
  `;
};

const getActiveStyles = css`
  &:focus {
    box-shadow: var(--${b}-focus-hovered) 0px 0px 0px 3px;
  }
`;

export const getButtonStyles = css<ButtonStylesT>`
  ${getBaseDefaults};
  position: relative;
  display: inline-flex;
  flex-direction: ${({isLoading}) => (isLoading ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  user-select: none;
  padding: 0.5rem 1rem;
  min-width: 80px;
  min-height: 35px;
  height: 36px;
  border-width: 0;
  border-style: none;
  outline: none;
  text-decoration: none;
  appearance: none;
  white-space: nowrap;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  transition: 0 125s ease;
  opacity: ${({disabled}) => (disabled ? 0.6 : 1)};

  ${({kind}) => getKindStyles(kind as KindT)};
  ${getActiveStyles};

  &.default {
    border-radius: 6px;
  }
  &.pill {
    border-radius: 30px;
  }

  p {
    margin: 0;
  }
`;

export const BasedButton = styled.button<ButtonStylesT>`
  ${getButtonStyles};
`;
