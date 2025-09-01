import React from "react";
import { Card } from "./components/Card";

const content = [
  {
    icon: "public/services/money.svg",
    amount: "₹5 CR",
    description: "Collateral Free Loans",
  },
  {
    icon: "public/services/shirt.svg",
    amount: "₹2 CR",
    description: "NAIFF Loans",
  },
  {
    icon: "public/services/house.svg",
    amount: "₹50 L",
    description: "Seed Fund",
  },
  {
    icon: "public/services/bank.svg",
    amount: "₹10 CR",
    description: "Grant Fund",
  },
  {
    icon: "public/services/hand.svg",
    amount: "₹1 CR",
    description: "Startup Seed Support",
  },
  {
    icon: "public/services/poeple.svg",
    amount: "₹50 L",
    description: "PMEGP",
  },
];

export const HeroSection = () => {
  return (
    <div className="max-w-[1365px] mx-auto">
      <h2 className="text-[40px] font-bold">Hot Services (Ft. Funding)</h2>
      <div className="flex gap-5">
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
