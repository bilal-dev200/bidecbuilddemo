"use client";
import React from "react";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition,
  highlightText,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
 
import AppButton from "./AppButton";

export default function Appsec({ data }) {
  if (!data) return null;
  console.log("dataasasas", data);

  // ✅ Extract dynamic fields
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
  const midTitle = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const sub_title = getFieldValue(data, COMMON_FIELD_NAMES.SLIDE_TITLE);
  const desc = getFieldValue(data, COMMON_FIELD_NAMES.SLIDE_DESCRIPTION);


 const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 1) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  // ✅ Extract all feature titles & descriptions
  const featureTitles = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureDescriptions = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );
  // ✅ Extract all feature icons (uploaded files)
  const featureIcons = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_ICON_WHITE
  );

  const features = featureTitles.map((titleObj, index) => ({
    title: titleObj?.value || "",
    description: featureDescriptions[index]?.value || "",
    icon: featureIcons[index]?.value || null,
  }));

  return (
    <>
    <div className="px-6 max-w-[1200px] mx-auto md bg-white text-gray-800 20">
      {/* Header */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-6xl text-gray-800">
          {highlightText(heading, 15, 30, "text-[#1A7D85]")}
        </h1>

        <p className="mt-4 max-w-5xl mx-auto  text-sm md:text-base">{description}</p>
      </div>

      {midTitle && (
        <p className="mt-10 text-center font-semibold text-[27px]">{midTitle}</p>
      )}

      <div
        className=" mt-14 grid mx-auto ml-10 md:grid-cols-3 gap-10  relative 
             rounded-3xl lg:p-10 
             bg-cover bg-center bg-no-repeat 
             md:bg-[url('/lines.png')]"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl  transition duration-300"
          >
            <div className="mb-4 h-16 w-16  flex items-center justify-center rounded-full bg-gradient-to-b from-[#1A7D85] via-[#F8F8F8] to-transparent [#F8F8F8] overflow-hidden">
              {feature.icon ? (
                <img
                  src={`${Image_URL}${feature.icon}`}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              ) : (
                <span className="text-2xl">📱</span> // fallback icon
              )}
            </div>
            <h3 className="ebrima-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-[12px] ">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10  max-w-4xl mx-auto">
        <p className="ebrima-bold text-[16px]">
          {sub_title}
        </p>
        <p className="text-sm mt-2">
          {desc}
        </p>
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
}

// ✅ Optional: icon picker function
function getIconByIndex(index) {
  const icons = ["📱", "⚙️", "🎨", "🔌", "📲", "🌐"];
  return icons[index % icons.length];
}
