import React from 'react';
import {BasedProvider, Button} from 'based-components';
import './index.css';

export default function App() {
  return (
    <BasedProvider>
      <Button text="hello" />
    </BasedProvider>
  );
}
