import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';


test('Card is rendered. Passed in info is shown to user.', () => {
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

  const component = render(<Card hero={hero}/>);
  expect(component.container).toHaveTextContent('Pena');
  expect(component.container).toHaveTextContent('health');
  expect(component.container).toHaveTextContent('willpower');
  expect(component.container).toHaveTextContent('Hello hero!');
  expect(component.container).toHaveTextContent('Cherry Red');
});
