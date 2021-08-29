import React, {Fragment, ReactChild} from 'react';
import {createGlobalStyle} from 'styled-components';

type Props = {
  children?: ReactChild;
};

export const b = 'based';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');

  :root {
    // colors
    --white: #FFFFFF;
    --blue: #2563EB;
    --dark-blue: #1D4ED8;
    --red: #DC2626;
    --dark-red: #B91C1C;

    --${b}-white: var(--white);
    --${b}-white-hovered: #E5E5E5;

    --${b}-focus-hovered: rgba(66, 153, 225, 0.6);

    // primary
    --${b}-primary: var(--blue);
    --${b}-primary-color: var(--white);
    --${b}-primary-hovered: var(--dark-blue);
    --${b}-primary-color-hovered: var(--white);
    --${b}-primary-outline: var(--blue);
    --${b}-primary-loader: var(--white);
    // secondary
    --${b}-secondary: var(--white);
    --${b}-secondary-color: var(--blue);
    --${b}-secondary-hovered: var(--blue);
    --${b}-secondary-color-hovered: var(--white);
    --${b}-secondary-outline: var(--blue);
    --${b}-secondary-loader: var(--blue);
    // danger
    --${b}-danger: var(--red);
    --${b}-danger-color: var(--white);
    --${b}-danger-hovered: var(--dark-red);
    --${b}-danger-color-hovered: var(--white);
    --${b}-danger-outline: var(--red);
    --${b}-danger-loader: var(--white);
    // animations
    --${b}-divider-line: rgba(0, 0, 0, 0.06);
    --${b}-anim: 0, 0, 0.38, 0.9;
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
