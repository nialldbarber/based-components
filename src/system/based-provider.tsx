import React, {Fragment, ReactChild} from 'react';
import {createGlobalStyle} from 'styled-components';

type Props = {
  children?: ReactChild;
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');

  :root {
    --red: red;
    --font-family: 'Inter', sans-serif;
  }

  body {
    font-family: var(--font-family);
  }
`;

export default function BasedProvider(props: Props): JSX.Element | null {
  return (
    <Fragment>
      <GlobalStyles />
      {props.children}
    </Fragment>
  );
}
