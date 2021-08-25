import styled, {css} from 'styled-components';
import {dividerLine} from '../constants/colors';
import {DividerPropsT} from './divider';

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

export const BasedDivider = styled.div<DividerPropsT>`
  // vertical

  // horizontal
  background: none;
  border-color: ${({color}) => (color ? color : dividerLine)};
  border-style: ${({dashed}) => (dashed ? 'dashed' : 'solid')};
  border-width: 1px 0 0;
`;
