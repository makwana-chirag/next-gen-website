import React from "react";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

export const StatsCards = ({ item }) => {
  return (
    <div className="h-[255px] w-[312px] flex flex-col gap-2 border border-[#6B728080] rounded-[12px] bg-blue-gradient !py-[28px] !px-[38px]">
      <div className="flex justify-end">
        <img src={item.icon} />{" "}
      </div>
      <div className="flex flex-col gap-[0px]">
        <p
          className={`${bebasNeue.className} text-[72px] font-semibold text-[#264C92] leading-[100%]`}
        >
          {item.title}
        </p>
        <p
          className={`${bebasNeue.className} text-[41px] uppercase font-semibold leading-[100%] text-[#264C92]`}
        >
          {item.subTitle}
        </p>
      </div>
    </div>
  );
};
