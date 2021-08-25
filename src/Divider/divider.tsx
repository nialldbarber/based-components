import React, {ReactElement, CSSProperties} from 'react';
import styled, {css} from 'styled-components';
import {dividerLine} from '../constants/colors';

export type DividerPropsT = {
  direction?: 'horizontal' | 'vertical';
  color?: string;
  orientation?: 'left' | 'right' | 'center';
  className?: string;
  dashed?: boolean;
  customStyles?: CSSProperties;
};

const getHorizontalStyles = css`
  position: relative;
  top: -0.06em;
  display: inline-block;
  height: 0.9em;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
`;

const getVerticalStyles = css``;

const BasedDivider = styled.div<DividerPropsT>`
  // vertical

  // horizontal
  background: none;
  border-color: ${({color}) => (color ? color : dividerLine)};
  border-style: ${({dashed}) => (dashed ? 'dashed' : 'solid')};
  border-width: 1px 0 0;
`;

function Divider({
  direction = 'horizontal',
  orientation,
  className,
  color,
  dashed,
  customStyles,
}: DividerPropsT): ReactElement {
  return (
    <BasedDivider {...{direction, className, color, dashed}} role="separator">
      <h1>divider</h1>
    </BasedDivider>
  );
}

export default Divider;
