import React from "react";
import './Stats.css';
import Stat from './Stat/Stat';
import { StatType } from '../../../../types';
import Threat from './Threat/Threat';
import Health from './Health/Health';

type Props = {
  threat: number,
  willpower: number,
  attack: number,
  defense: number,
  health: number
};

const Stats = ({ threat, willpower, attack, defense, health }: Props) => {
  return(
    <div id="stat-bar">
      <Threat value={threat} statType={StatType.threat}/>
      <div id="stats">
        <Stat value={willpower} statType={StatType.willpower}/>
        <Stat value={attack} statType={StatType.attack}/>
        <Stat value={defense} statType={StatType.defense}/>
      </div>
      <Health value={health} statType={StatType.health}/>
    </div>
  );
};

export default Stats;