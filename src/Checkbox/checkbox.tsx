import React, {
  useState,
  useEffect,
  forwardRef,
  ReactElement,
  ChangeEvent,
  Fragment,
} from 'react';
import {BasedInput, BasedInputContainer} from './styles';
import {randomIdGenerator} from '../utils/generate-id';
import {Kind} from '../Button/button';

const CHECKBOX_SIZES: Record<string, string> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export type CheckboxSizesT = keyof typeof CHECKBOX_SIZES;

export interface CheckboxPropsT {
  className?: string;
  color?: string;
  label?: string;
  size?: CheckboxSizesT;
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
      label,
      size = 'sm',
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
      if (id === null) {
        setCustomId(randomIdGenerator());
      }
    }, [id]);

    return (
      <BasedInputContainer>
        <BasedInput
          ref={ref}
          id={id || customId}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          $size={size}
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
        <label htmlFor={id || customId}>
          <span />
          {label || null}
        </label>
      </BasedInputContainer>
    );
  }
);

export default Checkbox;
