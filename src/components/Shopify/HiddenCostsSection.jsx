
// "use client";
// import React from "react";
// import Image from "next/image";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// export default function HiddenCostsSection() {
//   const costs = [
//     {
//       text: "Apps & subscriptions ($10–$200/mo each) and themes (from ~$350+).",
//       source: "instant.se",
//     },
//     {
//       text: "Shopify plan fees (Basic now typically $39/mo if not on promo).",
//       source: "www.dynamicweb.com",
//     },
//     {
//       text: "Ongoing optimization (speed, CRO, SEO) after launch.",
//       source: "",
//     },
//   ];

//   // ✅ Store the bottom cards in an array
//   const cards = [
//     {
//       img: "/shopify-talent.jpg",
//       smallHeading: "Access Specialized Shopify Talent",
//       mainHeading: "Get Access to Expert Shopify Developers",
//       description:
//         "Hire vetted Shopify developers with hands-on expertise in theme development, app customization, migrations, and Shopify Plus. Expand your team’s capabilities instantly without large recruitment cycles.",
//       color: "#95BF47", // green accent
//     },
//     {
//       img: "/shopify-expertise.jpg",
//       smallHeading: "Future-Ready Shopify Development Skills",
//       mainHeading: "Stay Ahead with Future-Ready Shopify Expertise",
//       description:
//         "Our Shopify developers bring deep knowledge of all modern ecommerce approaches, app integrations, and Shopify Plus implementation. Based in Dubai, Saudi Arabia, and the wider Middle East, your brand stays ahead of the curve.",
//       color: "#1A7D85", // teal accent
//     },
//   ];
//     const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
  
//   const descriptions = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.DESCRIPTION
//   );
//   const sources = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.BUTTON_TEXT
//   );

//   const featureimage = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_IMAGE
//   );
//   const featuretitle = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_TITLE
//   );
//    const featureheading = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_NAME
//   );
//    const featuredec = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//   );
//   return (
//     <div className="bg-white rounded-md p-8 max-w-6xl mx-auto mt-14">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-5xl font-semibold">
//           <span className="text-green-700">Hidden costs</span>{" "}
//           <span className="text-gray-800">most people miss</span>
//         </h2>
//       </div>

//       {/* Cost List */}
//       <div
//         className="space-y-5 mb-10 p-6 rounded-lg bg-[#95BF471A]"
//         style={{ border: "1px solid #000000B2" }}
//       >
//         {costs.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row sm:items-center p-10 justify-between rounded-full px-5 py-4"
//             style={{
//               border: "1px solid #1A7D85",
//               backgroundColor: "#1A7D85",
//             }}
//           >
//             <div className="flex items-center gap-3 px-8">
//               {/* bullet + line */}
//               <div className="flex items-center">
//                 <div
//                   style={{
//                     width: "10px",
//                     height: "10px",
//                     backgroundColor: "white",
//                     borderRadius: "50%",
//                   }}
//                 ></div>
//                 <div
//                   style={{
//                     width: "30px",
//                     height: "2px",
//                     backgroundColor: "white",
//                     marginLeft: "",
//                   }}
//                 ></div>
//               </div>

//               {/* text */}
//               <p className="text-white text-base">{item.text}</p>
//             </div>

//             {item.source && (
//               <p className="text-sm text-white mt-2 sm:mt-0">
//                 <span className="font-semibold text-white">Source:</span>{" "}
//                 {item.source}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* ✅ Bottom Cards mapped dynamically */}
//       <div className="grid md:grid-cols-2 gap-8">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
//           >
//             <Image
//               src={card.img}
//               alt={card.mainHeading}
//               width={600}
//               height={300}
//               className="object-cover w-full h-52"
//             />
//             <div className="p-5 bg-[#95BF471A]">
//               <h4
//                 className="text-sm text-[#95BF47] font-semibold mb-2"
                
//               >
//                 {card.smallHeading}
//               </h4>
//               <h2 className="text-3xl mb-2">
//                 {card.mainHeading}
//               </h2>
//               <p className="mt-5 text-sm leading-relaxed">
//                 {card.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function HiddenCostsSection({ data }) {
  // ✅ Dynamic heading
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";

  // ✅ Dynamic field arrays
  const featureDescriptions =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.DESCRIPTION) || [];
  const featureSources =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.BUTTON_TEXT) || [];
 const btttn =
    getFieldValue(data, COMMON_FIELD_NAMES.BUTTON) || "";

  const featureImages =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE) || [];
  const featureTitles =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
  const featureHeadings =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_NAME) || [];
  const featureDecs =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION) ||
    [];

  // ✅ Dynamic binding for “costs” section
  const costs =
    featureDescriptions.length > 0
      ? featureDescriptions.map((desc, i) => ({
          text: desc?.value || "No description available",
          source: featureSources[i]?.value || "Unknown Source",
        }))
      :""

  // ✅ Dynamic binding for bottom “cards”
  // const cards =
  //   featureImages.length > 0
  //     ? featureImages.map((img, i) => ({
  //         img: `${Image_URL}${img?.value}`,
  //         smallHeading: featureHeadings[i]?.value || "No Heading",
  //         mainHeading: featureTitles[i]?.value || "No Title",
  //         description: featureDecs[i]?.value || "No description available",
  //         color: i % 2 === 0 ? "#95BF47" : "#1A7D85", // alternate colors
  //       }))
  //     : [
  //         {
  //           img: "/shopify-talent.jpg",
  //           smallHeading: " Talent",
  //           mainHeading: "Get Access to Expert Shopify Developers",
  //           description:
  //             "Hire vetted Shopify developers with hands-on expertise in theme development, app customization, migrations, and Shopify Plus. Expand your team’s capabilities instantly without large recruitment cycles.",
  //           color: "#95BF47",
  //         },
  //         {
  //           img: "/shopify-expertise.jpg",
  //           smallHeading: "Future-Ready Shopify Development Skills",
  //           mainHeading: "Stay Ahead with Future-Ready Shopify Expertise",
  //           description:
  //             "Our Shopify developers bring deep knowledge of all modern ecommerce approaches, app integrations, and Shopify Plus implementation. Based in Dubai, Saudi Arabia, and the wider Middle East, your brand stays ahead of the curve.",
  //           color: "#1A7D85",
  //         },
  //       ];
 const cards =
    featureImages.length > 0
      ? featureImages.map((img, i) => ({
          img: `${Image_URL}${img?.value}`,
          smallHeading: featureHeadings[i]?.value || "",
          mainHeading: featureTitles[i]?.value || "",
          description: featureDecs[i]?.value || "",
        }))
      : [];
  return (
    <div className="bg-white rounded-md p-8 max-w-6xl mx-auto mt14">
      {/* ✅ Dynamic Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-semibold">
         <span
  className=""
  dangerouslySetInnerHTML={{ __html: heading || "Hidden costs" }}
></span>
        </h2>
      </div>

      {/* ✅ Cost List */}
      <div
        className="space-y-5 mb-10 p-6 rounded-lg bg-[#95BF471A]"
        style={{ border: "1px solid #000000B2" }}
      >
        {costs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center p-10 justify-between rounded-full px-5 py-4"
            style={{
              border: "1px solid #1A7D85",
              backgroundColor: "#1A7D85",
            }}
          >
            <div className="flex items-center gap-3 px-8">
              {/* bullet + line */}
              <div className="flex items-center">
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  style={{
                    width: "30px",
                    height: "2px",
                    backgroundColor: "white",
                    marginLeft: "",
                  }}
                ></div>
              </div>

              {/* text */}
              <p className="text-white text-base">{item.text}</p>
            </div>

            {item.source && (
              <p className="text-sm text-white mt-2 sm:mt-0">
                <span className="font-semibold text-white">Source:</span>{" "}
                {item.source}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ✅ Bottom Cards mapped dynamically */}
      <div className="grid md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-[#000000B2] hover:shadow-lg transition"
          >
            <Image
              src={card.img}
              alt={card.mainHeading}
              width={600}
              height={300}
              className="object-cover w-full h-72 rounded"
            />
            <div className="p-5 bg-[#95BF471A]">
              <h4
                className="text-sm text-[#95BF47] font-semibold mb-2"
              >
                {card.mainHeading}
              </h4>
              <h2 className="text-4xl mb-2">{card.smallHeading}</h2>
              <p className="mt-5 text-sm leading-relaxed">
                {card.description}
              </p>
               
            </div>
          </div>
        ))}
      

      </div>
        <button className="mt-5 px-6 item-center  py-2 bg-[#95BF47] text-white rounded-full hover:bg-[#7FAF3A] transition mx-auto block"> 
  {/* Learn More */}{btttn}
 </button>
    </div>
  );
}
