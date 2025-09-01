import React from "react";

export const WideCard = ({ item }) => {
  return (
    <div className="w-full max-w-[1370px] mx-auto">
      <img src={item.icon} alt="" />
      <div className="flex gap-5">
        <div>
          <h2>{item.year}</h2>
          <p>{item.description}</p>
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};
