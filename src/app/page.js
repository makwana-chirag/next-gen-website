import React from "react";
import { HomePage } from "@/modules/HomePage/HomePage";
import { Statistics } from "@/modules/Statistics/Statistics";
import { TimeLineSection } from "@/modules/TimeLineSection/TimeLineSection";
import { ExperienceSlider } from "@/components/ExperienceSlider";
import { BookConsultancy } from "@/modules/BookConsultancy/BookConsultancy";
import { HotServices } from "@/modules/HotServices/HotServices";

const Hero = () => {
  return (
    <>
      <HomePage />
      <Statistics />
      <TimeLineSection />
      <HotServices />
      <ExperienceSlider />
      <BookConsultancy />
    </>
  );
};

export default Hero;
