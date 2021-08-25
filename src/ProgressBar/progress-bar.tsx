import React, {ReactElement, CSSProperties} from 'react';
import {BasedProgressBar, Progress} from './styles';

export type ProgressBarPropsT = {
  value?: number;
  height?: number;
  customStyles?: CSSProperties;
  customBarStyles?: CSSProperties;
};

function ProgressBar({
  value,
  height,
  customStyles,
  customBarStyles,
  ...rest
}: ProgressBarPropsT): ReactElement {
  const val = value && value >= 100 ? 100 : value;

  return (
    <BasedProgressBar {...{...rest}} style={customStyles}>
      <Progress
        {...{height}}
        value={val}
        style={customBarStyles}
        role="progressbar"
        aria-label={`${val}% loaded`}
        aria-valuenow={val}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </BasedProgressBar>
  );
}

export default ProgressBar;
