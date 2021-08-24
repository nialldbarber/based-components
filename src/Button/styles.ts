import styled from 'styled-components';
import {Shape} from './button';

export type StyledButtonT = {
  shape?: Shape;
  isLoading?: boolean;
};

export const BasedButton = styled.button<StyledButtonT>`
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
  background-color: red;
  transition: opacity 0.125s ease;

  &:hover {
    opacity: 0.7;
  }

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
