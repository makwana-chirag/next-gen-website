"use client";
import React, { useState } from "react";

export const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Replace with your own image URLs in /public folder or external links
  const images = [
    "/frame.png",
    "/frame.png",
    "/frame.png",
    "/frame.png",
    "/frame.png",
    "/frame.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // ✅ Show 5 visible cards at a time
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentSlide + i) % images.length;
      slides.push(images[index]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="w-full  main-container justify-center flex flex-col p-8 bg-white relative">
      {/* Title */}
      <p className="!text-[45px] !font-semibold !text-center !text-[#05325F] !mb-[60px]">
        Real experiences, real voices
      </p>

      {/* Slider Container */}
      <div className="relative justify-center items-center flex flex-col overflow-hidden">
        <div className="flex gap-1  transition-transform duration-300 ease-in-out">
          {visibleSlides.map((image, index) => {
            const isCenter = index === 2;

            return (
              <div
                key={`${image}-${currentSlide}-${index}`}
                className={`flex-shrink-0 w-[274px] shadow-none !bg-transparent transition-all duration-300 ${
                  isCenter ? "scale-105 z-10" : "scale-95 opacity-80"
                }`}
              >
                <div
                  className="rounded-lg overflow-hidden shadow-none h-[487px] w-[274px]  bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4 !mt-7">
        <button
          onClick={prevSlide}
          className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-600 text-xl leading-none">‹</span>
        </button>

        <div className="flex space-x-3 gap-1 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`!w-2 !h-2 !rounded-full !border  transition-colors ${
                index === currentSlide
                  ? "!bg-[#2E5AA8] !border-[#2E5AA8]"
                  : "!bg-gray-300 !border-gray-400 hover:!bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-8 h-8 bg-white rounded-full  flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-600 text-xl leading-none">›</span>
        </button>
      </div>
    </div>
  );
};
