import React, { Fragment } from "react";
import './Card.css';
import { Hero } from '../../../types';
import Stats from "./Stats/Stats";
import Info from "./Info/Info";

type Props = {
  hero: Hero,
  closeCardHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
};

const Card = ({ hero, closeCardHandler }: Props) => {
  
  return(
    <div id="dark-bg" onClick={closeCardHandler}>
      <div id="card">
          {hero &&
          <Fragment>
            <div id="card-top">
              <Stats
                threat={hero.threat}
                willpower={hero.willpower}
                attack={hero.attack}
                defense={hero.defense}
                health={hero.health}
              />
            </div>
            <div id="card-bottom">
              <Info hero={hero}/>
            </div>
          </Fragment>
        }
      </div>
    </div>
  );
};

export default Card;