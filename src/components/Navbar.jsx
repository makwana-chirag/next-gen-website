import React from "react";

const content = ["Home", "Our Story", "Solutions", "Contact", "More"];
export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" />
        </div>

        <div className="flex items-center px-[13px] py-3.5 border border-green-50 rounded-[12px] gap-[29px]">
          {content.map((item, index) => (
            <a
              href="#"
              className="hover:text-gray-200 font-normal text-[19px] text-white "
              key={index}
            >
              {item}
            </a>
          ))}
        </div>
        <button className="bg-[#2c56a6] hover:bg-[#24478a] px-4 py-2 rounded-lg font-semibold">
          Let’s Transform
        </button>
      </nav>
      {/*} */}
    </div>
  );
};
