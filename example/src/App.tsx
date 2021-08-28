import React from 'react';
import {BasedProvider, Button} from 'based-components';
import {useState} from 'react';

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <BasedProvider>
      <div className="App">
        <Button
          text="Submit"
          isLoading={active}
          loadingSize={10}
          onClick={() => setActive(!active)}
        />
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
