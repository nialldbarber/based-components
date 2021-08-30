import styled from 'styled-components';
import {CheckboxPropsT} from './checkbox';

export const BasedInput = styled.input<CheckboxPropsT>`
  background: ${({isChecked}) => (isChecked ? 'red' : 'blue')};
`;
