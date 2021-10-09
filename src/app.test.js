import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const component = render(<App/>);
  
  it('App starts without crashing', () => {
    expect(component.container).toHaveTextContent('Unlimited');
    expect(component.container).toHaveTextContent('Search');
    expect(component.container.querySelector('#cards-container'));
  });
});