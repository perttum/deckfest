import React, { Fragment, useEffect, useState } from 'react';
import { Hero } from '../../../types';
import './CardThumbnail.css';
import { getHero } from '../../../services';

type Props = {
  id: string,
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const CardThumbnail = ({ id, onClick }: Props) => {
  
  const [hero, setHero] = useState<Hero | null>(null);
  
  useEffect(() => {
    let mounted = true;
    const fetchHeroData = async () => {
      const hero = await getHero(id);
      mounted && setHero(hero);
    };
    void fetchHeroData();
    return () => { mounted = false; };
  }, []);
  
  return(
    <Fragment>
      <div id={id} className="hero-card" onClick={onClick} data-testid={id}>
        {hero && <img src={`https://www.ringsdb.com${hero.imagesrc}`} alt={`${hero.name}`} />}
      </div>
    </Fragment>
  );
};

export default CardThumbnail;