"use client";

import React, { useState } from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam",
});

export const ContactUs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/inquiries`,
        values
      );
      if (res.data.success) {
        toast.success("Inquiry submitted successfully!");
        resetForm();
        setModalOpen(false);
      } else {
        toast.error("Failed to submit inquiry.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center !mt-[100px]">
      <p
        className={`${beVietnam.className} !font-normal !text-[19px] !text-gray-500 tracking-[4px] space-x-1`}
      >
        BUSINESS ISN'T COMPLICATED. LOG BANATE HAI.
      </p>
      <p
        className={`${beVietnam.className} !font-semibold !text-[47px] !text-white`}
      >
        We Just un-complicate it.
      </p>
      <div className="flex flex-col text-center !mt-4 !max-w-[774px]">
        <p
          className={`${beVietnam.className} !font-normal !text-[23.96px] !text-white`}
        >
          Aapke paas vision hai, hum handle karenge chaos. Let’s get to work
          together.
        </p>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className={`${beVietnam.className} !text-white !px-[71px] !py-[26px] !mt-10 !mb-8 !rounded-[4px] !font-normal`}
        style={{
          background: "linear-gradient(180deg, #2E6FB6 0%, #7BAEE0 100%)",
        }}
      >
        Contact Us
      </button>

      {modalOpen && (
        <div className="!fixed !inset-0 !flex !items-center !justify-center !bg-black/60 !z-50">
          <div className="!bg-white !rounded-2xl !shadow-2xl !w-[450px] !p-8 !relative !flex !flex-col !gap-6">
            <button
              onClick={() => setModalOpen(false)}
              className="!absolute !top-4 !right-4 !text-gray-400 hover:!text-gray-700 !text-xl !font-bold"
            >
              &times;
            </button>

            <h2
              className={`${beVietnam.className} !text-2xl !font-bold !text-center !text-gray-800`}
            >
              Contact Us
            </h2>
            <p
              className={`${beVietnam.className} !text-sm !text-gray-500 !text-center`}
            >
              Fill out the form below and we will get back to you shortly.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="!flex !flex-col !gap-4">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg !focus:!ring-2 !focus:!ring-indigo-400 !focus:!outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="!text-red-500 !text-sm !mt-1"
                  />

                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg !focus:!ring-2 !focus:!ring-indigo-400 !focus:!outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="!text-red-500 !text-sm !mt-1"
                  />

                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg !resize-none !focus:!ring-2 !focus:!ring-indigo-400 !focus:!outline-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="!text-red-500 !text-sm !mt-1"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${beVietnam.className} !mt-2 !px-6 !py-3 !bg-gradient-to-r !from-indigo-600 !to-indigo-400 !text-white !rounded-lg !font-medium hover:!brightness-110 !transition !duration-300`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};
