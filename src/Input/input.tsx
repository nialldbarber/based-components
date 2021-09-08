import React, {
  forwardRef,
  ReactElement,
  CSSProperties,
  ChangeEvent,
} from 'react';

interface InputPropsT {
  type?: string;
  value?: string | number;
  className?: string;
  customStyles?: CSSProperties;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // new
  // error state
  // password
}

const Input = forwardRef<HTMLInputElement, InputPropsT>(
  (
    {type = 'text', value, className, customStyles, onChange, ...rest},
    ref
  ): ReactElement => {
    return (
      <input
        ref={ref}
        value={value || ''}
        style={customStyles}
        {...{type, className, onChange}}
        {...rest}
      />
    );
  }
);

export default Input;
