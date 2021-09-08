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

const getTruncatedStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BasedHeader = styled.div<StyledHeaderT>`
  display: flex;
  align-items: center;
  ${({iconPre}) => iconPre && getIconPreStyles};
  ${({iconEnd}) => iconEnd && getIconEndStyles};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', sans-serif;
    color: ${({theme}) =>
      theme === 'dark' ? `var(--based-black)` : 'var(--based-white)'};
    ${({isTruncated}) => isTruncated && getTruncatedStyles};
    font-weight: ${({strong}) => (strong ? 'bold' : 'normal')};
  }
`;
