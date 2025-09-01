import React from "react";

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
export const Card = () => {
  return (
    <div>
      {content.map((item, index) => (
        <div key={index}>
          <img src={item.icon} />
          <h2>{item.amount}</h2>
          <p>{item.description}</p>
          <button>
            Avail Now
            <span></span>
          </button>
        </div>
      ))}
    </div>
  );
};
