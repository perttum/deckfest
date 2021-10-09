import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  
  it('Search bar is rendered', () => {
    const component = render(<Search/>);
    expect(component.container).toHaveTextContent('Insert deck id:');
  });
  
  it('Search button can be clicked', () => {
    const mockHandler = jest.fn(e => e.preventDefault());
    const component = render(<Search submit={mockHandler}/>);
    const submitSearchButton = component.getByText('Search');
    fireEvent.click(submitSearchButton);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });

  it('Search input can be typed into', () => {
    const mockChange = jest.fn();
    const component = render(<Search onChange={mockChange}/>);
    const input = component.container.querySelector('input');
    fireEvent.change(input, {target: {value: '999999'}});
    expect(mockChange.mock.calls).toHaveLength(1);
    expect(input).toHaveValue('999999');
  });
});