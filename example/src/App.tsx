import React from 'react';
import {Input, Button} from 'based-components';

const App = () => {
  return (
    <>
      <Input text="hello" />
      <Button text="hi hi" />
      <Button text="helloooo" shape="pill" />
      <Button text=">" shape="default" isLoading />
    </>
  );
};

export default App;
