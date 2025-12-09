
"use client";
import React from "react";
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function EcommerceSolution({ data }) {
  // ✅ Extract heading, description, and image
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "";
  const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";

  // ✅ Extract feature titles and icons dynamically
  const featureTitles =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];

  const featureIcons =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE) || [];

  // ✅ Combine into one array (like your `costs` example)
  const features =
    featureTitles.length > 0
      ? featureTitles.map((title, i) => ({
          text: title?.value || "No title available",
          icon:
            featureIcons[i]?.value &&
            featureIcons[i]?.value.trim() !== ""
              ? `${Image_URL}${featureIcons[i].value}`
              : "/placeholder.png",
        }))
      : [];

  return (
    <div className="max-w-6xl mx-auto px-4 py16 md:flex md:items-center md:gap16">
      {/* ✅ Image Section */}
      <div className="md:w-1/2 flex justify-center">
        {image && (
          <img
            src={`${Image_URL}${image}`}
            alt="Ecommerce Solution"
            className="rounded-xl object-cover h-[500px]"
          />
        )}
      </div>

      {/* ✅ Content Section */}
      <div className="mt-8 md:mt-0 md:w-1/2">
        {heading && (
          <h2
            className="text-3xl md:text-5xl font-bold"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        {description && (
          <p className="mt-4 text-gray-600">{description}</p>
        )}

        {/* ✅ Features List */}
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              {feature.icon && (
                <img
                  src={feature.icon}
                  alt={feature.text}
                  width={32}
                  height={44}                />
              )}
              <span className="text-gray-700">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
