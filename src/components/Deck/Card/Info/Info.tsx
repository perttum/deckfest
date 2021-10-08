import React from "react";
import './Info.css';
import { Hero } from '../../../../types';
import parse from 'html-react-parser';

const Info = ({ hero }: { hero: Hero }) => {
  return(
    <div id="info">
      <h1>{hero.name}</h1>
      <em>{parse(hero.traits)}</em>
      <p>
        {parse(hero.text)}
      </p>
      <em>
        {parse(hero.flavor)}
      </em>
    </div>
  );
};

export default Info;
