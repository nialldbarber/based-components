# Based Components

## Install

```bash
# using npm
npm install based-components

# using yarn
yarn add based-components
```

## 🚧 WIP! 🚧

This is work in progress and nowhere near ready to use. Feel free to install it but be prepared for a few errors! 😉

## What's the point?!

This component library isn't like your typical design system (like `Material-UI`, `Ant Design`, `Bootstrap` etc). I wanted to create a highly customisable library that has all the basics covered and easy ways to scaffold a component.

This is essentially a library where the functionality is ready made, but the styles and extra logic are left entirely up to the developer.

## Usage

```tsx
import React, {useState} from 'react';
import {Form, Input, Button, useForm} from 'based-components';

interface Values {
  text: string;
  type: string;
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

# Documentation

## `<Button />` Props

| Prop           | Type                                                   | Description                            | Default     |
| -------------- | ------------------------------------------------------ | -------------------------------------- | ----------- |
| `text`         | `string`                                               | Button text                            | `''`        |
| `type`         | `'submit' \| 'reset' \| 'button'`                      | Button type                            | `'button'`  |
| `className`    | `string`                                               | Button `className`                     | `''`        |
| `customStyles` | `React.CSSProperties`                                  | Custom css styles using a style object | `{}`        |
| `shape`        | `default` \| `pill` \| `round` \| `circle` \| `square` | Shape of the button                    | `'default'` |
| `children`     | `React.ReactNode`                                      | Children of the button                 | `null`      |
| `isLoading`    | `boolean`                                              | The loading state of the button        | `false`     |
| `isActive`     | `boolean`                                              | The active state of the button         | `false`     |
| `disabled`     | `boolean`                                              | The disabled state of the button       | `false`     |
| `iconPre`      | `React.ReactNode`                                      | Left sided icon                        | `null`      |
| `iconEnd`      | `React.ReactNode`                                      | Right sided icon                       | `null`      |
| `onClick`      | `() => void`                                           | `onClick` events sent to button        | `null`      |
| `forwardedRef` | `React.forwardRef<HTMLButtonElement>`                  | Forwarded `ref` sent to button         | `null`      |

## `<H />` (header) Props

| Prop           | Type                                  | Description                               | Default    |
| -------------- | ------------------------------------- | ----------------------------------------- | ---------- |
| `text`         | `string`                              | Header text                               | `''`       |
| `level`        | `number`                              | Which type of `h(number)` it will be      | `1`        |
| `weight`       | `number \| string`                    | Font weight of header                     | `'normal'` |
| `strong`       | `boolean`                             | Defines a `bold` font weight              | `false`    |
| `line`         | `boolean`                             | Gives header `text-decoration: underline` | `false`    |
| `className`    | `string`                              | Header `className`                        | `''`       |
| `customStyles` | `React.CSSProperties`                 | Custom css styles using a style object    | `{}`       |
| `iconPre`      | `React.ReactNode`                     | Left sided icon                           | `null`     |
| `iconEnd`      | `React.ReactNode`                     | Right sided icon                          | `null`     |
| `forwardedRef` | `React.forwardRef<HTMLButtonElement>` | Forwarded `ref` sent to header            | `null`     |

## Todos

- [ ] Add styled-components for basic styling & overrides
- [ ] `<Button />`
  - [ ] add colours <Button kind="primary" /> etc
  - [ ] add button sizes
  - [ ] option for a skeleton loader
  - [ ] make active & focus native
  - [ ] single icon option
  - [ ] better names for pre/end icons
  - [ ] option to add a href
  - [ ] option to add a tooltip ala <Button tooltipPosition="right" tooltipAlignment="end" iconDescription="Tooltip text" />

## License

MIT © [nialldbarber](https://github.com/nialldbarber)
