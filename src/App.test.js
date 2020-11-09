import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import IntersectionObserver from 'intersection-observer'
import { act } from 'react-dom/test-utils';

test('renders learn react link', async() => {
  render(<App />);
  const linkElement = await screen.findByText('Última Búsqueda');
  expect(linkElement).toBeVisible();
});
test('Search result', async() => {
render(<App />);

const textbox = await screen.findByRole('textbox')
const button = await screen.findByRole('button')
  fireEvent.change(textbox,{target:{value:"DRAGON"}})
  fireEvent.click(button)

const title = await screen.findByText("DRAGON");
expect(title).toBeVisible();
});
