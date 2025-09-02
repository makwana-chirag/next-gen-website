import React from "react";
import { Bebas_Neue, Be_Vietnam_Pro, Bayon } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // has full range
  variable: "--font-be-vietnam",
});

const bayon = Bayon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bayon",
});

export const Card = ({ item }) => {
  return (
    <div className="w-[408px] h-[370px] service-background !shadow-xl !border !border-gray-300 !rounded-[12px] flex flex-col items-center p-6 !px-[20px] text-center">
      <div className="relative bottom-13 bg-transparent rounded-full flex items-center justify-center ">
        <img src={item.icon} alt="icon" />
      </div>
      <div className="relative !bottom-15 flex flex-col gap-2 items-start">
        <p
          className={`${bayon.className} h-[56px] text-[#264C92] text-[56px] font-normal`}
        >
          UP TO
        </p>
        <p
          className={`${bebasNeue.className} h-[170px] flex items-center  !text-[152px] font-bold  
        bg-[linear-gradient(170.84deg,#2E6FB6_6.94%,rgba(123,174,224,0.42)_95.19%)] 
        bg-clip-text text-transparent`}
        >
          {item.amount}
        </p>
      </div>
      <div className="relative bottom-22 flex flex-col gap-2 items-center">
        <p
          className={`${beVietnam.className} !font-normal !text-[24px] !text-[#46484F] mt-2`}
        >
          {item.description}
        </p>

        <button
          className={`${beVietnam.className} w-[210px] h-[51px] !rounded-[5px] !bg-[#3A80C1] !text-white !font-normal !text-[30px] !mb-[25px]`}
        >
          Avail now →
        </button>
      </div>
    </div>
  );
};
