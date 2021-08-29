import React, {ReactNode, ReactElement, CSSProperties} from 'react';
import {BasedHeader} from './styles';

const THEMES = {
  light: 'light',
  dark: 'dark',
};

export const stringTuple = <T extends string[]>(...args: T) => args;
export const numberTuple = <T extends number[]>(...args: T) => args;
export type ThemesT = keyof typeof THEMES;

const HEADER_LIST = numberTuple(1, 2, 3, 4, 5);

export type HeaderPropsT = {
  text?: string;
  level: typeof HEADER_LIST[number];
  strong?: boolean;
  line?: boolean;
  theme?: ThemesT;
  className?: string;
  customStyles?: CSSProperties;
  isTruncated?: boolean;
  iconPre?: ReactNode;
  iconEnd?: ReactNode;
  // todo: add ref here
};

function Header({
  text,
  level = 1,
  strong = false,
  line,
  theme = 'dark',
  className,
  customStyles,
  isTruncated,
  iconPre,
  iconEnd,
  ...rest
}: HeaderPropsT | any): ReactElement {
  const H = `h${level}` as keyof JSX.IntrinsicElements;

  const header = (
    <H
      {...{className, ...rest}}
      style={{
        ...customStyles,
        fontWeight: strong ? 'bold' : '',
        textDecoration: line ? 'underline' : 'none',
      }}
    >
      {text}
    </H>
  );

  return iconPre || iconEnd ? (
    <BasedHeader {...{theme, isTruncated, iconPre, iconEnd}}>
      {iconPre && iconPre}
      {header}
      {iconEnd && iconEnd}
    </BasedHeader>
  ) : (
    <BasedHeader {...{theme, isTruncated}}>{header}</BasedHeader>
  );
}

export default Header;
