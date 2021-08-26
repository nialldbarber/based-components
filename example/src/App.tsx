import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'based-components';

export default function App() {
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<any>();

  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
    console.log(ref?.current);
  }, []);

  return (
    <>
      <Button ref={ref}>
        The height of this button is {height || 'dunno!'}
      </Button>
    </>
  );
}
