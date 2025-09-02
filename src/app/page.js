import React from "react";
import { HeroSection } from "@/modules/HeroSection/HeroSection";
import { Statistics } from "@/modules/Statistics/Statistics";
import { TimeLineSection } from "@/modules/TimeLineSection/TimeLineSection";
import { TestimonialSlider } from "@/modules/TestimonialSlider/TestimonialSlider";
import { BookConsultancy } from "@/modules/BookConsultancy/BookConsultancy";
import { HotServices } from "@/modules/HotServices/HotServices";
import { GrowthSection } from "@/modules/GrowthSection/GrowthSection";

const Hero = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <TimeLineSection />
      <GrowthSection />
      <HotServices />
      <TestimonialSlider />
      <BookConsultancy />
    </>
  );
};

export default Hero;
