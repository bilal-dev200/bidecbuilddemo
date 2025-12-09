"use client";

import { getFieldValue, getRobustFieldValuesByName, COMMON_FIELD_NAMES, highlightText, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import AppButton from "./AppButton";

export default function Process({ data }) {
  // ✅ Dynamic content
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  // ✅ Extract steps
  const featureTitles = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureDescriptions = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  const steps = featureTitles.map((titleObj, index) => ({
    id: index + 1,
    title: titleObj.value,
    desc: featureDescriptions[index]?.value || "",
  }));

  return (
    <>
    <section
      id="process-section"
      className="relative bg-[#1A7D85] text-white py-20"
    >
      <div className="max-w-[1200px]  mx-auto px-10">
        {/* Heading */}
        <div className="max-w-5xl mb-12">
          <h2 className="text-3xl md:text-6xl mb-4">
            {/* {heading || "The Bidec Custom Mobile App Development"} */}
            {highlightText(heading, 40, 57, "text-white")}
          </h2>
          {subHeading && (
            <h3 className="text-2xl font-semibold mb-4">{subHeading}</h3>
          )}
          {description && <p className="text-lg opacity-90">{description}</p>}
        </div>

        {/* ✅ Static timeline grid - 4 cards per row */}
        <div className="relative custom-scrollbar">
          <div className="overflow-x-auto mt-10 pb-6 custom-scrollbar">
            <div className="flex gap-8 min-w-max px-6">
              {steps.map((step) => (
                <div key={step.id} className="w-[320px] flex-shrink-0 text-left">
                  <div className="w-12 h-12 mb-3 rounded-full bg-[#318A91] text-white flex items-center justify-center font-bold text-xl">
                    {step.id}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm opacity-80">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>




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
}
