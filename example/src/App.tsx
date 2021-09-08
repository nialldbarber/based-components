import React from 'react';
import {BasedProvider, Grid, Button} from 'based-components';
import './index.css';

export default function App() {
  return (
    <BasedProvider>
      <Grid templateColumns="repeat(3, 1fr)">
        <Button text="hello" />
      </Grid>
    </BasedProvider>
  );
}
