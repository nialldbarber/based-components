import styled from 'styled-components';
import {b} from '../system/based-provider';
import {InputPropsT} from './input';

interface InputStylesT extends InputPropsT {
  $error: boolean;
}

export const BasedInput = styled.input<InputStylesT>`
  font-size: 1rem;
  outline-width: 1px;
  outline-style: solid;
  outline-color: ${({$error}) =>
    $error ? `var(--${b}-danger)` : `var(--${b}-grey)`};
  border: none;
  border-radius: 0.25rem;
  color: var(--${b}-black);
  appearance: none;
  padding: 0.5rem 0.75rem;
  transition: background-color 0.125s ease,
    box-shadow 0.2s cubic-bezier(var(--${b}-anim));

  &:hover,
  &:focus {
    background-color: ${({disabled}) =>
      disabled ? `none` : `var(--${b}-light-grey)`};
  }

  &:focus {
    box-shadow: var(--${b}-focus-hovered) 0px 0px 0px 3px;
  }

  &[type='password'] {
    letter-spacing: 1px;
  }
`;
