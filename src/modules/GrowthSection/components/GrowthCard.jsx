import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const GrowthCard = ({ item, className }) => {
  return (
    <div
      className={`${className} flex flex-col !gap-[10px] max-w-[300px] justify-self-start !items-start`}
    >
      <img src={item.icon} alt="growth" />
      <p
        className={`${beVietnam.className} !font-bold !text-[26px] !text-[#05325F]`}
      >
        {item.title}
      </p>
      <p
        className={`${beVietnam.className} !font-normal !text-[17px] !text-[#46484F]`}
      >
        {item.description}
      </p>
    </div>
  );
};
