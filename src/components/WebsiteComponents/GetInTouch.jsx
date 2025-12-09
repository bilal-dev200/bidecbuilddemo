
"use client";
import React, { useState } from "react";
import AppButton from "../homeComp/AppButton";
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
  getRobustFieldValuesByName
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import { form } from "@/lib/api/watchlist";
import { toast } from "react-toastify";


export default function GetInTouch({ data }) {
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) || "";
  const buttonColor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) || "";
  const btnLink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) || "";
  const sectionHeading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
  const sectionDescription =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || "";
  const image =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || "";

  const dropdownfields = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  // ⭐ FORM STATE
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    number: "",
    project_description: "",
    services_of_interest: "",
  });

  // ⭐ ERRORS STATE
  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  //   // Remove error on typing
  //   setErrors({ ...errors, [e.target.name]: "" });
  // };
//   const handleChange = (e) => {
//   let { name, value } = e.target;

//   // Convert service to array
//   if (name === "services_of_interest") {
//     setFormData({ ...formData, [name]: [value] });
//   } else {
//     setFormData({ ...formData, [name]: value });
//   }

//   setErrors({ ...errors, [name]: "" });
// };

const handleChange = (e) => {
  let { name, value } = e.target;

  // Convert service to array
  if (name === "services_of_interest") {
    setFormData({ ...formData, [name]: [value] });
  } else {
    setFormData({ ...formData, [name]: value });
  }

  setErrors({ ...errors, [name]: "" });
};

 const validateForm = () => {
  let newErrors = {};

  if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
  if (!formData.company_name.trim()) newErrors.company_name = "Company name is required";
  if (!formData.email.trim()) newErrors.email = "Email is required";
  if (!formData.number.trim()) newErrors.number = "Phone number is required";
if (!formData.services_of_interest.length)
  newErrors.services_of_interest = "Service is required";
  if (!formData.project_description.trim()) newErrors.project_description = "Description required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  // ⭐ SUBMIT HANDLER
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   console.log("Form Submitted: ", formData);
  // };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await form.contact(formData);

    toast.success("Your message has been submitted successfully!");

    setFormData({
      full_name: "",
      company_name: "",
      email: "",
      number: "",
      project_description: "",
      services_of_interest: "",
    });

  } catch (error) {
    console.error("API Error:", error);
    toast.error("Something went wrong. Please try again.");
  }
};


  return (
    <section id="get-in-touch" className="w-full  py16">
      <div className="mx-auto text-center">
        <h2
          className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug"
          dangerouslySetInnerHTML={{ __html: sectionHeading }}
        />
        <p className="mt-4 max-w-5xl px-2  lg:text-lg text-[11px] text-center mx-auto ">
          {sectionDescription}
        </p>
      </div>

      <div className="max-w-7xl mt-10 mx-auto px-4 flex flex-col lg:flex-row gap-10">
        {/* Left Side Image */}
        {/* <div className="w-full lg:w-1/2">
          <img
src={image ? `${Image_URL}/${image}` : "/map.png"} // ❗ default image if none            alt="image"
            className="w-full rounded-xl"
          />
        </div> */}
{/* Left Side Image */}
<div className="w-full lg:w-1/2">
  <img
    src={image ? `${Image_URL}/${image}` : "/map.png"} // ❗ default image if none
    alt="image"
    className="w-full rounded-xl"
  />
</div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-4 md:p-8  rounded-2xl" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <input
                name="full_name"
                type="text"
                placeholder="Full Name"
  value={formData.full_name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#F4F4F4] rounded-lg focus:ring-2 
                  ${errors.fullName ? "ring-red-500" : "focus:ring-green-500"}`}
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <input
  name="company_name"
                type="text"
                placeholder="Company Name"
  value={formData.company_name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#F4F4F4] rounded-lg 
                ${errors.company ? "ring-red-500" : "focus:ring-green-500"}`}
              />
              {errors.company && (
                <p className="text-red-600 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#F4F4F4] rounded-lg 
                ${errors.email ? "ring-red-500" : "focus:ring-green-500"}`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone + Service */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  name="number"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.number}

                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#F4F4F4] rounded-lg
                  ${errors.phone ? "ring-red-500" : "focus:ring-green-500"}`}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* <div className="w-1/2">
                <input
                  name="service"
                  type="text"
                  placeholder="Service of Interest"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#F4F4F4] rounded-lg
                  ${errors.service ? "ring-red-500" : "focus:ring-green-500"}`}
                />
                {errors.service && (
                  <p className="text-red-600 text-sm mt-1">{errors.service}</p>
                )}
              </div> */}
              {/* <div className="w-1/2">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#F4F4F4] rounded-lg
      ${errors.service ? "ring-1 ring-red-500" : "focus:ring-1 focus:ring-green-500"}`
                  }
                >
                  <option value="">Select a service</option>
                  <option value="web_development">Web Development</option>
                  <option value="mobile_app">Mobile App Development</option>
                  <option value="seo">SEO Services</option>
                  <option value="digital_marketing">Digital Marketing</option>
                  {/* Add more options as needed */}
                {/* </select>

                {errors.service && (
                  <p className="text-red-600 text-sm mt-1">{errors.service}</p>
                )}
              </div> */} 
              {/* Service Dropdown */}
<div className="w-1/2">
  {/* <select
  name="services_of_interest"
  value={formData.services_of_interest}
    onChange={handleChange}
    className={`w-full px-4 py-3 bg-[#F4F4F4] rounded-lg
      ${errors.service ? "ring-1 ring-red-500" : "focus:ring-1 focus:ring-green-500"}`}
  >
    <option value="">Select a service</option>
    {dropdownfields.map((field, index) => (
      <option key={index} value={field.value}>
        {field.value}
      </option>
    ))}
  </select> */}
<select
  name="services_of_interest"
  value={formData.services_of_interest[0] || ""}
  onChange={handleChange}
  className="w-full px-4 py-3 bg-[#F4F4F4] rounded-lg"
>
  <option value="">Select a service</option>
  {dropdownfields.map((field, index) => (
    <option key={index} value={field.value}>
      {field.value}
    </option>
  ))}
</select>

{errors.services_of_interest && (
  <p className="text-red-600 text-sm mt-1">
    {errors.services_of_interest}
  </p>
)}

  {errors.service && (
    <p className="text-red-600 text-sm mt-1">{errors.service}</p>
  )}
</div>


            </div>

            {/* Description */}
            <div>
              <textarea
  name="project_description"
                placeholder="Project Description"
                rows="4"
  value={formData.project_description}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#F4F4F4] rounded-lg 
                ${errors.description ? "ring-red-500" : "focus:ring-green-500"}`}
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-1">{errors.description}</p>
              )}
            </div>

            {/* BUTTON */}
            <AppButton
              text={btn}
              color={buttonColor}
              link="" // ⭐ Force no redirect
              onClick={handleSubmit}
              center={false}
              marginTop={false}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
