import React from 'react';
import Deck from './Deck';
import { render, screen } from '@testing-library/react';

describe('Deck', () => {
  render(<Deck ids={[19056]}/>);
  const cardThumbnail = screen.getByTestId('19056');
  
  it('Deck is rendered when given hero IDs', () => {
    expect(cardThumbnail.getAttribute('class')).toBe('hero-card');
  });
});
