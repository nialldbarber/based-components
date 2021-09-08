import styled, {keyframes} from 'styled-components';
import {CheckboxPropsT, CheckboxSizesT} from './checkbox';
import {getBaseDefaults} from '../system/base-mixins';
import {b} from '../system/based-provider';

interface CheckboxStylesT extends CheckboxPropsT {
  $size: CheckboxSizesT;
}

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
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  33% {
    width: .2rem;
    height: 0;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  100% {
    width: .2rem;
    height: .5rem;
    border-color: ${checkColor};
    transform: translate3d(0, -.5rem, 0) rotate(45deg);
  }
`;

export const BasedInputContainer = styled.div`
  position: relative;
`;

export const BasedInput = styled.input<CheckboxStylesT>`
  ${getBaseDefaults};
  height: 0;
  width: 0;
  position: absolute;

  + {
    label {
      ${getBaseDefaults};
      position: relative;
      display: flex;
      margin: 0.6rem 0;
      align-items: center;
      color: var(--${b}-black);
      cursor: pointer;
      transition: color 0.25s var(--${b}-checked-anim);
      transform: scale(
        ${({$size}) =>
          $size === 'xs'
            ? 0.8
            : $size === 'sm'
            ? 1.1
            : $size === 'md'
            ? 1.3
            : $size === 'lg'
            ? 1.5
            : 1}
      );

      > span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.5rem;
        width: 1rem;
        height: 1rem;
        background: transparent;
        border: 2px solid var(--${b}-black);
        border-radius: 2px;
        cursor: pointer;
        transition: all 0.25s var(--${b}-checked-anim);
      }
    }
  }

  &:checked {
    + {
      label {
        > span {
          border: 0.5rem solid
            ${({backgroundColor, kind}) =>
              backgroundColor || `var(--${b}-${kind})`};
          animation: ${shrinkBounce} 0.2s var(--${b}-checked-anim);

          &:before {
            content: '';
            position: absolute;
            top: ${({$size}) => ($size === 'lg' ? 0.475 : 0.375)}rem;
            left: 0.2rem;
            border-right: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transform: rotate(45deg);
            transform-origin: 0% 100%;
            animation: ${checkboxCheck(`var(--${b}-white)`)} 0.125s 0.25s
              // add checkColor here
              var(--${b}-checked-anim) forwards;
          }
        }
      }
    }
  }
`;
