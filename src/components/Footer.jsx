import React from "react";
import { ContactUs } from "../modules/ContactUs/ContactUs";
import { SocialMedia } from "../modules/SocialMedia/SocialMedia";
import { SiteMap } from "../modules/SiteMap/SiteMap";
export const Footer = () => {
  return (
    <div className="w-full  flex flex-col gap-[50px] !bg-[#05325F]">
      <ContactUs />
      <SocialMedia />
      <SiteMap />
    </div>
  );
};
