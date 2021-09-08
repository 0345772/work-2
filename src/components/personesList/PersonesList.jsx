import React from 'react';
import { PersonesItem } from '../personesItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export const PersonesList = ({ persones, remove }) => {
  if (!persones.length) {
    return (
      <h3 style={{ textAlign: "center" }}>Список пустой...</h3>
    )
  }
  return (
    <div>
      <TransitionGroup>
        {
          persones.map((persone, i) =>
            <CSSTransition
              key={persone.id}
              timeout={500}
              classNames="persone"
            >
              <PersonesItem
                remove={remove}
                persone={persone}
                num={i + 1}
              />
            </CSSTransition>
          )
        }
      </TransitionGroup>

    </div>
  );
};
