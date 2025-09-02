import React from "react";
import { HeroSection } from "@/modules/HeroSection/HeroSection";
import { Statistics } from "@/modules/Statistics/Statistics";
import { TimeLineSection } from "@/modules/TimeLineSection/TimeLineSection";
import { ExperienceSlider } from "@/modules/ExperienceSlider/ExperienceSlider";
import { BookConsultancy } from "@/modules/BookConsultancy/BookConsultancy";
import { HotServices } from "@/modules/HotServices/HotServices";

const Hero = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <TimeLineSection />
      <HotServices />
      <ExperienceSlider />
      <BookConsultancy />
    </>
  );
};

export default Hero;
