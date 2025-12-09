// "use client";
// import React from "react";
// import Image from "next/image";
// import {
//   getValueByFieldNameAndPosition,
//   COMMON_FIELD_NAMES,
//   highlightLastWords,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// const AIE = ({data}) => {
//       const heading2 =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, ) ||
//         "What’s New in AI & Big Data";
    
//       const subHeading2 =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, ) ||
//         "Generative AI & Big Data: The Future is Now";
    
//       const description2 =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, ) ||
//         "The landscape of digital transformation is evolving rapidly. From generative AI that creates content and code at scale, to big data analytics that turns raw information into actionable insights, businesses are leveraging these technologies to stay competitive.";
    
//       const image2 =
//         getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, ) ||
//         "/AI.png";
    
//   return (
//     // <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-16 py-12 bg-white">
//     //   {/* Left Content */}
//     //   <div className="flex-1">
//     //     <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 leading-snug">
//     //       Cut Development <br />
//     //       Costs with{" "}
//     //       <span className="text-green-600">AI Efficiency</span>
//     //     </h2>

//     //     <p className="mt-6 text-lg font-semibold text-gray-800">
//     //       Reduce Development Costs by Up to 65% <br /> with AI-Driven Custom Solutions
//     //     </p>

//     //     <p className="mt-4 text-gray-600 leading-relaxed text-justify md:text-left">
//     //       We accelerate the app development cycle through AI-powered tools and
//     //       automation, including generative AI for code suggestions, automated QA
//     //       testing, predictive analytics, and workflow optimization. By leveraging
//     //       <strong> AI-driven frameworks</strong> such as predictive workload
//     //       planning, project recommendations, smart search and chatbots, we enable
//     //       faster output, at lower cost, and higher quality, enabling businesses to
//     //       scale with confidence.
//     //     </p>
//     //   </div>

//     //   {/* Right Image */}
//     //   <div className="flex-1 flex justify-center items-center">
//     //     <div className="relative w-full max-w-md md:max-w-lg">
//     //       <Image
//     //         src="/eff.png"
//     //         alt="AI Efficiency Banner"
//     //         width={512}
//     //         height={404}
//     //         className="rounded-xl shadow-lg w-full h-auto object-contain"
//     //       />
//     //     </div>
//     //   </div>
//     // </section>
//         <div className="relative z-10 max-w-[1200px] mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Image */}
//             {/* <div className="flex justify-center order-2 md:order-1">
//               <img
//                 src={`${Image_URL}/${image1}`}
//                 alt="AI Efficiency"
//                 className="rounded-lg shadow-lg w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto"
//               />
//             </div> */}
//             <div className="relative flex justify-center order-2 md:order-1">
//               <img
//                 src={`${Image_URL}${image2}`}
//                 alt="AI Efficiency"
//                 className="rounded-lg h-full  object-cover w-full max-w[400px] sm:max-w[500px] md:max-w[600px] h]"
//               />
    
//               {/* Decorative image neeche left side */}
    
//             </div>
    
    
//             {/* Right Content */}
//             <div className="order-1 md:order-2 text-center md:text-left">
//               <h2 className="text-2xl sm:text-4xl md:text-6xl leading-tight mb-4">
//                 {highlightLastWords(heading2, 4)}
//               </h2>
//               <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3">
//                 {subHeading2}
//               </h3>
//               <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
//                 {description2}
//               </p>
//             </div>
//           </div>
//   );
// };

// export default AIE;
"use client";
import React from "react";
import Image from "next/image";
import {
  getValueByFieldNameAndPosition,
  COMMON_FIELD_NAMES,
  highlightLastWords,
  highlightText,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const AIE = ({ data,color }) => {
  const heading2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING) ||
    "What’s New in AI & Big Data";

  const subHeading2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING) ||
    "Generative AI & Big Data: The Future is Now";

  const description2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION) ||
    "The landscape of digital transformation is evolving rapidly. From generative AI that creates content and code at scale, to big data analytics that turns raw information into actionable insights, businesses are leveraging these technologies to stay competitive.";

  const image2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE) || "/AI.png";
  const highlightLastWords = (text, count) => {
    const words = text.split(" ");
    const lastWords = words.slice(-count).join(" ");
    const firstPart = words.slice(0, -count).join(" ");
    return (
      <>
        {firstPart}{" "}
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
    // <div className="relative z-10 max-w-[1200px] mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center">
    //   <div className="order-1 text-center md:text-left">
    //     <h2 
    //     className="text-2xl sm:text-4xl md:text-6xl leading-tight mb-4">
    //       {/* {highlightLastWords(heading2, 4)} */}
    //       {highlightText(heading2, 27, 40, "text-[#95BF47]")}
        
    //     </h2>
    //             <div className="text-center md:text-left">

    //     <h3 
    //         className="font xl:w-[440px] text-[17px]  lg:text-xl md:text-[] mb-4">
    //       {subHeading2}
    //     </h3>
    //     <p 
    //       className="lg:w-[530px] text-sm sm:text-base md:text-[14px] xl:text-[17px] leading-normal">
    //       {description2}
    //     </p>
    //     </div>
    //   </div>

    //   {/* 🔵 Right Image (moved to right side) */}
    //   <div className="relative flex justify-center order-2">
    //     <img
    //       src={`${Image_URL}${image2}`}
    //       alt="AI Efficiency"
    //       className="rounded-lg shadow-lg w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto object-cover"
    //     />
    //   </div>
    // </div>
        <section className="relative lg:px-36 px-10  bg-white">

    <div className="relative z-10 max-w-[1200px] mx-auto flex lg:flex-row flex-col md:mt20 mt10 gridmdgrid-cols-2 gap-20 items-center">
  {/* Right Image (moved to the right side) */}
  <div className="relative lg:w-2/5 md:w-1/2 w-full flex justify-center order-1 md:order-2">
    <img
      src={`${Image_URL}${image2}`}
      alt="AI Efficiency"
      className="rounded-lg h-full object-cover w-full max-w[400px] sm:max-w[500px] md:max-w[600px]"
    />
  </div>

  {/* Left Content (moved to the left side) */}
  <div className="lg:w-3/5 w-full order-2 md:order-1 text-center md:text-left">
    <h2 className=
        "text-2xl sm:text-4xl md:w-[400px] xl:text-5xl 2xl:text-6xl text-center md:text-left leading-none">
          {(() => {
            const words = heading2.split(" ");
            const lastWords = words.slice(-2).join(" ");
            const firstPart = words.slice(0, -2).join(" ");
            return (
              <>
                {firstPart}{" "}
              <span
          className="ebrima-bold font-bold"
          style={{ color: color || "#1A7D85" }}
        >
          {lastWords}
        </span>
              </>
            );
          })()}
        </h2>
    <h3 className="font xl:w-[440px] mt-5 text-[17px] lg:text-xl mb-4">
      {subHeading2}
    </h3>
    <p className="lg:w-[530px] text-sm sm:text-base md:text-[14px] xl:text-[17px] leading-normal">
      {description2}
    </p>
  </div>
</div>
</section>

  );
};

export default AIE;
