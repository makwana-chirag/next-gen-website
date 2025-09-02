import React from "react";

export const BookConsultancy = () => {
  return (
    <div>
      <h2>Ready for Transformation</h2>
      <div className="bg-white py-2.5 pr-2.5 pl-8">
        <input
          type="email"
          className="w-full bg-transparent text-[#2B3D51]"
          placeholder="Enter your email"
        />
        <button className="bg-[#2B3D51] text-white px-4 py-2 rounded-lg">
          Book a Consultancy
        </button>
      </div>
    </div>
  );
};
