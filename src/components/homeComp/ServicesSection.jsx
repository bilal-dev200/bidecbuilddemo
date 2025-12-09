"use client";
import { useState } from "react";
import Image from "next/image";
import {
  getFieldValuesByNameWithPosition,
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import { IoCaretDownSharp } from "react-icons/io5";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import AppButton from "./AppButton";

// ✅ Helper to bold the last 2 words
const highlightLastWords = (text, count = 2) => {
  if (!text) return "";
  const words = text.split(" ");
  const lastWords = words.slice(-count).join(" ");
  const rest = words.slice(0, -count).join(" ");
  return (
    <>
      {rest} <span className="ebrima-bold text-3xl md:text-6xl">{lastWords}</span>
    </>
  );
};

export default function ({ data, color }) {
  const heading = getFieldValue(
    data,
    COMMON_FIELD_NAMES.HEADING
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

  const description = getFieldValue(
    data,
    COMMON_FIELD_NAMES.DESCRIPTION
  );

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
  const featureIconsWhite = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_ICON_WHITE
  );
  const featureIconsBlack = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_ICON_BLACK
  );

  const backgroundImage = getFieldValue(
    data,
    COMMON_FIELD_NAMES.IMAGE
  );
  const list1 = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.LIST1
  );
  console.log("LIST 1", list1);

  const list2 = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.LIST2
  );

  const list3 = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.LIST3
  );

  const list4 = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.LIST4
  );
  const list5 = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.LIST5
  );
  const list6 = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.LIST6
  );

  const maxLength = Math.max(
    featureTitles.length,
    featureDescriptions.length,
    featureImages.length,
    featureIconsWhite.length,
    featureIconsBlack.length
  );

  const services = Array.from({ length: maxLength }).map((_, i) => ({
    id: `service_${i + 1}`,
    title: featureTitles[i]?.value || `Service ${i + 1}`,
    desc: featureDescriptions[i]?.value || "",
    img: featureImages[i]?.value
      ? `${Image_URL}${featureImages[i]?.value}`
      : "/placeholder.png",
    iconWhite: featureIconsWhite[i]?.value
      ? `${Image_URL}${featureIconsWhite[i]?.value}`
      : "/icon-white.png",
    iconBlack: featureIconsBlack[i]?.value
      ? `${Image_URL}${featureIconsBlack[i]?.value}`
      : "/icon-black.png",
  }));

  const [activeTab, setActiveTab] = useState(services[0]?.id || "");
  const activeService = services.find((s) => s.id === activeTab);
  activeService.points = [
    "Secure and scalable solutions",
    "24/7 customer support",
    "User-friendly interface",
    "Custom integrations available",
  ];
  return (
    <>
    <div className="relative mx-auto px-2 md:max-w-[1200px] w-full flex flex-col justify-center items-center">
      <div
        className="mx-auto md:block hidden w-full text-white p-6 sm:p-10 md:p-16 rounded-[20px] text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage ? `${Image_URL}${backgroundImage}` : "blueback.png"
            }')`,
        }}
      >
        {/* Heading & Description */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl ebrima-bold lg:text-6xl mb-3 leadingtight w-full  mx-auto"
                  dangerouslySetInnerHTML={{ __html: heading }}
>
          {/* {highlightLastWords(heading) ||
            "Your One-Stop Digital Transformation Partner"} */}
        </h2>

        <p
          className="text-white mb-6 font-normal  sm:mb-10 mt-3 text-[13px] smtext-sm mdtext-base lgtext-lg"
        // className="text-gray-200 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base lg:text-lg"
        >
          {description ||
            "From concept to scale, we deliver full-stack solutions tailored to your needs:"}
        </p>
     {/* ✅ Scrollable Tabs Section (Arrows outside, no overlap) */}
<div className="relative w-full mb-6 sm:mb-8">
  {/* Left Arrow */}
  {services.length > 5 && (
    <button
      onClick={() =>
        document
          .getElementById("services-scroll")
          .scrollBy({ left: -300, behavior: "smooth" })
      }
      className="absolute -left-12 top-1/2 -translate-y-1/2 z-30  text-white p-3 rounded-full "
      aria-label="Scroll left"
    >
      <IoIosArrowBack className="text-3xl"  />
    </button>
  )}

  {/* Scrollable Tabs */}
  <div
    id="services-scroll"
    className="flex gap-3 sm:gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth px16 py-2 items-stretch justify-start"
    style={{ scrollBehavior: "smooth" }}
  >
    {services.map((service) => {
      const isActive = activeTab === service.id;
      const isDefaultColor = color === "#1A7D85";

      return (
        <button
          key={service.id}
          onClick={() => setActiveTab(service.id)}
          className={`relative flex-shrink-0 w-[120px] h-[150px] sm:w-[150px] md:w-[180px] flex flex-col items-center justify-between rounded-[10px] shadow-md transition-all px-3 py-4 sm:px-4 sm:py-8 cursor-pointer ${
            isActive
              ? isDefaultColor
                ? "bg-black text-white"
                : "text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
          style={{
            backgroundColor: isActive && !isDefaultColor ? color : undefined,
          }}
        >
          {/* Icon Container */}
          <div
            className={`w-14 h-20  flex items-center justify-center rounded-full mb-2 sm:mb-3 ${
              isActive
                ? isDefaultColor
                  ? "bg-gradient-to-b from-[#1A7D85] to-[#0C1A16]/0"
                  : "bg-gradient-to-b from-[#0C1A16] to-[#95BF47]/0"
                : "bg-gradient-to-b from-[#1A7D85]/30 to-[#1A7D85]/0"
            }`}
          >
            <img
              src={isActive ? service.iconWhite : service.iconBlack}
              alt={service.title}
              className="w-6 h-10 sm:w-8 sm:h-8"
            />
          </div>

          {/* Title */}
          <span className="text-[10px] sm:text-xs md:text-sm text-center leading-tight">
            {(() => {
              const words = service.title.split(" ");
              const lastWord = words.pop();
              const rest = words.join(" ");
              return (
                <>
                  {rest && <span className="block">{rest}</span>}
                  <span className="block">{lastWord}</span>
                </>
              );
            })()}
          </span>

          {/* Caret */}
          {isActive && isDefaultColor && (
            <IoCaretDownSharp className="text-black text-xl absolute -bottom-3 left-1/2 -translate-x-1/2" />
          )}
        </button>
      );
    })}
  </div>

  {/* Right Arrow */}
  {services.length > 5 && (
    <button
      onClick={() =>
        document
          .getElementById("services-scroll")
          .scrollBy({ left: 300, behavior: "smooth" })
      }
      className="absolute -right-12 top-1/2 -translate-y-1/2 z-30  text-white p-3 "
      aria-label="Scroll right"
    >
      <IoIosArrowForward className="text-3xl" />
    </button>
  )}
</div>





        {/* Active Service Content */}
        {activeService && (
          <div className="grid grid-cols-1 pyx4 lg:px-16 md:grid-cols-2 m gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="text-left">
              <h2 className="textlg sm:textxl h-[100px] w-[400px]  max-wxl  font-bold mb-2 sm:mb-3 leading-none text-5xl">
                {activeService.title}
              </h2>

              <p className="text-gray-200 mb-4 h-[190px] sm:mb-6 text-xs sm:text-sm md:text-base lg:text-lg">
                {activeService.desc}
              </p>
              {/* <ul className="text-gray-300 text-xs sm:text-sm md:text-base mb-5 list-disc list-inside space-y-1">
                {activeService.points?.map((point, index) => (
                  <li key={index} className="text-white">
                    {point}
                  </li>
                ))}
              </ul> */}
              <ul className="text-gray-300 text-xs sm:text-sm md:text-base mb-5 list-disc list-inside space-y-1">
        {(() => {
          // Match active tab index with corresponding list
          const tabIndex = services.findIndex(s => s.id === activeTab);
          const lists = [list1, list2, list3, list4, list5, list6];
          const currentList = lists[tabIndex] || [];

          return currentList.map((item, index) => (
            <li key={index} className="text-white">
              {item?.value}
            </li>
          ));
        })()}
      </ul>

              <button className="px-4 sm:px-7 py-1.5 sm:py-2 text-xs sm:text-sm text-white  border border-white rounded-full shadow-md">
                Read More
              </button>
            </div>

            <div className="flex justify-center mt-4 md:mt-0">
              <Image
                src={activeService.img}
                alt={activeService.title}
                width={400}
                height={200}
                className="rounded-lg shadowlg h-[300px] w-full max-w-[350px] sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        )}
      </div>

    </div>


{/* ////mobile view */}
    {/* ////mobile view */}
<div className="p-4 md:hidden">
  {/* Dynamic Background */}
  <div
    className="max-w-xl mx-auto text-white rounded-md pt-10 pb-12 relative overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url('${backgroundImage ? `${Image_URL}${backgroundImage}` : "/blueback.png"}')`,
    }}
  >
    {/* Header Section */}
    <div className="relative z-10 text-center space-y-3 mb-8 px-4">
      <h1
      dangerouslySetInnerHTML={{ __html: heading }}
       className="text-2xl font-extrabold leading-tight"/>
        {/* {highlightLastWords(heading) || "Your One-Stop Digital Transformation Partner"}
      </h1> */}
      <p className="text-[11px] text-gray-200">
        {description ||
          "From concept to scale, we deliver full-stack solutions tailored to your needs:"}
      </p>
    </div>

    {/* Scrollable Tabs */}
    {/* <div className="flex overflow-x-auto mt-4 gap-3 w-full scrollbar-hide px-2">
      {services.map((service) => {
        const isActive = activeTab === service.id;
        const isDefaultColor = color === "#1A7D85";
        return (
          <div
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={`flex-shrink-0 h-24 flex flex-col items-center justify-center text-center rounded-[10px] py-2 min-w-[110px] border cursor-pointer transition-all
              ${isActive
                ? "bg-black text-white border-black"
                : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"}`}
            style={{
              backgroundColor: isActive && !isDefaultColor ? color : undefined,
            }}
          >
            <img
              src={isActive ? service.iconWhite : service.iconBlack}
              alt={service.title}
              className="w-6 h-6 mb-1"
            />
            <p className="text-[9px] w-[70px] leading-tight font-medium">
              {service.title}
            </p>
          </div>
        );
      })}
    </div> */}
    {/* Scrollable Tabs */}
<div className="flex overflow-x-auto mt-4 gap-3 w-full scrollbar-hide px-2">
  {services.map((service) => {
    const isActive = activeTab === service.id;
    const isDefaultColor = color === "#1A7D85";

    return (
      <div
        key={service.id}
        onClick={() => setActiveTab(service.id)}
        className={`flex-shrink-0 h-28 flex flex-col items-center justify-center text-center rounded-[10px] py-2 min-w-[110px] border cursor-pointer transition-all
          ${isActive
            ? "bg-black text-white border-black"
            : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"}`}
        style={{
          backgroundColor: isActive && !isDefaultColor ? color : undefined,
        }}
      >
        {/* ✅ Rounded Gradient Background behind icon */}
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mb-2 sm:mb-3 ${
            isActive
              ? isDefaultColor
                ? "bg-gradient-to-b from-[#1A7D85] to-[#0C1A16]/0" // default gradient
                : "bg-gradient-to-b from-[#0C1A16] to-[#95BF47]/0" // custom API color gradient
              : "bg-gradient-to-b from-[#1A7D85]/30 to-[#1A7D85]/0"
          }`}
        >
          <img
            src={isActive ? service.iconWhite : service.iconBlack}
            alt={service.title}
            className="w-6 h-6"
          />
        </div>

        <p className="text-[9px] w-[70px] leading-tight font-medium">
          {service.title}
        </p>
      </div>
    );
  })}
</div>


    {/* Active Tab Content */}
    {activeService && (
      <div className="relative z-10 w-full px-4 mt-10">
        <div className="flex flex-col  overflow-hidden">
          {/* Text */}
          

          {/* Image */}
          <div className="mt6 flex justify-center">
            <Image
              src={activeService.img}
              alt={activeService.title}
              width={250}
              height={200}
              className="rounded-lg  w-[90%] object-cover"
            />
          </div>
          <div className="flex flex-col mt-6 justify-center space-y-2">
            <h2 className="text-lg font-extrabold text-white">
              {activeService.title}
            </h2>
            <p className="text-[12px] text-gray-100 leading-snug">
              {activeService.desc}
            </p>
            <ul className="text-gray-300 text-[11px] mb-4 list-disc list-inside space-y-1">
              {(() => {
                const tabIndex = services.findIndex((s) => s.id === activeTab);
                const lists = [list1, list2, list3, list4, list5, list6];
                const currentList = lists[tabIndex] || [];
                return currentList.map((item, index) => (
                  <li key={index} className="text-white">
                    {item?.value}
                  </li>
                ));
              })()}
            </ul>

            <button className="px-4 py-1 text-xs font-semibold border-2 border-white text-white rounded-full hover:bg-white hover:text-[#0C8B8F] transition duration-300 shadow-md w-fit">
              Read More
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

     <AppButton 
  text={btn} 
  color={buttoncolor} 
  link={btnlink} 
  // onClick={() => console.log("Button clicked")} 
/>

    </>
  );
}
