import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import { HeroCard } from "./components/HeroCard";
import { Navbar } from "@/components/Navbar";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const content = [
  { title: "Bold Vision", icon: "/hero/eye.png" },
  { title: "True Growth", icon: "/hero/scale.png" },
  { title: "Limitless Scale", icon: "/hero/bar.png" },
];

export const HeroSection = () => {
  const totalStripes = 16;

  const stripes = Array.from({ length: totalStripes }, (_, i) => {
    const half = totalStripes / 2;
    let ratio;

    if (i < half) {
      ratio = i / (half - 1);
    } else {
      ratio = (totalStripes - 1 - i) / (half - 1);
    }

    const color1Percent = 10 + ratio * 60;
    const color2Percent = 90 - ratio * 60;

    return (
      <div
        key={i}
        className="flex-1 h-full"
        style={{
          background: `linear-gradient(to bottom, #2E6FB6 ${color1Percent}%, #7BAEE0 ${color2Percent}%)`,
        }}
      />
    );
  });

  return (
    <div className="relative w-full h-[700px]">
      <div className="absolute top-0 left-0 w-full h-full flex">{stripes}</div>

      <div className="relative z-10 main-container mx-auto  flex flex-col gap-4 h-full justify-center !items-start text-center">
        <Navbar />
        <div className="flex flex-col gap-2 !items-start">
          <div className="flex items-center gap-4">
            <p className="text-white">Your Growth Partner</p>
            <button className="text-white border border-white px-4 py-2 rounded">
              Co-founder
            </button>
          </div>

          <p
            className={`${beVietnam.className} text-[46px] font-semibold text-white`}
          >
            Your Vision, Our Execution.
          </p>
          <p
            className={`${beVietnam.className} text-[46px] font-semibold text-white`}
          >
            Zero Obstacles.
          </p>

          <p
            className={`${beVietnam.className} text-[24px] font-normal text-white`}
          >
            Business is not a journey, it’s an expedition. Every obstacle ek
            pahad hai, every win ek nayi duniya.
          </p>
          <p
            className={`${beVietnam.className} text-[24px] font-normal text-white`}
          >
            We’re not here to advise; hum hain aapke saath legends & legacies
            banane ke liye.
          </p>
        </div>
        {/* Hero Cards */}
        <div className="flex gap-[50px] mt-10">
          {content.map((item, index) => (
            <HeroCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
