import React from "react";
import { Card } from "./components/Card";

const content = [
  {
    icon: "/services/money.svg",
    amount: "₹5 CR",
    description: "Collateral Free Loans",
  },
  {
    icon: "/services/shirt.svg",
    amount: "₹2 CR",
    description: "NAIFF Loans",
  },
  {
    icon: "/services/house.svg",
    amount: "₹50 L",
    description: "Seed Fund",
  },
  {
    icon: "/services/bank.svg",
    amount: "₹10 CR",
    description: "Grant Fund",
  },
  {
    icon: "/services/hand.svg",
    amount: "₹1 CR",
    description: "Startup Seed Support",
  },
  {
    icon: "/services/people.svg",
    amount: "₹50 L",
    description: "PMEGP",
  },
];

export const HotServices = () => {
  return (
    <div className="main-container flex flex-col gap-[80px] justify-center items-center">
      <p className="text-[40px] font-bold text-[rgba(5, 50, 95, 1)] font-semibold text-[46px]">
        Hot Services (Ft. Funding)
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-[69px]">
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
