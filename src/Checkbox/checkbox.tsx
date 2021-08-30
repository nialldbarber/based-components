import React, {
  useState,
  useEffect,
  forwardRef,
  ReactElement,
  ChangeEvent,
} from 'react';
import {BasedInput} from './styles';
import {randomIdGenerator} from '../utils/generateId';
import {Kind} from '../Button/button';

export interface CheckboxPropsT {
  className?: string;
  color?: string;
  id?: string;
  kind?: Kind;
  isChecked?: boolean;
  isDisabled?: boolean;
  checkColor?: string;
  backgroundColor?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxPropsT>(
  (
    {
      className,
      color,
      id = null,
      kind = 'primary',
      isChecked,
      isDisabled,
      checkColor,
      backgroundColor,
      onChange,
      ...rest
    },
    ref
  ): ReactElement => {
    let [customId, setCustomId] = useState<string>('');

    // if no id is received, set a random one
    useEffect(() => {
      setCustomId(randomIdGenerator());
    }, []);

    return (
      <div>
        <BasedInput
          ref={ref}
          id={id ? id : customId}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          {...{
            color,
            className,
            kind,
            isChecked,
            isDisabled,
            checkColor,
            backgroundColor,
            onChange,
          }}
          {...rest}
        />
        <label htmlFor={id ? id : customId}>
          <span />
          Hello there
        </label>
      </div>
    );
  }
);

export default Checkbox;
