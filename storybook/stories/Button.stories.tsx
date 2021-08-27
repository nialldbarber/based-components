import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from '../../src/Button/button';

// text?: string;
// className?: string;
// kind?: Kind;
// children?: ReactNode;
// customStyles?: CSSProperties;
// shape?: Shape;
// isLoading?: boolean;
// loadingSize?: number;
// loadingColor?: string;
// isActive?: boolean;
// disabled?: boolean;
// iconPre?: ReactNode;
// iconEnd?: ReactNode;
// onClick?: (event: MouseEvent<HTMLButtonElement>) => void;

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  text: 'Test text',
};

export const Kind = Template.bind({});
Kind.args = {
  text: 'Primary',
  kind: 'primary',
};
