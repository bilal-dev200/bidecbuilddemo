
"use client";
import Image from "next/image";
import { Image_URL } from "@/config/constants";
import {
  getFieldValue,
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import AppButton from "../homeComp/AppButton";

export default function AiPoweredDevelopment({ data, color }) {
  console.log("aipowered", data);
const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
     const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  // ✅ Extract backend content
  const title = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const tag = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const subtitle = getValueByFieldNameAndPosition(
    data,
    COMMON_FIELD_NAMES.SUB_HEADING,
    1
  );
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
  // const imagePath = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE,0) || "";
  // const imageUrl = imagePath ? `${Image_URL}${imagePath}` : "/aimock.png";
const desktopImagePath =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || "";
  const mobileImagePath =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 1) || "";

  const desktopImageUrl = desktopImagePath
    ? `${Image_URL}${desktopImagePath}`
    : "/aimock.png";

  const mobileImageUrl = mobileImagePath
    ? `${Image_URL}${mobileImagePath}`
    : desktopImageUrl; // fallback to desktop image

  // ✅ Highlight last word in title
  const titleWords = title?.split(" ");
  const lastWord = titleWords?.pop();
  const restTitle = titleWords?.join(" ");

  return (
    <>
    <section className="py12 px-4 sm:px-8 md:px-20 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ✅ Left (Desktop): Image | ✅ Mobile: Neeche ayega */}
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src={desktopImageUrl}
              alt={title}
              width={400}
              height={200}
              className="hidden sm:block rounded-2xl object-contain h-[500px] sm:object-cover w-[700px]"
            />
          </div>
          <Image
              src={mobileImageUrl}
              alt={title}
              width={400}
              height={200}
              className="block sm:hidden rounded-2xl object-cover w-full h-[400px]"
            />

          {/* ✅ Right (Desktop): Text | ✅ Mobile: Upar ayega */}
          {/* <div className="text-center md:text-left order-1 md:order-2">
            {tag && (
              <span className="inline-block bg-[#1A7D85] text-white font-medium text-sm sm:text-base md:text-md px-4 w-[220px] sm:px-4 py-1 rounded-r-full rounded-l-none mb-4">
                {tag}
              </span>
            )} */}
            <div className="text-center md:text-left order-1 md:order-2">
  {tag && (
    <span
      className="
        inline-block 
        bg-[#1A7D85] 
        text-white 
        font-medium 
        text-sm 
        sm:text-base 
        md:text-md 
        px-4 
        w-[220px] 
        sm:px-4 
        py-1 
        mb-4 
        rounded-full       /* 📱 Mobile: fully rounded */
        md:rounded-r-full   /* 💻 Desktop: only right rounded */
        md:rounded-l-none   /* 💻 Desktop: left flat */
      "
    >
      {tag}
    </span>
  )}


            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl leading-tight mb-4">
                {restTitle}{" "}
                <span className={`ebrima-bold text-[${color}]`}>{lastWord}</span>
              </h2>
            )}

            {subtitle && (
              <h3 className="text-[14px] sm:text-xl md:text-2xl font-semibold mb-4">
                {subtitle}
              </h3>
            )}

            {description && (
              <p className="leading-relaxed text-[11px] md:text-[20px] sm:text-base">
                {description}
              </p>
            )}
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
