import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from '../../src/Button/button';
import {KIND, SHAPE} from '../../src/Button/constants';

// text,
// type = 'button',
// className,
// kind = KIND.primary,
// children,
// customStyles,
// shape = SHAPE.default,
// isLoading = false,
// loadingColor = white,
// loadingSize = 30,
// isActive = false,
// disabled = false,
// iconPre,
// iconEnd,
// onClick,

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    kind: {
      options: [...Object.values(KIND)],
      control: {type: 'radio'},
    },
    shape: {
      options: [...Object.values(SHAPE)],
      control: {type: 'radio'},
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  text: 'Test text',
  kind: 'primary',
};

export const Kind = Template.bind({});
Kind.args = {
  text: 'Primary',
  kind: 'primary',
};

export const Shape = Template.bind({});
Shape.args = {
  text: 'Danger',
  kind: 'danger',
  shape: 'pill',
};
