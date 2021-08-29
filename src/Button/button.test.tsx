import React from 'react';
import {render, screen} from '@testing-library/react';
import Button from './button';

describe('<Button />', () => {
  test('contains correct text', () => {
    render(<Button text="Hello" />);
    const text = screen.getByText('Hello');
    expect(text).toBeInTheDocument();
  });

  test('shows spinner if isLoading', () => {
    const {getByRole} = render(<Button isLoading>Email</Button>);
    expect(getByRole('button')).not.toHaveTextContent('hello');
  });
});

// check disabled
