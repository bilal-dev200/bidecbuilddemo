
import React from "react";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  getFieldValuesByNameWithPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const MigrateSection = ({ data }) => {
  // ⭐ Heading & Description
  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  const description =
    getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "";

  // ⭐ Feature Fields (Dynamic)
  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );

  const featureDescriptions = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  // ⭐ Combine into features[] (LIKE YOUR EcommerceSolution)
  const features =
    featureTitles.length > 0
      ? featureTitles.map((title, i) => ({
          title: title?.value || "No Title",
          text: featureDescriptions[i]?.value || "No Description",
        }))
      : [];

  // ⭐ Split into left & right automatically
  const half = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, half);
  const rightFeatures = features.slice(half);

  return (
    <section className="bg-white max-w-[1200px] py16 mx-auto px6 md:px16 text-gray-800 relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2"  dangerouslySetInnerHTML={{ __html: heading }}>
        </h2>
        

        {description && (
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{description}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 max-w-6xl mx-auto relative">
        
        <div className="relative pl-8">
          {leftFeatures.map((item, index) => (
            <div key={index} className="relative mb-10">
              <div className="absolute left-[-1.25rem] top-2 flex flex-col items-center">
                <div className="w-3 h-3 bg-[#95BF47] rounded-full z-10"></div>

                {index < leftFeatures.length - 1 && (
                  <div className="w-px h-[126px] border-l-2 border-dashed border-black mt-1"></div>
                )}
              </div>

              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative pl-8">
          {rightFeatures.map((item, index) => (
            <div key={index} className="relative mb-10">
              {/* Dot + Line */}
              <div className="absolute left-[-1.25rem] top-2 flex flex-col items-center">
                <div className="w-3 h-3 bg-[#95BF47] rounded-full z-10"></div>

                {index < rightFeatures.length - 1 && (
                  <div className="w-px h-[126px] border-l-2 border-dashed border-black mt-1"></div>
                )}
              </div>

              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MigrateSection;
