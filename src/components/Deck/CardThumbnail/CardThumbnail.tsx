import React, { Fragment, useEffect, useState } from 'react';
import { Hero } from '../../../types';
import Card from '../Card/Card';
import './CardThumbnail.css';
import { getHero } from '../../../services';

const CardThumbnail = ({ id }: { id: string }) => {
  
  const [hero, setHero] = useState<Hero | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  
  useEffect(() => {
    const fetchHeroData = async () => {
      const hero = await getHero(id);
      setHero(hero);
    };
    void fetchHeroData();
  }, []);
  
  return(
    
    <Fragment>
      {(showInfo && hero) && <Card hero={hero} closeCardHandler={() => setShowInfo(false)}/>}
      
      <div className="hero-card" onClick={() => setShowInfo(!showInfo)} data-testid={id}>
        {hero && <img src={`https://www.ringsdb.com${hero.imagesrc}`} alt={`${hero.name}`} />}
      </div>
      
    </Fragment>
  );
};

export default CardThumbnail;