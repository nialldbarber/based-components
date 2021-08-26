import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'based-components';

const styles: Record<string, string> = {
  fontWeight: 'bold',
  background: 'dodgerblue',
};

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
      <Button type="button" text="hello" customStyles={styles} />
      <Button
        type="submit"
        text="Submit"
        customStyles={{background: 'pink'}}
        isLoading
        loadingColor="red"
      />
    </>
  );
}
