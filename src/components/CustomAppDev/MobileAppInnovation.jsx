"use client";
import React from "react";
import {
  getFieldValue,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition,
  COMMON_FIELD_NAMES,
  highlightText,
} from "@/lib/utils/sectionDataHelpers";
import AppButton from "../homeComp/AppButton";

const MobileAppInnovation = ({ data }) => {
  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
    "UAE’s Market Revolution Driven by Mobile App Innovations";

  const description =
    getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "";

  const featureTitles =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];

  const featureDescriptions =
    getRobustFieldValuesByName(
      data,
      COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
    ) || [];
const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
     const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  const stats = featureTitles.map((title, index) => ({
    value: title.value,
    text: featureDescriptions[index]?.value || "",
  }));

  return (
    <>
    <section className="relative w-full md:px-0 px-4">
      <img
        className="hidden md:block absolute left-0 -bottom-60 z-20 w-60"
        src="/layer7.png"
        alt=""
      />
      <section className="relative mx-auto max-w-[1200px] bg-white px-2 sm:px-4 lg:px-20 overflow-visible">
        {/* ✅ Background graphic — visible on tablet & above */}
        <div
          className="hidden md:block absolute top-0 right-[-30px] h-full w-[300px] md:w-[350px] lg:w-[380px] bg-[url('/innovation.png')] bg-no-repeat bg-contain bg-right opacity-80 pointer-events-none"
        ></div>

        {/* ✅ Heading */}
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          {heading && (
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-none"  dangerouslySetInnerHTML={{ __html: heading }}>
              {/* {highlightText(heading, 33, 56, "text-[#1A7D85]")} */}
            </h2>
          )}

          {/* ✅ Description (less space below heading) */}
          <p className="mt-2 sm:mt-3 md:mt-4 text-gray-600 max-w-[800px] mx-auto text-xs sm:text-sm md:text-base lg:text-[13px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* ✅ Stats Grid */}
        <div
          className="mt-20 grid grid-cols-3 px-4 md:pl-24 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-12 lg:gap-x-[5rem] gap-y-8 md:gap-y-10 max-w-[1200px] mx-auto relative z-10"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col  items-left justify-start sm:items-start text-left sm:text-left"
            >
              <div className="h15 relative">
                {/* ✅ Line visible on tablet (md) & above */}
              <div className="flex px-4 items-center absolute -left-10 md:-left-20 top-3">
                  <span className="w-2 h-2 rounded-full bg-[#1A7D85]"></span>
                  <span className="w-3 md:w-10 h-[2px] bg-[#1A7D85]"></span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-[#1A7D85] ebrima-bold text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold min-h-16 w-auto mdw-[0px]">
                    {item.value}
                  </span>
                </div>
              </div>

              <p className="mt-1 sm:mt-2 md:mt-2 text-gray-600 text-[11px] sm:text-sm md:text-[12px] leading-relaxed  text-left  sm:text-left">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
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

export default MobileAppInnovation;
