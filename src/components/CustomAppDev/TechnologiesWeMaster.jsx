// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function TechnologiesWeMaster({ data }) {
//   const [activeTab, setActiveTab] = useState("Android");
//   console.log("dataasahsjaksj", data);


//   const categories = {
//     Android: [
//       { src: "/tool.png", alt: "Angular" },
//       { src: "/tool.png", alt: "Bootstrap" },
//       { src: "/tool.png", alt: "CSS" },
//     ],
//     IOS: [
//       { src: "/tool.png", alt: "Swift" },
//       { src: "/tool.png", alt: "Xcode" },
//     ],
//     "Cross Platform": [
//       { src: "/tool.png", alt: "Flutter" },
//       { src: "/tool.png", alt: "React Native" },
//     ],
//     Backend: [
//       { src: "/tool.png", alt: "Node.js" },
//       { src: "/tool.png", alt: "Express" },
//       { src: "/tool.png", alt: "NestJS" },
//     ],
//     "Cloud Service": [
//       { src: "/tool.png", alt: "AWS" },
//       { src: "/tool.png", alt: "GCP" },
//       { src: "/tool.png", alt: "Azure" },
//     ],
//     DevOps: [
//       { src: "/tool.png", alt: "Docker" },
//       { src: "/tool.png", alt: "Kubernetes" },
//     ],
//     "CI/CD": [
//       { src: "/tool.png", alt: "GitHub Actions" },
//       { src: "/tool.png", alt: "GitLab CI" },
//       { src: "/tool.png", alt: "Jenkins" },
//     ],
//   };

//   return (
//     <section className="flex justify-center items-center px-4 sm:px-6 lg:px-10 py-12">
//       <div className="w-full max-w-[1400px] bg-white rounded-xl p-6 sm:p-10 text-center">
//         {/* Heading */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-teal-700 leading-snug">
//           Technologies We Master:
//         </h2>
//         <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 leading-snug">
//           The Right Tools for Your Vision
//         </h2>
//         <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 mb-10">
//           We build your app with the most robust and modern technologies available, selecting the
//           perfect stack to ensure your project is scalable, secure, and future-proof. Our expertise
//           spans a wide range of native and cross-platform frameworks, allowing us to deliver
//           high-performance solutions tailored to your specific needs.
//         </p>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
//           {Object.keys(categories).map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`relative px-4 sm:px-6 lg:w-34 lg:h-34 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium rounded-lg transition 
//                 ${activeTab === cat
//                   ? "bg-black text-white after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:border-l-8 after:border-r-8 after:border-t-8 after:border-l-transparent after:border-r-transparent after:border-t-black"
//                   : "bg-gray-200 text-gray-800"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Icons */}
//         <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
//           {categories[activeTab].map((tech, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center p-4 rounded-lg bg-white border border-black shadow-sm w-28 h-28"
//             >
//               <Image
//                 src={tech.src}
//                 alt={tech.alt}
//                 width={70}
//                 height={70}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";
// import { useState, useMemo } from "react";
// import Image from "next/image";
// import { Image_URL } from "@/config/constants";

// // 🧠 Import all helper functions
// import {
//   getFieldValue,
//   getRobustFieldValuesByName,
//   COMMON_FIELD_NAMES,
// } from "@/lib/utils/sectionDataHelpers";

// export default function TechnologiesWeMaster({ data }) {
//   if (!data) return null;
//   console.log("dataasakw", data);

//   // ✅ Get heading & description dynamically
//   const heading =
//     getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
//     "Technologies We Master:";
//   const description =
//     getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "";

//   // ✅ Get dynamic titles & icons
//   const featureTitles = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_TITLE
//   );
//   // const featureTitles = getRobustFieldValuesByName(
//   //   data,
//   //   COMMON_FIELD_NAMES.FEATURE_TITLE
//   // );
//   const featureIconsWhite = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_ICON_WHITE
//   );
//   const featureIconsBlack = getRobustFieldValuesByName(
//     data,
//     COMMON_FIELD_NAMES.FEATURE_ICON_BLACK
//   );

//   // ✅ Combine titles and icons into a categories object
//   // const categories = useMemo(() => {
//   //   const grouped = {};
//   //   featureTitles.forEach((title, i) => {
//   //     if (!grouped[title.value]) grouped[title.value] = [];
//   //     grouped[title.value].push({
//   //       src: `${Image_URL}${featureIcons[i]?.value || ""}`,
//   //       alt: title || "Technology",
//   //     });
//   //   });
//   //   return grouped;
//   // }, [featureTitles, featureIcons]);
//   // const categories = useMemo(() => {
//   //   const grouped = {};

//   //   // ✅ Default category name from first feature title
//   //   const categoryName = featureTitles[0]?.value || "Technologies";

//   //   grouped[categoryName] = featureIcons.map((icon) => ({
//   //     src: `${Image_URL}${icon?.value || ""}`,
//   //     alt: categoryName,
//   //   }));

//   //   return grouped;
//   // }, [featureTitles, featureIcons]);
//   // ✅ Combine titles and icons by index
//   const categories = useMemo(() => {
//     const grouped = {};
//     featureTitles.forEach((title, index) => {
//       const categoryName = title?.value || `Category ${index + 1}`;
//       grouped[categoryName] = [];

//       // Pair each title with its white/black icons if available
//       if (featureIconsWhite[index]) {
//         grouped[categoryName].push({
//           src: `${Image_URL}${featureIconsWhite[index].value}`,
//           alt: categoryName,
//         });
//       }
//       if (featureIconsBlack[index]) {
//         grouped[categoryName].push({
//           src: `${Image_URL}${featureIconsBlack[index].value}`,
//           alt: categoryName,
//         });
//       }
//     });
//     return grouped;
//   }, [featureTitles, featureIconsWhite, featureIconsBlack]);

//   // ✅ Default active tab = first category
//   const [activeTab, setActiveTab] = useState(
//     featureTitles[0]?.value || Object.keys(categories)[0] || ""
//   );

//   console.log("categoriesasaksjh", categories);
//   console.log("featureTitlesasaksjh", featureTitles);

//   // // ✅ Default active tab = first category
//   // const [activeTab, setActiveTab] = useState(featureTitles[0].value || "");
//   console.log("featureIconsasaksjh", categories[activeTab]);

//   return (
//     <section className="flex justify-center items-center sm:px-6 py-12">
//       <div className="w-full max-w-8xl bg-white rounded-xl sm:p-10 text-center">
//         {/* Heading */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 leading-none">
//           {(() => {
//             if (heading.includes(":")) {
//               const [before, after] = heading.split(":");
//               return (
//                 <>
//                   <span className="text-[#1A7D85] ebrima-bold">{before}:</span>
//                   <br />
//                   <span>{after}</span>
//                 </>
//               );
//             }
//             return heading;
//           })()}
//         </h2>

//         {/* Description */}
//         {description && (
//           <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-[14px] text-gray-700 mb-10">
//             {description}
//           </p>
//         )}

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
//           {Object.keys(categories).map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`relative px-2 sm:px-6 w-32 h-24 sm:py-5 text-sm sm:text-base md:text-lg font-medium rounded-lg transition ${activeTab === cat
//                 ? "bg-black text-white after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:border-l-8 after:border-r-8 after:border-t-8 after:border-l-transparent after:border-r-transparent after:border-t-black"
//                 : "bg-gray-200 text-gray-800"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Icons Grid */}
//         <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
//           {categories[activeTab]?.map((tech, idx) => (
//             <div
//               key={idx}
//               className="flex items-center justify-center p-4 rounded-lg bg-white border border-black shadow-[0_4px_10px_#00000066] w-28 h-28"
//             >
//               <Image
//                 src={tech.src}
//                 alt={tech.alt}
//                 width={70}
//                 height={70}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Image_URL } from "@/config/constants";

import {
  getFieldValue,
  COMMON_FIELD_NAMES,
  getValueByFieldNameAndPosition
} from "@/lib/utils/sectionDataHelpers";
import AppButton from "../homeComp/AppButton";

export default function TechnologiesWeMaster({ data }) {
  if (!data) return null;

  // ✅ Get heading & description
  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
    "Technologies We Master:";
  const description =
    getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "";


     const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  // ✅ Group titles (t1, t2...) and icons (i1, i2...) based on label numbers
  const categories = useMemo(() => {
    const grouped = {};

    data?.form_fields?.forEach((field) => {
      const label = field.label; // e.g. "services/fifteen/t1" or "services/fifteen/i1"

      if (label.includes("/t")) {
        // ✅ Title
        const num = label.split("/t")[1]; // "1", "2", etc.
        const result = data.results.find(
          (r) => r.section_form_field_id === field.id
        );
        if (result?.value) {
          grouped[num] = { title: result.value, icons: [] };
        }
      }

      if (label.includes("/i")) {
        // ✅ Icon
        const num = label.split("/i")[1];
        const iconResults = data.results.filter(
          (r) => r.section_form_field_id === field.id
        );
        iconResults.forEach((ic) => {
          if (ic.value) {
            if (!grouped[num]) grouped[num] = { title: `Category ${num}`, icons: [] };
            grouped[num].icons.push(`${Image_URL}${ic.value}`);
          }
        });
      }
    });

    // Convert to array sorted by number
    return Object.keys(grouped)
      .sort((a, b) => a - b)
      .map((key) => grouped[key]);
  }, [data]);

  // ✅ Default active tab
  const [activeTab, setActiveTab] = useState(categories[0]?.title || "");

  return (
    <>    <section className="flex max-w-7xl mx-auto justify-center items-center sm:px-6 -12">
      <div className=" bg-white rounded-xl sm:px-10 text-center">
        {/* Heading */}
        {/* <h2 className="text-2xl sm:text-1xl md:text-5xl lg:text-6xl mb-2 leading-none">
          {heading.includes(":") ? (
            <>
              <span className="text-[#1A7D85] ebrima-bold">
                {heading.split(":")[0]}:
              </span>
              <br />
              <span>{heading.split(":")[1]}</span>
            </>
          ) : (
            heading
          )}
        </h2> */}
        <h2 dangerouslySetInnerHTML={{ __html: heading }} className="text-2xl sm:text-1xl md:text-5xl lg:text-6xl mb-2 leading-none" />
        {/* {heading.includes(":") ? (
            <>
              <span className="text-[#1A7D85] ebrima-bold">
                {heading.split(":")[0]}:
              </span>
              <br />
              <span>{heading.split(":")[1]}</span>
            </>
          ) : (
            heading
          )}
        </h2> */}

        {/* Description */}
        {description && (
          <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-[14px] text-gray-700 my-10">
            {description}
          </p>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 my-10 mt-20">
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`relative px-2 sm:px-6 w-32 h-24 sm:py-5 text-sm sm:text-base md:text-lg font-medium rounded-lg transition 
                ${activeTab === cat.title
                  ? "bg-black text-white after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:border-l-8 after:border-r-8 after:border-t-8 after:border-l-transparent after:border-r-transparent after:border-t-black"
                  : "bg-gray-200 text-gray-800"
                }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-20">
          {categories
            .find((c) => c.title === activeTab)
            ?.icons.map((icon, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 rounded-lg bg-white border border-black shadow-[0_4px_10px_#00000066] w-28 h-28"
              >
                <Image
                  src={icon}
                  alt={activeTab}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
    <AppButton
                        text={btn}
                        color={buttoncolor}
                        link={btnlink}
                    // onClick={() => console.log("Button clicked")} 
                    />
    </>

  );
}
