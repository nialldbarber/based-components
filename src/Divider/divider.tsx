import React, {forwardRef, ReactElement, CSSProperties} from 'react';
import {BasedDivider} from './styles';

export const DIRECTIONS = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};

export const ORIENTATION = {
  left: 'left',
  right: 'right',
  center: 'center',
};

export type DirectionsT = keyof typeof DIRECTIONS;
export type OrientationT = keyof typeof ORIENTATION;

export type DividerPropsT = {
  direction?: DirectionsT;
  color?: string;
  orientation?: OrientationT;
  className?: string;
  dashed?: boolean;
  customStyles?: CSSProperties;
};

const Divider = forwardRef<HTMLDivElement, DividerPropsT>(
  (
    {
      direction = 'horizontal',
      orientation,
      className,
      color,
      dashed,
      customStyles,
      ...rest
    },
    ref
  ): ReactElement => {
    return (
      <BasedDivider
        {...{direction, orientation, className, color, dashed, ...rest}}
        style={customStyles}
        role="separator"
        {...ref}
      />
    );
  }
);

export default Divider;
