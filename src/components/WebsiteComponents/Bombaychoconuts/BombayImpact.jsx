
"use client";

import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getFieldValuesByNameWithPosition,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import AppButton from "@/components/homeComp/AppButton";

export default function BombayImpact({ data }) {
  if (!data) return null;

  const sectionHeading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  const sectionDescription =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "";

  // DYNAMIC FIELDS
  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );

  const featureDescriptions = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  const featureImages = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_IMAGE
  );

  const featureImpact = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.CONTENT
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

  return (
    <section className="py20 max-w-[1200px] mx-auto px-6">

      {/* SECTION HEADING */}
      <h2 className="text-3xl md:text-5xl  text-center mb-4 " dangerouslySetInnerHTML={{ __html: sectionHeading }} />
      {/* SECTION DESCRIPTION */}
      <p className="text-center  max-w-4xl mx-auto mb-16">
        {sectionDescription}
      </p>

      {/* DYNAMIC REPEATING FEATURE BLOCKS */}
      <div className="flex flex-col gap-3 max-w-[1100px]">
        {featureTitles.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${index % 2 === 1 ? "" : "md:flex-row-reverse"
              }`}
          >
            {/* IMAGE */}
            <div
              className={`w-full flex ${index % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
            >
              <Image
                src={`${Image_URL}/${featureImages[index]?.value}`}
                width={500}
                height={500}
                alt={item.value}
                className=""
              />
            </div>

            {/* CONTENT */}
            <div
              className={`space-y-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"
                }`}
            >
              <h3 className="text-2xl font-semibold">{item?.value}</h3>

              <p className="text-gray-600 leading-relaxed">
                {featureDescriptions[index]?.value}
              </p>

              <p
                className=""
                dangerouslySetInnerHTML={{ __html: featureImpact[index]?.value }}
              />
            </div>
          </div>
        ))}
      </div>
   <div className="text-center font-semibold">
  <p>
    Need an end-to-end strategy from design to payments?
  </p>

  <AppButton
    text={btn}
    color={buttoncolor}
    link={btnlink}
  />
</div>
    </section>
  );
}
