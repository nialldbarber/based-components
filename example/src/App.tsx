import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'based-components';

const styles: Record<string, string> = {
  fontWeight: 'bold',
  background: 'dodgerblue',
};

export default function App() {
  const [active, setActive] = useState<boolean>(false);
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
      <Button text="poop" isLoading />
      <Button text="click me" onClick={() => console.log('hello')} />
      <Button
        text="poop"
        isActive={active}
        isLoading={active}
        loadingSize={10}
        customStyles={styles}
        onClick={() => setActive(!active)}
      />
    </>
  );
}
