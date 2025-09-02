import React from "react";

const content = [
  "Founder-First Approach",
  "Speed + Simplicity",
  "Expert-Led Solutions",
];
export const BottomSection = () => {
  return (
    <div className="bg-bottom-gradient flex justify-center items-center gap-[59.61px] py-5">
      {content.map((item, index) => (
        <p className="text-white font-normal text-[21.3px]" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};
