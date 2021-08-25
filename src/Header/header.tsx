import React, {ReactNode, ReactElement, CSSProperties} from 'react';
import {BasedHeader} from './styles';

export const stringTuple = <T extends string[]>(...args: T) => args;
export const numberTuple = <T extends number[]>(...args: T) => args;

const HEADER_LIST = numberTuple(1, 2, 3, 4, 5);

export type HeaderPropsT = {
  text?: string;
  level: typeof HEADER_LIST[number];
  weight?: CSSProperties | any; // todo: <- figure out this type
  strong?: boolean;
  line?: boolean;
  className?: string;
  customStyles?: CSSProperties;
  iconPre?: ReactNode;
  iconEnd?: ReactNode;
  // todo: add ref here
};

function Header({
  text,
  level = 1,
  weight = 'normal',
  strong = false,
  line,
  className,
  customStyles,
  iconPre,
  iconEnd,
  ...rest
}: HeaderPropsT): ReactElement {
  const H = `h${level}` as keyof JSX.IntrinsicElements;

  const header = (
    <H
      {...{className}}
      {...rest}
      style={{
        ...customStyles,
        fontWeight: strong ? 'bold' : weight,
        textDecoration: line ? 'underline' : 'none',
      }}
    >
      {text}
    </H>
  );

  return iconPre || iconEnd ? (
    <BasedHeader {...{iconPre, iconEnd}}>
      {iconPre && iconPre}
      {header}
      {iconEnd && iconEnd}
    </BasedHeader>
  ) : (
    header
  );
}

export default Header;
