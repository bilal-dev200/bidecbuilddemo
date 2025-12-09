// import React from "react";

// const WhatsNew = ({ data }) => {
//   console.log("dataaassasas", data);

//   return (
//     <div
//       className="w-full min-h-screen bg-[url('/whatnew-bg.png')] bg-contain bg-center bg-no-repeat flex items-end"
//     >
//       {/* Overlay Container */}
//       <div className="w-full h-full flex items-end">
//         <div className="max-w-3xl w-full text-white px-4 sm:px-8 md:px-12 lg:px-40 pb-10 sm:pb-14 md:pb-20 lg:pb-28">
//           {/* Main Heading */}
//           <h1 className="text-2xl  sm:text-3xl md:text-5xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center md:text-left">
//             What's New in Mobile App Development
//           </h1>

//           {/* Sub Heading */}
//           <h3 className="text-lg sm:text-xl md:text-3xl lg:text-2xl font-semibold mb-3 sm:mb-5 text-center md:text-left">
//             AI, Big Data & Next-Gen Tech: Shaping the Future of Mobile Apps
//           </h3>

//           {/* Paragraph */}
//           <p className="text-sm sm:text-base md:text-md leading-relaxed text-gray-200 text-center md:text-left">
//             Mobile app development is entering a new era. AI enables smarter user
//             experiences, Big Data delivers personalized insights, and modern tech
//             stacks ensure speed, scalability, and security. From predictive
//             features to seamless performance, the future of apps is here — and we
//             help you build it today.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatsNew;
"use client";
import React from "react";
import { Image_URL } from "@/config/constants";
import {
  getFieldValue,
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition
} from "@/lib/utils/sectionDataHelpers";
import Image from "next/image";
import AppButton from "../homeComp/AppButton";

const WhatsNew = ({ data }) => {
  // ✅ Extract dynamic values from backend
  console.log(data, "whatnews")
  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
    "What's New in Mobile App Development";

  const subHeading =
    getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) ||
    "AI, Big Data & Next-Gen Tech: Shaping the Future of Mobile Apps";

  const description =
    getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) ||
    "";

      const description2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION,1) ||
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

  const words = heading.split(" ");
  const lastTwoWords = words.slice(-2).join(" ");
  const firstPart = words.slice(0, -2).join(" ");

const buttonText =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0);
 const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  return (
//     <div className="">
//     <div className="hidden md:block md:pt36 py24  rounded-[24px]">
//       {/* <div
//         className="lg:block hidden w-full min-h-[500px] sm:min-h-[600px]  md:min-h-[700px] lg:min-h-[60rem] [760px] rounded-[20px] px-1 sm:px-5 lg:px-10 bg-cover bg-center bg-no-repeat flex items-center"
//         style={{ backgroundImage: `url(${bgImageUrl})` }}
//       >

//         <div className="w-full  h-full flex items-center justify-start">
//           <div className="mt-[28rem] w-full text-white sm:pb-14 md:pb-20 lg:pb-28">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-left leading-tight">
//               {firstPart} <br />
//               <span className="font-bold ebrima-bold">{lastTwoWords}</span>
//             </h1>

//             <div className="max-w-2xl">
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-5 text-left leading-snug">
//                 {subHeading}
//               </h3>

//               <p className="text-sm sm:text-base md:text-md leading-relaxed text-gray-200 text-left">
//                 {description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       {/* <div
//         className="relative max-w-[1200px] mx-auto  w-full min-h-[500px] rounded-[20px] bg-cover bg-center bg-no-repeat flex items-center justify-start px-10"
//         style={{ backgroundImage: `url(${bgImageUrl})` }}
//       >
//         <div className="relative z-10 text-white max-w-[50%]">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
//             {firstPart} <br />
//             <span className="font-bold ebrima-bold">{lastTwoWords}</span>
//           </h1>

//           <h3 className="text-lg md:text-2xl font-semibold mb-3 leading-snug">
//             {subHeading}
//           </h3>

//           <p className="text-sm md:text-base text-gray-200 leading-relaxed">
//             {description}
//           </p>
//         </div>

//         <div className="max-w-[50%] ml-20 -t0 bottom-0 z-10">
//           <img
//             src={rightimage}
//             alt="Right side visual"
//             className="w-auto h-[700px] -mt-[150px]  lg] object-fill"
//           />
//         </div>

//       </div> */}


//       <div
//         className="relative hidden md:flex  max-w-[1200px] mx-auto w-full min-h-[350px] md:min-h-[500px] lg:min-h-[500px] rounded-[20px] bgcover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-center lg:justify-start px-6 md:px-10"
//         style={{ backgroundImage: `url(${bgImageUrl})` }}
//       >
//         {/* 🔹 Left Text Section */}
//         <div className="relative z-10 text-white w-full lg:max-w-[58%] text-center lg:text-left">
//           <h1 className="text-2xl md:text-4xl lg:text-6xl  leading14 mb-4">
//             {firstPart} {" "}
//             <span className="font-bold ebrima-bold">{lastTwoWords}</span>
//           </h1>

//           <h3 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 leading-snug">
//             {subHeading}
//           </h3>

//           <p className="text-sm md:text-[15px] text-gray-200 leading-relaxed px-2 md:px-0">
//             {description}
//           </p>
//         </div>

//         {/* 🔹 Right Image Section */}
//         {/* <div className="hidden lg:block max-w-[50%] ml-20 bottom-10 z-10">
//           <img
//             src={rightimage}
//             alt="Right side visual"
//             className="w-auto h-[700px] -mt-[150px] object-fill"
//           />
//         </div> */}
//         {rightimage && (
//   <div className="hidden lg:block max-w-[50%] ml-20 bottom-10 z-10">
//     <img
//       src={rightimage}
//       alt="Right side visual"
//       className="w-auto h-[700px] -mt-[150px] object-fill"
//     />
//   </div>
// )}

//       </div>





//       {/* <div
//         className=" px-8 lg:hidden w-full min-h-[200px]  ] rounded-[20px] sm:px-5 lg:px-10 bg-cover bg-center bg-no-repeat flex items-center"
//         style={{ backgroundImage: `url('/mobile3.png')` }}
//       >

//         <div className="w-full mt-[500px] mb-10 h-full flex items-center justify-start">
//           <div className="mt-62 w-full text-white sm:pb-14 md:pb-20 lg:pb-28">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-left leading-tight">
//               {firstPart} <br />
//               <span className="font-bold ebrima-bold">{lastTwoWords}</span>
//             </h1>

//             <div className="max-w-2xl">
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-5 text-left leading-snug">
//                 {subHeading}
//               </h3>

//               <p className="text-sm sm:text-base md:text-md leading-relaxed text-gray-200 text-left">
//                 {description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div> */}

//         <div className="block md:hidden bg-gradient-to-b from-[#6DD5FA] to-[#2980B9] rounded-[15px] text-white p-6 mx-4 mt-6 shadow-lg">
//       {/* 🔹 Image Section */}
//       <div className="flex justify-center mb-4">
//         <Image
//           // src="/ai-bigdata.png" // 👉 Replace this with your uploaded image path
//                 src={mobileBgUrl}

//           alt="AI & Big Data"
//           width={300}
//           height={220}
//           className="rounded-lg"
//         />
//       </div>

//       {/* 🔹 Text Section */}
//       <div className="text-center">
//         <h2 className="text-2xl font-semibold mb-2 leading-snug">
//           What’s New in <span className="text-[#002D62] font-bold">AI & Big Data</span>
//         </h2>

//         <h3 className="text-[15px] font-semibold mb-3 text-[#E0E0E0]">
//           Generative AI & Big Data: The Future is Now
//         </h3>

//         <p className="text-[13px] leading-relaxed text-[#f0f0f0]">
//           The landscape of digital transformation is evolving rapidly. From generative AI that
//           creates content and code at scale, to big data analytics that turns raw information into
//           actionable insights, businesses are leveraging these technologies to stay competitive.
//           At Rev AI, we help you harness these innovations today, not tomorrow.
//         </p>
//       </div>
//     </div>

//     </div>

// </div>
<div className="md:px-5">
  {/* 🌐 Desktop / Web Version */}
  <div className="hidden md:block md:pt36 py-5 rounded-[24px]">
    <div
 className="
    relative flex flex-col md:flex-row 
    max-w-[1200px] mx-auto w-full 
    min-h-[400px] md:min-h-[500px] lg:min-h-[550px] 
    rounded-[20px] bg-cover bg-center bg-no-repeat 
    items-center justify-between px-6 md:px-10
  "      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* 🔹 Left Text Section */}
      <div className="relative z-10 text-white w-full lg:max-w-[58%] text-center md:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-6xl leading14 mb-4" dangerouslySetInnerHTML={{ __html: heading }}>
          {/* {firstPart}{" "}
          <span className="font-bold ebrima-bold">{lastTwoWords}</span> */}
        </h1>

        <h3 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 leading-snug" dangerouslySetInnerHTML={{ __html: subHeading }}>
          {/* {subHeading} */}
        </h3>

        <p className="text-sm md:text-[15px] text-gray-200 leading-relaxed px-2 md:px-0">
          {description}
        </p>
      </div>

      {/* 🔹 Right Image Section */}
      {rightimage && (
        <div className="hidden md:flex max-w-[50%] ml-20 bottom-10 z-10">
          <img
            src={rightimage}
            alt="Right side visual"
            className="w-auto h-[700px] -mt-[120px] object-fill"
          />
        </div>
      )}
    </div>
  </div>

  {/* 📱 Mobile Version (Visible Only on Mobile) */}
<div
  className="block md:hidden rounded-[10px] text-white p-4 mx-4 bg-cover bg-center bg-no-repeat h-[950px] "
  style={{ backgroundImage: `url(${Image_URL}${mobileview})` }}
>


    {mobiletopimage && (
    <div className="flex justify-center mb-4">
      <Image
        src={`${Image_URL}${mobiletopimage}`}
        alt="AI & Big Data"
        width={300}
        height={220}
        className="rounded-lg"
      />
    </div>
  )}


    {/* 🔹 Text Section */}
    <div className="text-center   mt-[590px]">
      <h1 className="text-2xl md:text-4xl lg:text-6xl leading14 mb-4">
          {firstPart}{" "}
          <span className="font-bold ebrima-bold">{lastTwoWords}</span>
        </h1>

      

       <p className="text-[11px] md:text-[15px]  leading-relaxed  md:px-0">
          {description}
        </p>
         <h3 className="text-base mt-5 md:text-xl lg:text-2xl font-semibold mb-3 leading-snug">
          {subHeading}
        </h3>
        <p className="text-[11px] md:text-[15px]  leading-relaxed  md:px-0">
          {description2}
        </p>

{/* <button
  className="mt-4 px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300"
>{buttonText}
</button> */}

    </div>
  </div>

    <AppButton 
  text={buttonText} 
  color={buttoncolor} 
  link={btnlink} />
</div>

  );
  
};

export default WhatsNew;
