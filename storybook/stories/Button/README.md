## Usage

### Button

```jsx
import {BasedProvider, Button} from 'based-components';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <>
    <Button onClick={() => alert('clicked')}>Default</Button>
    <Button text="Primary Button" kind="primary" />
  </>
</ThemeProvider>;
```
