import React, {forwardRef, ReactElement, CSSProperties} from 'react';
import {BasedFileUploader, UploaderContainer, Uploader} from './styles';

export type FileUploaderPropsT = {
  uploadMessage?: string;
  uploadButtonMessage?: string;
  className?: string;
  customStyles?: CSSProperties;
};

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
