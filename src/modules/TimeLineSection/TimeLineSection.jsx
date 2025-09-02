import React from "react";
import { WideCard } from "./components/WideCard";

const content = [
  {
    icon: "/services/electric.svg",
    title: "The Spark",
    subTitle: "Sab kuch ek dream se shuru hota hai.",
    description: "We help you shape your vision into bold, practical action.",
  },
  {
    icon: "/services/cable.svg",
    title: "The Structure",
    subTitle: "Legal, financial & regulatory setup sorted.",
    description: "Aapko build karte hain scale ke liye, struggle ke liye nahi.",
  },
  {
    icon: "/services/handle.svg",
    title: "The Lift",
    subTitle: "Pitch decks, fundraising, resources - all in place.",
    description: "We connect you to the right investors, at the right time.",
  },
  {
    icon: "/services/box.svg",
    title: "The Push",
    subTitle: "Go-to-market strategies + digital presence.",
    description:
      "Hum banate hain aapka brand jo market mein ghoome, chale, aur chale tez!",
  },
  {
    icon: "/services/clock.svg",
    title: "The Motion",
    subTitle: "Startup sirf launch nahi hota: accelerate hota hai.",
    description: "Aur hum ensure karte hai ki aapki momentum kabhi rukhe nahi.",
  },
];
export const TimeLineSection = () => {
  return (
    <div>
      <h2>From Spark to Motion - The Next-Gen Way:</h2>
      <div>
        {content.map((item, index) => (
          <WideCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
