import React from 'react';
import st2 from '../../../../resources/medals/st2.svg';
import classes from './MedalSilver.module.css';

export const MedalSilver = () => {
  const medalSilver = <img src={st2} alt="silver" />;

  return (
    <div className={classes.medalSilver}>
      {medalSilver}
    </div>
  );
};
