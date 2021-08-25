import styled, {css} from 'styled-components';
import {HeaderPropsT} from './header';

type StyledHeaderT = Omit<HeaderPropsT, 'level'>;

const getIconPreStyles = css`
  svg {
    margin-right: 5px;
  }
`;

const getIconEndStyles = css`
  svg {
    margin-left: 5px;
  }
`;

export const BasedHeader = styled.div<StyledHeaderT>`
  display: flex;
  align-items: center;
  ${({iconPre}) => iconPre && getIconPreStyles};
  ${({iconEnd}) => iconEnd && getIconEndStyles};
`;
