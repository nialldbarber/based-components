import React, {Fragment, ReactChild} from 'react';
import {createGlobalStyle} from 'styled-components';

type Props = {
  children?: ReactChild;
};

export const b = 'based';

export const GlobalStyles = createGlobalStyle`
  :root {
    // colors
    --${b}-white: #FFFFFF;
    --${b}-black: #1A202C;
    --${b}-blue: #2563EB;
    --${b}-dark-blue: #1D4ED8;
    --${b}-red: #DC2626;
    --${b}-dark-red: #B91C1C;
    --${b}-grey: rgb(212, 212, 212);
    --${b}-light-grey: rgb(247, 246, 245);

    // stateful colors
    --${b}-white-hovered: #E5E5E5;
    --${b}-white-dark: #C2C0C0;
    --${b}-white-one: #8A8888;
    --${b}-focus-hovered: rgba(66, 153, 225, 0.6);

    // primary
    --${b}-primary: var(--${b}-blue);
    --${b}-primary-color: var(--${b}-white);
    --${b}-primary-hovered: var(--${b}-dark-blue);
    --${b}-primary-color-hovered: var(--${b}-white);
    --${b}-primary-hovered-border: rgb(39, 110, 241);
    --${b}-primary-outline: var(--${b}-blue);
    --${b}-primary-loader: var(--${b}-white);
    // secondary
    --${b}-secondary: var(--${b}-white);
    --${b}-secondary-color: var(--${b}-blue);
    --${b}-secondary-hovered: var(--${b}-blue);
    --${b}-secondary-color-hovered: var(--${b}-white);
    --${b}-secondary-outline: var(--${b}-blue);
    --${b}-secondary-loader: var(--${b}-blue);
    // danger
    --${b}-danger: var(--${b}-red);
    --${b}-danger-color: var(--${b}-white);
    --${b}-danger-hovered: var(--${b}-dark-red);
    --${b}-danger-color-hovered: var(--${b}-white);
    --${b}-danger-outline: var(--${b}-red);
    --${b}-danger-loader: var(--${b}-white);
    // animations
    --${b}-divider-line: rgba(0, 0, 0, 0.06);
    --${b}-anim: 0, 0, 0.38, 0.9;
    --${b}-checked-anim: cubic-bezier(0.4, 0, 0.23, 1);
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
