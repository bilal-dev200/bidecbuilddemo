

"use client";

import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getFieldValuesByNameWithPosition,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function ToolsTechnologies({ data, color }) {
  // Dynamic section heading and description
  const sectionHeading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  const sectionDescription =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || "";

  // Dynamic button
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) || "";
  const buttonColor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) || "";
  const btnLink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) || "";

  // Dynamic features
  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureImages = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_IMAGE
  );

  // Combine titles and images safely
  const features = featureTitles.map((title, index) => ({
    name: title.value,
    img: featureImages[index]?.value || "/placeholder.png", // fallback image
  }));

  return (
    <section className="w-full py14 ">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl  text-center mb-4 " dangerouslySetInnerHTML={{ __html: sectionHeading }} />

        <p className="text-sm mt-3">{sectionDescription}</p>
      </div>

      {/* Features Grid */}
      
       <div className="w-fit mx-auto pb-10 rounded-xl h-[150px] px-6 py-6"
               style={{ backgroundColor: color || "#F97316" }}>
        <div className="grid grid-cols-3 md:flex md:gap-6 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl w-36 h-44 flex flex-col items-center justify-center p-3"
            >
              {/* FIXED IMAGE SIZE */}
              <img
                src={`${Image_URL}/${feature.img}`}
                // alt={tool.name}
                className="w-full h-full object-contain mb-2"
              />

              <p className="text-sm font-medium text-gray-800 text-center">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Button */}
      {btn && (
        <div className="text-center mt-6">
          <a
            href={btnLink || "#"}
            className={`px-6 py-2 rounded-lg font-medium text-white`}
            style={{ backgroundColor: buttonColor || "#F97316" }}
          >
            {btn}
          </a>
        </div>
      )}
    </section>
  );
}
