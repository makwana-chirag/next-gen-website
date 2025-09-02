import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import { GrowthCard } from "./components/GrowthCard";
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const GrowthSection = () => {
  return (
    <div className="!mt-20">
      <p
        className={`${beVietnam.className} text-[46px] font-semibold text-center text-[#05325F] !mb-80`}
      >
        Achieving Business Growth{" "}
      </p>
      <div className="relative ">
        <img
          src="/growth.png"
          alt="growth"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start gap-[50px] p-10">
          <GrowthCard
            item={{
              icon: "/growth/1.png",
              title: "We Listen First",
              description:
                "Great story shuru hoti hai ek step se — samajhna aur sunna. We align with your vision, struggles, and dreams.",
            }}
            className="translate-y-45"
          />
          <GrowthCard
            item={{
              icon: "/growth/2.png",
              title: "We Build the Base",
              description:
                "Registration, compliance, licenses — sab kuch sorted. Foundation banate hain jo aapko scale kare, not struggle.",
            }}
            className="translate-y-10"
          />
          <GrowthCard
            item={{
              icon: "/growth/3.png",
              title: "We Fuel the Fire",
              description:
                "Funding, mentorship, resources — sab under one roof. Aapki ambition ko growth mein badalna is our mission.",
            }}
            className="-translate-y-28"
          />
          <GrowthCard
            item={{
              icon: "/growth/4.png",
              title: "We Amplify the Impact",
              description:
                "Marketing aur growth strategies jo sirf dikhaye nahi — market mein raj karein. Aapka brand banega recognizable aur unstoppable.",
            }}
            className="-translate-y-64"
          />
        </div>
      </div>
    </div>
  );
};
