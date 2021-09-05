import styled from 'styled-components';
import {b} from '../system/based-provider';
import {getBaseDefaults} from '../system/base-mixins';
import {FileUploaderPropsT} from './file-uploader';

interface BasedFileUploaderT extends FileUploaderPropsT {
  $active: boolean;
}

export const UploaderContainer = styled.div<BasedFileUploaderT>`
  position: absolute;
  top: calc(50% - 1.5rem);
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    color: ${({$active}) =>
      $active ? `var(--${b}-white)` : `var(--${b}-white-one)`};
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
  }
`;

export const BasedFileUploader = styled.div<BasedFileUploaderT>`
  ${getBaseDefaults};
  position: relative;
  background: ${({$active}) =>
    $active ? `var(--${b}-primary-hovered)` : `var(--${b}-white-hovered)`};
  height: 250px;
  width: 400px;
  border-radius: 12px;
  border: 6px dashed
    ${({$active}) =>
      $active
        ? `var(--${b}-primary-hovered-border)`
        : `var(--${b}-white-dark)`};
`;

export const Uploader = styled.div<BasedFileUploaderT>`
  position: relative;
  padding: 0 4rem;
  margin: 0 auto;
  max-width: 100px;

  button {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 600;
    background: ${({$active}) => $active && $active && `var(--${b}-white)`};
    color: ${({$active}) => $active && $active && `var(--${b}-primary)`};
    transition: none;
  }

  input[type='file'] {
    display: none;
  }
`;
