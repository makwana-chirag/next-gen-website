import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // has full range
  variable: "--font-be-vietnam",
});

export const SiteMap = () => {
  return (
    <div className="w-full main-container flex flex-col !gap-[19px] !mb-14 ">
      <div className="flex justify-between items-center">
        <p
          className={`${beVietnam.className} !text-white !font-normal !text-[18px]`}
        >
          © 2025 By Next-Gen Business Consultancy PVT. LTD
        </p>
        <div className="flex gap-[10px]">
          <p
            className={`${beVietnam.className} !text-white !font-normal !text-[18px]`}
          >
            Privacy Policy
          </p>
          <p
            className={`${beVietnam.className} !text-white !font-normal !text-[18px]`}
          >
            Terms & Conditions
          </p>
          <p
            className={`${beVietnam.className} !text-white !font-normal !text-[18px]`}
          >
            Sitemap
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[9px]">
        <p
          className={`${beVietnam.className} !text-white !font-normal !text-[10px]`}
        >
          Important Notice: All payments for our services must be made
          exclusively to Next-Gen Business Consultancy Pvt. Ltd. through a
          Current Account via NEFT, IMPS, RTGS, or approved digital payment
          platforms (Cashfree, Razorpay, Aggrepay). We do not accept payments
          through personal accounts or under any other name.
        </p>
        <p
          className={`${beVietnam.className} !text-white !font-normal !text-[10px]`}
        >
          Disclaimer: Next-Gen Business Consultancy Pvt. Ltd. is a private
          consultancy firm specializing in start-up advisory services across
          India. We provide professional guidance tailored to the needs of
          emerging enterprises. Please note, we operate independently and are
          not affiliated with or endorsed by any government, non-governmental
          agency, institution, organization, or department.
        </p>
      </div>
    </div>
  );
};
