import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pick the weights you need
});

export const WideCard = ({ content }) => {
  return (
    <div className="flex flex-col w-full gap-[50px] ">
      {content.map((item, index) => {
        return (
          <div
            key={index}
            className="relative !shadow-md !border !rounded-[11px] !border-[#6B728080] !px-[15px] !py-[4px] flex items-center gap-[37px] justify-center wide-card-background"
          >
            <div className="relative flex-shrink-0">
              <div className="  rounded-lg flex items-center justify-center">
                <img src={item.icon} alt="icon" className="z-10" />
              </div>
            </div>

            <div className="flex flex-col gap-0.5 flex-1 !p-6 !rounded-lg ">
              <p
                className={`${beVietnam.className} text-[23px] text-[#264C92] font-medium`}
              >
                {item.title}
              </p>
              <p
                className={`${beVietnam.className} font-medium  text-[15px] text-black`}
              >
                {item.subTitle}
              </p>
              <p
                className={`${beVietnam.className} text-[17px] font-extralight text-black`}
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
