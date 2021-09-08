import React from 'react';
import st1 from '../../../../resources/medals/st1.svg';
import classes from './MedalGold.module.css';

export const MedalGold = ({children, ...props}) => {
  const medalGold = <img src={st1} alt="gold" />

  return (
    <div {...props} className={classes.medalGold}>
      {medalGold}       
    </div>
  );
};
