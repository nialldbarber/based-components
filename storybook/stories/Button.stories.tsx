import React from 'react';
import Button from '../../src/Button/button';

export default {
  title: 'Button',
  decorators: [(Story: any) => <Story />],
};

export const text = () => (
  <>
    <Button text="Some text" kind="primary" />
    <Button text="Different text" kind="danger" />
  </>
);

export const kind = () => (
  <>
    <Button text="Primary" kind="primary" />
    <Button text="Secondary" kind="secondary" />
    <Button text="Tertiary" kind="tertiary" />
    <Button text="Danger" kind="danger" />
    <Button text="Ghost" kind="ghost" />
  </>
);

export const shape = () => (
  <>
    <Button text="Default" shape="default" />
    <Button text="Pill" shape="pill" />
    <Button text="Round" shape="round" />
    <Button text="Square" shape="square" />
  </>
);

export const customStyles = () => (
  <>
    <Button
      text="Custom"
      customStyles={{
        background: 'pink',
        height: 70,
        width: 200,
        borderRadius: 5,
      }}
    />
  </>
);

export const isLoading = () => (
  <>
    <Button isLoading />
    <Button isLoading loadingSize={10} />
    <Button isLoading loadingColor="pink" />
  </>
);

// isActive = false,
// disabled = false,
// iconPre,
// iconEnd,
// onClick,
