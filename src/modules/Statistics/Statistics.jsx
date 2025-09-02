import React from "react";
import { StatsCards } from "./components/StatsCards";

const content = [
  {
    icon: "/stats/who.png",
    title: "150",
    subTitle: "Gamechangers",
  },
  {
    icon: "/stats/people.png",
    title: "1200",
    subTitle: "Success Stories",
  },
  {
    icon: "/stats/boxs.png",
    title: "1500",
    subTitle: "Breakthroughs",
  },
  {
    icon: "/stats/check.png",
    title: "80",
    subTitle: "Solutions",
  },
];
export const Statistics = () => {
  return (
    <div className="bg-white">
      {content.map((item, index) => (
        <StatsCards key={index} item={item} />
      ))}
    </div>
  );
};
