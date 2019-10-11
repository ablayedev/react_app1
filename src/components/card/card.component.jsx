import React from "react";
import "./card.component.css";
export const Card = props => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt={props.monster.name}
      />
      <p className="center">{props.monster.name}</p>
      <p className="center">{props.monster.email}</p>
    </div>
  );
};
