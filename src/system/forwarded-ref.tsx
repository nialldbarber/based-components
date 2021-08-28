import {forwardRef} from 'react';

// From: https://github.com/chakra-ui/chakra-ui/blob/main/packages/system/src/forward-ref.tsx

export type As<Props = any> = React.ElementType<Props>;

export function forwardedRef<Props extends object, Component>() {
  return forwardRef(component) as unknown;
}
