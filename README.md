# based-components

## Install

```bash
npm install based-components
yarn add based-components
```

## Usage

```tsx
import React, {useState} from 'react';
import {Form, Input, Button, useForm} from 'based-components';

function App() {
  const {handleSubmit} = useForm();
  const [values] = useState([
    {text: 'Name'},
    {text: 'Email'},
    {text: 'Password', type: 'password'},
  ]);

  const submitData = (data) => console.log(data);

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

## License

MIT © [nialldbarber](https://github.com/nialldbarber)
