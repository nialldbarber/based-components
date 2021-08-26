import React from 'react';
import {Wrapper} from './styles';

export type CircleT = {
  loading?: boolean;
  size?: number;
  loadingColor?: string;
};

function LoadingSpinner({
  loading = true,
  size = 30,
  loadingColor = '#fff',
}: CircleT) {
  return loading ? <Wrapper {...{size, loadingColor}} /> : null;
}

export default LoadingSpinner;
