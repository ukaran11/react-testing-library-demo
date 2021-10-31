import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

test('should check for header', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading", {name: "My Header"});
    expect(headingElement).toBeInTheDocument();
  });
 
it('should render same text passed into title prop3', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTitle("Header")
    expect(headingElement).toBeInTheDocument();
})

it('data-test-2', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTestId("header-1")
    expect(headingElement).toBeInTheDocument();
})