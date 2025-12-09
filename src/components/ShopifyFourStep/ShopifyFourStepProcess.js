// "use client";
// import Image from "next/image";
// import React from "react";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
//   highlightText,
// } from "@/lib/utils/sectionDataHelpers";
// export default function ShopifyFourStepProcess({data}) {

//   const steps = [
//     {
//       title: "Initial Consultation",
//       desc: "We begin with a detailed consultation to understand your business goals, current e-commerce setup, and expectations. This allows us to design a Shopify migration strategy tailored to your unique needs.",
//       icon: "/for1.png",
//     },
//     {
//       title: "Data Assessment & Planning",
//       desc: "Our team carefully reviews your existing store data, products, categories, customers, orders, and content. We then map out a precise migration plan to ensure every detail is transferred seamlessly, without errors or loss.",
//       icon: "/for1.png",
//     },
//     {
//       title: "Shopify Store Setup & Customization",
//       desc: "We set up your new Shopify store with the right theme, payment gateways, and design elements. From layouts to brand styling, every detail is customized to match your identity and provide an upgraded shopping experience.",
//       icon: "/for1.png",
//     },
//     {
//       title: "Secure Data Migration",
//       desc: "This is the core of the process, transferring your store data safely into Shopify. Using best practices and secure tools, we migrate products, customers, orders, and all vital information with complete accuracy and integrity.",
//       icon: "/for1.png",
//     },
//   ];
// console.log(data,'ffffff')

// const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
//   const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
//   const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);

//   // ✅ Dynamic step fields
//   const featureTitles = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_TITLE
//   );
//   const featureDescriptions = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//   );
//   const featureImages = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_IMAGE
//   );


//   return (
// <section className="w-full bg-white  px-6 md:px-12 lg:px-20">
//   {/* Heading */}
//   <div className="text-center max-w-4xl mx-auto mb-12">
//     {/* <h2 className="text-3xl md:text-5xl font-light text-gray-900">
//       Switch to www with Our
//     </h2> */}
//      {heading && (
//       <h2 className="text-3xl md:text-5xl font-light text-gray-900">
//         {heading}
//       </h2>
//     )}
//     {/* <h3 className="text-3xl md:text-5xl font-semibold text-[#95BF47] mt-2">
//       Proven 4-Step Process
//     </h3> */}
//     {/* <p className="text-gray-600 mt-4 text-base md:text-lg clamp-2 leading-relaxed">
//       We’ve refined a proven migration process that ensures data security,
//       zero downtime, and 100% preservation of your search rankings, so your
//       business transitions to Shopify smoothly and successfully.
//     </p> */}
//       {description && (
//       <p className="text-gray-600 mt-4 text-base md:text-lg clamp-2 leading-relaxed">
//         {description}
//       </p>
//     )}
//   </div>

//   {/* Steps */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//     {steps.map((step, index) => (
//       <div
//         key={index}
//         className="group rounded-xl border border-gray-200 p-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:bg-[#1A7D85]  shadow-sm"
//       >
//         <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
//           <Image
//             src={step.icon}
//             alt={step.title}
//             width={48}
//             height={48}
//             className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
//           />
//         </div>
//         <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-white">
//           {step.title}
//         </h4>
//         <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
//           {step.desc}
//         </p>
//       </div>
//     ))}
//   </div>
// </section>
//   );
// }
// "use client";
// import Image from "next/image";
// import React from "react";
// import {
//   getFieldValue,
//   getRobustFieldValuesByName,
//   COMMON_FIELD_NAMES,
// } from "@/lib/utils/sectionDataHelpers";

// export default function ShopifyFourStepProcess({ data }) {
//   console.log("API Data:", data);

//   // ✅ Get heading & description
//   const heading = getFieldValue(data, "heading");
//   const description = getFieldValue(data, "description");

//   // ✅ Get dynamic fields (arrays)
//   const featureTitles = getRobustFieldValuesByName(data, "feature_title");
//   const featureDescriptions = getRobustFieldValuesByName(
//     data,
//     "feature_description"
//   );
//   const featureImages = getRobustFieldValuesByName(data, "feature_image");

//   // ✅ Combine all dynamic fields into steps
//   const steps = featureTitles.map((title, index) => ({
//     title,
//     desc: featureDescriptions[index] || "",
//     icon: featureImages[index] || "/placeholder.png",
//   }));

//   return (
//     <section className="w-full bg-white px-6 md:px-12 lg:px-20">
//       {/* ✅ Heading Section */}
//       <div className="text-center max-w-4xl mx-auto mb-12">
//         {heading && (
//           <h2 className="text-3xl md:text-5xl font-light text-gray-900">
//             {heading}
//           </h2>
//         )}

//         {description && (
//           <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
//             {description}
//           </p>
//         )}
//       </div>

//       {/* ✅ Dynamic Steps */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="group rounded-xl border border-gray-200 p-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:bg-[#1A7D85] shadow-sm"
//           >
//             <div className="mb-6 transition-transform duration-300 group-hover:scale-110 flex justify-center">
//               <Image
//                 src={step.icon}
//                 alt={step.title}
//                 width={60}
//                 height={60}
//                 className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
//               />
//             </div>
//             <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-white text-center">
//               {step.title}
//             </h4>
//             <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/90 text-center">
//               {step.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import React from "react";
// import {
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";

// export default function ShopifyFourStepProcess({ data }) {
//   console.log("API Data:", data);

//   // ✅ Get heading & description
//   const heading = getFieldValue(data, "heading");
//   const description = getFieldValue(data, "description");

//   // ✅ Get dynamic fields (arrays)
//   const featureTitles = getRobustFieldValuesByName(data, "feature_title");
//   const featureDescriptions = getRobustFieldValuesByName(
//     data,
//     "feature_description"
//   );
//   const featureImages = getRobustFieldValuesByName(data, "feature_image");

//   // ✅ Combine all dynamic fields into steps
//   const steps = featureTitles.map((title, index) => {
//     const rawIcon = featureImages[index];

//     // ✅ Only trim if it's a string
//     const icon =
//       typeof rawIcon === "string" && rawIcon.trim() !== ""
//         ? rawIcon
//         : "/placeholder.png";

//     return {
//       title,
//       desc: featureDescriptions[index] || "",
//       icon,
//     };
//   });

//   return (
//     <section className="w-full bg-white px-6 md:px-12 lg:px-20">
//       {/* ✅ Heading Section */}
//       <div className="text-center max-w-4xl mx-auto mb-12">
//         {heading && (
//           <h2 className="text-3xl md:text-5xl font-light text-gray-900">
//             {heading}
//           </h2>
//         )}

//         {description && (
//           <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
//             {description}
//           </p>
//         )}
//       </div>

//       {/* ✅ Dynamic Steps */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="group rounded-xl border border-gray-200 p-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:bg-[#1A7D85] shadow-sm"
//           >
//             {step.icon && (
//               <div className="mb-6 transition-transform duration-300 group-hover:scale-110 flex justify-center">
//                 <Image
//                   src={step.icon}
//                   alt={step.title || "feature"}
//                   width={60}
//                   height={60}
//                   className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
//                 />
//               </div>
//             )}

//             <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-white text-center">
//               {step.title}
//             </h4>

//             <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/90 text-center">
//               {step.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import React from "react";
// import {
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  highlightText,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function ShopifyFourStepProcess({ data }) {
  console.log("ff", data);

  // ✅ Extract proper string values
  // const heading = getFieldValue(data, "heading")?.value || "";
  // const description = getFieldValue(data, "description")?.value || "";
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  // const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);

  // ✅ Handle arrays and extract `.value` if needed
  const featureTitles = getRobustFieldValuesByName(data, "feature_title").map(
    (item) => (typeof item === "object" ? item.value : item)
  );
  const featureDescriptions = getRobustFieldValuesByName(
    data,
    "feature_description"
  ).map((item) => (typeof item === "object" ? item.value : item));

  const featureImages = getRobustFieldValuesByName(data, "feature_image").map(
    (item) => (typeof item === "object" ? item.value : item)
  );

  // ✅ Combine data
  const steps = featureTitles.map((title, index) => {
    const rawIcon = featureImages[index];
    const icon =
      typeof rawIcon === "string" && rawIcon.trim() !== ""
        ? `${Image_URL}${rawIcon}`
        : "/placeholder.png";
    return {
      title,
      desc: featureDescriptions[index] || "",
      icon,
    };
  });

  return (
    // <section className="w-full bg-white px-6 md:px-12 lg:px-20">
    //   <div className="text-center max-w-4xl mx-auto mb-12">
    //     {heading && (
    //       <h2 className="text-3xl md:text-5xl font-light text-gray-900">
    //         {heading}
    //       </h2>
    //     )}
    //     {description && (
    //       <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
    //         {description}
    //       </p>
    //     )}
    //   </div>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    //     {steps.map((step, index) => (
    //       <div
    //         key={index}
    //         className="group rounded-xl border border-gray-200 p-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:bg-[#1A7D85] shadow-sm"
    //       >
    //           {step.icon && (
    //             <div className="mb-6 transition-transform duration-300 group-hover:scale-110 flex justify-center">
    //               <Image
    //                 src={step.icon}
    //                 alt={step.title || "feature"}
    //                 width={60}
    //                 height={60}
    //                 className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
    //               />
    //             </div>
    //           )}
    //         <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-white text-center">
    //           {step.title}
    //         </h4>
    //         <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/90 text-center">
    //           {step.desc}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section className=" mx-auto bg-white pb44  px-6 md:px12 lg:px20">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        {/* <h2 className="text-3xl md:text-5xl font-light text-gray-900">
          Switch to www with Our
        </h2> */}
        {/* {heading && (
          <h2 className="text-3xl md:text-6xl font-light text-gray-900">
            {highlightText(heading, 26, 49, "text-[#95BF47]")}
          </h2>
        )} */}
        {heading && (
          <h2
            className="text-3xl md:text-6xl font-light text-gray-900"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}

        {/* <h3 className="text-3xl md:text-5xl font-semibold text-[#95BF47] mt-2">
          Proven 4-Step Process
        </h3> */}
        {/* <p className="text-gray-600 mt-4 text-base md:text-lg clamp-2 leading-relaxed">
          We’ve refined a proven migration process that ensures data security,
          zero downtime, and 100% preservation of your search rankings, so your
          business transitions to Shopify smoothly and successfully.
        </p> */}
        {description && (
          <p className="mt-4 text-[10px] sm:text-sm md:text-[8px] lg:text-[14px] max-w-4xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Steps */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group rounded-xl border border-gray-200 p-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:bg-[#1A7D85]  shadow-sm"
          >
            <div className="mb-6 ml-4 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={step.icon}
                alt={step.title}
                width={48}
                height={48}
                className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-white">
              {step.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
              {step.desc}
            </p>
          </div>
        ))}
      </div> */}

      {/* <div className="flex justify-center mx-auto">
  <div className="gap-6 max-w-[1200px]">
    {steps.map((step, index) => (
      <div
        key={index}
        className="group rounded-xl border border-gray-200 p-8 flex flex-col h-full transition-all duration-300 ease-in-out hover:bg-[#1A7D85] shadow-sm"
      >
        <div className="mb-6 ml-4 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={step.icon}
            alt={step.title}
            width={48}
            height={48}
            className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
          />
        </div>
        <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-white">
          {step.title}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
          {step.desc}
        </p>
      </div>
    ))}
  </div>
</div> */}
<div className="flex justify-center mx-auto">
  <div
    className="
      flex 
      flex-wrap 
      justify-center
      gap-8
      max-w-[1200px] 
      mx-auto 
    "
  >
    {steps.map((step, index) => (
      <div
        key={index}
        className="
          group 
          rounded-xl 
          border 
          border-gray-200 
          p-8 
          flex 
          flex-col 
          justify-between        /* ✅ Makes content spread evenly */
          items-start
          h-[420px]              /* ✅ Equal height for all cards */
          w-[260px]              /* ✅ Fixed width for perfect grid */
          transition-all 
          duration-300 
          ease-in-out 
          hover:bg-[#95BF47] 
          shadow-sm
        "
      >
        <div className="w-full flex justify-start mb-4 transition-transform duration-300 ">
          <Image
            src={step.icon}
            alt={step.title}
            width={48}
            height={48}
className="
    object-contain 
    transition-all 
    duration-300 
    group-hover:brightness-0 
    group-hover:invert 
    group-hover:contrast-200
  "          />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-white">
            {step.title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
            {step.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>



    </section>
  );
}
