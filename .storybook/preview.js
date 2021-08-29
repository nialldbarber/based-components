import React from 'react';
import BasedProvider from '../src/system/based-provider';

export const decorators = [
  (Story) => (
    <BasedProvider>
      <div style={{margin: '3em'}}>
        <Story />
      </div>
    </BasedProvider>
  ),
];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
