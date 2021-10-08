import React from "react";
import './Stat.css';
import { StatType } from '../../../../../types';

type Props={
  value: number,
  statType: StatType
};

const Stat = ({ value, statType }: Props) => {

  return(
    <div className="stat">
      <span>{value}<br/>{StatType[statType]}</span>
    </div>
  );
};

export default Stat;