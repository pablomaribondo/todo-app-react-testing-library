import { render, screen } from '@testing-library/react';

import Header from '../Header';

it('should render same text passed into title pŕops', () => {
  render(<Header title="any_text" />);

  const headingElement = screen.getByRole('heading', { name: 'any_text' });

  expect(headingElement).toBeInTheDocument();
});
