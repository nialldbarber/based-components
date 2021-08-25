import React, {ReactNode, ReactElement, CSSProperties} from 'react';
import {BasedHeader} from './styles';

export const tuple = <T extends string[]>(...args: T) => args;
export const tupleNum = <T extends number[]>(...args: T) => args;

const TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5);

export type HeaderPropsT = {
  text?: string;
  level: typeof TITLE_ELE_LIST[number];
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
  level,
  weight,
  strong,
  line,
  className,
  customStyles,
  iconPre,
  iconEnd,
}: HeaderPropsT): ReactElement {
  const H = `h${level}` as keyof JSX.IntrinsicElements;

  const header = (
    <H
      {...{className}}
      style={{
        ...customStyles,
        fontWeight: strong ? 'bold' : weight ? weight : 'normal',
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
