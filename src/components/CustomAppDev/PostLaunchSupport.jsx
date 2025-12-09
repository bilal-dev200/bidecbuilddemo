// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa6"; // ✅ react-icons se import

// const PostLaunchSupport = ({ data }) => {
//   const [openIndex, setOpenIndex] = useState(null);
//   console.log("dataaswsa", data);

//   const toggleDesc = (idx) => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   const services = [
//     {
//       img: "/bug.png",
//       title: "24/7 Monitoring & Bug Fixes",
//       desc: "Use Case: A logistics app experiencing unexpected downtime. Our Solution: Proactive monitoring and rapid issue resolution to maintain performance.",
//     },
//     {
//       img: "/bug.png",
//       title: "Performance Optimization",
//       desc: "Boost app responsiveness and reduce load times for better user experience.",
//     },
//     {
//       img: "/bug.png",
//       title: "Feature Enhancements & Upgrades",
//       desc: "Seamless addition of new features and improvements as per business needs.",
//     },
//     {
//       img: "/bug.png",
//       title: "OS & Device Compatibility Updates",
//       desc: "Ensure smooth performance across latest iOS & Android versions.",
//     },
//     {
//       img: "/bug.png",
//       title: "User Feedback Integration",
//       desc: "Incorporate real user feedback into product improvements.",
//     },
//   ];

//   return (
//     <section className="relative py-12 px-4 sm:px-8 lg:px-20 bg-white">
//       <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-stretch">
//         {/* Left Side */}
//         <div className="text-center lg:text-left">
//           <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-snug">
//             Post-Launch{" "}
//             <span className="text-teal-700">Support & Maintenance</span>
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
//             At Bidec, launching your app is only the beginning. As a full-service
//             mobile app development agency in Dubai, we provide continuous post-launch
//             services that keep your app competitive. From security patches to
//             AI-driven enhancements, our solutions ensure lasting success in the
//             UAE’s fast-moving digital economy.
//           </p>

//           {/* Services */}
//           <div className="mt-8">
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
//               Post-Launch Services & Use Cases
//             </h3>
//             <div className="space-y-4">
//               {services.map((service, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-[#F0EDED] hover:bg-gray-100 rounded-lg shadow-sm px-4 py-3 transition text-left"
//                 >
//                   <div
//                     className="flex items-center justify-between cursor-pointer"
//                     onClick={() => toggleDesc(idx)}
//                   >
//                     {/* Left side: Icon + Title */}
//                     <div className="flex items-start space-x-3 flex-1">
//                       <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-white shadow">
//                         <Image
//                           src={service.img}
//                           alt={service.title}
//                           width={28}
//                           height={28}
//                           className="object-contain max-w-full max-h-full"
//                         />
//                       </div>

//                       <div className="flex-1">
//                         <p className="font-extrabold text-gray-900 text-sm sm:text-base">
//                           {service.title}
//                         </p>
//                         {openIndex === idx && (
//                           <p className="text-gray-600 text-sm mt-1 leading-relaxed">
//                             {service.desc}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     {/* Toggle Icon */}
//                     <div className="w-9 h-9 rounded-full bg-teal-700 flex items-center justify-center shrink-0 ml-3">
//                       {openIndex === idx ? (
//                         <FaChevronUp className="w-4 h-4 text-white" />
//                       ) : (
//                         <FaChevronDown className="w-4 h-4 text-white" />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex justify-center lg:justify-end items-end">
//           <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[3/4]">
//             <Image
//               src="/post-launch.png"
//               alt="Post Launch Support"
//               fill
//               className="rounded-2xl shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PostLaunchSupport;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // ✅ react-icons already installed
import { COMMON_FIELD_NAMES, getFieldValue, getRobustFieldValuesByName, highlightText ,getValueByFieldNameAndPosition} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import AppButton from "../homeComp/AppButton";

const PostLaunchSupport = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);
  console.log("dataakjshw", data);

  if (!data) return null;

  const toggleDesc = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
  const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
  const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
  const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE);

  const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
  const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
  const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_ICON_WHITE);
 const btn =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
        "";
    const buttoncolor =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
        "";
    const btnlink =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
        "";
  const services = featureTitles.map((titleObj, idx) => ({
    title: titleObj?.value || "",
    desc: featureDescriptions[idx]?.value || "",
    img: `${Image_URL}${featureImages[idx]?.value}` || "/bug.png"
  }));

  return (
    <>
    <section className="relative w-full">
      <img
        className="hidden lg:block absolute left-0 -top-40 z-20 w-60"
        src="/layer7.png"
        alt=""
      />
      <img
        className="hidden lg:block absolute -top-[10rem] z-10 w-[500px] opacity-80 -right-32"
        src="/blueblureffect.png"
        alt=""
      />
      <section className="relative mx-auto max-w-[1200px] px-4 sm:px-8 lg:px-20 bg-white">
        <h2 className="text-2xl max-w-3xl sm:text-4xl md:text-5xl lg:text-6xl  leading-none">
          {highlightText(heading, 12, 34, "text-[#1A7D85]")}
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-[15px]">
          {description}
        </p>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-stretch">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            {/* <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl  text-gray-900 leading-snug">
            {heading}{" "}
           
          </h2> */}


            {/* Services */}

            <div className="mt-20">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                {getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) || "Post-Launch Services & Use Cases"}
              </h3>
              <div className="space-y-4">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F0EDED] hover:bg-gray-100 rounded-[8.82px]  px-4 py-4 transition"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleDesc(idx)}
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0  bggradient-to-b from-[#1A7D85] to-[#F8F8F8]">
                          <Image
                            src={service.img}
                            alt={service.title}
                            width={50}
                            height={50}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>

                        <div className="flex-1">
                          <p className="font-extrabold text-gray-900 text-sm sm:text-base leading-snug">
                            {service.title}
                          </p>
           {openIndex === idx && (
  <div className="text-gray-600 text-sm mt-2 leading-relaxed">
    {service.desc?.includes("Our Solution:")
      ? service.desc.split("Our Solution:").map((part, i) => (
          <React.Fragment key={i}>
            {i === 0 ? (
              <p className="m-0 p-0">{part.trim()}</p>
            ) : (
              <p className="m-0 p-0">{`Our Solution: ${part.trim()}`}</p>
            )}
          </React.Fragment>
        ))
      : service.desc}
  </div>
)}


                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-3 bg-gradient-to-b from-[#3FA3AB] to-[#1A7D85] shadow-[0_4px_6px_rgba(0,0,0,0.25)]">
                        {openIndex === idx ? (
                          <FaChevronUp className="text-white text-lg" />
                        ) : (
                          <FaChevronDown className="text-white text-lg" />
                        )}
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-start items-start mt-18">
            <div className="relative w-full h-[880px] max-w-sm sm:max-w-md lg:max-w-lg aspect-[3/4]">
              <Image
                src={`${Image_URL}${image}` || "/post-launch.png"}
                alt="Post Launch Support"
                fill
                className="rounded-2xl  shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
     <AppButton
                    text={btn}
                    color={buttoncolor}
                    link={btnlink}
                // onClick={() => console.log("Button clicked")} 
                />
    </>

  );
};

export default PostLaunchSupport;
