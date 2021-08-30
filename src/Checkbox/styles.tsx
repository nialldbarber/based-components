import styled, {keyframes} from 'styled-components';
import {CheckboxPropsT} from './checkbox';

const shrinkBounce = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(.85);
  }
  100% {
    transform: scale(1);
  }
`;

const checkboxCheck = keyframes`
  0% {
    width: 0;
    height: 0;
    border-color: #212121;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  33% {
    width: .2rem;
    height: 0;
    transform: translate3d(0,0,0) rotate(45deg);
  }
  100% {
    width: .2rem;
    height: .5rem;
    border-color: #212121;
    transform: translate3d(0,-.5em,0) rotate(45deg);
  }
`;

export const BasedInput = styled.input<CheckboxPropsT>`
  background: ${({isChecked}) => (isChecked ? 'red' : 'blue')};
  height: 0;
  width: 0;
  + {
    label {
      position: relative;
      display: flex;
      margin: 0.6em 0;
      align-items: center;
      color: #9e9e9e;
      transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
      > span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1em;
        width: 1em;
        height: 1em;
        background: transparent;
        border: 2px solid #9e9e9e;
        border-radius: 2px;
        cursor: pointer;
        transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
      }
      &:hover {
        color: #fff;
        > span {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
  &:focus {
    + {
      label {
        color: #fff;
        > span {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
  &:checked {
    + {
      label {
        > span {
          border: 0.5em solid #ffeb3b;
          animation: ${shrinkBounce} 200ms cubic-bezier(0.4, 0, 0.23, 1);
          &:before {
            content: '';
            position: absolute;
            top: 0.6em;
            left: 0.2em;
            border-right: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transform: rotate(45deg);
            transform-origin: 0% 100%;
            animation: ${checkboxCheck} 125ms 250ms
              cubic-bezier(0.4, 0, 0.23, 1) forwards;
          }
        }
      }
    }
  }
`;
