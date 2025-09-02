import React from "react";

export const HeroCard = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.icon} alt="" />
    </div>
  );
};
