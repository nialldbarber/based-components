import React from 'react';
import {BasedProvider, Grid, FileUploader} from 'based-components';
import './index.css';

export default function App() {
  const dropCallback = () => console.log('Item Dropped!');

  return (
    <BasedProvider>
      <Grid templateColumns="repeat(3, 1fr)">
        <FileUploader uploadCallback={dropCallback} />
      </Grid>
    </BasedProvider>
  );
}
