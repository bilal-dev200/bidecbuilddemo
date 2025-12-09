
// import React from "react";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";

// const ScenarioGuide = ({data,color}) => {
//   const scenarios = [
//     {
//       text: "Under $5k, need it live in 2–4 weeks: Upwork freelancer with clear scope + pre-made theme.",
//       source: "Upwork",
//       link: "#",
//     },
//     {
//       text: "Around $10k, want more polish: hire small studio with portfolio and dev handoff process.",
//       source: "Clutch",
//       link: "#",
//     },
//     {
//       text: "Above $25k, need strategy + full delivery: hire boutique agency with design/dev/PM team.",
//       source: "GoodFirms",
//       link: "#",
//     },
//   ];
//   const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "";
//   const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "";

//   // ✅ Get data arrays from CMS
//   const descriptions = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
//   );
//   const sources = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.BUTTON_TEXT
//   );
//   return (
//     <section className="w-full bg-white max-w-[1200px] py-10 px-10 flex flex-col lg:flex-row items-center justify-center gap-10 mx-auto">
//       {/* Left Image Section */}
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <img
//           src="./readnumber.png"
//           alt="Scenario Guide"
//           className="w-64 md:w-[450px] h-auto rounded-lg"
//         />
//       </div>

//       {/* Right Text Section */}
//       <div className="w-full mt-4 lg:w-1/2">
//         <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 mb-8">
//           Scenario <span className="text-green-600">Guide</span>{" "}
//         </h2>

//         {/* Step 2: Loop through scenarios */}
//         {scenarios.map((item, index) => (
//           <div key={index} className="mb-10">
//             <div className="flex items-start gap-3 mb-2">
//               {/* Bullet + Line */}
//               <div className="flex items-center mt-2">
//                 <div className="w-2 h-2 bg-[#1A7D85] rounded-full"></div>
//                 <div className="w-6 border-b-2 border-[#1A7D85]"></div>
//               </div>

//               {/* Paragraph */}
//               <p className="font-medium w-[600px]">{item.text}</p>
//             </div>

//             {/* Source */}
//             <p className=" text-sm ml-11 mt-2">
//               Source:{" "}
//               <a
//                 href={item.link}
//                 className="text-[#008DCE] underline"
//               >
//                 {item.source}
//               </a>
//             </p>

//             {/* Bottom Line */}
//             {index !== scenarios.length - 1 && (
//               <div className="mt-4 w-full border-b border-gray-400 ml-8"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ScenarioGuide;
"use client";
import React from "react";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const ScenarioGuide = ({ data, color }) => {
  // ✅ Dynamic heading
  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) || "Scenario Guide";

  // ✅ Dynamic image (from CMS)
  const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || "/readnumber.png";

  // ✅ Get arrays from CMS
  const descriptions =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION) ||
    [];
  const sources =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.BUTTON_TEXT) || [];
  const links =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.BUTTON_LINK) || [];

  // ✅ Fallback array (if CMS data missing)
 

  // ✅ Bind CMS data same as QuickTakeaways
  const scenarios =
    descriptions.length > 0
      ? descriptions.map((desc, i) => ({
          text: desc?.value || "No description available",
          source: sources[i]?.value || "Unknown Source",
          link: links[i]?.value || "#",
        }))
      : "";

  return (
    // <section className="w-full bg-white max-w-[1200px] py-10 px-10 flex flex-col lg:flex-row items-center justify-center gap-10 mx-auto">
    //   {/* Left Image Section */}
    //   <div className="w-full lg:w-1/2 flex justify-center">
    //     <img
    //       src={image ? `${Image_URL}${image}` : "/readnumber.png"}
    //       alt="Scenario Guide"
    //       className="w-64 md:w-[450px] h-auto rounded-lg"
    //     />
    //   </div>

    //   {/* Right Text Section */}
    //   <div className="w-full mt-4 lg:w-1/2">
    //     <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 mb-8">
    //       {heading.split(" ")[0]}{" "}
    //       <span className="text-green-600">{heading.split(" ")[1] || "Guide"}</span>
    //     </h2>

    //     {/* ✅ Dynamic Scenarios from CMS */}
    //     {scenarios.map((item, index) => (
    //       <div key={index} className="mb-10">
    //         <div className="flex items-start gap-3 mb-2">
    //           {/* Bullet + Line */}
    //           <div className="flex items-center mt-2">
    //             <div className="w-2 h-2 bg-[#1A7D85] rounded-full"></div>
    //             <div className="w-6 border-b-2 border-[#1A7D85]"></div>
    //           </div>

    //           {/* Paragraph */}
    //           <p className="font-medium w-[600px]">{item.text}</p>
    //         </div>

    //         {/* Source */}
    //         <p className="text-sm ml-11 mt-2">
    //           Source:{" "}
    //           <a
    //             href={item.link}
    //             className="text-[#008DCE] underline"
    //           >
    //             {item.source}
    //           </a>
    //         </p>

    //         {/* Bottom Line */}
    //         {index !== scenarios.length - 1 && (
    //           <div className="mt-4 w-full border-b border-gray-400 ml-8"></div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </section>
        <section className="w-full bg-white max-w-[1200px] py10 px-10 flex flex-col lg:flex-row items-center justify-center gap-10 mx-auto">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image ? `${Image_URL}${image}` : "/readnumber.png"}
          alt="Scenario Guide"
          className="w-64 md:w-[450px] h-[490px] rounded-lg"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full mt-4 lg:w-1/2">
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 mb-8"
          dangerouslySetInnerHTML={{ __html: heading }}>
   
    </h2>

        {/* Step 2: Loop through scenarios */}
        {scenarios.map((item, index) => (
          <div key={index} className="mb-10">
            <div className="flex items-start gap-3 mb-2">
              {/* Bullet + Line */}
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-[#1A7D85] rounded-full"></div>
                <div className="w-6 border-b-2 border-[#1A7D85]"></div>
              </div>

              {/* Paragraph */}
              <p className="font-medium w-[600px]">{item.text}</p>
            </div>

            {/* Source */}
            <p className=" text-sm ml-11 mt-2">
              Source:{" "}
              <a
                href={item.link}
                className="text-[#008DCE] underline"
              >
                {item.source}
              </a>
            </p>

            {/* Bottom Line */}
            {index !== scenarios.length - 1 && (
              <div className="mt-4 w-full border-b border-gray-400 ml-8"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScenarioGuide;
