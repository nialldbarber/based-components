import React from 'react';
import {Button} from 'based-components';

export default function App() {
  return (
    <div style={{padding: 100}}>
      <Button text="primary" kind="primary" />
      <Button text="secondary" kind="secondary" />
      <Button text="tertiary" kind="tertiary" />
      <Button text="ghost" kind="ghost" />
      <Button text="danger" kind="danger" />
    </div>
  );
}
