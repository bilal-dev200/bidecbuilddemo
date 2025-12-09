// "use client";
// import React from "react";
// import {
//   getValueByFieldNameAndPosition,
//   COMMON_FIELD_NAMES,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";
// import { usePathname } from "next/navigation";


// const AIEfficiencySection = ({ data, color }) => {
//   // First Block
//   const heading1 =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
//     "";

//   const subHeading1 =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
//     "";

//   const description1 =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
//     "";

//   const image1 =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
//     "";

//   // Second Block
//   const heading2 =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 1) ||
//     "";

//   const subHeading2 =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 1) ||
//     "";

//   const description2 =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 1) ||
//     ""
//   const image2 =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 1) ||
//     "";
//   const pathname = usePathname();

//   console.log("dataAPI:", data);
//   console.log("🖼️ Image 1 from API:", image1);
//   console.log("🌐 Full Image URL 1:", `${Image_URL}${image1}`);
//   console.log("🌐 Full Image URL 2:", `${Image_URL}${image2}`);

//   // Highlight last N words
//   const highlightLastWords = (text, count) => {
//     const words = text.split(" ");
//     const lastWords = words.slice(-count).join(" ");
//     const firstPart = words.slice(0, -count).join(" ");
//     return (
//       <>
//         {firstPart}{" "}
//         <span
//           className="ebrima-bold font-bold"
//           style={{ color: color || "#1A7D85" }}
//         >
//           {lastWords}
//         </span>
//       </>
//     );
//   };

//   return (
//     <section className="relative lg:px-36 px-10 py3 bg-white">
//       {/* First Section */}
//       {/* <div className="relative z-10 max-w-[1200px] mx-auto grid lg:grid-cols-2 grid-cols-1 grid-flow-row lg:gap-12 gap-2 items-start">
//         <h2 className=
//           "text-2xl sm:text-4xl px-7 md:px-0  xl:text-5xl 2xl:text-6xl  text-center md:text-left leading-none">
//           {(() => {
//             const words = heading1.split(" ");
//             const lastWords = words.slice(-2).join(" ");
//             const firstPart = words.slice(0, -2).join(" ");
//             return (
//               <>
//                 {firstPart}{" "}
//                 <span
//                   className="ebrima-bold font-bold"
//                   style={{ color: color || "#1A7D85" }}
//                 >
//                   {lastWords}
//                 </span>

//               </>
//             );
//           })()}
//         </h2>

//         <div className="text-center md:text-left">
//           <h3
//             className="font xl:w-[440px] mt-2 md:mt-0 px-7 md:px-0 text-[14px] md:text-[23px]  mb-4">
//             {subHeading1} 
//           </h3>
//           <p
//             className="lg:w-[530px] text-[11px] sm:text-base  md:text-[17px] leading-normal">
//             {description1}
//           </p>
//         </div>
//       </div> */}

//       {/* Second Section */}
//       <div className="relative z-10 max-w-[1200px] mx-auto flex lg:flex-row flex-col md:mt20 mt10 gridmdgrid-cols-2 gap-20 items-center">
//   {/* Left Image */}
//   <div className="relative lg:w-2/5 md:w-1/2 w-full flex justify-center order-1 md:order-1 lg:order-1">
//     <img
//       src={`${Image_URL}${image1}`}
//       alt="AI Efficiency"
//       className="rounded-lg h-full object-cover w-full max-w[400px] sm:max-w[500px] md:max-w[600px]"
//     />
//   </div>

//   {/* Right Content */}
//   <div className="lg:w-3/5 w-full order-2 md:order-2 lg:order-2 text-center md:text-left">
//     <h2 className="text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl text-center md:text-left leading-none"dangerouslySetInnerHTML={{ __html: heading2 }}>
//       {/* {highlightLastWords(heading2, 4)} */}
//     </h2>
//     <h3 className="font xl:w-[440px] mt-5 text-[14px] md:text-[23px]  mb-4"dangerouslySetInnerHTML={{ __html: subHeading2 }}>
//       {/* {subHeading2} */}
//     </h3>
//     <p className="lg:w-[530px] text-[11px] sm:text-base m[14px] md:text-[17px] leading-normal">
//       {description2}
//     </p>
//   </div>
// </div>


//       {/* <img
//         src="/design2.png"
//         alt="Decorative"
//         className="lg:block absolute hidden top-[16rem] z-0 left-0 xl:w-[500px] w-[300px] fit 80"
//       /> */}
//       {pathname === "/" && (
//         <img
//           src="/design2.png"
//           alt="Decorative"
//           className="lg:block absolute hidden top-[33rem] z-0 left-0 xl:w-[300px] w-[300px]"
//         />
//       )}
      
//     </section>
//   );
// };

// export default AIEfficiencySection;
import React from 'react'
import {
  getValueByFieldNameAndPosition,
  COMMON_FIELD_NAMES,
  getImageAltTextByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const AIEfficiencySection = ({ data, color }) => {
  const heading2 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "What’s New in A  Data";
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
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
  const image1 =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
    "/fallback-img.png";
  const image1AltText =
    getImageAltTextByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE) || "";

  return (
    <section className="relative md:px20 lg:px-36 px-10 py10 bg-white">
      <div className="relative z-10 max-w-[1200px] mx-auto flex md:flex-row-reverse flex-col items-center gap-10">

        {/* Right Image */}
        <div className="relative flex justify-center md:w-[45%] lg:w-[40%] order-1 md:order-1">
          <img
            src={`${Image_URL}${image1}`}
            alt={image1AltText}
            className="rounded-2xl object-contain w-full h-auto max-w-[800px]"
          />
        </div>

        {/* Left Content */}
        <div className="md:w-[55%] w-full text-left order-2 md:order-2">
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

          <h2
            className="text-2xl sm:text-4xl xl:text-4xl 2xl:text-6xl leading-tight"
            dangerouslySetInnerHTML={{ __html: heading2 }}
          ></h2>

          <h3
            className="mt-4 text-[17px] lg:text-xl mb-4 md:w-[440px]"
            dangerouslySetInnerHTML={{ __html: subHeading2 }}
          ></h3>

          <p className="md:w-[530px] text-[11px] sm:text-base md:text-[14px] xl:text-[17px] leading-normal">
            {description2}
          </p>

          {btn && (
            <button className="mt-5 bg-[#1A7D85] text-white font-medium px-3 py-1 rounded-full transition duration-300">
              {btn}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIEfficiencySection;
