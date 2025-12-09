import React from "react";
import Image from "next/image";
import {
    COMMON_FIELD_NAMES,
    getFieldValuesByNameWithPosition,
    getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
const CareBanner = ({data}) => {
    const sub_heading =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
        "";

    const heading =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

    const title =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";
 const title1 =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 1) || "";
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
        <section className="  min-h-screen bg-center relative   w-full h-[90vh] overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={`${Image_URL}${media}`}
                    alt="background"
                    className="w-full h-full object-cover"
                />
                {/* Golden overlay */}
                {/* <div className="absolute inset-0 bg-[#c6a25a]/60"></div> */}
            </div>

            {/* Content */}
            <div className="relative z-2 flex flex-col -mt-32 items-center justify-center h-full text-center px-4">

                {/* Tag */}
                <span className="px-5 py2 bg-white text-black rounded-full font-semibold text-sm shadow">
                    {/* Luxury Aesthetic Care */}
                    {title}
                </span>

                {/* Main Heading */}
                <h1 className="text-white font-bold text-4xl md:text-5xl mt-5" dangerouslySetInnerHTML={{ __html: heading }}
                />
                {/* From Aesthetic Vision to Digital Excellence */}
                {/* </h1> */}

                {/* Subheading */}
                <p className="text-white text-lg mt-3 opacity-90">
                    {/* Caviar Scales with Modern Web Solutions */}
                    {title1}
                </p>
            </div>

                {/* CENTER GROUPED IMAGES */}
                {/* <div className="relative w-full max-w-4xl mx-auto mt-10">

          <img
            src="/group-left.png" // left image
            className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-56"
            alt=""
          />

          <img
            src="/group-center.png" // center laptop image
            className="mx-auto w-64 md:w-72 relative z-10"
            alt=""
          />

          <img
            src="/group-right.png" // right image
            className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-56"
            alt=""
          />
        </div> */}

           
{/*  */}
<div
  className="
    absolute bottom-2 left-1/2 -translate-x-1/2
    w-full max-w-[1300px]
    flex items-center 
    text-white 
    px-6 py-[1px]
  "
>

  <div className="flex items-center gap-1 w-fit">
    <div>
      <p className="font-bold">Region</p>
      <p className="opacity-90">Pakistan</p>
    </div>
<div className="h-[56px] w-[2px] bg-white/60 ml-2"></div>
  </div>

  <div className="flex items-center gap- w-[160px] ml-4">
    <div>
      <p className="font-bold">Industry</p>
      <p className="opacity-90">Health & Beauty / Aesthetic Care</p>
    </div>
<div className="h-[56px] w-[2px] bg-white/60 ml-2"></div>
  </div>

  <div className="flex items-center gap-1 w-fit ml-4">
    <div>
      <p className="font-bold">Business Type</p>
      <p className="opacity-90">Aesthetic & Wellness Clinic</p>
    </div>
  </div>

  {/* LAST — STAYS ON RIGHT */}
  <div className="ml-auto text-right">
    <p className="font-bold">Services Provided</p>
    <p className="opacity-90">Website Development, Branding</p>
  </div>
</div>


        </section>
    );
};

export default CareBanner;
