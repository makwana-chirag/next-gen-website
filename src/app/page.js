import React from "react";
import { HeroSection } from "@/modules/HeroSection/HeroSection";
import { Statistics } from "@/modules/Statistics/Statistics";
import { TimeLineSection } from "@/modules/TimeLineSection/TimeLineSection";
import { TestimonialSlider } from "@/modules/TestimonialSlider/TestimonialSlider";
import { BookConsultancy } from "@/modules/BookConsultancy/BookConsultancy";
import { HotServices } from "@/modules/HotServices/HotServices";

const Hero = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <TimeLineSection />
      <HotServices />
      <TestimonialSlider />
      <BookConsultancy />
    </>
  );
};

export default Hero;
