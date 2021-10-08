import React from 'react';
import { StatType } from '../../../../../types';
import "./Health.css";

type Props = {
  value: number,
  statType: StatType
};

const Health = ({ value, statType }: Props) => {
  return(
    <div id="health">
      <span>{value}<br/>{StatType[statType]}</span>
    </div>
  );
};

export default Health;

