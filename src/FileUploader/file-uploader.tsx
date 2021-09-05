import React, {
  useCallback,
  forwardRef,
  ReactElement,
  CSSProperties,
} from 'react';
import {useDropzone} from 'react-dropzone';
import Button from '../Button/button';
import {BasedFileUploader, UploaderContainer, Uploader} from './styles';

export type FileUploaderPropsT = {
  uploadMessage?: string;
  uploadButtonMessage?: string;
  uploadCallback?: (files: any) => void;
  className?: string;
  customStyles?: CSSProperties;
};

const FileUploader = forwardRef<HTMLDivElement, FileUploaderPropsT>(
  (
    {
      uploadMessage,
      uploadButtonMessage,
      uploadCallback,
      className,
      customStyles,
      ...rest
    },
    ref
  ): ReactElement => {
    const onDrop = useCallback((acceptedFiles) => {
      uploadCallback && uploadCallback(acceptedFiles);
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
      <BasedFileUploader
        ref={ref}
        style={customStyles}
        {...{className}}
        {...rest}
        {...getRootProps()}
        $active={isDragActive}
      >
        <UploaderContainer $active={isDragActive}>
          <p>{uploadMessage || 'Drop files here to upload...'}</p>
          <Uploader $active={isDragActive}>
            <Button className="pill">
              <span>{uploadButtonMessage || 'Upload file'}</span>
              <input type="file" name="file" id="file" {...getInputProps()} />
            </Button>
          </Uploader>
        </UploaderContainer>
      </BasedFileUploader>
    );
  }
);

export default FileUploader;
