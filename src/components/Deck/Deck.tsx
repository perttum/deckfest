import React from "react";
import CardThumbnail from "./CardThumbnail/CardThumbnail";
import "./Deck.css";

type Props = {
  ids: string[]
};

// Creates and displays card thumbnails

const Deck = ({ ids }: Props ) => {
  
  const createCardThumbnail = (currentHeroId: string) => {
    return <CardThumbnail id={currentHeroId} key={currentHeroId}/>;
  };

  const displayCards = ids && ids.map(currentHeroId => createCardThumbnail(currentHeroId));

  return(
    <div>
      {displayCards.length > 0 && <h2>We could be your heroes:</h2>}
      <div id="cards-container">
        {displayCards}
      </div>
    </div>
  );
};

export default Deck;