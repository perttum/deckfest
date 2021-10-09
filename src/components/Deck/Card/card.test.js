import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const closeCardMock = jest.fn();

  const hero = {
    name: 'Pena',
    threat: '100',
    willpower: '0',
    attack: '10',
    defense: '15',
    health: '20',
    text: 'Hello hero!',
    traits: 'unknown',
    flavor: 'Cherry Red',
    imagesrc: ''
  };

  it('Card is rendered. Passed in info is shown to user.', () => {
    const component = render(<Card hero={hero} closeCardHandler={closeCardMock}/>);
    
    expect(component.container).toHaveTextContent('Pena');
    expect(component.container).toHaveTextContent('health');
    expect(component.container).toHaveTextContent('willpower');
    expect(component.container).toHaveTextContent('Hello hero!');
    expect(component.container).toHaveTextContent('Cherry Red');
  });
  
  it('Card and bg can be clicked to close card view.', () => {
    const component = render(<Card closeCardHandler={closeCardMock}/>);
    const cardBg = component.container.querySelector('#dark-bg');
    fireEvent.click(cardBg);
    expect(closeCardMock.mock.calls).toHaveLength(1);
  });
});
