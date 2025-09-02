import React from "react";

export const StatsCards = ({ item }) => {
  return (
    <div className="max-h-[255px] max-w-[312px] w-full bg-blue-gradient rounded-lg p-6">
      <img src={item.icon} /> <h2>{item.title}</h2>
      <p>{item.subTitle}</p>
    </div>
  );
};
