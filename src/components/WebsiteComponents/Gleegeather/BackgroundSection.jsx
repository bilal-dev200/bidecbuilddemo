// // import React from 'react'
// // import Image from "next/image";
// // import {
// //   COMMON_FIELD_NAMES,
// //   getFieldValuesByNameWithPosition,
// //   getValueByFieldNameAndPosition,
// // } from "@/lib/utils/sectionDataHelpers";
// // import { Image_URL } from "@/config/constants";
// // import AppButton from "@/components/homeComp/AppButton";

// // const BackgroundSection = () => {
    
// //     const heading =
// //       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";
// //    const description =
// //       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
// //       "";
// //     const image =
// //     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
// //     "";
// //   return (

// // <section className="w-full px-10 max-w-[1200px] py-16 mx-auto flex justify-center">
// //   <div className="w-full px24 flex flex-col md:flex-row items-center justify-center">

// //     <div className="w-full px-6 space-y-4 text-center md:text-left">
// //       <h3 className="text-sm font-semibold tracking-wide" dangerouslySetInnerHTML={{ __html: heading }}/>
  

// //       <ul className="space-y-3 text-gray-700">
// //         <li className="flex gap-2 justify-center md:justify-start">
// //           <span className="text-red-600 font-bold">•</span>
// //           Designed to handle and student records with automated inquiry tracking.
// //         </li>

// //         <li className="flex gap-2 justify-center md:justify-start">
// //           <span className="text-red-600 font-bold">•</span>
// //           Supports and allows 24/7 access for students.
// //         </li>

// //         <li className="flex gap-2 justify-center md:justify-start">
// //           <span className="text-red-600 font-bold">•</span>
// //           Generates for management, tracking attendance, teacher performance, and student progress.
// //         </li>
// //       </ul>
// //     </div>

// //     {/* RIGHT IMAGE */}
// //     <div
// //       className="w-full h-[380px] bg-cover bg-center mt-10 md:mt-0"
// //       style={{
// //         backgroundImage: "url('/gle.png')",
// //       }}
// //     ></div>

// //   </div>
// // </section>
// //   )
// // }

// // export default BackgroundSection"use client";

// // import React from "react";
// // import {
// //   COMMON_FIELD_NAMES,
// //   getValueByFieldNameAndPosition,
// // } from "@/lib/utils/sectionDataHelpers";
// // import { Image_URL } from "@/config/constants";

// // const BackgroundSection = ({ data }) => {
// //   if (!data) return null;

// //   const heading =
// //     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

// //   const description =
// //     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
// //     "";

// //   const image =
// //     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || "";

// //   return (
// //     <section className="w-full px-10 max-w-[1200px] py16 mx-auto flex justify-center">
// //       <div className="w-full flex flex-col md:flex-row items-center justify-center">

// //         {/* LEFT CONTENT */}
// //         <div className="w-full px-6 space-y-4 text-center md:text-left">
// //           {/* Dynamic Heading */}
// //           <h3
// //             className="text-sm font-semibold tracking-wide"
// //             dangerouslySetInnerHTML={{ __html: heading }}
// //           />

// //           {/* Dynamic Description (HTML Supported) */}
// //           <div
// //             className="text-gray-700 space-y-3"
// //             dangerouslySetInnerHTML={{ __html: description }}
// //           />
// //         </div>

// //         {/* RIGHT DYNAMIC IMAGE */}
// //         <div
// //           className="w-full h-[380px] bg-cover bg-center mt-10 md:mt-0"
// //           style={{
// //             backgroundImage: `url('${Image_URL}/${image}')`,
// //           }}
// //         ></div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default BackgroundSection;
// import React from "react";
// import {
//   COMMON_FIELD_NAMES,
//   getValueByFieldNameAndPosition,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// const BackgroundSection = ({ data }) => {
//   if (!data) return null;

//   const heading =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

//   const description =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || "";

//   const image =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || "";

//   return (
//     <section
//       className="w-full  py-16 mx-auto 
//       bg-cover  bg-no-repeat relative flex items-center"
//       style={{
//         backgroundImage: `url('${Image_URL}/${image}')`,
//       }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-black/40 md:bg-transparent"></div>

//       {/* LEFT TEXT OVER BACKGROUND IMAGE */}
//       <div className="relative z-10 w-full md:w-[50%] space-y-4 text-white">
//         {/* Dynamic Heading */}
//         <h3
//           className="text-xl font-semibold tracking-wide"
//           dangerouslySetInnerHTML={{ __html: heading }}
//         />

//         {/* Dynamic Description */}
//         <div
//           className="text-base leading-relaxed"
//           dangerouslySetInnerHTML={{ __html: description }}
//         />
//       </div>

//       {/* EMPTY RIGHT SIDE (just ensures layout) */}
//       <div className="hidden md:block w-[50%]"></div>
//     </section>
//   );
// };

// export default BackgroundSection;
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
  getFieldValuesByNameWithPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const BackgroundSection = ({ data }) => {
  // Heading
  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0)?.value ||
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "";

  // Image
  const image =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    "/bombaybanner.png";

  // Description (bullet points)
     const description =
     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || ""

  // Bullet Text Color
  const textColorArray =
    getFieldValuesByNameWithPosition(data, COMMON_FIELD_NAMES.TEXT_COLOR) || [];

  const bulletTextColor = textColorArray?.[0]?.value || "#000";

  console.log("COLOR FROM API =>", bulletTextColor);

  return (
    <div className="mt30 max-w-7xl mx-auto">
      <section className="relative w-full h-[700px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src={`${Image_URL}${image}`}
          alt="Brand Background"
          fill
          className="object-cover"
        />

        {/* LEFT SIDE TEXT */}
        <div className="absolute inset-0 mt-14 flex items-center justify-start">
          <div className="w-full md:w-[45%] p-6 md:p-10">

            {/* Heading */}
            <h2
              className="text-2xl  mb-6"
              dangerouslySetInnerHTML={{ __html: heading }}
            />

            {/* Bullet List */}
            {/* <ul className="space-y-4 text-[15px] leading-relaxed">
              {descriptionList.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-yellow-500 text-lg">●</span>

                  <span style={{ color: bulletTextColor }}>
                    {item?.value}
                  </span>
                </li>
              ))}
            </ul> */}
             <div
          className="text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
  

          </div>
        </div>

      </section>
    </div>
  );
};

export default BackgroundSection;
