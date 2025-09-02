import React from "react";

const content = ["Our Story", "Solution", "Contact", "Blog"];
const socialContent = [
  {
    icon: "/social/linkedin.png",
    name: "Linkedin",
    link: "#",
  },
  {
    icon: "/social/facebook.png",
    name: "Facebook",
    link: "#",
  },
  {
    icon: "/social/instagram.png",
    name: "Instagram",
    link: "#",
  },
  {
    icon: "/social/youtube.png",
    name: "YouTube",
    link: "#",
  },
];
export const SocialMedia = () => {
  return (
    <div className="w-full main-container flex !border-t !border-b !border-gray-500 !py-[46px] justify-between">
      <img src="/logo.png" className="w-[280px]" alt="" />
      <div className="flex gap-[43px] items-center">
        {content.map((item, index) => (
          <p className="!text-normal !text-[19px] !text-white" key={index}>
            {item}
          </p>
        ))}
      </div>
      <div className="flex gap-[32px]">
        {socialContent.map((item, index) => (
          <a key={index} href={item.link}>
            <img src={item.icon} alt={item.name} />
          </a>
        ))}
      </div>
    </div>
  );
};
