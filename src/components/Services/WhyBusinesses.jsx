
"use client";
import { Image_URL } from "@/config/constants";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition
} from "@/lib/utils/sectionDataHelpers";
import React, { useState, useMemo } from "react";
import AppButton from "../homeComp/AppButton";

export const WhyBusinesses = ({ data, color }) => {
  if (!data) return null;

  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) || "";

  const featureTitles = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureImages = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_IMAGE
  );
  const featureIcons = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_ICON_BLACK
  );
  const featurePain = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION1
  );
  const featureSolution = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION2
  );
const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  const tabs = useMemo(() => {
    return featureTitles.map((titleField, index) => ({
      id: `feature-${index}`,
      title: titleField?.value || "",
      image: featureImages[index]?.value || "",
      icon: featureIcons[index]?.value || "",
      pain: featurePain[index]?.value || "",
      solution: featureSolution[index]?.value || "",
    }));
  }, [featureTitles, featureImages, featureIcons, featurePain, featureSolution]);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <>
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-5xl font-ebrima"
            dangerouslySetInnerHTML={{ __html: heading }}
>
          {/* {heading.split("Dubai")[0]} */}
          {/* <span className={`text-[${color}] font-extrabold`}>Dubai</span> */}
        </h2>
        <p className="text-black font-bold font-poppins md:text-lg mt-2"     dangerouslySetInnerHTML={{ __html: subHeading }}>
          {/* {subHeading} */}
        </p>
      </div>

      <div className="hidden md:flex flex-row gap-8 items-start h-full">
        {/* Left Tabs */}
        {/* <div className="flex flex-col bg-gray-50 rounded-lg overflow-visible md:w-[150px] w-[100px] flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative cursor-pointer md:px-4 px-2 py-5 text-center rounded-lg md:text-sm text-xs transition 
                ${activeTab === tab.id
                  ? "bg-[#1A7D85] text-white font-semibold"
                  : "text-black hover:bg-gray-100"
                }`}
            >
              {tab.title}
              {activeTab === tab.id && (
                <span
                  className="absolute right-[-8px] top-1/2 -translate-y-1/2 
                    w-0 h-0 border-t-[8px] border-b-[8px] border-l-[8px] 
                    border-t-transparent border-b-transparent border-l-[#1A7D85]"
                ></span>
              )}
            </button>
          ))}
        </div> */}
<div
  className={`
    flex flex-col bg-gray-50 rounded-lg 
    h-[424px] md:w-[162px] w-[100px] flex-shrink-0
    overflow-y-auto overflow-x-hidden
    scrollbar-thin
  `}
  style={{ direction: "rtl" }}
>
  <div style={{ direction: "ltr" }}>
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`
          relative cursor-pointer md:px-4 px-2 py-5 text-center rounded-lg md:text-sm text-xs transition
          ${activeTab === tab.id
            ? "bg-[#1A7D85] text-white font-semibold"
            : "text-black hover:bg-gray-100"
          }
        `}
      >
        {tab.title}

        {activeTab === tab.id && (
          <span
            className="absolute right-[-8px] top-1/2 -translate-y-1/2 
              w-0 h-0 border-t-[8px] border-b-[8px] border-l-[8px] 
              border-t-transparent border-b-transparent border-l-[#1A7D85]"
          />
        )}
      </button>
    ))}
  </div>

  {/* Custom scrollbar */}
 
</div>







        {/* Middle Image */}
        <div className="hidden lg:flex justify-center xl:w-[500px] lg:w-[400px] lg:h-[26.3rem] h-full items-center flex-shrink-0 overflow-hidden">
          <img
            src={
              current?.image ? `${Image_URL}/${current.image}` : "/WhyBuisness.png"
            }
            alt={current?.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>


        {/* Right Content */}
        <div className="flex-1 min-h[350px] mt-6 transition-all duration-300">
          <h3 className="text-2xl font-semibold font-poppins mb-4">
            {current?.title}
          </h3>

          {/* Pain */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-black font-semibold font-poppins mb-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#A8F51A]/30 to-transparent flex items-center justify-center">
                <img
                  src="/pain.png"
                  alt="Pain Icon"
                  className="w-8 h-8 object-cover"
                />
              </div>
              Pain
            </div>
            <p className="text-[11px] sm:text-base md:text-[14px] xl:text-[17px] leading-relaxed">{current?.pain}</p>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 text-black font-semibold font-poppins mb-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#A8F51A]/30 to-transparent flex items-center justify-center">
                <img
                  src="/solution.png"
                  alt="Solution Icon"
                  className="w-8 h-8 object-cover"
                />
              </div>
              Solution
            </div>
            <p className="text-[11px] sm:text-base md:text-[14px] xl:text-[17px] leading-relaxed">{current?.solution}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden gap-6">
          <div className="flex overflow-x-auto gap-3 pb-2">
<div className="flex overflow-x-auto gap-2 pb-2">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`flex-shrink-0 relative w-40 px-3 py-3 text-[13px] font-medium text-center leading-tight transition-all
        ${activeTab === tab.id
          ? "bg-[#1A7D85] text-white rounded-md md:rounded-full before:absolute before:content-[''] before:-bottom-[5px] before:left-1/2 before:-translate-x-1/2 before:w-2.5 before:h-2.5 before:bg-[#1A7D85] before:rotate-45 before:block md:before:hidden shadow-sm"
          : "bg-[#F7F7F7] text-gray-700 rounded-md md:rounded-full shadow-sm"
        }`}
    >
      {tab.title}
    </button>
  ))}
</div>


</div>


        {/* Selected Tab Content */}
        <div className="flex flex-col gap-4">
          <img
            src={
              current?.image ? `${Image_URL}/${current.image}` : "/WhyBuisness.png"
            }
            alt={current?.title}
            className="w-full h-[220px] rounded-lg object-cover shadow"
          />
          <h3 className="text-xl  font-poppins">
            {current?.title}
          </h3>

          {/* Pain */}
          <div>
  <div className="flex items-center gap-2 text-black font-semibold font-poppins mb-2">
    {/* Wrapper for gradient background (mobile only) */}
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#A8F51A]/30 to-transparent block md:hidden"></div>
      <img
        src="/pain.png"
        alt="Pain Icon"
        className="w-7 h-7 relative z-10"
      />
    </div>

    Pain
  </div>

  <p className="text-[11px] leading-relaxed">{current?.pain}</p>
</div>


          {/* Solution */}
        <div>
  <div className="flex items-center gap-2 text-black font-semibold font-poppins mb-2">
    {/* Gradient background wrapper (mobile only) */}
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#A8F51A]/30 to-transparent block md:hidden"></div>
      <img
        src="/solution.png"
        alt="Solution Icon"
        className="w-7 h-7 relative z-10"
      />
    </div>

    Solution
  </div>

  <p className="text-[11px] leading-relaxed">{current?.solution}</p>
</div>

        </div>
      </div>
    </div>
     <AppButton
                            text={btn}
                            color={buttoncolor}
                            link={btnlink}
                        // onClick={() => console.log("Button clicked")} 
                        />
    </>
  );
};
