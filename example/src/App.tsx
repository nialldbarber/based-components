import React from 'react';
import {BasedProvider, Button, H, Grid} from 'based-components';
import {useState} from 'react';

export default function App() {
  const [active, setActive] = useState(false);

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
      </Grid>
    </BasedProvider>
  );
}
