import React from 'react';
import Error from './Error';
import { render } from '@testing-library/react';

test('Error is rendered and falsely Id is shown.', () => {
  const component = render(<Error falseId="007"/>);
  expect(component.container).toHaveTextContent("Deck with ID: 007 does not exist!");
});