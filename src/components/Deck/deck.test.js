import React from 'react';
import Deck from './Deck';
import { render, screen } from '@testing-library/react';

test('Deck is rendered when given hero IDs', () => {
  render(<Deck ids={[19056]}/>);
  const cardThumbnail = screen.getByTestId("19056");
  expect(cardThumbnail.getAttribute('class')).toBe('hero-card');
});