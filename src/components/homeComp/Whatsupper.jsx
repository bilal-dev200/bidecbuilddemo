
"use client";
import React from "react";
import { Image_URL } from "@/config/constants";
import {
  getFieldValue,
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition
} from "@/lib/utils/sectionDataHelpers";
import Image from "next/image";
import AppButton from "./AppButton";

const Whatsupper = ({ data }) => {
  // ✅ Extract dynamic values from backend
  console.log(data, "Whatsupper")
  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
    "";
 const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
     const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  const subHeading =
    getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) ||
    "";

  const description =
    getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) ||
    "";

  const rightimagepath = getFieldValue(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);
  const rightimage = rightimagepath
    ? `${Image_URL}${rightimagepath}`
    : "";

  const bgImagePath = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE);
    const mobileview = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE,1);
const mobiletopimage = getFieldValue(data,COMMON_FIELD_NAMES.NEWS_IMAGE)
  const bgImageUrl = bgImagePath
    ? `${Image_URL}${bgImagePath}`
    : "";
     
    // const mobileBgUrl = mobileview ? `${Image_URL}${mobileview}` : "";

  // const words = heading.split(" ");
  // const lastTwoWords = words.slice(-2).join(" ");
  // const firstPart = words.slice(0, -2).join(" ");


  return (
<div className="">
  {/* 🌐 Desktop / Web Version */}
 <div className="hidden  md:block px-6 md:px-10 md:pt24 py12 rounded-[24px]">
  <div
    className="
      relative flex flex-col md:flex-row 
      max-w-[1200px] mx-auto w-full 
      min-h-[400px] md:min-h-[450px] lg:min-h-[500px] 
      rounded-[20px] bg-cover bg-center bg-no-repeat 
      items-center justify-between px-6 md:px-10
    "
    style={{ backgroundImage: `url(${bgImageUrl})` }}
  >
    {/* 🔹 Left Text Section */}
    <div className="relative z-10 text-white w-full md:w-[65%] text-center md:text-left mb-6 md:mb-0">
      <h1 className="text-2xl md:text-4xl lg:text-6xl leading-tight mb-4"   dangerouslySetInnerHTML={{ __html: heading }}
>
      </h1>

      <h3 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 leading-snug"
              dangerouslySetInnerHTML={{ __html: subHeading }}>
      </h3>

      <p className="text-sm md:text-[15px] leading-relaxed px-2 md:px-0">
        {description}
      </p>
    </div>

    {/* 🔹 Right Image Section */}
    {rightimage && (
      <div className="relative z-10 w-full md:w-[35%] flex justify-center md:justify-end">
        <img
          src={rightimage}
          alt="Right side visual"
          className="w-[80%] md:w-[100%] h-auto max-h-[400px] object-contain rounded-2xl"
        />
      </div>
    )}
  </div>
</div>


  {/* 📱 Mobile Version (Visible Only on Mobile) */}
 <div
  style={{
    backgroundImage: `url(${Image_URL}${mobileview})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="block md:hidden rounded-[10px] text-white p-4 mx-4"
>

    {/* 🔹 Image Section */}
    <div className="flex justify-center mb-4">
      <Image
              src={`${Image_URL}${mobiletopimage}`}
        alt="AI & Big Data"
        width={300}
        height={220}
        className="rounded-lg"
      />
    </div>

    {/* 🔹 Text Section */}
    <div className="text-left">
      <h1 className="text-2xl md:text-4xl lg:text-6xl leading14 mb-4"  >
          {/* {firstPart}{" "}
          <span className="font-bold ebrima-bold">{lastTwoWords}</span> */}
        </h1>

       <h3 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 leading-snug"
        dangerouslySetInnerHTML={{ __html: subHeading }}>
        </h3>

       <p className="text-[11px] md:text-[15px]  leading-relaxed  md:px-0">
          {description}
        </p>
    </div>
  </div>
  
<AppButton
              text={btn}
              color={buttoncolor}
              link={btnlink}
            // onClick={() => console.log("Button clicked")} 
            />
</div>

  );
  
};

export default Whatsupper;
