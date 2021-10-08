import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Title from './Title';

test('Title is rendered', () => {
  const component = render(<Title/>);

  expect(component.container).toHaveTextContent('DeckFest Unlimited');
});