import styled, {keyframes} from 'styled-components';
import {CheckboxPropsT} from './checkbox';
import {getBaseDefaults} from '../system/base-mixins';
import {b} from '../system/based-provider';

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

const checkboxCheck = (checkColor: string) => keyframes`
  0% {
    width: 0;
    height: 0;
    border-color: ${checkColor};
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
    border-color: ${checkColor};
    transform: translate3d(0,-.5rem,0) rotate(45deg);
  }
`;

export const BasedInput = styled.input<CheckboxPropsT>`
  ${getBaseDefaults};
  background: ${({isChecked}) => (isChecked ? 'red' : 'blue')};
  height: 0;
  width: 0;

  + {
    label {
      position: relative;
      display: flex;
      margin: 0.6rem 0;
      align-items: center;
      color: #9e9e9e;
      transition: color 0.25s cubic-bezier(0.4, 0, 0.23, 1);

      > span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
        width: 1rem;
        height: 1rem;
        background: transparent;
        border: 2px solid #9e9e9e;
        border-radius: 2px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.23, 1);
      }

      &:hover {
        color: var(--white);

        > span {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  &:focus {
    + {
      label {
        color: var(--white);

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
          border: 0.5rem solid
            ${({backgroundColor, kind}) =>
              backgroundColor ? backgroundColor : `var(--${b}-${kind})`};
          animation: ${shrinkBounce} 0.2s cubic-bezier(0.4, 0, 0.23, 1);

          &:before {
            content: '';
            position: absolute;
            top: 0.475rem;
            left: 0.2rem;
            border-right: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transform: rotate(45deg);
            transform-origin: 0% 100%;
            animation: ${checkboxCheck('var(--white)')} 0.125s 0.25s
              // add checkColor here
              cubic-bezier(0.4, 0, 0.23, 1) forwards;
          }
        }
      }
    }
  }
`;
