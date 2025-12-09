"use client";
import React from "react";
import Link from "next/link";
import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
  getFieldValuesByNameWithPosition,
  scrollToSection,
} from "@/lib/utils/sectionDataHelpers";
import { usePathname } from "next/navigation"; // ✅ import this hook
import AppButton from "./AppButton";

const Achievements = ({ data, color }) => {
  if (!data) return null;
  console.log("achivements", data);
  const pathname = usePathname(); // ✅ get current route path

  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "Pioneering Trust and Innovation";

  const subHeading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
    "Bidec’s Achievements";

  const description0 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "Our commitment to excellence and innovation ensures that every partnership drives measurable growth and long-term impact.";

  const description1 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 1) ||
    "";

  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureDescriptions = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  const stats = featureTitles.map((titleObj, i) => ({
    number: titleObj?.value || `Stat ${i + 1}`,
    text: featureDescriptions[i]?.value || "Achievement description goes here",
  }));
  console.log("asadatastats", stats);

  // const buttonText =
  //   getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
  //   "Get in Touch";

  // const buttonLink =
  //   getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
  //   "#";
const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
     const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  return (
    <>
      <section className="lg relative max-w-[1200px] mt24 px-3 p2 bg-white mx-auto container ">
        <img
          src="/blue5.png"
          alt="corner decoration"
          className="hidden md:block   absolute -top-40 right-0  rotate
               w-[330px] h-[350px] object-contain 
               pointer-events-none - select-none"
        />
        <div className="relative text-center  md:max-w-4xl mx-auto">

          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight"
            dangerouslySetInnerHTML={{
              __html: (() => {
                if (!subHeading) return "";
                const words = subHeading.trim().split(" ");
                const lastWord = words.pop(); // last word nikaal lo
                const firstPart = words.join(" ");
                return `${firstPart} <span class="ebrima-bold text-[#1A7D85]">${lastWord}</span>`;
              })(),
            }}
          ></h2>


          <h2
            className="text-xs sm:text-sm md:text-base lg:text-[23px] text-gray-800 mt-4"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>

          {/* Description 0 */}
          <p className="leading-relaxed text-[11px] sm:text-sm md:text-base lg:text-lg mt-3">
            {description0}
          </p>

          {/* Description 1 */}
          <p className="font-extrabold leading-relaxed text-[11px] md:px-0 px-6 sm:text-sm md:text-sm lg:text-base mt-3 md:w-[550px] text-center mx-auto">
            {description1}
          </p>

        </div>



        <div className="grid grid-cols-2 mt-5 sm:grid-cols-4 md:grid-cols-4 gap-4 sm:gap-6 items-end">
          {stats.map((item, i) => {
            const mobileHeights = [
              "h-[9rem]", // Box 1 large
              "h-[6rem]", // Box 2 small
              "h-[6rem]", // Box 3 small
              "h-[9rem]", // Box 4 large
            ];

            const desktopHeights = [
              "lg:min-h-[14rem]",
              "lg:min-h-[11rem]",
              "lg:min-h-[11rem]",
              "lg:min-h-[14rem]",
            ];
            const tablet = [
              "md:min-h-[12rem]",
              "md:min-h-[10rem]",
              "md:min-h-[10rem]",
              "md:min-h-[12rem]",
            ];

            // ✅ Only on mobile, make the 3rd card start from top
            const mobileAlignment = i === 2 ? "self-start sm:self-auto" : "";

            return (
              <div
                key={i}
                className={`relative p-3 sm:p-5 md:p-6 flex flex-col justify-start rounded-md md:rounded-[10px] overflow-hidden cursor-pointer group
        ${mobileHeights[i]}  ${tablet[i]} ${desktopHeights[i]} ${mobileAlignment}`}
              >
                {/* Default background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url('/blue2.png')` }}
                ></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#F3F3F3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 text-left transition-all duration-300">
                  <h4 className="text-2xl md:text-3xl lg:text-5xl mb-2 md:mb-2 text-white group-hover:text-[#1A7D85] transition-colors duration-300">
                    {item.number}
                  </h4>
                  <p
                    className="mt-1 w-[130px]  md:w-auto sm:mt-2 text-[11px] md:text-[14px] lg:text-lg relative pl-2 md:pl-4  before:absolute before:left-0 text-white before:text-white group-hover:text-black group-hover:before:text-teal-600 transition-colors duration-300"
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
         <AppButton 
        text={btn} 
        color={buttoncolor} 
        link={btnlink} 
        // onClick={() => console.log("Button clicked")} 
      />






    </>
  );
};

export default Achievements;
