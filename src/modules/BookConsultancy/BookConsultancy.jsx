import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam",
});

export const BookConsultancy = () => {
  return (
    <div className="relative w-full">
      <div
        className="absolute top-0 left-0 w-full h-[400px]"
        style={{
          background: "linear-gradient(180deg, #E8F4FF 0%, #E8F4FF 100%)",
          clipPath: "polygon(0 0, 0 60%, 50% 100%, 100% 60%, 100% 0)",
          zIndex: -10,
        }}
      />

      <div className="w-full main-container !mb-10 !mt-50">
        <div
          className="flex !justify-center !items-center gap-[100px]  !rounded-[12px] !h-[258px]"
          style={{
            background: "linear-gradient(180deg, #2E6FB6 0%, #7BAEE0 100%)",
          }}
        >
          <p
            className={`${beVietnam.className} !font-normal !text-[41px] !text-white `}
          >
            Ready for Transformation
          </p>
          <div className="!bg-white !rounded-[4px] flex justify-center !py-2.5 !pr-2.5 !pl-8 ">
            <input
              type="email"
              className="w-full bg-transparent   !text-[#2B3D51] !outline-none focus-within:!outline-none "
              placeholder="Enter your email"
            />
            <button
              className={`${beVietnam.className} !w-[245px] !bg-[#2B3D51] !text-white !px-0 !py-4 !rounded-lg !font-normal !text-[15px]`}
              style={{
                background: "linear-gradient(180deg, #2E6FB6 0%, #7BAEE0 100%)",
              }}
            >
              Book a Consultancy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
