// "use client";
// import Image from "next/image";
// import React from "react";

// const services = [
//   {
//     title: "Hybrid App Development",
//     description:
//       "One codebase for iOS and Android saving time and costs. Deliver native-like performance while reaching a wider audience.",
//     icon: "/mobil1.png"
//   },
//   {
//     title: "iOS App Development",
//     description:
//       "Elegant, high-performance apps built with Swift and Objective-C. Optimized for seamless experiences across iPhone and iPad.",
//     icon: "/mobil1.png"

//   },
//   {
//     title: "Android App Development",
//     description:
//       "Custom apps built with Kotlin and Java for scalability. Reach the widest target user base with smooth, reliable performance.",
//     icon: "/mobil1.png"

//   },
//   {
//     title: "React Native Development",
//     description:
//       "Native-level apps for iOS and Android from one codebase. Faster launch without sacrificing quality or performance.",
//     icon: "/mobil1.png"

//   },
//   {
//     title: "App Development",
//     description:
//       "Visually stunning, robustly compiled apps powered by Flutter. Speed up development with Google’s “hot reload” feature.",
//     icon: "/mobil1.png"

//   },
//   {
//     title: "PWA Development",
//     description:
//       "Deliver app-like experiences directly in the browser. Offline access, push notifications, and instant availability – no app store needed.",
//     icon: "/mobil1.png"

//   },
//   {
//     title: "AI & ML App Development",
//     description:
//       "Integrate predictive analytics, chatbots, and personalization. Assist smarter apps with intelligent AI-driven features.",
//     icon: "/mobil1.png"

//   },
//   {
//     title: "AR App Development",
//     description:
//       "Build digital and real-world with immersive AR apps. Enhance shopping, entertainment, and marketing experiences.",
//     icon: "/mobil1.png"

//   },
//   {
//     title: "VR App Development",
//     description:
//       "Create 3D, immersive environments for training, tours, and entertainment. Engaging VR apps that feel real and unforgettable.",
//     icon: "/mobil1.png"

//   },
// ];

// export default function MobileAppServices({ data }) {
//   console.log("dataasaasas", data);

//   return (
//     <section className="mb-32 py-16">
//       <div className=" mx-auto px-4 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-5xl mb-2">
//             Our Core Mobile App Development Services in{" "}
//             <span className=" font-semibold text-teal-600">Dubai UAE</span>
//           </h2>
//           <p className="text-gray-500 text-[14px] font-bold mb-2">
//             Building Exceptional Mobile Experiences, From Concept to Launch.
//           </p>
//           <p className="text-gray-400 mb-12">
//             We deliver full-stack solutions tailored to your needs — from strategy
//             and design to launch and beyond.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 px-14 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-[#F8F8F8] p-6 rounded-lg  transition-shadow duration-300 relative flex flex-col"
//             >
//               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
//                 <img
//                   src={service.icon}        // path from your array
//                   alt={service.title}
//                   width={24}
//                   height={24}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Text content aligned left */}
//               <h3 className="text-xl  text-teal-600 font-semibold  mb-2 text-left">
//                 {(() => {
//                   const words = service.title.split(" ");
//                   const lastWord = words.pop(); // last word
//                   const firstPart = words.join(" "); // baki words
//                   return (
//                     <>
//                       {firstPart} <br />
//                       <span className="">{lastWord}</span>
//                     </>
//                   );
//                 })()}
//               </h3>

//               <p className="text-gray-500 text-sm text-left">{service.description}</p>

//               {/* Left accent line */}
//               <div className="absolute left-0 top-6 w-1 h-12 bg-teal-600 rounded-r-lg"></div>
//             </div>
//           ))}
//         </div>


//       </div>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import React from "react";
// import {
//   COMMON_FIELD_NAMES,
//   getFieldValue,
//   getRobustFieldValuesByName,
//   highlightLastWords,
//   getValueByFieldNameAndPosition
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";
// import { useParams } from "next/navigation";

// export default function MobileAppServices({ data, color }) {
//   console.log("mobilsssse", data);
//   const { slug } = useParams();

//   // ✅ Section text fields
//   const heading =
//     getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
//     "Our Core Mobile App Development Services in Dubai UAE";

//   const subHeading =
//     getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) ||
//     "";

//   const description =
//     getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) ||
//     "";

//   // ✅ Arrays for services
//   const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
//   const featureDescriptions =
//     getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION) || [];
//   const featureImages =
//     getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE) || [];
//   const boolean =
//     getFieldValue(data, COMMON_FIELD_NAMES.BOOLEANVALUE);
//   console.log("featureTitles", featureTitles);

//   const buttonText =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0);

//   // ✅ Merge into one array of services
//   const services = featureTitles.map((title, index) => ({
//     title: title.value,
//     description: featureDescriptions[index]?.value || "",
//     icon: featureImages[index]
//       ? `${Image_URL}${featureImages[index]?.value}`
//       : "", // fallback
//   }));
//   console.log("featureDescriptionsssssss", boolean);

//   return (
//     <section className="w-full relative">
//       <img
//         className="hidden lg:block absolute -right-20 -top-72 z-20 w-32 rotate-45"
//         src="/layer4.png"
//         alt=""
//       />
//       <section className="max-w-[1200px] mx-auto">
//         <div className="mx-auto px-4 text-center">
//           {/* ✅ Dynamic heading */}
//           <div className="max-w-[1000px] mx-auto mb-5">
//             {/* <h2 className="text-3xl md:text-6xl mb-2">
//             {heading.split("in")[0]}{" "}
//             <span className="ebrima-bold text-[#1A7D85]">
//               {heading.split("in")[1]} {" "}

//             </span>
//           </h2> */}
//             <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-none">
//               {highlightLastWords(heading, 2, `text-[${color}]`)}
//             </h2>

//             <p className="text-[14px] ebrima-bold my-4">{subHeading}</p>
//             <p className="text-[12px] mb-12">{description}</p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-6 px-6 relative">
//             {services.map((service, index) => {
//               const remaining = services.length % 3;
//               const isLastRow =
//                 index >= services.length - remaining && remaining !== 0;

//               return (
//                 <div
//                   key={index}
//                   className={`bg-[#F8F8F8] p-6 rounded-[16px] flex flex-col ${boolean === "left" ? "items-start text-start" : "items-center text-center"}  transition-shadow duration-300 relative
//           w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
//           ${isLastRow && remaining === 1 ? "lg:w-1/3 mx-auto" : ""}
//           ${isLastRow && remaining === 2 ? "lg:w-[calc(33.333%-16px)] mxauto" : ""}
//         `}
//                 >
//                   {/* Top Accent */}
//                   {boolean === "left" ? (
//                     <div className="absolute -left-2 top-16 h-20 w-2 bg-[#1A7D85] rounded-l-lg"></div>
//                   ) : (
//                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#1A7D85] rounded-t-lg"></div>
//                   )}

//                   {/* Icon */}
//                   <div className={`w-16 h-16 rounded-full flex items-center ${boolean === "left" ? "bg-white" : "mx-auto bg-[linear-gradient(180deg,#95BF47_-60%,#F8F8F8_60%)]"} justify-center mb-4 `}>
//                     <Image
//                       src={service.icon}
//                       alt={service.title}
//                       width={32}
//                       height={32}
//                       className="object-contain"
//                     />
//                   </div>

//                   {/* Title + Description */}
//                   <h3 className={`text-xl 2xl:text-2xl ebrima-bold mb-2 ${boolean === "left" ? "text-[#1A7D85]" : "text-[#000000]"} `}>
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-500 text-[12px] 2xl:text-[15px]">
//                     {service.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//           {/* ✅ Show button only if text exists */}
//           {buttonText && (
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


//         </div>
//       </section>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import {
  COMMON_FIELD_NAMES,
  getFieldValue,
  getRobustFieldValuesByName,
  highlightLastWords,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import { useParams } from "next/navigation";
import AppButton from "./AppButton";

export default function MobileAppServices({ data, color }) {
  const { slug } = useParams();

  const heading =
    getFieldValue(data, COMMON_FIELD_NAMES.HEADING) ||
    "Our Core Mobile App Development Services in Dubai UAE";

  const subHeading =
    getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING) || "";

  const description =
    getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION) || "";

  const featureTitles =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE) || [];
  const featureDescriptions =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION) ||
    [];
  const featureImages =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE) || [];
  const boolean = getFieldValue(data, COMMON_FIELD_NAMES.BOOLEANVALUE);

  const buttonText = getValueByFieldNameAndPosition(
    data,
    COMMON_FIELD_NAMES.BUTTON_TEXT,
    0
  );

  const services = featureTitles.map((title, index) => ({
    title: title.value,
    description: featureDescriptions[index]?.value || "",
    icon: featureImages[index]
      ? `${Image_URL}${featureImages[index]?.value}`
      : "",
  }));
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 1) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";

  return (
    <>
      <section className="w-full relative">
        <img
          className="hidden lg:block absolute -right-20 -top-72 z-20 w-32 rotate-45"
          src="/layer4.png"
          alt=""
        />

        <section className="max-w-[1200px] mx-auto">
          <div className="mx-auto md:px-4 text-center">
            <div className="max-w-[1000px] mx-auto mb-5">
              <h2 className="text-2xl sm:text3xl md:text-5xl lg:text-6xl  mb-3 leadingtight  mx-auto text-center" dangerouslySetInnerHTML={{ __html: heading }} />
              {/* 
            <h2 className="text-2xl px-8 md:px-0 sm:text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-none"
                      dangerouslySetInnerHTML={{ __html: heading }}
>
            </h2> */}
              <p dangerouslySetInnerHTML={{ __html: subHeading }} className="text-[14px] ebrima-bold my-4" />
              <p className="text-[12px] mb-12">{description}</p>
            </div>

            {/* ✅ Desktop Grid */}
            {/* <div className="hidden sm:flex flex-wrap justify-center gap-6 px-6 relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-[#F8F8F8] p-6 rounded-[16px] flex flex-col ${
                  boolean === "left"
                    ? "items-start text-start"
                    : "items-center text-center"
                } transition-shadow duration-300 relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
              >
                {boolean === "left" ? (
                  <div className="absolute -left-2 top-16 h-20 w-2 bg-[#1A7D85] rounded-l-lg"></div>
                ) : (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#1A7D85] rounded-t-lg"></div>
                )}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    boolean === "left"
                      ? "bg-white"
                      : "mx-auto bg-[linear-gradient(180deg,#95BF47_-60%,#F8F8F8_60%)]"
                  }`}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3
                  className={`text-xl ebrima-bold mb-2 ${
                    boolean === "left" ? "text-[#1A7D85]" : "text-black"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[12px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div> */}
            {/* ✅ Desktop Grid */}
            <div className="hidden sm:flex flex-wrap justify-center gap-6 px-6 relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-[#F8F8F8] p-6 rounded-[16px] flex flex-col ${boolean === "left"
                    ? "items-start text-start"
                    : "items-center text-center"
                    } transition-all duration-500 relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-[#95BF47] hover:text-white`}
                >
                  {/* Top / Left Line */}
                  {boolean === "left" ? (
                    <div className="absolute -left-2 top-16 h-20 w-2 bg-[#E0E0E0] rounded-l-lg transition-all duration-300 group-hover:bg-[#1A7D85]"></div>
                  ) : (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-[#1A7D85] rounded-t-lg transition-all duration-300 group-hover:bg-[#1A7D85]"></div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-white ${boolean === "left"
                      ? "bg-white"
                      : "bg-[linear-gradient(180deg,#95BF47_-60%,#F8F8F8_60%)] hover:bg-white"
                      }`}
                  >
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl ebrima-bold mb-2 transition-all duration-500 ${boolean === "left"
                      ? "text-[#1A7D85] group-hover:text-white"
                      : "text-black group-hover:text-white"
                      }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[12px] group-hover:text-white transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>



            {/* ✅ Mobile Slider */}
            <div className="block sm:hidden px-2">
              <Swiper
                modules={[Pagination]}
                spaceBetween={12}
                slidesPerView={1.5}
                centeredSlides={false}
                loop={false}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination", // custom container for dots
                }}
                className="pb-10" // padding for space below slides
              >
                {Array.from({ length: Math.ceil(services.length / 2) }).map((_, i) => (
                  <SwiperSlide key={i} className="w-[65%]">
                    <div className="flex flex-col gap-6">
                      {services.slice(i * 2, i * 2 + 2).map((service, index) => (
                        <div
                          key={index}
                          className={`relative bg-[#F8F8F8] p-6 pt-8 rounded-[16px] flex flex-col justify-between min-h-[220px] ${boolean === "left"
                            ? "items-start text-start"
                            : "items-center text-center"
                            } transition-shadow duration-300 overflow-visible`}
                        >
                          {boolean === "left" ? (
                            <div className="absolute left-0 top-14 w-[4px] h-[56px] bg-[#1A7D85] rounded-l-md z-10"></div>
                          ) : (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-[#1A7D85] rounded-md z-10"></div>
                          )}

                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${boolean === "left"
                              ? "bg-white"
                              : "bg-[linear-gradient(180deg,#95BF47_-60%,#F8F8F8_60%)]"
                              }`}
                          >
                            <Image
                              src={service.icon}
                              alt={service.title}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>

                          <h3
                            className={`md:text-xl h-[40px] text-[14px] ebrima-bold mb-2 ${boolean === "left" ? "text-[#1A7D85]" : "text-black"
                              }`}
                          >
                            {service.title}
                          </h3>

                          <p className="text-gray-600 text-[11px] leading-snug line-clamp-4">
                            {service.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* ✅ Pagination Dots Container (centered at bottom) */}
              <div className="custom-pagination flex justify-center mt-2"></div>
            </div>





            {/* {buttonText && (
            <div className="mt-10 flex justify-center">
              <button className="px-6 py-2 text-sm sm:px-8 sm:py-3 text-[11px] sm:textbase bg-[#1A7D85] text-white font-semibold rounded-full transition-all">
                {buttonText}
              </button>
            </div>

          )} */}
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
}







