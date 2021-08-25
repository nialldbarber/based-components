import styled from 'styled-components';
import {ProgressBarPropsT} from './progress-bar';

export const BasedProgressBar = styled.div<ProgressBarPropsT>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 28px;
  padding: 16px;
`;

export const Progress = styled.div<ProgressBarPropsT>`
  width: ${({value}) => value}%;
  height: ${({height}) => height}px;
  border-radius: ${({height}) => height && height / 2}px;
  transition: width 0.5s cubic-bezier(0.19, 0.58, 0.66, 0.42);
`;
