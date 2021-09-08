import React from 'react';
import {BasedProvider, Input} from 'based-components';
import './index.css';

export default function App() {
  return (
    <BasedProvider>
      <div className="hello">
        <Input />
      </div>
    </BasedProvider>
  );
}
