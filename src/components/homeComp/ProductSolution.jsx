"use client";
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getFieldValuesByNameWithPosition,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import AppButton from "./AppButton";

export default function ProductSolutions({ data, color }) {
  console.log(data, "ProductSolutions")
  if (!data) return null;

  // ✅ SubHeadings
  const subHeading0 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
    "";
  const subHeading1 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 1) ||
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

  // ✅ Heading
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "";
  // Our Shopify Integration Process
  // Split heading for last 2 words styling
  const headingWords = heading.split(" ");
  const mainWords = headingWords.slice(0, -2).join(" ");
  const lastTwoWords = headingWords.slice(-2).join(" ");

  // ✅ Description
  const description =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "";
  // We design and develop innovative product solutions that empower businesses to scale faster by integrating AI, automation, and modern technologies.
  // ✅ Features (dynamic from API)
  const featureTitles = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureDescriptions = getFieldValuesByNameWithPosition(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );

  const content = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.LIST1, 0);
  const result = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.LIST2, 0);
  const features = featureTitles.map((titleObj, i) => ({
    title: titleObj?.value || `Feature ${i + 1}`,
    description: featureDescriptions[i]?.value || "",
  }));
  // Feature description goes here.
  // ✅ Image
  const image =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    "/product.png";
const mobileimage =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 1) ||
    "";

  // ✅ Helper to bold the last 2 words
  const highlightLastWords = (text, count = 2) => {
    if (!text) return "";
    const words = text.split(" ");
    const lastWords = words.slice(-count).join(" ");
    const rest = words.slice(0, -count).join(" ");
    return (
      <>
        {rest}
        <span
          className="ebrima-bold font-bold"
          style={{ color: color || "#1A7D85" }}
        >
          {lastWords}
        </span>
      </>
    );
  };
  return (
    <div className="w-full relative z-10">
      <section className="max-w-[1200px] mx-auto md:px-0 px-3 relative rounded-[24px] overflow-hidden">
        {/* Subheading */}
        <p className="textgray-200 text-xs sm:text-sm md:text-base lg:text-[24px] 2xl:text-[30px] ebrima-bold text-center" dangerouslySetInnerHTML={{ __html: subHeading0 }}></p>
        <h2 className="text-2xl sm:text3xl md:text-5xl lg:text-6xl  mb-3 leadingtight max-w-3xl mx-auto text-center"   dangerouslySetInnerHTML={{ __html: heading }}>
         
        </h2>
        {/* <p className="max-w-5xl mx-auto text-center  text-sm sm:text-base md:text-lg leading-relaxed mt-4"> */}
        {/* Perfect integrations are key to scaling your ecommerce business. 
  At Bidec, we follow a clear, proven process to connect Shopify 
  with the tools that power your operations: */}
        {/* {cotenet}
</p> */}
        {content && (
          <p className="max-w-5xl mx-auto text-center text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            {content}
          </p>
        )}
        {/* Main Heading */}
        {/* <h2 className="max-w-lg mx-auto text-3xl sm:text-4xl font-bold mt-2 text-center">
        {heading}
      </h2> */}

        <div className="hidden lg:block max-w-[1200px] mx-auto px-5 py-5 pb-32 mt-10 relative rounded-[24px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={`${Image_URL}/${image}`}
              alt="Product Solutions"
              fill
              className="object1cove r"
            />
          </div>

          {/* Content */}
          <div className="relative grid md:grid-cols-2 gap-10">
            {/* Left div */}
            <div className="rounded-[24px] px-2 text-white">
              <h3 className="md:text-[15px] lg:text-lg 2xl:text-4xl ebrima-bold mt-6 mb-4"dangerouslySetInnerHTML={{ __html: subHeading1 }}></h3>
              <p className="text-xs md:text-sm lg:text-[14px] 2xl:text-md  mb-6 leading-relaxed">
                {description}
              </p>
              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Serial Number */}
                    <span className="textwhite mt-1 text-[17px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title + Description */}
                    <div>
                      <span className="font-bold text-[14px] lg:text-[20px] block">{f.title}</span>
                      <p className="text-xs sm:text-sm md:text-xs lg:text-[14px] 2xl:text-md lg:w-[390px]   text-[12px]">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>


        <div className="lg:hidden  mx-auto mt-10 relative  overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={`${Image_URL}/${mobileimage}`}
              alt="Product Solutions"

              className="objectcontain w-[100%] h-[1000px]"
            />

          </div>

          {/* Content */}
          <div className="relative  mt-[300px] pb-10 grid gap-10 items-center">
            {/* Left div */}
            <div className="rounde d-[24px] mt-10 p-4 text-white h-full">
              <h3 className="text-2xl font-bold mt-6 mb-4" dangerouslySetInnerHTML={{ __html: subHeading1 }}/>
              <p className="mb-6 md:text-base text-[11px] leading-relaxed">
                {description}
              </p>
              <ul className="space-y-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Serial Number */}
                    <span className="textwhite font-bold text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title + Description */}
                    <div>
                      <span className="font-semibold block text-sm">{f.title}</span>
                      <p className="text-[11px]">{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </section>
      {/* <p className="max-w-5xl mx-auto text-center text-sm sm:text-base md:text-lg leading-relaxed mt-4">
        <span className="font-bold text-gray-900">Result:</span>
        {result}
      </p> */}
      {result && (
        <p className="max-w-5xl mx-auto text-center text-sm sm:text-base md:text-lg leading-relaxed mt-4">
          <span className="font-bold text-gray-900">Result:</span> {result}
        </p>
      )}
         <AppButton 
        text={btn} 
        color={buttoncolor} 
        link={btnlink} 
        // onClick={() => console.log("Button clicked")} 
      />
    </div>
  );
}
