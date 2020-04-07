import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render Logo', () => {
  render(<App />);
  const Logo = screen.getByTestId('Logo');
  expect(Logo).toBeInTheDocument();
});
