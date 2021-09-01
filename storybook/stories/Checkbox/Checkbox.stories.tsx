import React from 'react';
import Checkbox from '../../../src/Checkbox/checkbox';

export default {
  title: 'Components/Checkbox',
  decorators: [(Story: any) => <Story />],
};

export const color = () => (
  <>
    <Checkbox color="red" label="testing" />
  </>
);

// className?: string;
// color?: string;
// label?: string;
// size?: CheckboxSizesT;
// id?: string;
// kind?: Kind;
// isChecked?: boolean;
// isDisabled?: boolean;
// checkColor?: string;
// backgroundColor?: string;
// onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
