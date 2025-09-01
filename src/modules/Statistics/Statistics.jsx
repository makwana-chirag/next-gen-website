import React from "react";
import { StatsCards } from "./components/StatsCards";

const content = [
  {
    icon: "public/stats/who.png",
    title: "150",
    subTitle: "Gamechangers",
  },
  {
    icon: "public/stats/poeple.png",
    title: "1200",
    subTitle: "Success Stories",
  },
  {
    icon: "public/stats/boxs.png",
    title: "1500",
    subTitle: "Breakthroughs",
  },
  {
    icon: "public/stats/check.png",
    title: "80",
    subTitle: "Solutions",
  },
];
export const Statistics = () => {
  return (
    <div>
      {content.map((item, index) => (
        <StatsCards key={index} item={item} />
      ))}
    </div>
  );
};
