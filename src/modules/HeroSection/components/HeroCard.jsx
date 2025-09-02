import React from "react";

export const HeroCard = ({ item }) => {
  return (
    <div
      className="flex justify-between  !w-[423px] !h-[110px] !rounded-[12px] !p-[20px]"
      style={{
        background: "rgba(38, 76, 146, 0.4)",
        backdropFilter: "blur(4.23px)",
      }}
    >
      <p className="!text-[36px] !text-center !pt-2 !font-medium !text-white">
        {item.title}
      </p>
      <div className="!h-[103px] !w-[103px]">
        <img src={item.icon} alt="" />
      </div>
    </div>
  );
};
