
"use client";
import Image from "next/image";
import React from "react";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const QuickTakeaways = ({ data, color }) => {
  // ✅ Dynamic heading
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  const des = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "";
  const btn = getFieldValue(data, COMMON_FIELD_NAMES.BUTTON) || "";
  const dec1 = getFieldValue(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION1) || "";

  // ✅ Dynamic fields from CMS
  const featureDescriptions =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION) || [];
  const featureSources =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.BUTTON_TEXT) || [];
  const featureLinks =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.BUTTON_LINK) || [];

  const takeaways =
    featureDescriptions.length > 0
      ? featureDescriptions.map((desc, i) => ({
          text: desc?.value || "No description available",
          source: featureSources[i]?.value || "Unknown Source",
          link: featureLinks[i]?.value || "#",
        }))
      : [];

  // ✅ Dynamic image (if provided in CMS)
  const image =
    getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "/quick.png";

  return (

      <div
      className="max-w-[1200px] mx-auto rounded-[20px] px-10 md:px-16 py-12 text-white"
      style={{
        backgroundImage: "url('/blueback.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Heading */}
      <h2 className="text-6xl font-semibold text-center mt-10"
                dangerouslySetInnerHTML={{ __html: heading }}
>
        {/* {heading} */}
      </h2>
        <p className="text-center text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
        {des}
      </p>

      {/* Content Row */}
    <div className="flex flex-col md:flex-row items-stretch md:items-start gap-10 py-8">
  {/* Left Section */}
  <div className="flex-1 space-y-8 text-left flex flex-col justify-center">
    {takeaways.map((item, index) => (
      <div key={index} className="pb-6">
        <div className="flex items-start">
          {/* Bullet + line */}
          <div className="flex items-center mt-2 mr-3">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-8 h-[2px] bg-white"></span>
          </div>

          {/* Text */}
          <div>
            <p className="text-base leading-relaxed">{item.text}</p>
            <p className="text-sm mt-2">
              <span className="font-semibold">Sources:</span>{" "}
              <a
                href={item.link}
                className="text-blue-200 underline hover:text-blue-300"
              >
                {item.source}
              </a>
            </p>
          </div>
        </div>

        {index !== takeaways.length - 1 && (
          <hr className="border-t border-white/40 w-full mt-6" />
        )}
      </div>
    ))}
  </div>

  {/* Right Image (matches height) */}
  <div className="flex-1 flex justify-center items-center">
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src={image ? `${Image_URL}${image}` : "/readnumber.png"}
        alt="Office visualization"
        width={500}
        height={500}
        className="rounded-xl object-cover h-full max-h-[800px]"
      />
    </div>
  </div>
 
</div>
 <p className="text-left text-lg mt8 max-w-5xl leading-relaxed">
        {dec1}
      </p>
      <div className="flex justify-center gap-6 mt-8">
       
       {btn && (
  <div className="flex justify-center gap-6 mt-8">
    <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition">
      {btn}
    </button>
  </div>
)}
      </div>
    </div>
  );
};

export default QuickTakeaways;
