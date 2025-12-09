// // "use client";
// // import { useState } from "react";
// // import Image from "next/image";
// // import {
// //   COMMON_FIELD_NAMES,
// //   getFieldValue,
// //   getRobustFieldValuesByName,
// //   highlightText,
// // } from "@/lib/utils/sectionDataHelpers";
// // import { Image_URL } from "@/config/constants";

// // export default function IndustriesSection({ data }) {
// //   const [showCards, setShowCards] = useState(false); // ✅ Toggle state

// //   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
// //   const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
// //   const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);

// //   const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
// //   const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
// //   const list1 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST1);
// //   const list2 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST2);
// //   const list3 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST3);
// //   const list4 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST4);
// //   const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);

// //   const industries = featureTitles.map((title, idx) => ({
// //     title: title?.value || "",
// //     text: featureDescriptions[idx]?.value || "",
// //     img: featureImages[idx]?.value ? `${Image_URL}${featureImages[idx]?.value}` : "/placeholder.png",
// //     list1: list1[idx]?.value || "",
// //     list2: list2[idx]?.value || "",
// //     list3: list3[idx]?.value || "",
// //     list4: list4[idx]?.value || "",
// //   }));

// //   return (
// //     <div className="relative overflow-hidden">
// //       <section className="mx-auto relative">
// //         <div className="text-center">
// //           {/* 🖤 Black Section */}
// //           <div className="w-full bg-[#0C1A16] text-center px-4 pt-12 pb-28 md:pb-44">
// //             <div className="max-w-5xl mx-auto">
// //               <p className="text-[15px] tracking-wide text-white mb-2">{subHeading}</p>
// //               <h2 className="text-3xl md:text-6xl text-white mb-4">{highlightText(heading, 34, 54, "")}</h2>
// //               <p className="max-w-7xl mx-auto text-[14px] text-white mb-10 px-4">
// //                 {description ||
// //                   "At Bidec, we combine domain expertise with advanced technologies like IoT and AI/ML to deliver innovative mobile solutions across diverse industries."}
// //               </p>
// //             </div>
// //           </div>

// //           {/* 🤍 White Cards Section */}
// //           <div className="relative max-w-[1200px] mx-auto -mt-20 md:-mt-48 px-4">
// //             <div className="absolute right-0 top-[20%] w-[420px] h-[420px] -z-10 opacity-70">
// //               <Image src="/blur.png" alt="Background decorative" fill className="object-contain" />
// //             </div>

// //             {/* ✅ Show cards only when Read More clicked */}
// //             {showCards && (
// //               <div className="columns-1 mt-5 md:columns-2 gap-8 relative transition-all duration-500 ease-in-out">
// //                 {industries.map((item, idx) => (
// //                   <div
// //                     key={idx}
// //                     className={`relative mb-8 break-inside-avoid bg-white rounded-xl shadow-md overflow-hidden text-left p-5 hover:shadow-lg transition`}
// //                   >
// //                     <div className="relative w-full mb-5">
// //                       <img
// //                         src={item.img}
// //                         alt={item.title}
// //                         className={`object-cover w-full rounded-lg 
// //                           ${idx === 0
// //                             ? "h-40"
// //                             : idx === 1
// //                               ? "h-[408px]"
// //                               : idx === 2
// //                                 ? "h-86"
// //                                 : idx === 3
// //                                   ? "h-56"
// //                                   : "h-96"
// //                           }`}
// //                       />
// //                     </div>

// //                     <h3 className="text-xl text-[#1A7D85] font-semibold mb-3">{item.title}</h3>
// //                     <p className="text-[14px] leading-relaxed">{item.text}</p>

// //                     <ul className="list-disc marker:text-[#1A7D85] text-black text-sm pl-4 mt-4">
// //                       {idx === 0 && list1.map((li, i) => <li key={i}>{li?.value}</li>)}
// //                       {idx === 1 && list2.map((li, i) => <li key={i}>{li?.value}</li>)}
// //                       {idx === 2 && list3.map((li, i) => <li key={i}>{li?.value}</li>)}
// //                       {idx === 3 && list4.map((li, i) => <li key={i}>{li?.value}</li>)}
// //                     </ul>
// //                   </div>
// //                 ))}
// //               </div>
// //             )}

// //             {/* ✅ Button Centered */}
// //             <div className="flex justify-center mt-10 mb-10 relative">
// //               <button
// //                 onClick={() => setShowCards(!showCards)}
// //                 className="px-8 py-3 bg-[#1A7D85] text-white rounded-full hover:bg-[#156A72] transition"
// //               >
// //                 {showCards ? "Read Less" : "Read More"}
// //               </button>

// //               <div className="absolute -right-44 bottom-[-220px] w-[500px] h-[500px] opacity-30">
// //                 <Image src="/blur1.png" alt="Bottom decorative" fill className="object-contain" />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
//   highlightText,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// export default function IndustriesSection({ data }) {
//   const [showExtra, setShowExtra] = useState(false);

//   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
//   const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
//   const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);

//   const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
//   const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
//   const list1 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST1);
//   const list2 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST2);
//   const list3 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST3);
//   const list4 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST4);
//   const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);

//   const industries = featureTitles.map((title, idx) => ({
//     title: title?.value || "",
//     text: featureDescriptions[idx]?.value || "",
//     img: featureImages[idx]?.value ? `${Image_URL}${featureImages[idx]?.value}` : "/placeholder.png",
//     lists: [
//       list1[idx]?.value || "",
//       list2[idx]?.value || "",
//       list3[idx]?.value || "",
//       list4[idx]?.value || ""
//     ]
//   }));

//   const firstFour = industries.slice(0, Math.min(4, industries.length));
//   const extras = industries.slice(4); // 5th and beyond, if any

//   return (
//     <div className="relative overflow-hidden">
//       <section className="mx-auto relative">
//         <div className="text-center">
//           {/* Black header */}
//           <div className="w-full bg-[#0C1A16] text-center px-4 pt-12 pb-28 md:pb-44">
//             <div className="max-w-5xl mx-auto">
//               <p className="text-[15px] tracking-wide text-white mb-2">{subHeading}</p>
//               <h2 className="text-3xl md:text-6xl text-white mb-4">{highlightText(heading, 34, 54, "")}</h2>
//               <p className="max-w-7xl mx-auto text-[14px] text-white mb-10 px-4">
//                 {description ||
//                   "At Bidec, we combine domain expertise with advanced technologies like IoT and AI/ML to deliver innovative mobile solutions across diverse industries."}
//               </p>
//             </div>
//           </div>

//           {/* White cards */}
//           <div className="relative max-w-[1200px] mx-auto -mt-20 md:-mt-48 px-4">
//             <div className="absolute right-0 top-[20%] w-[420px] h-[420px] -z-10 opacity-70">
//               <Image src="/blur.png" alt="Background decorative" fill className="object-contain" />
//             </div>

//             <div className="columns-1 mt-5 md:columns-2 gap-8 relative">
//               {/* Always visible: first 4 */}
//               {firstFour.map((item, idx) => (
//                 <div
//                   key={`card-${idx}`}
//                   className="relative mb-8 break-inside-avoid bg-white rounded-xl shadow-md overflow-hidden text-left p-5 hover:shadow-lg transition"
//                 >
//                   <div className="relative w-full mb-5">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className={`object-cover w-full rounded-lg 
//                         ${idx === 0 ? "h-40" : idx === 1 ? "h-[408px]" : idx === 2 ? "h-86" : "h-56"}`}
//                     />
//                   </div>

//                   <h3 className="text-xl text-[#1A7D85] font-semibold mb-3">{item.title}</h3>
//                   <p className="text-[14px] leading-relaxed">{item.text}</p>

//                   <ul className="list-disc marker:text-[#1A7D85] text-black text-sm pl-4 mt-4">
//                     {/* show only non-empty list items */}
//                     {item.lists.filter(Boolean).map((li, i) => (
//                       <li key={i}>{li}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}

//               {/* Extras (5th+) — show only when toggled */}
//               {showExtra &&
//                 extras.map((item, idx) => {
//                   // idx here starts from 0 for the extras slice; compute global index for height choices if needed
//                   const globalIdx = 4 + idx;
//                   return (
//                     <div
//                       key={`extra-${idx}`}
//                       // force the first extra (5th) to break-before column on md so it appears left column top
//                       className={`relative mb-8 break-inside-avoid bg-white rounded-xl shadow-md overflow-hidden text-left p-5 hover:shadow-lg transition ${idx === 0 ? "md:break-before-column" : ""}`}
//                     >
//                       <div className="relative w-full mb-5">
//                         <img
//                           src={item.img}
//                           alt={item.title}
//                           className={`object-cover w-full rounded-lg 
//                             ${globalIdx === 0 ? "h-40" : globalIdx === 1 ? "h-[408px]" : globalIdx === 2 ? "h-86" : globalIdx === 3 ? "h-56" : "h-96"}`}
//                         />
//                       </div>

//                       <h3 className="text-xl text-[#1A7D85] font-semibold mb-3">{item.title}</h3>
//                       <p className="text-[14px] leading-relaxed">{item.text}</p>

//                       <ul className="list-disc marker:text-[#1A7D85] text-black text-sm pl-4 mt-4">
//                         {item.lists.filter(Boolean).map((li, i) => <li key={i}>{li}</li>)}
//                       </ul>
//                     </div>
//                   );
//                 })}
//             </div>

//             {/* Button */}
//             <div className="flex justify-center mt-10 mb-10 relative">
//               {extras.length > 0 && (
//                 <button
//                   onClick={() => setShowExtra(prev => !prev)}
//                   className="px-8 py-3 bg-[#1A7D85] text-white rounded-full hover:bg-[#156A72] transition"
//                 >
//                   {showExtra ? "Read Less" : "Read More"}
//                 </button>
//               )}

//               <div className="absolute -right-44 bottom-[-220px] w-[500px] h-[500px] opacity-30">
//                 <Image src="/blur1.png" alt="Bottom decorative" fill className="object-contain" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// "use client";
// import Image from "next/image";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
//   highlightText,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";
// import { useState } from "react";

// export default function IndustriesSection({ data }) {
//   const [showAll, setShowAll] = useState(false);

//   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
//   const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
//   const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
//   const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
//   const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
//   const list1 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST1);
//   const list2 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST2);
//   const list3 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST3);
//   const list4 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST4);
//   const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);

//   const industries = featureTitles.map((title, idx) => ({
//     title: title?.value || "",
//     text: featureDescriptions[idx]?.value || "",
//     img: featureImages[idx]?.value ? `${Image_URL}${featureImages[idx]?.value}` : "/placeholder.png",
//     list1: list1[idx]?.value || "",
//     list2: list2[idx]?.value || "",
//     list3: list3[idx]?.value || "",
//     list4: list4[idx]?.value || "",
//   }));

//   // ✅ Show first 4 always, 5th only if showAll = true
//   const visibleIndustries = showAll ? industries : industries.slice(0, 4);

//   return (
//     <div className="relative overflow-hidden">
//       <section className="mx-auto relative">
//         <div className="text-center">
//           {/* 🖤 Black Section */}
//           <div className="w-full bg-[#0C1A16] text-center px-4 pt-12 pb-28 md:pb-44">
//             <div className="max-w-5xl mx-auto">
//               <p className="text-[15px] tracking-wide text-white mb-2">{subHeading}</p>
//               <h2 className="text-3xl md:text-6xl text-white mb-4">
//                 {highlightText(heading, 34, 54, "")}
//               </h2>
//               <p className="max-w-7xl mx-auto text-[14px] text-white mb-10 px-4">
//                 {description ||
//                   "At Bidec, we combine domain expertise with advanced technologies like IoT and AI/ML to deliver innovative mobile solutions across diverse industries."}
//               </p>
//             </div>
//           </div>

//           {/* 🤍 White Cards Section */}
//           <div className="relative max-w-[1200px] mx-auto -mt-20 md:-mt-48 px-4">
//             {/* 🌊 Right-side background image */}
//             <div className="absolute right-0 top-[20%] w-[420px] h-[420px] -z-10 opacity-70">
//               <Image src="/blur.png" alt="Background decorative" fill className="object-contain" />
//             </div>

//             <div className="columns-1 mt-5 md:columns-2 gap-8 relative">
//               {visibleIndustries.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="relative mb-8 break-inside-avoid bg-white rounded-xl shadow-md overflow-hidden text-left p-5 hover:shadow-lg transition"
//                 >
//                   <div className="relative w-full mb-5">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className={`object-cover w-full rounded-lg ${
//                         idx === 0
//                           ? "h-40"
//                           : idx === 1
//                           ? "h-[408px]"
//                           : idx === 2
//                           ? "h-86"
//                           : idx === 3
//                           ? "h-56"
//                           : "h-96"
//                       }`}
//                     />
//                   </div>

//                   <h3 className="text-xl text-[#1A7D85] font-semibold mb-3">{item.title}</h3>
//                   <p className="text-[14px] leading-relaxed">{item.text}</p>

//                   <ul className="list-disc marker:text-[#1A7D85] text-black text-sm pl-4 mt-4">
//                     {idx === 0 &&
//                       list1.map((li, i) => (
//                         <li key={i}>{li?.value}</li>
//                       ))}
//                     {idx === 1 &&
//                       list2.map((li, i) => (
//                         <li key={i}>{li?.value}</li>
//                       ))}
//                     {idx === 2 &&
//                       list3.map((li, i) => (
//                         <li key={i}>{li?.value}</li>
//                       ))}
//                     {idx === 3 &&
//                       list4.map((li, i) => (
//                         <li key={i}>{li?.value}</li>
//                       ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//             {/* ✅ Button Centered */}
//             <div className="flex justify-center mt-10 mb-10 relative">
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="px-8 py-3 bg-[#1A7D85] text-white rounded-full hover:bg-[#156A72] transition"
//               >
//                 {showAll ? "Read Less" : "Read More"}
//               </button>

//               {/* 🌟 Decorative image below button */}
//               <div className="absolute -right-44 bottom-[-220px] w-[500px] h-[500px] opacity-30">
//                 <Image src="/blur1.png" alt="Bottom decorative" fill className="object-contain" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  highlightText,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function IndustriesSection({ data }) {
  const [page, setPage] = useState(0); // 👈 controls which 4 cards to show
  const [activeIndex, setActiveIndex] = useState(0);

  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
  const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
  const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
  const list1 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST1);
  const list2 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST2);
  const list3 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST3);
  const list4 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST4);  
  const list5 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST5);
  const list6 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST6);
  const list7 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST7);
  const list8 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST8);
  const list9 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST9);
    const list10 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST10);
    const list11 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST11);
    const list12 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST12);
    const list13 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST13);
    const list14 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST14);
    const list15 = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.LIST15);


  const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);

  const industries = featureTitles.map((title, idx) => ({
    title: title?.value || "",
    text: featureDescriptions[idx]?.value || "",
    img: featureImages[idx]?.value ? `${Image_URL}${featureImages[idx]?.value}` : "/placeholder.png",
    list1: list1[idx]?.value || "",
    list2: list2[idx]?.value || "",
    list3: list3[idx]?.value || "",
    list4: list4[idx]?.value || "",
  }));

  const cardsPerPage = 4;
  const startIndex = page * cardsPerPage;
  const visibleIndustries = industries.slice(startIndex, startIndex + cardsPerPage);
const allIndustries = industries; 

  const hasNext = startIndex + cardsPerPage < industries.length;
  const hasPrev = page > 0;

  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto relative">
        <div className="text-center">
          {/* 🖤 Black Section */}
          <div className="w-full bg-[#0C1A16] text-center px-4 pt-12 pb-64 md:pb-44">
            <div className="max-w-5xl mx-auto">
              <p className="text-[15px] tracking-wide text-white mb-2">{subHeading}</p>
              <h2 className="text-2xl md:text-6xl text-white mb-4">
                {highlightText(heading, 34, 54, "")}
              </h2>
              <p className="max-w-7xl mx-auto text-[11px] lg:text-[14px] text-white mb-10 px-4">
                {description ||
                  "At Bidec, we combine domain expertise with advanced technologies like IoT and AI/ML to deliver innovative mobile solutions across diverse industries."}
              </p>
            </div>
          </div>

          <div className="relative hidden md:block max-w-[1200px] mx-auto -mt-20 md:-mt-48 px-4 transition-all duration-500 ease-in-out">
            {/* 🌊 Decorative Background */}
            <div className="absolute right-0 top-[20%] w-[420px] h-[420px] -z-10 opacity-70">
              <Image src="/blur.png" alt="Background decorative" fill className="object-contain" />
            </div>

            {/* 🧩 Cards Layout */}
            <div className="columns-1 mt-5 md:columns-2 gap-8 relative">
            
              {visibleIndustries.map((item, idx) => {
  // 👇 Calculate global index (in case of pagination)
  const globalIndex = startIndex + idx + 1;

  // 👇 Dynamically pick the right list based on card number
  const currentList = (() => {
    switch (globalIndex) {
      case 1: return list1;
      case 2: return list2;
      case 3: return list3;
      case 4: return list4;
      case 5: return list5;
      case 6: return list6;
      case 7: return list7;
      case 8: return list8;
      case 9: return list9;
      case 10: return list10;
      case 11: return list11;
      case 12: return list12;
      case 13: return list13;
      case 14: return list14;
      case 15: return list15;
      default: return [];
    }
  })();

  return (
    <div
      key={idx}
      className="relative mb-8 break-inside-avoid bg-white rounded-xl shadow-md overflow-hidden text-left p-5 hover:shadow-lg transition"
    >
      <div className="relative w-full mb-5">
        <img
          src={item.img}
          alt={item.title}
          className={`object-cover w-full rounded-lg ${
            idx === 0
              ? "h-40"
              : idx === 1
              ? "h-[408px]"
              : idx === 2
              ? "h-86"
              : idx === 3
              ? "h-56"
              : "h-96"
          }`}
        />
      </div>

      <h3 className="text-xl text-[#1A7D85] font-semibold mb-3">{item.title}</h3>
      <p className="text-[14px] leading-relaxed">{item.text}</p>

      {/* 👇 Dynamic List Rendering */}
      {currentList && currentList.length > 0 && (
        <ul className="list-disc marker:text-[#1A7D85] text-black text-sm pl-4 mt-4">
          {currentList.map((li, i) => (
            <li key={i}>{li?.value}</li>
          ))}
        </ul>
      )}
    </div>
  );
})}

            </div>

            {/* 🔘 Pagination Buttons */}
            <div className="flex justify-center gap-4 mt-10 mb-10 relative">
              {hasPrev && (
                <button
                  onClick={() => setPage(page - 1)}
                  className="px-6 py-3 bg-[#1A7D85] text-white rounded-full hover:bg-[#156A72] transition"
                >
                  ← Previous
                </button>
              )}
              {hasNext && (
                <button
                  onClick={() => setPage(page + 1)}
                  className="px-6 py-3 bg-[#1A7D85] text-white rounded-full hover:bg-[#156A72] transition"
                >
                  Next →
                </button>
              )}

              {/* 🌟 Decorative blur below */}
              <div className="absolute -right-44 bottom-[-220px] w-[500px] h-[500px] opacity-30">
                <Image src="/blur1.png" alt="Bottom decorative" fill className="object-contain" />
              </div>
            </div>
          </div>
   <div className="block md:hidden -mt-56">
      <Swiper
        spaceBetween={2}
        slidesPerView={1.32}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
  className="pb-10 custom-mobile-swiper" // 👈 unique class
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {allIndustries.map((item, idx) => {
          const globalIndex = startIndex + idx + 1;
          const currentList = (() => {
            switch (globalIndex) {
              case 1:
                return list1;
              case 2:
                return list2;
              case 3:
                return list3;
              case 4:
                return list4;
              case 5:
                return list5;
              case 6:
                return list6;
              case 7:
                return list7;
              case 8:
                return list8;
              case 9:
                return list9;
              case 10:
                return list10;
              case 11:
                return list11;
              case 12:
                return list12;
              case 13:
                return list13;
              case 14:
                return list14;
              case 15:
                return list15;
              default:
                return [];
            }
          })();

          // ✅ check if this is the active slide
          const isActive = idx === activeIndex;

          return (
 <SwiperSlide
  key={idx}
  className="pb-10 transition-transform duration-500 !overflow-visible"
>
  <div
    className={`transition-all duration-500 ease-in-out ${
      isActive
        ? "scale-105 -translate-y-6 z-30" // pops up fully
        : "scale-90 translate-y-2 opacity-80 z-0"
    }`}
  >
    <div className="bg-white rounded-2xl shadow-lg h-[450px] w-[320px] p-3">
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h3 className="text-lg text-left font-semibold text-[#1A7D85] mb-2">
        {item.title}
      </h3>

      <p className="text-[11px] text-left text-gray-700 leading-relaxed mb-3">
        {item.text}
      </p>

      {currentList && currentList.length > 0 && (
        <ul className="list-disc text-left text-[11px] marker:text-[#1A7D85] text-black text-sm pl-4">
          {currentList.map((li, i) => (
            <li key={i}>{li?.value}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
</SwiperSlide>



          );
        })}
      </Swiper>
    </div>


        </div>
      </section>
    </div>
  );
}
