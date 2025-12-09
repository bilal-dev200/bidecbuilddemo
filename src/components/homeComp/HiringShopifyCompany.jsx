// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { FaClock, FaUsers, FaProjectDiagram } from "react-icons/fa";

// const HiringShopifyCompany = () => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="bg-white py-20 px-5 md:px-20 text-center">
//       {/* Heading */}
//       <div className="max-w-4xl mx-auto mb-12">
//         <h3 className="text-gray-800 font-semibold text-lg">
//           Choose the Right Model for
//         </h3>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Hiring a{" "}
//           <span className="text-[#1A7D85]">Shopify Development Company</span>
//         </h2>
//         <p className="text-gray-500 mt-4 text-sm md:text-base">
//           Selecting the right engagement model is key to achieving scalability
//           and long-term growth. At Bilbols, we offer flexible hiring models for
//           Shopify website development services in Dubai, UAE, Saudi Arabia,
//           Oman, and Bahrain, well across the Middle East — tailored to your
//           budget, scope, and business goals.
//         </p>
//       </div>

//       {/* Main Diagram */}
//       <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
//         {/* Center Icon */}
//         <div className="flex items-center justify-center w-24 h-24 rounded-full border-4 border-[#1A7D85] bg-white shadow-md">
//           <img
//             src="/shopify-icon.png"
//             alt="Shopify Icon"
//             className="w-12 h-12"
//           />
//         </div>

//         {/* Curved connecting line */}
//         <div className="absolute hidden md:block w-[80%] h-[2px] bg-[#1A7D85] top-1/2 -translate-y-1/2 z-0" />

//         {/* Cards */}
//         <div className="flex flex-col md:flex-row gap-12 z-10">
//           {/* Left Card */}
//           <motion.div
//             className="bg-white rounded-xl shadow-md p-6 w-72 text-left border-t-4 border-[#1A7D85]"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <FaClock className="text-[#1A7D85] text-2xl" />
//               <h4 className="font-bold text-lg text-gray-800">
//                 Time & Material Model
//               </h4>
//             </div>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Perfect for evolving eCommerce needs. You pay only for the time
//               and resources spent, allowing flexibility during the Shopify
//               project lifecycle. Ideal for making iterative changes to create a
//               data-based eCommerce boost.
//             </p>
//           </motion.div>

//           {/* Center Card */}
//           <motion.div
//             className="bg-white rounded-xl shadow-md p-6 w-72 text-left border-t-4 border-[#1A7D85]"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <FaUsers className="text-[#1A7D85] text-2xl" />
//               <h4 className="font-bold text-lg text-gray-800">
//                 Dedicated Team Model
//               </h4>
//             </div>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Ideal for businesses needing ongoing Shopify assistance. Our
//               dedicated Shopify experts work as your remote team to ensure
//               seamless development, offering flexibility and cost control.
//             </p>
//           </motion.div>

//           {/* Right Card */}
//           <motion.div
//             className="bg-white rounded-xl shadow-md p-6 w-72 text-left border-t-4 border-[#1A7D85]"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <FaProjectDiagram className="text-[#1A7D85] text-2xl" />
//               <h4 className="font-bold text-lg text-gray-800">
//                 Fixed Project Model
//               </h4>
//             </div>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Best for Shopify stores with clear scope and goals. We deliver
//               high-quality Shopify website development within defined timelines
//               and budgets, ensuring complete transparency.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HiringShopifyCompany;

// "use client";
// import React from "react";
// import Lottie from "react-lottie";
// import * as animationData from "../../../public/animation2.json"; // make sure path is correct
// import { FaUsers, FaTasks, FaChartLine, FaCogs } from "react-icons/fa";

// export default function HiringShopifyCompany({ data, color }) {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   console.log("datajseuwk",data);


//   return (
//     <div className="relative bg-white text-gray-800 px-8 max-w-8xl mx-auto container overflow-hidden">
//       {/* 🔹 Right Corner Image */}
//       <img
//         src="/layer4.png" // change this to your actual image path
//         alt="decor"
//         className="absolute -top-24 right-10 w-32 md:w-48 lg:w-20 opacity-90 pointer-events-none"
//       />

//       {/* Heading */}
//       <div className="text-center mb-12 relative z-10">
//         <h2 className="text-xl ebrima-bold">Choosewe the Right Model for</h2>
//         <h1 className="text-3xl md:text-5xl text-center">
//           Hiring a Software <br />
//           <span className={`text-[${color}] font-bold block`}>
//             Development Company
//           </span>
//         </h1>
//       </div>

//       {/* Center Lottie Animation */}
//       <div className="relative flex flex-col items-center z-10">
//         <Lottie
//           options={defaultOptions}
//           height={"100%"}
//           width={"100%"}
//           isStopped={false}
//           isPaused={false}
//         />
//       </div>
//     </div>

//   );
// }
"use client";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../public/animation2.json";
// import { getFieldValue } from "@/lib/utils/sectionDataHelpers";
import {
  getFieldValue,
  COMMON_FIELD_NAMES,
  highlightLastWords,
} from "@/lib/utils/sectionDataHelpers"; // ✅ adjust path as needed

export default function HiringShopifyCompany({ data, color = "#1A7D85" }) {
  // ✅ Lottie config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // ✅ Extract dynamic field values
  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);

  return (
    <div className="relative bg-white text-gray-800 px-8 max-w-8xl mx-auto container overflow-hidden">
      {/* 🔹 Decorative Image */}
      <img
        src="/layer4.png"
        alt="decor"
        className="absolute -top-24 right-10 w-32 md:w-48 lg:w-20 opacity-90 pointer-events-none"
      />

      {/* 🔹 Heading Section */}
      <div className="text-center mb-12 relative z-10">
        {subHeading && <h2 className="text-xl ebrima-bold">{subHeading}</h2>}

        {heading && (
          <h1 className="text-3xl md:text-5xl text-center">
            {highlightLastWords(heading, 3, `text-[${color}]`)}
          </h1>
        )}

        {description && (
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">{description}</p>
        )}
      </div>

      {/* 🔹 Lottie Animation */}
      <div className="relative flex flex-col items-center z-10">
        <Lottie
          options={defaultOptions}
          height={"100%"}
          width={"100%"}
          isStopped={false}
          isPaused={false}
        />
      </div>
    </div>
  );
};
