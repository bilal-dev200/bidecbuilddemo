// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// export default function ShopifyAppTypes() {
//   const [selectedIndex, setSelectedIndex] = useState(1); // 0=Private, 1=Public, 2=Integration

//   const cards = [
//     {
//       title: "Private",
//       desc: "Build secure, in-house Shopify apps that deliver advanced features and customized solutions exclusively for your store’s needs.",
//     },
//     {
//       title: "Public",
//       desc: "From concept to launch, we create     -quality Shopify apps that can be published on the Shopify App Store to reach a wider audience.",
//     },
//     {
//       title: "Private",
//       desc: "Build secure, in-house Shopify apps that deliver advanced features and customized solutions exclusively for your store’s needs.",
//     },
//     {
//       title: "Public",
//       desc: "From concept to launch, we create high-quality Shopify apps that can be published on the Shopify App Store to reach a wider audience.",
//     },
//     {
//       title: "Integration",
//       desc: "Connect your store smoothly with CRMs, ERPs, payment gateways, and third-party APIs to improve efficiency and performance.",
//     },
//   ];

//   const handleNext = () => {
//     setSelectedIndex((prev) => (prev + 1) % cards.length); // loop through cards
//   };
//   const handleBack = () => {
//     setSelectedIndex((prev) => (prev - 1 + cards.length1) % cards.length); // loop through cards
//   };

//   return (
//     <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-20">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-5xl font-light text-gray-900">
//           Shopify App{" "}
//           <span className="font-semibold text-[#95BF47]">Types We Cover</span>
//         </h2>
//       </div>

//         {/* Main Container */}
//         <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 max-w-[1200px] mx-auto">
//           {cards.length > 2 && (
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={handleBack}
//                 aria-label="Next Type"
//                 className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           )}
//           {/* LEFT SECTION (Cards) */}
//           <div className="flex-1 flex flex-col gap-6 w-full">
//             {cards.slice(selectedIndex, selectedIndex + 1).map((card, index) => {
//               const isSelected = index === selectedIndex;

//               return (
//                 <div
//                   key={index}
//                   className={`rounded-lg p-5 md:p-6 lg:w-[90%] transition-all duration-300 ${
//                     isSelected
//                       ? "bg-[#1A7D85] text-white shadow-lg scale-[1.04] z-10"
//                       : "border border-gray-200 text-gray-700 hover:shadow-md"
//                   }`}
//                 >
//                   <h3
//                     className={`font-semibold text-lg mb-2 ${
//                       isSelected ? "text-white" : "text-gray-800"
//                     }`}
//                   >
//                     {card.title}
//                   </h3>
//                   <p
//                     className={`text-sm leading-relaxed ${
//                       isSelected ? "text-white" : "text-gray-500"
//                     }`}
//                   >
//                     {card.desc}
//                   </p>
//                 </div>
//               );
//             })}

//             {/* Down Arrow Button */}
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={handleNext}
//                 aria-label="Next Type"
//                 className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6 animate-bounce"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SECTION (Single grouped image) */}
//           <div className="flex-1 flex flex-col items-center lg:items-end relative w-full">
//             <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-auto">
//               <div className="relative w-full aspect-[3/4]">
//                 <Image
//                   src="/shopifygrouped.png"
//                   alt="Shopify App image"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { getFieldValue, getRobustFieldValuesByName, COMMON_FIELD_NAMES, highlightText } from "@/lib/utils/sectionDataHelpers";

// export default function ShopifyAppTypes({data}) {
//   const [selectedIndex, setSelectedIndex] = useState(0);
// console.log(data,"types we cover")
//   const cards = [
//     {
//       title: "Private",
//       desc: "Build secure, in-house Shopify apps that deliver advanced features and customized solutions exclusively for your store’s needs.",
//     },
//     {
//       title: "Public",
//       desc: "From concept to launch, we create high-quality Shopify apps that can be published on the Shopify App Store to reach a wider audience.",
//     },
//     {
//       title: "Integration",
//       desc: "Connect your store smoothly with CRMs, ERPs, payment gateways, and third-party APIs to improve efficiency and performance.",
//     },
//     {
//       title: "Custom",
//       desc: "We tailor Shopify apps to match your business model and workflows for seamless store operations and growth.",
//     },
//     {
//       title: "Automation",
//       desc: "Save time and boost accuracy with automated solutions integrated directly into your Shopify ecosystem.",
//     },
//     {
//       title: "Analytics",
//       desc: "Gain powerful insights with custom dashboards and integrated analytics tools tailored for your business.",
//     },
//     {
//       title: "Private",
//       desc: "Build secure, in-house Shopify apps that deliver advanced features and customized solutions exclusively for your store’s needs.",
//     },
//     {
//       title: "Public",
//       desc: "From concept to launch, we create high-quality Shopify apps that can be published on the Shopify App Store to reach a wider audience.",
//     },
//     {
//       title: "Integration",
//       desc: "Connect your store smoothly with CRMs, ERPs, payment gateways, and third-party APIs to improve efficiency and performance.",
//     },
//     {
//       title: "Custom",
//       desc: "We tailor Shopify apps to match your business model and workflows for seamless store operations and growth.",
//     },
//     {
//       title: "Automation",
//       desc: "Save time and boost accuracy with automated solutions integrated directly into your Shopify ecosystem.",
//     },
//     {
//       title: "Analytics",
//       desc: "Gain powerful insights with custom dashboards and integrated analytics tools tailored for your business.",
//     },
//   ];

//    const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
   
  
//     // ✅ Extract steps
//     const featureTitles = getRobustFieldValuesByName(
//       data,
//       COMMON_FIELD_NAMES.FEATURE_TITLE
//     );
//     const featureDescriptions = getRobustFieldValuesByName(
//       data,
//       COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//     );
  
//     const steps = featureTitles.map((titleObj, index) => ({
//       id: index + 1,
//       title: titleObj.value,
//       desc: featureDescriptions[index]?.value || "",
//     }));

//   // Navigation handlers
//   const handleNext = () => {
//     if (selectedIndex + 3 < cards.length) {
//       setSelectedIndex(selectedIndex + 1);
//     }
//   };

//   const handleBack = () => {
//     if (selectedIndex - 3 >= 0) {
//       setSelectedIndex(selectedIndex - 1);
//     }
//   };

//   // Slice visible 3 cards
//   const visibleCards = cards.slice(selectedIndex, selectedIndex + 3);

//   return (
//     <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-20">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-5xl font-light text-gray-900">
//           Shopify App{" "}
//           <span className="font-semibold text-[#95BF47]">Types We Cover</span>
//         </h2>
//       </div>

//       {/* Main Container */}
//       <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 max-w-7xl mx-auto">
//         {/* LEFT SECTION (Cards) */}
//         <div className="flex-1 flex flex-col gap-6 w-full">
//           {/* BACK Button — only visible if index ≥ 3 */}
//           {selectedIndex >= 3 && (
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={handleBack}
//                 aria-label="Previous Batch"
//                 className="w-10 h-10 flex items-center justify-center  text-gray-700  transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6 rotate-180"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           )}

//           {/* Show 3 Cards */}
//           <div className="flex flex-col gap-6 w-full">
//             {visibleCards.map((card, index) => {
//               const isCenter = index === 1; 
//               return (
//                 <div
//                   key={index}
//                   className={`rounded-lg p-6 md:p-8 transition-all duration-300 ${
//                     isCenter
//                       ? "bg-[#1A7D85] text-white shadow-lg scale-[1.04] w-full"
//                       : "border border-gray-200 text-[#000000]  hover:shadow-md w-[90%] mx-auto"
//                   }`}
//                 >
//                   <h3
//                     className={`ebrima-bold text-lg mb-2 ${
//                       isCenter ? "text-white" : "text-[#000000]"
//                     }`}
//                   >
//                     {card.title}
//                   </h3>
//                   <p
//                     className={`text-sm leading-relaxed ${
//                       isCenter ? "text-white/90" : "text-gray-500"
//                     }`}
//                   >
//                     {card.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* NEXT Button — only visible if more cards remain */}
//           {selectedIndex + 3 < cards.length && (
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={handleNext}
//                 aria-label="Next Batch"
//                 className="w-10 h-10 flex items-center justify-center   text-gray-700  transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>

//         {/* RIGHT SECTION (Image) */}
//         <div className="flex-1 flex flex-col items-center lg:items-end relative w-full">
//           <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-auto">
//             <div className="relative w-full aspect-[3/4]">
//               <Image
//                 src="/shopifygrouped.png"
//                 alt="Shopify App image"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import {
//   getFieldValue,
//   getRobustFieldValuesByName,
//   COMMON_FIELD_NAMES,
//   getValueByFieldNameAndPosition
// } from "@/lib/utils/sectionDataHelpers";

// export default function ShopifyAppTypes({ data ,color }) {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   console.log(data, "types we cover");

//   // ✅ Dynamic heading from admin
//   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);

//   // ✅ Titles and Descriptions from admin
//   const featureTitles = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_TITLE
//   );
//     const buttonText =
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0);
  
//   const featureDescriptions = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//   );

//   // ✅ Map into usable array
//   const cards = featureTitles.map((titleObj, index) => ({
//     id: index + 1,
//     title: titleObj?.value || "",
//     desc: featureDescriptions[index]?.value || "",
//   }));

//   // ✅ Handle next/previous navigation
//   const handleNext = () => {
//     if (selectedIndex + 3 < cards.length) {
//       setSelectedIndex(selectedIndex + 1);
//     }
//   };

//   const handleBack = () => {
//     if (selectedIndex - 3 >= 0) {
//       setSelectedIndex(selectedIndex - 1);
//     }
//   };

//   // ✅ Show 3 cards at a time
//   const visibleCards = cards.slice(selectedIndex, selectedIndex + 3);

//   return (
//     <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-20">
//       {/* ✅ Heading from admin */}
//       <div className="text-center mb-12">
//     <h2 className=
//         "text-2xl sm:text-4xl mx-auto  xl:text-5xl 2xl:text-6xl text-center leading-none">
//           {(() => {
//             const words = heading.split(" ");
//             const lastWords = words.slice(-2).join(" ");
//             const firstPart = words.slice(0, -2).join(" ");
//             return (
//               <>
//                 {firstPart}{" "}
//               <span
//           className="ebrima-bold font-bold"
//           style={{ color: color || "#1A7D85" }}
//         >
//           {lastWords}
//         </span>
//               </>
//             );
//           })()}
//         </h2>
//       </div>

//       {/* ✅ Main Container */}
//       <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 max-w-7xl mx-auto">
//         {/* ✅ LEFT SECTION — Cards */}
//         <div className="flex-1 flex flex-col gap-6 w-full">
//           {selectedIndex >= 3 && (
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={handleBack}
//                 aria-label="Previous Batch"
//                 className="w-10 h-10 flex items-center justify-center text-gray-700 transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6 rotate-180"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           )}

//           {/* ✅ Cards Mapping */}
//           <div className="flex flex-col gap-6 w-full">
//             {visibleCards.map((card, index) => {
//               const isCenter = index === 1;
//               return (
//                 <div
//                   key={index}
//                   className={`rounded-lg p-6 md:p-8 transition-all duration-300 ${
//                     isCenter
//                       ? "bg-[#1A7D85] text-white shadow-lg scale-[1.04] w-full"
//                       : "border border-gray-200 text-[#000000] hover:shadow-md w-[90%] mx-auto"
//                   }`}
//                 >
//                   <h3
//                     className={`ebrima-bold text-lg mb-2 ${
//                       isCenter ? "text-white" : "text-[#000000]"
//                     }`}
//                   >
//                     {card.title}
//                   </h3>
//                   <p
//                     className={`text-sm leading-relaxed ${
//                       isCenter ? "text-white/90" : "text-gray-500"
//                     }`}
//                   >
//                     {card.desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* ✅ NEXT Button */}
//           {selectedIndex + 3 < cards.length && (
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={handleNext}
//                 aria-label="Next Batch"
//                 className="w-10 h-10 flex items-center justify-center text-gray-700 transition-all"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>

//         {/* ✅ RIGHT SECTION — Image */}
//         <div className="flex-1 flex flex-col items-center lg:items-end relative w-full">
//           <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-auto">
//             <div className="relative w-full aspect-[3/4]">
//               <Image
//                 src="/shopifygrouped.png"
//                 alt="Shopify App image"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//    {buttonText && (
//             <div className="mt-10 flex justify-center">
//               <button
//                 className="px-8 py-3 bg-[#1A7D85] text-white font-semibold rounded-full transition-all"
//                 // style={{
//                 //   backgroundColor: color || "#1A7D85",
//                 // }}
//               >
//                 {buttonText}
//               </button>
//             </div>
//           )}


//     </section>
//   );
// }
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  getFieldValue,
  getRobustFieldValuesByName,
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";

export default function ShopifyAppTypes({ data, color }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // ✅ Dynamic heading from admin
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);

  // ✅ Titles and Descriptions from admin
  const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
  const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
  const buttonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0);

  // ✅ Prepare cards
  const cards = featureTitles.map((titleObj, index) => ({
    id: index + 1,
    title: titleObj?.value || "",
    desc: featureDescriptions[index]?.value || "",
  }));

  // ✅ Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        if (prevIndex + 3 >= cards.length) return 0; // restart when reaching end
        return prevIndex + 1;
      });
    }, 1000); // every 3 seconds
    return () => clearInterval(interval);
  }, [cards.length]);

  // ✅ Show 3 cards at a time
  const visibleCards = cards.slice(selectedIndex, selectedIndex + 3);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-20">
      {/* ✅ Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl leading-none"   dangerouslySetInnerHTML={{ __html: heading }}
>
          {/* {(() => {
            const words = heading.split(" ");
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
          })()} */}
        </h2>
      </div>

      {/* ✅ Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
        {/* ✅ LEFT SIDE — Auto sliding cards */}
        <div className="flex-1 flex flex-col gap-6 w-full transition-all duration-500">
          {visibleCards.map((card, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={index}
                className={`rounded-lg p-6 md:p-8 transition-all duration-500 ${
                  isCenter
                    ? "bg-[#1A7D85] text-white shadow-lg scale-[1.04] w-full"
                    : "border border-gray-200 text-[#000000] hover:shadow-md w-[90%] mx-auto"
                }`}
              >
                <h3
                  className={`ebrima-bold text-lg mb-2 ${
                    isCenter ? "text-white" : "text-[#000000]"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isCenter ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ✅ RIGHT SIDE — Image */}
        <div className="flex-1 flex flex-col items-center lg:items-end relative w-full">
          <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-auto">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/shopifygrouped.png"
                alt="Shopify App image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Button (optional) */}
      {buttonText && (
        <div className="mt-10 flex justify-center">
          <button
            className="px-8 py-3 bg-[#1A7D85] text-white font-semibold rounded-full transition-all"
          >
            {buttonText}
          </button>
        </div>
      )}
    </section>
  );
}
