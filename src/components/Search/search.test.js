import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

test('Search bar is rendered', () => {
  const component = render(<Search/>);
  
  expect(component.container).toHaveTextContent('Insert deck id:');
});

test('Search button can be clicked', () => {
  const mockHandler = jest.fn(e => e.preventDefault());
  const component = render(<Search submit={mockHandler}/>);
  const submitSearchButton = component.getByText('Search');
  fireEvent.click(submitSearchButton);
  expect(mockHandler.mock.calls).toHaveLength(1);
});

test('Search input can be typed into', () => {
  const component = render(<Search/>);
  const input = component.container.querySelector('input');
  fireEvent.change(input, {target: {value: '999999'}});
  
  expect(input).toHaveValue('999999');
});

