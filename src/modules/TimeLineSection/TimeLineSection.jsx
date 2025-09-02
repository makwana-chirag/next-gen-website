import React from "react";
import { WideCard } from "./components/WideCard";
import { Be_Vietnam_Pro } from "next/font/google";
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const TimeLineSection = () => {
  const content = [
    {
      icon: "/timeline/electric.png",
      title: "The Spark",
      subTitle: "Sab kuch ek dream se shuru hota hai.",
      description: "We help you shape your vision into bold, practical action.",
      highlighted: false,
    },
    {
      icon: "/timeline/cable.png",
      title: "The Structure",
      subTitle: "Legal, financial & regulatory setup sorted.",
      description:
        "Aapko build karte hain scale ke liye, struggle ke liye nahi.",
      highlighted: false,
    },
    {
      icon: "/timeline/handle.png",
      title: "The Lift",
      subTitle: "Pitch decks, fundraising, resources - all in place.",
      description: "We connect you to the right investors, at the right time.",
      highlighted: true,
    },
    {
      icon: "/timeline/box.png",
      title: "The Push",
      subTitle: "Go-to-market strategies + digital presence.",
      description:
        "Hum banate hain aapka brand jo market mein ghoome, chale, aur chale tez!",
      highlighted: false,
    },
    {
      icon: "/timeline/clock.png",
      title: "The Motion",
      subTitle: "Startup sirf launch nahi hota: accelerate hota hai.",
      description:
        "Aur hum ensure karte hai ki aapki momentum kabhi rukhe nahi.",
      highlighted: false,
    },
  ];

  return (
    <div className=" w-full bg-[#E8F4FF] ">
      <div className="main-container">
        <p
          className={`${beVietnam.className} text-[46px] mb-11 font-semibold text-center text-[#05325F]`}
        >
          From Spark to Motion – The Next-Gen Way:
        </p>

        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-[#2E5AA8]"></div>

          <WideCard content={content} />

          <div className="flex justify-center mt-8">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-blue-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
