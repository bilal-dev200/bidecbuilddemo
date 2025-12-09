import React from "react";
import Image from "next/image";
import { Image_URL } from "@/config/constants";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
} from "@/lib/utils/sectionDataHelpers";

const ChooseBidecSection = ({ data, color }) => {
  // ✅ Dynamic heading (HTML supported)
  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "Why Choose Bidec for Headless Shopify Development?";

  // ✅ Dynamic field data
  const featureTitles = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureDescs = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );
  const featureImages = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_IMAGE
  );
  const mainimage = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";

  // ✅ Bind data (like your services example)
  const points = featureTitles.map((title, index) => ({
    title: title?.value || "",
    description: featureDescs[index]?.value || "",
    icon: featureImages[index]?.value
      ? `${Image_URL}${featureImages[index]?.value}`
      : "/default-icon.png", // fallback
  }));

  return (
    <section className="max-w-[1200px] mx-auto py16 px6">
      {/* ✅ Heading (supports HTML) */}
      <div className="text-center mb-14 px-4">
        <h2
          className="text-3xl md:text-5xl font-semibold text-gray-900"
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap10">
        {/* ✅ Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          {mainimage ? (
            <img
              src={`${Image_URL}${mainimage}`}
              alt="Choose Bidec"
              className="rounded-2xl w-full max-w-md"
            />
          ) : (
            <img
              src="./AI.png"
              alt="Omnichannel Commerce"
              className="rounded-2xl h-40 w-full max-w-md"
            />
          )}
        </div>

        {/* ✅ Right Content */}
        <div className="w-full md:w-1/2 text-black space-y-4 mt-7">
          {points.map((item, index) => (
            <div
              key={index}
              className={`pb-6 ${
                index !== points.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <div className="flex items-center gap3">
                {/* Circle + Line */}
                <div className="relative flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                </div>
                <span className="w-10 border-t-2 border-teal-600"></span>

                {/* Title */}
                <p className="text-2xl font-semibold leading-snug max-w-[490px]">
                  {item.title}
                </p>
              </div>

              {/* Description */}
              <p className="text-base mt-3 ml-12">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseBidecSection;
