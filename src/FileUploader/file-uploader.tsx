import React, {forwardRef, ReactElement, CSSProperties} from 'react';
import styled from 'styled-components';
import Button from '../Button/button';
import {getButtonStyles} from '../Button/styles';
import {b} from '../system/based-provider';
import {getBaseDefaults} from '../system/base-mixins';

export type FileUploaderPropsT = {
  uploadMessage?: string;
  uploadButtonMessage?: string;
  className?: string;
  customStyles?: CSSProperties;
};

const UploaderContainer = styled.div`
  position: absolute;
  top: calc(50% - 1.5rem);
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    color: var(--${b}-white-one);
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
  }
`;

const BasedFileUploader = styled.div<FileUploaderPropsT>`
  ${getBaseDefaults};
  position: relative;
  background: var(--${b}-white-hovered);
  height: 250px;
  width: 400px;
  border-radius: 12px;
  border: 6px dashed var(--${b}-white-dark);
`;

const Uploader = styled.div`
  position: relative;
  padding: 0 4rem;
  margin: 0 auto;
  max-width: 100px;

  label {
    ${getButtonStyles};
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;

    span {
      font-weight: 600;
    }
  }

  input[type='file'] {
    display: none;
  }
`;

const FileUploader = forwardRef<HTMLDivElement, FileUploaderPropsT>(
  (
    {uploadMessage, uploadButtonMessage, className, customStyles, ...rest},
    ref
  ): ReactElement => {
    return (
      <BasedFileUploader
        ref={ref}
        style={customStyles}
        {...{className}}
        {...rest}
      >
        <UploaderContainer>
          <p>{uploadMessage || 'Drop files here to upload...'}</p>
          <Uploader kind="primary">
            <label htmlFor="file" className="pill">
              <span>{uploadButtonMessage || 'Upload file'}</span>
              <input type="file" name="file" id="file" />
            </label>
          </Uploader>
        </UploaderContainer>
      </BasedFileUploader>
    );
  }
);

export default FileUploader;
