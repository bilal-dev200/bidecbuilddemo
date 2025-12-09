import React from "react";
// import SectionImage from "/mnt/data/c4fd0a5b-c59b-469c-988d-9546ac83463a.png"; // replace with your path or import
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getFieldValuesByNameWithPosition,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const AboutCaviar = ({ data }) => {
  const description =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "";

  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

  const image =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    "/bombaybanner.png";
  const BGCOLOR =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) || "";

  const textColorArray =
    getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.TEXT_COLOR) || [];
  const textColor = textColorArray?.[0]?.value || "#000";

  return (
    // <section className="flex flex-col h-[340px] md:flex-row items-center justify-between px-6 md:px-20 py12 bg-gray-50">
    <section
      className={`flex flex-col h-[340px] md:flex-row items-center justify-between px-6 md:px-20 py-12 ${BGCOLOR ? "" : "bg-gray-50"
        }`}
      style={{
        backgroundColor: BGCOLOR || undefined,
      }}
    >

      {/* Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-semibold mb-4" dangerouslySetInnerHTML={{ __html: heading }} />
        {/* About <span className="font-bold">Caviar</span> */}

        <p className="text-base"
          style={{ color: textColor }}
          dangerouslySetInnerHTML={{ __html: description }} />
        {/* Dr. Ambreen Roshan, founder of <span className="font-bold">Caviar</span>,
          is a qualified aesthetic doctor known for precision, empathy, and personalized care. 
          Using advanced technology and globally approved products, she ensures safe treatments 
          that enhance natural beauty with trusted results. */}
        {/* {description} */}
        {/* </p> */}
      </div>

      {/* Image Content */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={`${Image_URL}${image}`}
          alt="Caviar Technology"
          className="w-full max-w-lg "
        />
      </div>
    </section>
  );
};

export default AboutCaviar;
