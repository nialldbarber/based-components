import styled from 'styled-components';
import {Shape} from './button';

export type StyledButtonT = {
  shape?: Shape;
  isLoading?: boolean;
};

export const BasedButton = styled.button<StyledButtonT>`
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
