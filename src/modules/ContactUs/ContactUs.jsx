import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam",
});
export const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center !mt-[100px]">
      <p
        className={`${beVietnam.className} !font-normal !text-[19px] !text-gray-500 tracking-[4px] space-x-1`}
      >
        BUSINESS ISN'T COMPLICATED. LOG BANATE HAI.
      </p>
      <p
        className={`${beVietnam.className} !font-semibold !text-[47px] !text-white`}
      >
        We Just un-complicate it.
      </p>
      <div className="flex flex-col text-center !mt-4 !max-w-[774px]">
        <p
          className={`${beVietnam.className} !font-normal !text-[23.96px] !text-white`}
        >
          Aapke paas vision hai, hum handle karenge chaos. Let’s get to work
          together.
        </p>
      </div>
      <button
        className={`${beVietnam.className} !text-white !px-[71px] !py-[26px] !mt-10 !mb-8 !rounded-[4px] !font-normal`}
        style={{
          background: "linear-gradient(180deg, #2E6FB6 0%, #7BAEE0 100%)",
        }}
      >
        Contact Us
      </button>
    </div>
  );
};
