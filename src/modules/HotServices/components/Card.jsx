import React from "react";

export const Card = ({ item }) => {
  return (
    <div>
      <img src={item.icon} />
      <h2>{item.amount}</h2>
      <p>{item.description}</p>
      <button>
        Avail Now
        <span></span>
      </button>
    </div>
  );
};
