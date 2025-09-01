import React from "react";
import { HeroCard } from "./components/HeroCard";

const content = [
  {
    title: "Bold Vision",
    icon: "public/services/eye.png",
  },
  {
    title: "True Growth",
    icon: "public/services/scale.png",
  },
  {
    title: "Limitless Scale",
    icon: "public/services/bar.png",
  },
];
export const HomePage = () => {
  return (
    <div className="max-w-[1365px] mx-auto">
      <div>
        <p>Your Growth Partner</p>
        <button>Co-founder</button>
      </div>
      <h1>Your Vision, Our Execution.</h1>
      <h1>Zero Obstacles.</h1>
      <p>
        Business is not a journey, it’s an expedition. Every obstacle ek pahad
        hai, every win ek nayi duniya.
      </p>
      <p>
        We’re not here to advise; hum hain aapke saath legends & legacies banane
        ke liye.
      </p>
      {content.map((item, index) => (
        <HeroCard key={index} item={item} />
      ))}
    </div>
  );
};
