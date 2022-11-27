import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders learn react link', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
