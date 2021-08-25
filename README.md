# based-components

## 🚧 WIP! 🚧

## Install

```bash
# using npm
npm install based-components

# using yarn
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

# Props

## `<Button />` Props

| Prop         | Type                                | Description                            | Default   |
| ------------ | ----------------------------------- | -------------------------------------- | --------- |
| text         | string                              | Button text                            | ''        |
| type         | 'submit' \| 'reset' \| 'button'     | Button type                            | 'button'  |
| className    | string                              | Button className                       | ''        |
| customStyles | React.CSSProperties                 | Custom css styles using a style object | {}        |
| shape        | string                              | Shape of the button                    | 'default' |
| children     | React.ReactNode                     | Children of the button                 | null      |
| isLoading    | boolean                             | The loading state of the button        | false     |
| isActive     | boolean                             | The active state of the button         | false     |
| disabled     | boolean                             | The disabled state of the button       | false     |
| iconPre      | React.ReactNode                     | Left sided icon                        | null      |
| iconEnd      | React.ReactNode                     | Right sided icon                       | null      |
| onClick      | () => void                          | onClick events sent to button          | null      |
| forwardedRef | React.forwardRef<HTMLButtonElement> | Forwarded ref sent to button           | null      |

## Roadmap

- Add styled-components for basic styling & overrides

## License

MIT © [nialldbarber](https://github.com/nialldbarber)
