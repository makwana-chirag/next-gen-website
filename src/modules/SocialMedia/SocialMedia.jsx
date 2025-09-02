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
    <div>
      <img src="/logo.png" alt="" />
      <div>
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        {socialContent.map((item, index) => (
          <a key={index} href={item.link}>
            <img src={item.icon} alt={item.name} />
          </a>
        ))}
      </div>
    </div>
  );
};
