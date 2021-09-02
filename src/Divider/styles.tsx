import styled, {css} from 'styled-components';
import {dividerLine} from '../constants/colors';
import {DividerPropsT} from './divider';

const getVerticalStyles = css`
  position: relative;
  top: -0.06rem;
  display: inline-block;
  height: 0.9rem;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-left: 1px solid;
`;

const getHorizontalStyles = css<DividerPropsT>`
  border-top: 1px solid;
  border-style: ${({dashed}) => (dashed ? 'dashed' : 'solid')};
  border-width: 1px 0 0;
`;

export const BasedDivider = styled.div<DividerPropsT>`
  background: none;
  // vertical
  ${({direction}) =>
    direction === 'vertical' ? getVerticalStyles : getHorizontalStyles}
  // horizontal
  border-color: ${({color}) => color || dividerLine};
`;
