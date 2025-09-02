import React from "react";

export const Card = ({ item }) => {
  return (
    <div className="w-[408px] h-[380px] service-background shadow-md border border-gray-300 rounded-[12px] flex flex-col items-center p-6 text-center">
      <div className="relative bottom-10 w-[86px] h-[86px] bg-transparent rounded-full flex items-center justify-center ">
        <img src={item.icon} alt="icon" className="w-[86px] h-[86px]" />
      </div>
      <div className="flex flex-col items-start">
        <p className="text-[#264C92] text-[56px] mt-4 font-normal">UP TO</p>
        <p
          className="text-[120px] font-bold leading-[206px] tracking-[-6.59px] 
        bg-[linear-gradient(170.84deg,#2E6FB6_6.94%,rgba(123,174,224,0.42)_95.19%)] 
        bg-clip-text text-transparent"
        >
          {item.amount}
        </p>
      </div>

      <p className="text-gray-500 text-sm mt-2">{item.description}</p>

      <button className="w-[210px] h-[51px] rounded-[5px] bg-[#3A80C1] text-white   font-normal text-[30px]">
        Avail now →
      </button>
    </div>
  );
};
