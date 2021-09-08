import React from 'react';
import { MedalGold } from './medalGold';
import { MedalSilver } from './medalSilver';
import { MedalBronze } from './medalBronze';
import classes from './MyMedals.module.css';


export const MyMedals = ({ children, ...props}) => {
 
  const medalGold = <MedalGold/>
  const medalSilver = <MedalSilver/>
  const medalBronze = <MedalBronze/>


  return (
    <div {...props} className={classes.myMedals}>
     
      {
       (props.num===1) ? medalGold : null
      }  
      {
       (props.num===2) ? medalSilver : null
      }  
      {
       (props.num===3) ? medalBronze : null
      }       
    </div>
  );
};
