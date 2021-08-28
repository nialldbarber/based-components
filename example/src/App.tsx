import React from 'react';
import { BasedProvider, Button } from "based-components";
import { useState } from "react";
import styled from 'styled-components';

const theme = {
  background: 'red'
}

const Poop = styled.p`
  color: ${theme.background};
`;

export default function App() {
  const [active, setActive] = useState(false);

  console.log(theme);

  return (
    <BasedProvider theme={theme}>
    <div className="App">
      <Button
        text="Submit"
        isLoading={active}
        loadingSize={10}
        onClick={() => setActive(!active)}
      />
      <Poop>
        hello
      </Poop>
      <Button
        text="Secondary"
        kind="secondary"
        isLoading={active}
        loadingSize={10}
        onClick={() => setActive(!active)}
      />
      <Button
        text="Danger"
        kind="danger"
        isLoading={active}
        loadingSize={10}
        onClick={() => setActive(!active)}
      />
    </div>
    </BasedProvider>
  );
}
