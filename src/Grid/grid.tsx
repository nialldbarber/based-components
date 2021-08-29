import React, {forwardRef, ReactNode, ReactElement, CSSProperties} from 'react';
import {BasedGrid, BasedGridItem} from './styles';

export type GridPropsT = {
  area?: string;
  templateAreas?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  column?: string;
  row?: string;
  autoFlow?: string;
  autoRows?: string;
  templateRows?: string;
  autoColumns?: string;
  templateColumns?: string;
  className?: string;
  children?: ReactNode;
  customStyles?: CSSProperties;
};

export const Grid = forwardRef<HTMLDivElement, GridPropsT>(
  (
    {
      area,
      templateAreas,
      gap,
      rowGap,
      columnGap,
      column,
      row,
      autoFlow,
      autoRows,
      templateRows,
      autoColumns,
      templateColumns,
      className,
      children,
      customStyles,
      ...rest
    },
    ref
  ): ReactElement => {
    const styles = {
      gridArea: area,
      gridTemplateAreas: templateAreas,
      gridGap: gap,
      gridRowGap: rowGap,
      gridColumnGap: columnGap,
      gridAutoColumns: autoColumns,
      gridColumn: column,
      gridRow: row,
      gridAutoFlow: autoFlow,
      gridAutoRows: autoRows,
      gridTemplateRows: templateRows,
      gridTemplateColumns: templateColumns,
    };

    return (
      <BasedGrid
        ref={ref}
        style={{...styles, ...customStyles}}
        {...{className}}
        {...rest}
      >
        {children}
      </BasedGrid>
    );
  }
);

export const GridItem = forwardRef<HTMLDivElement, GridPropsT>(
  ({className, children, customStyles, ...rest}, ref): ReactElement => {
    return (
      <BasedGridItem ref={ref} {...{className}} style={customStyles} {...rest}>
        {children}
      </BasedGridItem>
    );
  }
);
