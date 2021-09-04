import React, {forwardRef, ReactNode, ReactElement, CSSProperties} from 'react';
import {BasedHeader} from './styles';

const THEMES: Record<string, string> = {
  light: 'light',
  dark: 'dark',
};

export const stringTuple = <T extends string[]>(...args: T) => args;
export const numberTuple = <T extends number[]>(...args: T) => args;
export type ThemesT = keyof typeof THEMES;

const HEADER_LIST = numberTuple(1, 2, 3, 4, 5);

export type HeaderPropsT = {
  text?: string;
  level?: typeof HEADER_LIST[number];
  strong?: boolean;
  line?: boolean;
  theme?: ThemesT;
  className?: string;
  customStyles?: CSSProperties;
  isTruncated?: boolean;
  iconPre?: ReactNode;
  iconEnd?: ReactNode;
};

const Header = forwardRef<HTMLHeadingElement, HeaderPropsT>(
  (
    {
      text,
      level = 1,
      strong = false,
      line,
      theme = THEMES.dark,
      className,
      customStyles,
      isTruncated,
      iconPre,
      iconEnd,
      ...rest
    },
    ref
  ): ReactElement => {
    const H = `h${level}` as keyof JSX.IntrinsicElements;

    const header = (
      <H {...{className}} style={customStyles} {...rest}>
        {text}
      </H>
    );

    return iconPre || iconEnd ? (
      <BasedHeader
        ref={ref}
        {...{theme, strong, isTruncated, iconPre, iconEnd}}
      >
        {iconPre}
        {header}
        {iconEnd}
      </BasedHeader>
    ) : (
      <BasedHeader {...{theme, strong, isTruncated}}>{header}</BasedHeader>
    );
  }
);

export default Header;
