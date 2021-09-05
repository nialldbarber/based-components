import React from 'react';
import FileUploader from '../../../src/FileUploader/file-uploader';

export default {
  title: 'Components/FileUploader',
  decorators: [(Story: any) => <Story />],
};

export const uploadMessage = () => (
  <>
    <FileUploader uploadMessage="Upload!" />
  </>
);
