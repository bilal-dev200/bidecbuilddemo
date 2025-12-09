import React from 'react'
import {
  getValueByFieldNameAndPosition,
  COMMON_FIELD_NAMES,
  getImageAltTextByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import { usePathname } from "next/navigation";
import AppButton from './AppButton';

const Reduce = ({ data, color }) => {

  const heading2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "What’s New in A  Data";
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
     const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";

 const tag =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUBTITLE, 0) ||
    "";
  const subHeading2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
    "";

  const description2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "The landscape of digital transformation is evolving rapidly. From generative AI that creates content and code at scale, to big data analytics that turns raw information into actionable insights, businesses are leveraging these technologies to stay competitive.";

  //   const image2 =
  //     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
  //     "/AI.png";
  const image1 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    "/fallback-img.png";
  const image1AltText =
    getImageAltTextByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE) ||
    "";
  // Ensure this helper is defined (ya tumhara existing helper — updated version niche bhi diya hai)
  const highlightLastWords = (text, count, color) => {
    if (!text) return null;

    const words = String(text).split(" ");
    const lastWords = words.slice(-count);
    const firstPart = words.slice(0, -count);

    return (
      <>
        {firstPart.map((word, i) => {
          const isNumber = /^-?\d+(\.\d+)?%?$/.test(word);
          return (
            <span key={`first-${i}`} className={isNumber ? "text-red-500" : ""}>
              {word}
              {i < firstPart.length - 1 ? " " : ""}
            </span>
          );
        })}{" "}
        <span className="ebrima-bold" style={{ color: color || "#1A7D85" }}>
          {lastWords.map((word, i) => {
            const isNumber = /^-?\d+(\.\d+)?%?$/.test(word);
            return (
              <span key={`last-${i}`} className={isNumber ? "text-red-500" : ""}>
                {word}
                {i < lastWords.length - 1 ? " " : ""}
              </span>
            );
          })}
        </span>
      </>
    );
  };
  console.log("dataewqw", data);
  console.log("dataewqwaw", image1AltText);



  return (
   <section className="relative md:px-20 lg:px-36 px-10 py10 bg-white">
  <div className="relative z-10 max-w-[1200px] mx-auto flex md:flex-row flex-col items-center gap-10">
    
    {/* Left Image */}
 <div className="relative hidden md:flex justify-center md:w-[45%] lg:w-[40%] order-2 md:order-1">
  <img
    src={`${Image_URL}${image1}`}
    alt={image1AltText}
    className="rounded-2xl object-contain w-full h-auto max-w-[800px]"
  />
</div>



    {/* Right Content */}
    <div className="md:w-[55%] w-full order-1 md:order-2 text-left">
    
  {tag && (
  <span
    className="
      inline-block 
      bg-[#1A7D85] 
      text-white 
      font-bold 
      text-sm 
      sm:text-base 
      md:text-md 
      px-4 
      w-auto 
      sm:px-4 
      py-1 
      mb-4 
      rounded-full
      md:rounded-r-full
      md:rounded-l-none
    "
  >
    {tag}
  </span>
)}

      <h2 className="text-2xl sm:text-4xl xl:text-4xl 2xl:text-6xl leading-tight"
        dangerouslySetInnerHTML={{ __html: heading2 }}
>
        {/* {highlightLastWords(heading2, 4)} */}
        {/* {heading2} */}
      </h2>

      <h3 className="mt-4 text-[17px] lg:text-xl mb-4 md:w-[440px]"
      dangerouslySetInnerHTML={{ __html: subHeading2 }}>
        {/* {subHeading2} */}
      </h3>

      <p className="md:w-[530px] text-[11px] sm:text-base md:text-[14px] xl:text-[17px] leading-normal">
        {description2}
      </p>

    </div>
  </div>
  {/* {btn && (
  <button className="mt-5 bg-[#1A7D85] text-white font-medium px-3 py-1 rounded-full transition duration-300">
    {btn}
  </button>
)} */}
  {/* {btn && (
            <a href={btnlink} target="_blank" rel="noopener noreferrer">
              <AppButton
                text={btn}
                color={buttoncolor}
                onClick={() => console.log("Button clicked!")}
                // textColor={buttonTextColor}
              />
            </a>
          )} */}
          <AppButton 
  text={btn} 
  color={buttoncolor} 
  link={btnlink} 
  // onClick={() => console.log("Button clicked")} 
/>
          </section>


  )
}

export default Reduce