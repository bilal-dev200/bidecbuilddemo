
"use client";
import React from "react";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function ReadNumbersSection({ data, color }) {
  // ✅ Get dynamic heading
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";

  // ✅ Get data arrays from CMS
  const descriptions = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );
  const sources = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.BUTTON_TEXT
  );
  const positions = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.SUB_HEADING
  ); // optional

  // ✅ Fallback static data if no CMS content

  // ✅ Build dynamic array from CMS or fallback
  const contentData =
    descriptions.length > 0
      ? descriptions.map((descObj, i) => {
          // auto-assign position if not provided
          let position = positions[i]?.value?.toLowerCase();
          if (!position) {
            if (i < 2) position = "left";
            else if (i < 4) position = "right";
            else position = "bottom";
          }

          return {
            position,
            text: descObj?.value || "Description not available",
            source: sources[i]?.value || "Unknown Source",
          };
        })
      :"";

  // ✅ Separate content
  const leftContent = contentData.filter((item) => item.position === "left");
  const rightContent = contentData.filter((item) => item.position === "right");
  const bottomContent = contentData.find((item) => item.position === "bottom");

  return (
    <div className="bg-white rounded-md p6 max-w-[1200px] mx-auto mt10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-6xl font-semibold text-gray-800"dangerouslySetInnerHTML={{ __html: heading }}>
         
        </h2>
        {/* <p className="text-5xl text-gray-600 mt-1">(quick source notes)</p> */} 

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* ✅ Left Column */}
        <div className="space-y-24 text-sM">
          {leftContent.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex items-center mt-1">
                <span className="w-2 h-2 bg-[#1A7D85] rounded-full"></span>
                <span className="w-8 h-[2px] bg-[#1A7D85]"></span>
              </div>
              <div>
                <p>{item.text}</p>
                <p className="mt-2 font-semibold text-black">
                  Source:{" "}
                  <span className="font-normal underline text-[#008DCE]">
                    {item.source}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Center Image */}
        <div className="flex justify-center">
          <img
            src={image ? `${Image_URL}${image}` : "/readnumber.png"}
            alt="Desk with computer showing analytics"
            className="rounded-md  w-full"
          />
        </div>

        {/* ✅ Right Column */}
        <div className="space-y-24 text-sm">
          {rightContent.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex items-center mt-1">
                <span className="w-2 h-2 bg-[#1A7D85] rounded-full"></span>
                <span className="w-8 h-[2px] bg-[#1A7D85]"></span>
              </div>
              <div>
                <p>{item.text}</p>
                <p className="mt-2 font-semibold text-black">
                  Source:{" "}
                  <span className="font-normal underline text-[#008DCE]">
                    {item.source}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Bottom Content */}
      {bottomContent && (
        <div className="mt-16 flex justify-center">
          <div className="flex items-start gap-3 text-sm  max-w-xl">
            <div className="flex items-center mt-1">
              <span className="w-2 h-2 bg-[#1A7D85] rounded-full"></span>
              <span className="w-8 h-[2px] bg-[#1A7D85]"></span>
            </div>
            <div>
              <p>{bottomContent.text}</p>
              <p className="mt-2 font-semibold text-black">
                Source:{" "}
                <span className="font-normal underline text-[#008DCE]">
                  {bottomContent.source}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
