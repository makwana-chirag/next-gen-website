import React from "react";
import { FaEye, FaInfinity } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2d6db7] via-[#397bc7] to-[#5b9de4] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">NEXT-GEN</span>
          <span className="text-xs">Business Consultancy Pvt. Ltd.</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            Our Story
          </a>
          <a href="#" className="hover:text-gray-200">
            Solution
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
          <a href="#" className="hover:text-gray-200">
            More
          </a>
          <button className="bg-[#2c56a6] hover:bg-[#24478a] px-4 py-2 rounded-lg font-semibold">
            Let’s Transform
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center mt-20 px-4">
        {/* Tagline */}
        <div className="flex items-center gap-2 bg-[#295d9b] px-4 py-2 rounded-lg text-sm font-medium mb-6">
          Your Growth Partner
          <span className="bg-[#4478c4] text-xs px-2 py-0.5 rounded-md">
            Co-founder
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Your Vision, Our Execution. <br /> Zero Obstacles.
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-base md:text-lg text-gray-200 mb-12">
          Business is not a journey, it’s an expedition. Every obstacle ek pahad
          hai, every win ek nayi duniya. <br />
          We’re not here to advise; hum hain aapke saath Legends & Legacies
          banane ke liye.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="flex flex-col items-center bg-[#2c56a6] rounded-2xl py-6 shadow-lg">
            <FaEye className="text-4xl mb-3" />
            <p className="font-semibold text-lg">Bold Vision</p>
          </div>
          <div className="flex flex-col items-center bg-[#2c56a6] rounded-2xl py-6 shadow-lg">
            <BsGraphUp className="text-4xl mb-3" />
            <p className="font-semibold text-lg">True Growth</p>
          </div>
          <div className="flex flex-col items-center bg-[#2c56a6] rounded-2xl py-6 shadow-lg">
            <FaInfinity className="text-4xl mb-3" />
            <p className="font-semibold text-lg">Limitless Scale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
