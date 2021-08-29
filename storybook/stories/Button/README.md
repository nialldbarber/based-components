## Usage

### Button

```jsx
import {BasedProvider, Button} from 'based-components';

/**
 * Place a `BasedProvider` at the root of your React application
 */
<BasedProvider>
  <>
    <Button onClick={() => alert('clicked')}>Default</Button>
    <Button text="Primary Button" kind="primary" />
  </>
</BasedProvider>;
```
