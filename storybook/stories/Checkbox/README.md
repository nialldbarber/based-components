## Usage

### Checkbox

```jsx
import {BasedProvider, Checkbox} from 'based-components';

/**
 * Place a `BasedProvider` at the root of your React application
 */
<BasedProvider>
  <>
    <Checkbox label="test checkbox" size="md" />
    <Checkbox label="another checkbox" size="sm" />
    <Checkbox
      label="more checkboxes!"
      size="lg"
      onChange={() => console.log('checked!')}
    />
  </>
</BasedProvider>;
```
