import React from "react";

const content = ["Home", "Our Story", "Solutions", "Contact", "More  ↓"];
export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-between items-center !py-4 !mb-50">
        <div className="flex items-center gap-2">
          <img src="/logo.png" />
        </div>
        <div className="flex gap-5">
          <div className="flex items-center max-h-[50px] !bg-[#264C9280] !border !rounded-[10px] !border-gray-500 !py-[10px] !px-[12px] !text-white !font-medium !text-[22px] gap-[29px]">
            {content.map((item, index) => (
              <a
                href="#"
                className="hover:text-gray-200 font-normal !text-[19px] !text-white "
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
          <button className="!bg-[#264C9280] flex flex-col max-h-[50px] !text-center !justify-center !items-center  !border !rounded-[10px] !border-gray-500 !py-[10px] !px-[12px] !text-white !font-medium !text-[22px]">
            Let’s Transform
          </button>
        </div>
      </nav>
    </div>
  );
};
