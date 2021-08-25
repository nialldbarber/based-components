import React, {ReactElement, CSSProperties} from 'react';
import {BasedDivider} from './styles';

export type DividerPropsT = {
  direction?: 'horizontal' | 'vertical';
  color?: string;
  orientation?: 'left' | 'right' | 'center';
  className?: string;
  dashed?: boolean;
  customStyles?: CSSProperties;
};

function Divider({
  direction = 'horizontal',
  orientation,
  className,
  color,
  dashed,
  customStyles,
  ...rest
}: DividerPropsT): ReactElement {
  return (
    <BasedDivider
      {...{direction, orientation, className, color, dashed, ...rest}}
      style={customStyles}
      role="separator"
    >
      <h1>divider</h1>
    </BasedDivider>
  );
}

export default Divider;
