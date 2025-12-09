
  "use client";
  import Image from "next/image";
  import {
    COMMON_FIELD_NAMES,
    getFieldValuesByNameWithPosition,
    getValueByFieldNameAndPosition,
  } from "@/lib/utils/sectionDataHelpers";
  import { Image_URL } from "@/config/constants";

  export default function BombayBanner({ data }) {
    if (!data) return null;

    const sub_heading =
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
      "";

    const heading =
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

    const title =
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";

    const description =
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
      "";

    const featureTitles = getFieldValuesByNameWithPosition(
      data,
      COMMON_FIELD_NAMES.FEATURE_TITLE
    );

    const featureDescriptions = getFieldValuesByNameWithPosition(
      data,
      COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
    );

    const media =
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 0) || "";

    const mobileMedia =
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 1) || "";

    const image =
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
      "/bombaybanner.png";

    return (
      <section
        className="w-full bg-cover min-h-screen bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${Image_URL}/${media})` }}
      >
        <div className="relative max-w-[1200px] mxauto px-14 py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="text-white w-full lg:w-3/5">

          
            <span className="bg-white text-black px-4 py-1 rounded-r-full text-sm font-bold">
              {/* Bombay Choc N Nuts - E-Commerce Transformation */}{title}
            </span>
            <h4
              className="mt-6 text-3xl md:text-4xl leading-snug"
              dangerouslySetInnerHTML={{ __html: heading }}
            />

            {/* {description && (
              <p className="mt-6 text-sm leading-relaxed"
              
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            )} */}
            <div className="mt-6 text-sm space-y-2">
              <p className="font-semibold">Services Provided:</p>
              <p className="">
                {/* E-Commerce Development, UI/UX Design, Online Branding, Payment Gateway Integration */}
                {description}
              </p>
            </div>

            {/* FEATURES LIST */}
            <div className="mt-6 text-sm flex flex-col md:flex-row md:items-start gap-2">
              {featureTitles.map((feature, i) => (
                <div
                  key={i}
                  className="md:pr-6  mt-4 md:mt-0"
                >
                  <p className="font-semibold">{feature?.value}</p>
                  <p className="mt-3">
                    {featureDescriptions[i]?.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MEDIA (if required later) */}
        </div>
      </section>
    );
  }
