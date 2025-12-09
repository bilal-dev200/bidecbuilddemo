// // import React from "react";
// // import {
// //   getFieldValue,
// //   getRobustFieldValuesByName,
// //   COMMON_FIELD_NAMES,
// //   highlightLastWords,
// //   highlightText
// // } from "@/lib/utils/sectionDataHelpers";

// // const ShopifySupportServices = ({data}) => {
// //   const services = [
// //     {
// //       title: "Slow Store Performance",
// //       desc: "If your Shopify pages take too long to load, customers abandon carts and sales drop.",
// //     },
// //     {
// //       title: "Analytics & SEO Gaps",
// //       desc: "Missing events, broken meta tags, or tracking errors limit your ability to make smart business decisions.",
// //     },
// //     {
// //       title: "Frequent Store Glitches",
// //       desc: "Bugs in checkout, search filters, or payment gateways frustrate customers and hurt conversions.",
// //     },
// //     {
// //       title: "Unreliable Customer Experience",
// //       desc: "From mobile responsiveness issues to slow checkout, every small flaw reduces trust and repeat business.",
// //     },
// //     {
// //       title: "Theme & Design Roadblocks",
// //       desc: "Struggling to update or customize your theme without a developer? Even small tweaks feel impossible.",
// //     },
// //     {
// //       title: "App Conflicts",
// //       desc: "Adding or updating Shopify apps often breaks existing features, causing downtime or hidden errors.",
// //     },
// //     {
// //       title: "Missed Feature Updates",
// //       desc: "Shopify releases powerful new features regularly, but without support, your store may never benefit from them.",
// //     },
// //     {
// //       title: "Security Concerns",
// //       desc: "Outdated plugins, missed patches, or weak monitoring leave your store exposed to vulnerabilities.",
// //     },
// //   ];

// //    const heading =
// //       getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
// //       "";
// // const featureTitles =
// //     getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];

// //   const featureDescriptions =
// //     getRobustFieldValuesByName(
// //       data,
// //       COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
// //     ) || [];



// //   return (
// //     <section className="w-full py-16 bg-white flex flex-col items-center text-center px-4">
// //       {/* Heading */}
// //       <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
// //         {/* Signs You Need Shopify */}
// //         {heading}
// //       </h2>
// //       <h3 className="text-3xl md:text-4xl font-semibold text-green-600 mt-1">
// //         Support Services
// //       </h3>

// //       {/* Cards */}
// //       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
// //         {services.map((service, index) => (
// //           <div
// //             key={index}
// //             className="border border-gray-200 rounded-lg p-6 text-left hover:shadow-md transition-all"
// //           >
// //             <h4 className="font-semibold text-gray-800 text-lg mb-2">
// //               {service.title}
// //             </h4>
// //             <p className="text-gray-600 text-sm leading-relaxed">
// //               {service.desc}
// //             </p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Button */}
// //       <button className="mt-10 bg-[#1A7D85] text-white font-medium px-6 py-3 rounded-full transition">
// //         Fix My Shopify Store Now
// //       </button>
// //     </section>
// //   );
// // };

// // export default ShopifySupportServices;
// // "use client";
// // import React from "react";
// // import {
// //     getFieldValue,
// //     getRobustFieldValuesByName,
// //     COMMON_FIELD_NAMES,
// //     highlightText,
// // } from "@/lib/utils/sectionDataHelpers";

// // const ShopifySupportServices = ({ data }) => {
// //     // 🟢 Dynamic heading & subheading
// //     const heading =
// //         getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "Signs You Need Shopify Support Services";
// //             const subheading =
// //         getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) || "Signs You Need Shopify Support Services";
// //             const des =
// //         getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "Signs You Need Shopify Support Services";

// //     //   const subheading =
// //     //     getFieldValue(data, COMMON_FIELD_NAMES.SUBHEADING) || "";

// //     // 🟢 Dynamic feature titles & descriptions
// //     const featureTitles =
// //         getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
// //     const featureDescriptions =
// //         getRobustFieldValuesByName(
// //             data,
// //             COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
// //         ) || [];

// //     // 🟢 Combine titles + descriptions into a single array
// //     const services = featureTitles.map((title, index) => ({
// //         title: title?.value || "", // access .value here
// //         desc: featureDescriptions[index]?.value || "", // and here
// //     }));

// //     //   // 🟢 Dynamic button text
// //     //   const buttonText =
// //     //     getFieldValue(data, COMMON_FIELD_NAMES.BUTTON_TEXT) ||
// //     //     "";

// //     return (
// //         <section className="max-w-[1200px] mx-auto  bg-white flex flex-col items-center text-center px-4">
// //             {/* Heading */}
// //             {/* {heading && (
// //                 <h2 className="text-3xl max-w-3xl md:text-6xl font-light text-gray-900">
// //                     {highlightText(heading, 23, 40, "text-[#95BF47]")}
// //                 </h2>
// //             )} */}
// //             {/* <p>More Than Just Theme Design</p> */}
// //             {/* Heading Section */}
// // {heading && (
// //   <h2 className="text-3xl max-w-3xl md:text-6xl font-light text-gray-900">
// //     {highlightText(heading, 23, 40, "text-[#95BF47]")}
// //   </h2>
// // )}

// // <div className="mt-4">
// //   <p className="text-lg md:text-4xl ">
// // More Than Just Theme Design
// //   </p>

// //   <p className="text-sm md:text-base  mt-2 max-w-2xl leading-relaxed">
// //     This is the description text that explains more details about the subheading.
// //     You can use it to elaborate on what this section is about or highlight extra info.
// //   </p>
// // </div>

// //             {/* 
// //       {subheading && (
// //         <h3 className="text-3xl md:text-4xl font-semibold text-green-600 mt-1">
// //           {(subheading)}
// //         </h3>
// //       )} */}

// //             {/* Cards */}
// //             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6  wull">
// //                 {services.map((service, index) => (
// //                     <div
// //                         key={index}
// //                         className="border border-gray-200 rounded-lg p-6 text-left hover:shadow-md transition-all"
// //                     >
// //                         <h4 className="font-semibold text-gray-800 text-lg mb-2">
// //                             {service.title}
// //                         </h4>
// //                         <p className="text-gray-600 text-sm leading-relaxed">
// //                             {service.desc}
// //                         </p>
// //                     </div>
// //                 ))}
// //             </div>

// //             {/* Button */}
// //             {/* {buttonText && (
// //         <button className="mt-10 bg-[#1A7D85] text-white font-medium px-6 py-3 rounded-full transition">
// //           {buttonText}
// //         </button>
// //       )} */}
// //         </section>
// //     );
// // };

// // export default ShopifySupportServices;
// "use client";
// import React from "react";
// import {
//     getFieldValue,
//     getRobustFieldValuesByName,
//     COMMON_FIELD_NAMES,
//     highlightText,
// } from "@/lib/utils/sectionDataHelpers";

// const ShopifySupportServices = ({ data }) => {
//     // 🟢 Dynamic heading & subheading
//     const heading =
//         getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "Signs You Need Shopify Support Services";
//     const subheading =
//         getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) || "Signs You Need Shopify Support Services";
//     const des =
//         getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "Signs You Need Shopify Support Services";

//     const featureTitles =
//         getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
//     const featureDescriptions =
//         getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION) || [];

//     const services = featureTitles.map((title, index) => ({
//         title: title?.value || "",
//         desc: featureDescriptions[index]?.value || "",
//     }));

//     return (
//         <section className="max-w-[1200px] mx-auto bg-white flex flex-col items-center text-center px-4">
//             {/* Heading */}
//             {heading && (
//                 <h2 className="text-3xl max-w-3xl md:text-6xl font-light text-gray-900">
//                     {highlightText(heading, 23, 40, "text-[#95BF47]")}
//                 </h2>
//             )}

//             <div className="mt-4">
//                 <p className="text-lg md:text-4xl">More Than Just Theme Design</p>
//                 <p className="text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
//                     This is the description text that explains more details about the subheading.
//                     You can use it to elaborate on what this section is about or highlight extra info.
//                 </p>
//             </div>

//             {/* Cards */}
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="border border-gray-200 rounded-lg p-6 text-left transition-all duration-300 hover:bg-[#95BF47] hover:text-white hover:shadow-lg"
//                     >
//                         <h4 className="font-semibold text-gray-800 text-lg mb-2 transition-all duration-300 hover:text-white">
//                             {service.title}
//                         </h4>
//                         <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300 hover:text-white">
//                             {service.desc}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ShopifySupportServices;
"use client";
import React from "react";
import {
    getFieldValue,
    getRobustFieldValuesByName,
    COMMON_FIELD_NAMES,
    highlightText,
} from "@/lib/utils/sectionDataHelpers";

const ShopifySupportServices = ({ data }) => {
    const heading =
        getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "Signs You Need Shopify Support Services";
    const subheading =
        getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) || "";
    const des =
        getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "";

    const featureTitles =
        getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
    const featureDescriptions =
        getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION) || [];

    const services = featureTitles.map((title, index) => ({
        title: title?.value || "",
        desc: featureDescriptions[index]?.value || "",
    }));

    return (
        <section className="max-w-[1200px] mx-auto bg-white flex flex-col items-center text-center px-4">
            {/* Heading */}
            {heading && (
                <h2 className="text-3xl max-w-3xl md:text-6xl font-light text-gray-900"
                            dangerouslySetInnerHTML={{ __html: heading }}
>
                </h2>
            )}

            <div className="mt-4">
                <p className="text-lg md:text-4xl">{subheading}</p>
                <p className="text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                    {/* This is the description text that explains more details about the subheading.
                    You can use it to elaborate on what this section is about or highlight extra info. */}
                    {des}
                </p>
            </div>

            {/* Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group border border-gray-200 rounded-lg p-6 text-left transition-all duration-300 hover:bg-[#95BF47] hover:shadow-lg"
                    >
                        <h4 className="font-semibold text-gray-800 text-lg mb-2 transition-colors duration-300 group-hover:text-white">
                            {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopifySupportServices;
