import React, {
  useState,
  useEffect,
  forwardRef,
  ReactElement,
  ChangeEvent,
} from 'react';
import {BasedInput} from './styles';
import {randomIdGenerator} from '../utils/generateId';

export interface CheckboxPropsT {
  className?: string;
  color?: string;
  id?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxPropsT>(
  (
    {className, color, id = null, isChecked, isDisabled, onChange, ...rest},
    ref
  ): ReactElement => {
    let [customId, setCustomId] = useState('');

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
          {...{color, className, isChecked, isDisabled, onChange}}
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
