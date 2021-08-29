import React from 'react';
import Header from '../../../src/Header/header';

export default {
  title: 'Components/Header',
  decorators: [(Story: any) => <Story />],
};

export const text = () => (
  <>
    <Header text="Some text" />
  </>
);

export const level = () => (
  <>
    <Header text="Level 1!" level={1} />
    <Header text="Level 2!" level={2} />
    <Header text="Level 3!" level={3} />
    <Header text="Level 4!" level={4} />
    <Header text="Level 5!" level={5} />
    <Header text="Level 6!" level={6} />
  </>
);

export const theme = () => (
  <>
    <Header text="Dark theme" theme="dark" />
    <Header
      text="Light theme"
      theme="light"
      customStyles={{backgroundColor: 'var(--black)'}}
    />
  </>
);

export const isTruncated = () => (
  <>
    <Header
      text="Some really really really really long text"
      isTruncated
      customStyles={{fontSize: 100}}
    />
  </>
);
