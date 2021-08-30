import React from 'react';
import {Wrapper} from './styles';
import {Kind} from '../Button/button';

export type CircleT = {
  loading?: boolean;
  size?: number;
  loadingColor?: string;
  loadingSize?: number;
  kind?: Kind;
};

function LoadingSpinner({
  loading = true,
  size = 30,
  loadingColor = '#fff',
  loadingSize = 30,
  kind = 'primary',
}: CircleT) {
  return loading ? (
    <Wrapper {...{size, loadingColor, loadingSize, kind}} />
  ) : null;
}

export default LoadingSpinner;
