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
  border-width: 0;
  border-style: none;
  outline: none;

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
