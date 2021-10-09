import React, { MouseEvent, useState } from 'react';
import CardThumbnail from './CardThumbnail/CardThumbnail';
import './Deck.css';
import { getHero } from '../../services';
import Card from './Card/Card';

type Props = {
  ids: string[]
};

// This component creates and displays card thumbnails on start.
// Handles loading/displaying new hero <Card/> when clicking thumbnails.

const Deck = ({ ids }: Props ) => {

  // This is the inspected card. Show if not null.
  const [card, setCard] = useState<React.ReactElement | null>(null);

  // Handle clicking on thumbnail. Opens up card view.
  const clickThumbnail = async (event: MouseEvent<HTMLElement>) => {
    const newHero = await fetchHero(event.currentTarget.id);
    const newCard = newHero && <Card hero={newHero} closeCardHandler={closeCardHandler}/>;
    if(newCard){
      setCard(newCard);
      // Disable scroll when card is shown
      document.body.style.overflow = 'hidden';
    }
  };

  // Fetch new hero for inspected <Card/>
  const fetchHero = async (id: string) => {
    const hero = await getHero(id);
    return hero;
  };
  
  const createCardThumbnail = (currentHeroId: string) => {
    return <CardThumbnail id={currentHeroId} key={currentHeroId} onClick={(id) => clickThumbnail(id)}/>;
  };

  const closeCardHandler = () => {
    setCard(null);
    // Reactive scroll
    document.body.style.overflow = 'unset';
  };

  const displayCards = ids && ids.map(currentHeroId => createCardThumbnail(currentHeroId));

  return(
    <div>
      {displayCards.length > 0 && <h2>We could be your heroes:</h2>}
      {card && card}
      <div id="cards-container">
        {displayCards}
      </div>
    </div>
  );
};

export default Deck;