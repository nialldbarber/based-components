import styled, {css} from 'styled-components';
import {darken, rgba} from 'polished';
import {ButtonPropsT} from './button';

type BackgroundT = {
  backgroundColor?: string;
  background?: string;
};

const white = '#fff';

const getBackgroundColour = ({style}: BackgroundT | any) => {
  const bg = style?.backgroundColor || style?.background || white;

  return css`
    background-color: ${bg};
    &:hover {
      background-color: ${darken(
        0.2,
        bg
      )} !important; // <- only way to override inline styles 😞
    }
  `;
};

const getActiveStyles = ({style}: BackgroundT | any) => {
  const bg = style?.backgroundColor || style?.background || white;

  return css`
    box-shadow: 0px 0 0 3px ${rgba(bg, 1)};
    outline: 1px solid ${white};
  `;
};

export const BasedButton = styled.button<ButtonPropsT>`
  display: inline-flex;
  flex-direction: ${({isLoading}) => (isLoading ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-width: 0;
  border-style: none;
  outline: none;
  text-decoration: none;
  appearance: none;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  transition: opacity 0.125s ease;
  ${getBackgroundColour};
  ${({isActive}) => isActive && getActiveStyles}

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

  p {
    margin: 0;
  }
`;
