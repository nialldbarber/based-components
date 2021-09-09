import React, {useState, ChangeEvent} from 'react';
import {BasedProvider, Input} from 'based-components';
import './index.css';

export default function App() {
  const [test, setTest] = useState<string>('');

  return (
    <BasedProvider>
      <div className="hello">
        <Input
          value={test}
          onChange={({target}: ChangeEvent<HTMLInputElement>) =>
            setTest(target.value)
          }
        />
        <Input
          error
          value={test}
          onChange={({target}: ChangeEvent<HTMLInputElement>) =>
            setTest(target.value)
          }
        />
        <Input
          type="password"
          value={test}
          onChange={({target}: ChangeEvent<HTMLInputElement>) =>
            setTest(target.value)
          }
        />
        <Input
          value={test}
          onChange={({target}: ChangeEvent<HTMLInputElement>) =>
            setTest(target.value)
          }
          disabled
        />
      </div>
    </BasedProvider>
  );
}
