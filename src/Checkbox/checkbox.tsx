import React, {
  useState,
  useEffect,
  Fragment,
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
    {className, color, id, isChecked, isDisabled, onChange, ...rest},
    ref
  ): ReactElement => {
    console.log(isChecked ? 'CHECKED' : 'DISABLED');
    let [customId, setCustomId] = useState('');

    useEffect(() => {
      setCustomId(randomIdGenerator());
    }, []);

    return (
      <Fragment>
        <label htmlFor={id ? id : customId} />
        <BasedInput
          ref={ref}
          id={id ? id : customId}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          {...{color, className, isChecked, isDisabled, onChange}}
          {...rest}
        />
      </Fragment>
    );
  }
);

export default Checkbox;
