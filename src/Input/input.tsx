import React, {
  forwardRef,
  ReactElement,
  CSSProperties,
  ChangeEvent,
} from 'react';
import {BasedInput} from './styles';

export interface InputPropsT {
  type?: string;
  value?: string | number;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  customStyles?: CSSProperties;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputPropsT>(
  (
    {
      type = 'text',
      value,
      error = false,
      disabled = false,
      className,
      customStyles,
      onChange,
      ...rest
    },
    ref
  ): ReactElement => {
    return (
      <BasedInput
        ref={ref}
        value={value || ''}
        style={customStyles}
        $error={error}
        {...{type, className, disabled}}
        onChange={onChange}
        {...rest}
      />
    );
  }
);

export default Input;
