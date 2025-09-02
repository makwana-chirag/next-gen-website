import React from "react";
import { ContactUs } from "../modules/ContactUs/ContactUs";
import { SocialMedia } from "../modules/SocialMedia/SocialMedia";
import { SiteMap } from "../modules/SiteMap/SiteMap";
export const Footer = () => {
  return (
    <div>
      <ContactUs />
      <SocialMedia />
      <SiteMap />
    </div>
  );
};
