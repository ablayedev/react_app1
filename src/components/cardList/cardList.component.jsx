import React from "react";
import "./cardList.component.css";
import { Card } from "../card/card.component";
export const CardList = props => {
  return (
    <div className="grid">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
