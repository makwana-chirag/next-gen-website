import React from "react";

export const StatsCards = ({ item }) => {
  return (
    <div>
      <img src={item.icon} alt="" /> <h2>{item.title}</h2>{" "}
      <p>{item.subTitle}</p>
    </div>
  );
};
