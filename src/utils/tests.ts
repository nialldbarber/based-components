import {isValidElement} from 'react';
import {
  render as rtlRender,
  RenderOptions,
  fireEvent,
  RenderResult,
} from '@testing-library/react';

export const testA11y = async (
  ui: UI | Element,
  {axeOptions, ...options}: TestA11YOptions = {}
) => {
  const container = isValidElement(ui) ? render(ui, options).container : ui;

  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
};
