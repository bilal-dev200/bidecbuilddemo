
// import React from "react";
// import { Image_URL } from "@/config/constants";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";

// const ShopifyOptimizationSection = ({data,color}) => {
//   const services = [
//     {
//       title: "Shopify Speed Audits",
//       description:
//         "We perform a complete speed audit to find bottlenecks like unoptimized apps, bloated themes, or large files slowing your store.",
//     },
//     {
//       title: "App & Code Optimization",
//       description:
//         "We remove redundant code, optimize app usage, and streamline your Shopify theme for faster rendering and loading speed.",
//     },
//     {
//       title: "Image Compression & CDN Setup",
//       description:
//         "We compress images without quality loss and integrate a global CDN for faster image delivery worldwide.",
//     },
//     {
//       title: "Lazy Loading Implementation",
//       description:
//         "We enable lazy loading for images and scripts so your site loads key elements first, improving the user experience and SEO.",
//     },
//     {
//       title: "Core Web Vitals Enhancement",
//       description:
//         "We fine-tune your store’s LCP, FID, and CLS metrics to boost your Core Web Vitals score and achieve faster load times.",
//     },
//     {
//       title: "Theme Optimization & Cleanup",
//       description:
//         "We clean your theme code, remove unused assets, and improve Liquid logic for faster page rendering and stability.",
//     },
//     {
//       title: "Custom Script Optimization",
//       description:
//         "We analyze third-party scripts and optimize or defer them to enhance store speed without losing key functionality.",
//     },
//   ];
//     const background = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";
  
// const heading =
//     getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
//     "";
//      const featureTitles =
//         getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
//       const featureDescriptions =
//         getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION) ||
//         [];

//   return (
//     <section
//       className="relative text-white py-20 px-6 bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/bg-pattern.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#0B1C17]/90"></div>

//       <div className="relative z-10 max-w-[1200px] mx-auto text-center">
//         <h2 className="text-3xl md:text-5xl font-semibold mb-3">
//           Our Shopify Speed
//         </h2>
//       </div>

//       {/* Services Grid */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-w-[1200px] mx-auto">
//         {services.map((service, index) => {
//           const isLast = index === services.length - 1;
//           const isOddCount = services.length % 2 !== 0;
//           const isCenter = isOddCount && isLast;

//           return (
//             <div
//               key={index}
//               className={`relative pb-6 ${
//                 isCenter
//                   ? "md:col-span-2 flex flex-col items-center text-center"
//                   : ""
//               }`}
//             >
//               {/* Title Row */}
//               <div className="flex items-center mb-2">
//                 <div className="flex items-center">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <div className="w-6 h-[2px] bg-white"></div>
//                 </div>

//                 <h4 className="text-xl ml-3 font-semibold text-white">
//                   {service.title}
//                 </h4>
//               </div>

//               {/* Dynamic Description */}
//               <p
//                 className={`text-gray-300 text-sm leading-relaxed ${
//                   isCenter ? "text-center w-[700px]" : "ml-10"
//                 }`}
//               >
//                 {service.description}
//               </p>

//               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 mt-4"></div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Button */}
//       <div className="relative z-10 text-center mt-16">
//         <button className="bg-green-400 hover:bg-green-500 text-[#0B1C17] font-semibold py-3 px-8 rounded-full transition-all duration-300">
//           Hire Shopify Optimization Experts
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ShopifyOptimizationSection;
// import React from "react";
// import { Image_URL } from "@/config/constants";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";

// const ShopifyOptimizationSection = ({ data, color }) => {
//   // ✅ Fetching data from CMS
//   const background = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";
//   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
//   const colorsss = getFieldValue(data, COMMON_FIELD_NAMES.BOOLEANVALUE) || "";

//   const featureTitles =
//     getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
//   const featureDescriptions =
//     getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.DESCRIPTION) ||
//     [];
//   const featureImages =
//     getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE) || [];

//   // ✅ Dynamically create services array
//   const services = featureTitles.map((title, index) => ({
//     title: title.value,
//     description: featureDescriptions[index]?.value || "",
//     icon: featureImages[index]
//       ? `${Image_URL}${featureImages[index]?.value}`
//       : "",
//   }));

//   return (
//     <div className="max-w-[1200px] mx-auto ">
//     <section
//       className="relative text-white py-20 px-10 bg-cover rounded-2xl bg-center"
//       style={{
//         backgroundImage: background ? `url(${Image_URL}${background})` : "url('/bg-pattern.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       {/* <div className="absolute inset-0 bg-[#0B1C17]/90"></div> */}

//       {/* Heading */}
//       <div className="relative z-10 max-w-[1200px] mx-auto text-center">
//         <h2 className="text-3xl md:text-5xl font-semibold mb-3"
//           dangerouslySetInnerHTML={{ __html: heading }}
// >
//         </h2>
//       </div>

//       {/* Services Grid */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-w-[1200px] mx-auto">
//         {services.map((service, index) => {
//           const isLast = index === services.length - 1;
//           const isOddCount = services.length % 2 !== 0;
//           const isCenter = isOddCount && isLast;

//           return (
//             <div
//               key={index}
//               className={`relative pb-6 ${
//                 isCenter
//                   ? "md:col-span-2 flex flex-col items-center text-center"
//                   : ""
//               }`}
//             >
//               {/* Title Row */}
//               <div className="flex items-center mb-2">
//                 <div className="flex items-center">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                   <div className="w-6 h-[2px] bg-white"></div>
//                 </div>

//                 <h4 className="text-xl ml-3 font-semibold text-white">
//                   {service.title}
//                 </h4>
//               </div>

//               {/* Description */}
//               <p
//                 className={`text-gray-300 text-sm leading-relaxed ${
//                   isCenter ? "text-center w-[700px]" : "ml-10"
//                 }`}
//               >
//                 {service.description}
//               </p>

//               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 mt-4"></div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Button */}
//       <div className="relative z-10 text-center mt-16">
//         <button className="bg-green-400 hover:bg-green-500 text-[#0B1C17] font-semibold py-3 px-8 rounded-full transition-all duration-300">
//           Hire Shopify Optimization Experts
//         </button>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default ShopifyOptimizationSection;
import React from "react";
import { Image_URL } from "@/config/constants";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition
} from "@/lib/utils/sectionDataHelpers";
import AppButton from "../homeComp/AppButton";

const ShopifyOptimizationSection = ({ data, color }) => {
  // ✅ Fetching data from CMS
  const background = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";
   const btn =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
        "";
    const buttoncolor =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
        "";
    const btnlink =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
        "";

  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  const colorsss = getFieldValue(data, COMMON_FIELD_NAMES.BOOLEANVALUE) || "";

  const featureTitles =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
  const featureDescriptions =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.DESCRIPTION) || [];
  const featureImages =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE) || [];

  // ✅ Dynamically create services array
  const services = featureTitles.map((title, index) => ({
    title: title.value,
    description: featureDescriptions[index]?.value || "",
    icon: featureImages[index]
      ? `${Image_URL}${featureImages[index]?.value}`
      : "",
  }));

  // ✅ Dynamic color handling
  const textColor = colorsss == 1 ? "text-black" : "text-white";
  const subTextColor = colorsss == 1 ? "text-black" : "text-gray-300";
  const lineColor = colorsss == 1 ? "bg-black/20" : "bg-white/20";
  const dotColor = colorsss == 1 ? "bg-[#1A7D85]" : "bg-white";
  const lineBetweenDot = colorsss == 1 ? "bg-[#1A7D85]" : "bg-white";
  const buttonColor = color || "#22C55E"; 

  return (
    <>
    <div className="max-w-[1200px] mx-auto">
      <section
        className={`relative py-20 px-10 bg-cover rounded-2xl bg-center ${textColor}`}
        style={{
          backgroundImage: background
            ? `url(${Image_URL}${background})`
            : "url('/bg-pattern.jpg')",
        }}
      >
        {/* Heading */}
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <h2
            className={`text-3xl md:text-5xl mx-auto font-semibold mb-3 ${textColor}`}
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>
        </div>

        {/* Services Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-w-[1200px] mx-auto">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            const isOddCount = services.length % 2 !== 0;
            const isCenter = isOddCount && isLast;

            return (
              <div
                key={index}
                className={`relative pb-6 ${
                  isCenter
                    ? "md:col-span-2 flex flex-col items-center text-center"
                    : ""
                }`}
              >
                {/* Title Row */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 ${dotColor} rounded-full`}></div>
                    <div className={`w-6 h-[2px] ${lineBetweenDot}`}></div>
                  </div>

                    <h4 className={`text-xl ml-3 font-semibold ${textColor}`}>
                      {service.title}
                    </h4>
                </div>

                {/* Description */}
                <p
                  className={`${subTextColor} text-sm leading-relaxed ${
                    isCenter ? "text-center w-[700px]" : "ml-10"
                  }`}
                >
                  {service.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 w-full h-[1px] ${lineColor} mt-4`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        {/* <div className="relative z-10 text-center mt-16">
         <button
            className="text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            style={{
              backgroundColor: buttonColor,
            }}
           
          >
            {button}
          </button>
        </div> */}
      </section>
    </div>
      <AppButton
                text={btn}
                color={buttoncolor}
                link={btnlink}
            // onClick={() => console.log("Button clicked")} 
            />
</>
  );
};

export default ShopifyOptimizationSection;
