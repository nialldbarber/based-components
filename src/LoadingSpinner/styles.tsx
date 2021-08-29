import styled, {keyframes} from 'styled-components';
import {CircleT} from './loading-spinner';
import {b} from '../system/based-provider';

const rotateSpinner = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div<CircleT>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({size, loadingSize}) => `${loadingSize ? loadingSize : size}px`};
  height: ${({size, loadingSize}) => `${loadingSize ? loadingSize : size}px`};
  border: ${({size}) => `${size && size / 15}px`} solid
    ${({loadingColor, kind}) => `var(--${b}-${kind}-loader)` || loadingColor};
  border-radius: 50%;
  border-right-color: transparent;
  animation: ${rotateSpinner} 0.75s linear infinite;
`;
