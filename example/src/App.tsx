import React from 'react';
import {BasedProvider, Button, H} from 'based-components';
import {useState} from 'react';

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <BasedProvider>
      <div
        className="App"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 400,
          margin: 70,
        }}
      >
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
      </div>
    </BasedProvider>
  );
}
