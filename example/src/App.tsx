import React, {useState} from 'react';
import {H, Button, ProgressBar} from 'based-components';

const barContainerStyles = {
  background: 'red',
};

const barStyles = {
  background: 'dodgerblue',
};

export default function App() {
  const [val, setVal] = useState(Math.round(Math.random() * 100));

  const randomVal = () => setVal(Math.round(Math.random() * 100));

  return (
    <>
      <Button onClick={randomVal}>
        <span>Click me!</span>
      </Button>
      <ProgressBar value={val} height={10} />
      <ProgressBar value={val} height={20} />
      <ProgressBar value={val} height={40} />
      <ProgressBar value={val} height={50} />
      <ProgressBar value={val} height={50} />
      <ProgressBar
        value={val}
        height={60}
        customBarStyles={barStyles}
        customStyles={barContainerStyles}
      />
      <H text="Heading 1" level={1} />
      <H text="Heading 2" level={2} />
      <H text="Heading 3" level={3} />
    </>
  );
}
