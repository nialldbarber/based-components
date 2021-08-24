# based-components

## 🚧 WIP! 🚧

## Install

```bash
npm install based-components
yarn add based-components
```

## Usage

```tsx
import React, {useState} from 'react';
import {Form, Input, Button, useForm} from 'based-components';

interface Values {
  text: string;
  type: string;
  disabled: boolean;
}

function App() {
  const {handleSubmit} = useForm();
  const [values] = useState<Values[]>([
    {text: 'Name'},
    {text: 'Email'},
    {text: 'Password', type: 'password'},
  ]);

  const submitData = (data: any): void => console.log(data);

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      {values.map(({type, text, password = false}) => (
        <Input type={type || 'text'} text={text} />
      ))}
      <Button text="Submit" />
    </Form>
  );
}
```

## Roadmap

- Add styled-components for basic styling & overrides

## License

MIT © [nialldbarber](https://github.com/nialldbarber)
