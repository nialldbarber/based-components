import React, {createContext, ReactChild, useContext, useMemo} from 'react';
import isFunction from '../utils/isFunction';

// taken from: https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/models/ThemeProvider.tsx

export type Theme = {
  [key: string]: any;
};

type ThemeFn = (outerTheme?: Theme) => Theme;
type ThemeArg = Theme | ThemeFn;

type Props = {
  children?: ReactChild;
  theme: ThemeArg;
};

export const BasedContext = createContext<Theme | undefined>(undefined);

function mergeTheme(theme: ThemeArg, outerTheme?: Theme): Theme {
  if (!theme) {
    throw new Error();
  }

  if (isFunction(theme)) {
    const themeFn = theme as ThemeFn;
    const mergedTheme = themeFn(outerTheme);

    if (
      process.env.NODE_ENV !== 'production' &&
      (mergedTheme === null ||
        Array.isArray(mergedTheme) ||
        typeof mergedTheme !== 'object')
    ) {
      throw new Error();
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    throw new Error();
  }

  return outerTheme ? {...outerTheme, ...theme} : theme;
}

export default function BasedProvider(props: Props): JSX.Element | null {
  const outerTheme = useContext(BasedContext);
  const basedContext = useMemo(
    () => mergeTheme(props.theme, outerTheme),
    [props.theme, outerTheme]
  );

  if (!props.children) {
    return null;
  }

  return (
    <BasedContext.Provider value={basedContext}>
      {props.children}
    </BasedContext.Provider>
  );
}
