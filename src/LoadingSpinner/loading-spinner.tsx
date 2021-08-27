import React from 'react';
import {Wrapper} from './styles';

export type CircleT = {
  loading?: boolean;
  size?: number;
  loadingColor?: string;
  loadingSize?: number;
};

function LoadingSpinner({
  loading = true,
  size = 30,
  loadingColor = '#fff',
  loadingSize = 30,
}: CircleT) {
  return loading ? <Wrapper {...{size, loadingColor, loadingSize}} /> : null;
}

export default LoadingSpinner;
