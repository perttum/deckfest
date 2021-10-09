import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CardThumbnail from './CardThumbnail';

describe('Thumbnail', () => {
  
  it('When thumbnail is loaded, Card should not exist.', () => {
    const component = render(<CardThumbnail id="19056"/>);
    expect(component.container.querySelector("#card")).not.toBeInTheDocument();
    expect(component.container.querySelector(".hero-card")).toBeInTheDocument();
  });
  
  it('Thumbnail can be clicked.', () => {
    const mockHandler = jest.fn();
    const component = render(<CardThumbnail id="19056" onClick={mockHandler}/>);
    const heroCard = component.container.querySelector(".hero-card");
    fireEvent.click(heroCard);
    expect(mockHandler.mock.calls[0]).toHaveLength(1);
  });
});

