"use client";
import Image from "next/image";
import { Image_URL } from "@/config/constants"; // ✅ Base URL for images
import { COMMON_FIELD_NAMES, getFieldValue, getRobustFieldValuesByName,getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import AppButton from "../homeComp/AppButton";

export default function EmergingEcosystems({ data }) {
  // ✅ Dynamic text content
  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
    "Apps for Emerging Ecosystems: Beyond the Phone";

  const description =
    getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) ||
    "We don't just build apps for mobile screens; we create immersive digital experiences for the next generation of connected devices.";
 const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  // ✅ Dynamic card content
  const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE) || [];
  const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
  const featureDescriptions = getRobustFieldValuesByName(data, "feature_description") || [];
  console.log("AJHSAK", data);

  const cards = featureTitles.map((title, index) => ({
    title: title?.value,
    desc: featureDescriptions[index]?.value || "",
    img: featureImages[index]?.value ? `${Image_URL}${featureImages[index]?.value}` : "/d3.png",
  }));
  console.log("datasAJHSAK", cards);

  return (
    <>
 <section className="max-w-[1200px] mx-auto px-4 sm:px-6  bg-white">
  <div className="mx-auto grid lg:grid-cols-2 gap-10 items-center">
    {/* ✅ Left Content */}
    <div className="text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
        {heading.split(":")[0]}:
        <br />
        <span className="text-[#1A7D85] ebrima-bold">
          {heading.split(":")[1] || ""}
        </span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-[14px] leading-relaxed W-[120px] mx-auto lg:mx-0">
        {description}
      </p>
    </div>

    {/* ✅ Right Cards Section */}
    <div
      className="
       hidden md:flex flex-row gap-4 justify-between items-center 
        max-md:flex-col max-md:gap-6
      "
    >
      {/* ✅ Left Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {cards.slice(0, 2).map((card, index) => (
          <div
            key={index}
            className="
              relative overflow-hidden rounded-2xl [1.02] w-full 
              max-md:h-[220px]
            "
          >
            {/* Background Image */}
            <Image
              src={card.img}
              alt={card.title}
              width={500}
              height={300}
              className="
                object-cover w-full h-48 sm:h-56 md:h-64 
                transition-transform duration-500  
                max-md:h-[220px]
              "
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-500"></div> */}

            {/* Text Content */}
            <div
              className={`absolute inset-0 flex flex-col justify-end sm:p-4 text-white ${
                index === 0 ? "justify-end" : "justify-start"
              } max-md:justify-end max-md:p-14`}
            >
              <h3 className="text-[24px] ebrima-bold sm:text-md  mb-2 ">
                {card.title}
              </h3>
              <p className="text-sm sm:text-xs W-[400px] leading-relaxed max-md:text-xs">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Right Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {cards.slice(2).map((card, index) => (
          <div
            key={index}
            className="
              relative overflow-hidden rounded-2xl shadow-lg group transition transform hover:scale-[1.02] w-full 
              max-md:h-[220px]
            "
          >
            {/* Background Image */}
            <Image
              src={card.img}
              alt={card.title}
              width={500}
              height={300}
              className="
                object-cover w-full h-48 sm:h-56 md:h-64 
                transition-transform duration-500 group-hover:scale-110
                max-md:h-[220px]
              "
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-500"></div> */}

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center sm:p-4 text-white max-md:justify-end max-md:p-3">
              <h3 className="text-lg sm:text-md font-semibold mb-2 max-md:text-base">
                {card.title}
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed max-md:text-xs">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

<div
  className="
    md:hidden grid grid-cols-2 gap-4 justify-between items-center 
    max-md:grid-cols-2 max-md:gap-4
  "
>
  {cards.map((card, index) => (
    <div
      key={index}
      className={`
        relative overflow-hidden rounded-2xl shadow-lg group transition transform hover:scale-[1.02]
        w-full h-[220px]
        ${index === 2 ? "max-md:col-span-2 max-md:w-[400px] max-md:flex w-[400px] max-md:justify-center" : ""}
      `}
    >
      <div className="relative w-full  h-full rounded-2xl overflow-hidden">
        {/* 🖼 Background Image */}
        <Image
          src={card.img}
          alt={card.title}
          width={500}
          height={300}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* 📝 Text Overlay */}
        <div
          className={`absolute inset-0 flex flex-col text-white p-4 ${
            index === 2 ? "justify-start" : "justify-end"
          }`}
        >
          <h3 className="text-[14px] font-semibold mb-1">{card.title}</h3>
          <p className="text-[11px] text-gray-200 leading-relaxed">{card.desc}</p>
        </div>
      </div>
    </div>
  ))}
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
//  {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`relative overflow-hidden rounded-2xl shadow-lg group transition transform hover:scale-[1.02] ${index === 2 ? "sm:col-span-2 sm:max-w-md sm:mx-auto" : ""
//                 }`}
//             >
//               {/* Background Image */}
//               <Image
//                 src={card.img}
//                 alt={card.title}
//                 width={500}
//                 height={300}
//                 className="object-cover w-full h-48 sm:h-56 md:h-64 transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-500"></div>

//               {/* Text Content */}
//               <div className="absolute inset-0 flex flex-col justify-start p-6 sm:p-4 text-white">
//                 <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           ))}