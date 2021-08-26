import styled, {keyframes} from 'styled-components';
import {CircleT} from './loading-spinner';

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
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  border: ${({size}) => `${size && size / 5}px`} solid
    ${({loadingColor}) => loadingColor};
  border-radius: 50%;
  border-right-color: transparent;
  animation: ${rotateSpinner} 0.75s linear infinite;
`;
