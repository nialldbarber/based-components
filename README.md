# Based Components

## 🚧 WIP! 🚧

This is work in progress and nowhere near ready to use. Feel free to install it but be prepared for a few errors! 😉

## Installation

```zsh
# using npm
npm install based-components

# using yarn
yarn add based-components
```

## Documentation

#### Check out the docs ➡️ [here](https://nialldbarber.github.io/based-components)

## Usage

```tsx
import React, {useState} from 'react';
import {Form, Input, Button, useForm} from 'based-components';

interface Values {
  text: string;
  type?: string;
}

function App() {
  const {handleSubmit} = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [values] = useState<Values[]>([
    {text: 'Name'},
    {text: 'Email'},
    {text: 'Password', type: 'password'},
  ]);

  function submitData(data: any): void {
    setLoading(false);
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      {values.map(({type, text, password = false}) => (
        <Input type={type || 'text'} text={text} />
      ))}
      <Button
        text="Submit"
        shape="pill"
        isLoading={loading}
        onClick={() => setActive(!active)}
      />
    </Form>
  );
}
```

## Todos

- [ ] Add styled-components for basic styling & overrides
- `<Button />`

  - [ ] add colours <Button kind="primary" /> etc
  - [ ] add button sizes
  - [ ] option for a skeleton loader
  - [ ] better names for pre/end icons
  - [ ] option to add a href
  - [ ] option to add a tooltip ala <Button tooltipPosition="right" tooltipAlignment="end" iconDescription="Tooltip text" />

- [ ] remove storybook & example from npm
- [ ] think about base/global styles: css vars? how do others do it?
- [ ] snapshot storybook testing?
- [ ] jest/react-testing-library testing
- [ ] check out hooks for [hooks](https://react-hook-form.com/)

- [ ] make types more consistent

## Internal (process)

- component
- styles
- storybook
- tests

## License

MIT © [nialldbarber](https://github.com/nialldbarber)
