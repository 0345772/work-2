import React from 'react';
import { MyButton, MyMedals } from '../UI';
// import st1 from '../../resources/medals/st1.svg';

export const PersonesItem = ({ persone, num, remove }) => {
  // const gold = <img src={st1} alt="gold" />
  const { lettel, name, pageviews, count_pub } = persone;
  const medals = <MyMedals num={num}/>
  return (
    <div className="persones-item">
      <div className="num-lettel">
        <span className="num">{num}</span>
        <div className="round">
          <div className="letel">{lettel}</div>
        </div>
      </div>
      <div className="persone-content">
        <h5>{name}</h5>
        <div className="count_pub">{count_pub} <span className="comment">публ.</span></div>
      </div>
      <div className="medals">
        {medals}
      </div>
      <div>
        <div className="pageviews">{pageviews}
          <span className='comment'>просм.</span>
        </div>
        <MyButton onClick={() => remove(persone)} >Удалить из списка</MyButton>
      </div>
    </div>
  );
};
