import React from 'react';
import "./Threat";
import { StatType } from '../../../../../types';
import "./Threat.css";

type Props = {
  value: number,
  statType: StatType
};

const Threat = ({ value, statType }: Props) => {
  return(
    <div id="threat">
      <span>{value} <br/> {StatType[statType]}</span>
    </div>
  );
};

export default Threat;

