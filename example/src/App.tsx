import React from 'react';
import {BasedProvider, Button, H, Checkbox, Grid} from 'based-components';
import {useState} from 'react';
import './index.css';

export default function App() {
  const [active, setActive] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const setUpChecked = () => setChecked(!checked);

  return (
    <BasedProvider>
      <Grid templateColumns="repeat(3, 1fr)">
        <Button
          text="Submit"
          isLoading={active}
          loadingSize={10}
          onClick={() => setActive(!active)}
        />
        <H text="test" />
        <H
          text="this is a really really really long sentence"
          level={1}
          isTruncated={true}
          customStyles={{fontSize: 100, width: 400}}
        />
        <Checkbox
          isChecked={checked}
          size="xs"
          onChange={() => setChecked(!checked)}
        />
        <Checkbox
          isChecked={checked}
          size="sm"
          onChange={() => setChecked(!checked)}
        />
        <Checkbox
          isChecked={checked}
          size="md"
          onChange={() => setChecked(!checked)}
        />
        <Checkbox
          isChecked={checked}
          size="lg"
          onChange={() => setChecked(!checked)}
        />
        <Button text="press me" onClick={setUpChecked} />
      </Grid>
    </BasedProvider>
  );
}
