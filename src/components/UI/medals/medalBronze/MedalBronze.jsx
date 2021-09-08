import React from 'react';
import st3 from '../../../../resources/medals/st3.svg';
import classes from './MedalBronze.module.css';

export const MedalBronze = () => {
  const medalBronze = <img src={st3} alt="bronze" />;

  return (
    <div className={classes.medalBronze}>
      {medalBronze}
    </div>
  );
};
