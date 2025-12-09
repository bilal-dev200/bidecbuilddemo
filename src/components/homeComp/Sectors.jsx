// // "use client";
// // import React, { useState } from "react";
// // import Image from "next/image";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // import {
// //   COMMON_FIELD_NAMES,
// //   getRobustFieldValuesByName,
// // } from "@/lib/utils/sectionDataHelpers";
// // import { Image_URL } from "@/config/constants";

// // const Sectors = ({ data }) => {
// //   // ✅ Heading & description with fallback
// //   console.log(data,)
// //   const headingRaw =
// //     getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.HEADING)[0]?.value ||
// //     "Software Development Solutions Tailored for Every Sector";

// //   const description =
// //     getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.DESCRIPTION)[0]?.value ||
// //     "At Bidec, we combine deep domain knowledge with digital innovation to deliver tailored solutions for diverse industries.";

// //   // ✅ Split heading for last 2 words styling
// //   const headingWords = headingRaw.split(" ");
// //   const mainWords = headingWords.slice(0, -2).join(" ");
// //   const lastTwoWords = headingWords.slice(-2).join(" ");

// //   // ✅ Fallback sectors
// //   const fallbackSectors = [
// //     { title: "Healthcare", desc: "Enabling smarter patient care...", img: "/software.png" },
// //     { title: "Fintech", desc: "Delivering secure, scalable Fintech solutions...", img: "/software.png" },
// //     { title: "Agriculture", desc: "Empowering modern farming...", img: "/software.png" },
// //     { title: "Automotive", desc: "Building connected, intelligent solutions...", img: "/software.png" },
// //     { title: "Education", desc: "Transforming learning with e-learning platforms...", img: "/software.png" },
// //     { title: "Retail", desc: "Boosting sales through smart retail solutions...", img: "/software.png" },
// //     { title: "Logistics", desc: "Optimizing supply chains with smart logistics...", img: "/software.png" },
// //     { title: "Energy", desc: "Improving energy efficiency and sustainability...", img: "/software.png" },
// //   ];

// //   // ✅ Dynamic sectors from API
// //   const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
// //   const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
// //   const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);

// //   const sectors =
// //     featureTitles.length > 0
// //       ? featureTitles.map((titleObj, i) => ({
// //         title: titleObj?.value || `Sector ${i + 1}`,
// //         desc: featureDescriptions[i]?.value || "Description not available",
// //         img: featureImages[i]?.value ? `${Image_URL}/${featureImages[i].value}` : "/software.png",
// //       }))
// //       : fallbackSectors;

// //   // ✅ Pagination
// //   const [startIndex, setStartIndex] = useState(0);
// //   const itemsPerPage = 8;

// //   const handleNext = () => startIndex + itemsPerPage < sectors.length && setStartIndex(startIndex + itemsPerPage);
// //   const handlePrev = () => startIndex - itemsPerPage >= 0 && setStartIndex(startIndex - itemsPerPage);

// //   const visibleSectors = sectors.slice(startIndex, startIndex + itemsPerPage);

// //   return (
// //     <section
// //       className="md:h-[50.6rem] mb-10 rounded-[20px] m-4 p-2 text-white py-16 px-6 md:px-12 bg-cover bg-center bg-no-repeat mx-auto container max-w-[1200px]"
// //       style={{ backgroundImage: "url('/back1.png')" }}
// //     >
// //       {/* Heading */}
// //       <div className=" mx-auto text-center mb-12 px-4 sm:px-0">
// //         <p className=" max-w-[1200px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-snug">
// //           <div className="mx-auto text-center mb-4 pb-[38px] px-4 sm:px-0">
// //             <p className=" max-w-6xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-snug">
// //               <span className="tracking-wide Ebrima">{mainWords}</span>{" "}
// //               <span className="font-bold tracking-wide ebrima-bold">{lastTwoWords}</span>
// //             </p>
// //             {description && (
// //               <p className="max-w-4xl mx-auto text-center text-gray-300 text-sm sm:text-base md:text-[14px]">
// //                 {description}
// //               </p>
// //             )}
// //           </div>

// //           {/* Cards */}
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
// //             {visibleSectors.map((sector, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-black"
// //               >
// //                 {sector.img && (
// //                   <div className="relative w-full h-48 md:h-40">
// //                     <Image src={sector.img} alt={sector.title} fill className="object-cover w-full h-full" />
// //                     <Image src={sector.img} alt={sector.title} fill className="object-none" />
// //                   </div>
// //                 )}
// //                 <div className="p-4">
// //                   <h3 className="text-lg font-semibold mb-2 tracking-wide">{sector.title}</h3>
// //                   <p className="text-gray-600 max-w-[1200px] text-[12.35px] ">{sector.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Navigation */}
// //           <div className="flex justify-center items-center gap-6 mt-10">
// //             <button
// //               onClick={handlePrev}
// //               disabled={startIndex === 0}
// //               className="bg-[#F8F8F8] text-black p-3 rounded-full transition disabled:opacity-50"
// //             >
// //               <IoIosArrowBack size={20} />
// //             </button>
// //             <button
// //               onClick={handleNext}
// //               disabled={startIndex + itemsPerPage >= sectors.length}
// //               className="bg-[#F8F8F8] text-black p-3 rounded-full transition disabled:opacity-50"
// //             >
// //               <IoIosArrowForward size={20} />
// //             </button>
// //           </div>
// //         </section>
// //         );
// // };

// //         export default Sectors;
//   "use client";
//   import React, { useState } from "react";
//   import Image from "next/image";
//   import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//   import {
//     COMMON_FIELD_NAMES,
//     getRobustFieldValuesByName,
//   } from "@/lib/utils/sectionDataHelpers";
//   import { Image_URL } from "@/config/constants";

//   const Sectors = ({ data }) => {
//     // ✅ Heading & description with fallback
//     console.log(data,"sectors")
//     const headingRaw =
//       getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.HEADING)[0]?.value ||
//       "Software Development Solutions Tailored for Every Sector";

//     const description =
//       getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.DESCRIPTION)[0]?.value ||
//       "At Bidec, we combine deep domain knowledge with digital innovation to deliver tailored solutions for diverse industries.";

//     // ✅ Split heading for last 2 words styling
//     const headingWords = headingRaw.split(" ");
//     const mainWords = headingWords.slice(0, -2).join(" ");
//     const lastTwoWords = headingWords.slice(-2).join(" ");

//     // ✅ Fallback sectors
//     const fallbackSectors = [
//       { title: "Healthcare", desc: "Enabling smarter patient care...", img: "/software.png" },
//       { title: "Fintech", desc: "Delivering secure, scalable Fintech solutions...", img: "/software.png" },
//       { title: "Agriculture", desc: "Empowering modern farming...", img: "/software.png" },
//       { title: "Automotive", desc: "Building connected, intelligent solutions...", img: "/software.png" },
//       { title: "Education", desc: "Transforming learning with e-learning platforms...", img: "/software.png" },
//       { title: "Retail", desc: "Boosting sales through smart retail solutions...", img: "/software.png" },
//       { title: "Logistics", desc: "Optimizing supply chains with smart logistics...", img: "/software.png" },
//       { title: "Energy", desc: "Improving energy efficiency and sustainability...", img: "/software.png" },
//     ];

//     // ✅ Dynamic sectors from API
//     const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
//     const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
//     const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);

//     const sectors =
//       featureTitles.length > 0
//         ? featureTitles.map((titleObj, i) => ({
//             title: titleObj?.value || `Sector ${i + 1}`,
//             desc: featureDescriptions[i]?.value || "Description not available",
//             img: featureImages[i]?.value
//               ? `${Image_URL}/${featureImages[i].value}`
//               : "/software.png",
//           }))
//         : fallbackSectors;

//     // ✅ Pagination
//     const [startIndex, setStartIndex] = useState(0);
//     const itemsPerPage = 8;

//     const handleNext = () =>
//       startIndex + itemsPerPage < sectors.length &&
//       setStartIndex(startIndex + itemsPerPage);

//     const handlePrev = () =>
//       startIndex - itemsPerPage >= 0 && setStartIndex(startIndex - itemsPerPage);

//     const visibleSectors = sectors.slice(startIndex, startIndex + itemsPerPage);

//     return (
//       <>
//       <div className="absolute -bottom-10 -left-20 w-[400px] h-[300px]">
//     <Image
//       src="/layer3.png"
//       alt="Decorative Layer"
//       fill
//       className="object-contain opacity-90"
//     />
//   </div>
//       <section
//         className="md:h-[59.2rem] relative z-[1]  rounded-[20px] m-4 p-2 text-white py-40 mb-60 px-6 md:px-12 bg-cover bg-center bg-no-repeat mx-auto container max-w-[1240px]"
//         style={{ backgroundImage: "url('/back1.png')" }}
//       >
//         {/* Heading */}
//         <div className="mx-auto text-center  px-4 sm:px-0">
//           <p className="max-w-6xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-snug">
//             <span className="tracking-wide Ebrima">{mainWords}</span>{" "}
//             <span className="font-bold tracking-wide ebrima-bold">{lastTwoWords}</span>
//           </p>

//           {description && (
//             <p className="max-w-4xl mb-10 mx-auto text-center text-gray-300 text-sm sm:text-base md:text-[14px]">
//               {description}
//             </p>
//           )}
//         </div>

//         {/* Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
//           {visibleSectors.map((sector, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-black"
//             >
//               {sector.img && (
//                 <div className="relative w-full h-48 md:h-40">
//                   <Image
//                     src={sector.img}
//                     alt={sector.title}
//                     fill
//                     className="object-none w-full h-full"
//                   />
//                 </div>
//               )}
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-2 tracking-wide">{sector.title}</h3>
//                 <p className="text-gray-600 text-[12.35px]">{sector.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-center items-center gap-6  mt-10">
//           <button
//             onClick={handlePrev}
//             disabled={startIndex === 0}
//             className="bg-[#F8F8F8] text-black p-3 rounded-full transition disabled:opacity-50"
//           >
//             <IoIosArrowBack size={20} />
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={startIndex + itemsPerPage >= sectors.length}
//             className="bg-[#F8F8F8] text-black p-3 rounded-full transition disabled:opacity-50"
//           >
//             <IoIosArrowForward size={20} />
//           </button>
//         </div>
//       </section>
//       </>
//     );
//   };

//   export default Sectors;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  COMMON_FIELD_NAMES,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Sectors = ({ data, color }) => {
  const headingRaw =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.HEADING)[0]?.value ||
    "Software Development Solutions Tailored for Every Sector";

  const description =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.DESCRIPTION)[0]?.value ||
    "At Bidec, we combine deep domain knowledge with digital innovation to deliver tailored solutions for diverse industries.";

  const headingWords = headingRaw.split(" ");
  const mainWords = headingWords.slice(0, -2).join(" ");
  const lastTwoWords = headingWords.slice(-2).join(" ");

  const fallbackSectors = [
    { title: "Healthcare", desc: "Enabling smarter patient care with AI, analytics, and digital transformation solutions tailored for hospitals and clinics.", img: "/software.png" },
    { title: "Fintech", desc: "Delivering secure, scalable Fintech platforms with AI-driven risk assessment and seamless user experiences.", img: "/software.png" },
    { title: "Agriculture", desc: "Empowering modern farming with smart sensors, precision analytics, and IoT-driven automation for higher yields.", img: "/software.png" },
    { title: "Automotive", desc: "Building connected and intelligent automotive software to power the vehicles of tomorrow.", img: "/software.png" },
  ];

  const featureTitles = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_TITLE);
  const featureDescriptions = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION);
  const featureImages = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.FEATURE_IMAGE);

  const buttonText =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0);

  const sectors =
    featureTitles.length > 0
      ? featureTitles.map((titleObj, i) => ({
        title: titleObj?.value || `Sector ${i + 1}`,
        desc: featureDescriptions[i]?.value || "Description not available",
        img: featureImages[i]?.value
          ? featureImages[i].value
          : "/software.png",
      }))
      : fallbackSectors;

  // Pagination
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;
  const handleNext = () =>
    startIndex + itemsPerPage < sectors.length &&
    setStartIndex(startIndex + itemsPerPage);
  const handlePrev = () =>
    startIndex - itemsPerPage >= 0 && setStartIndex(startIndex - itemsPerPage);
  const visibleSectors = sectors.slice(startIndex, startIndex + itemsPerPage);

  // Tooltip/modal state
  const [selectedSector, setSelectedSector] = useState(null);
  const industries = [
    {
      title: "Fintech",
      img: "/agri.png",
      desc: "Empowering modern farming with data analytics, IoT solutions, and AI insights.",
    },
    {
      title: "Agriculture",
      img: "/agri.png",
      desc: "Empowering modern farming with data analytics, IoT solutions, and AI insights.",
    },
    {
      title: "Automation",
      img: "/agri.png",
      desc: "Building automation systems for enhanced industrial performance and safety.",
    },
     {
      title: "Automation",
      img: "/agri.png",
      desc: "Building automation systems for enhanced industrial performance and safety.",
    },
     {
      title: "Automation",
      img: "/agri.png",
      desc: "Building automation systems for enhanced industrial performance and safety.",
    },
     {
      title: "Automation",
      img: "/agri.png",
      desc: "Building automation systems for enhanced industrial performance and safety.",
    },
  ];
  return (
    <div className="relative px-2 w-full">

      {/* <div className="absolute -top-[10rem] -left-20 w-[400px] h-[300px]">
        <Image
          src="/layer3.png"
          alt="Decorative Layer"
          fill
          className="object-contain opacity-90"
        />
      </div> */}
      <img
        src="/design2.png"
        alt="Decorative"
        className="lg:block absolute hidden  -top-[15rem] z-0 left-0 xl:w-[210px] w-[200px] fit 80"
      />

      <section
        className="hidden md:block md:h-[52.89rem] lg:h-[55.93rem] xl:h-[57.44rem] 2xl:h-[58.67rem] md:hfull  relative z-[1] rounded-[24px] p-2 text-white py-10 md:py-10 lg:py-36 md:mb-60 lg:mb-40 px-6 lg:px-12 bg-cover bg-center bg-no-repeat mx-auto container max-w-[1240px]"
        style={{ backgroundImage: "url('/back1.png')" }}
      >
        {/* Heading */}
        <div className="mx-auto text-center px-4 sm:px-0">
          <p className="max-w-6xl text-2xl h-[121px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-none">
            <span className="tracking-wide Ebrima">{mainWords}</span>{" "}
            <span className="font-bold tracking-wide ebrima-bold">
              {lastTwoWords}
            </span>
          </p>

          {/* {description && (
            <p className="max-w-4xl mb-10 md:h-16 mx-auto line-clamp-3 text-center  text-sm sm:text-base lg:text-[14px] 2xl:text-[17px]">
              {description}
            </p>
          )} */}

          {/* {buttonText && (
            <div className="flex justify-center mb-10">
              <button
                className="bg-[#00B3A7] text-white px-6 py-2 rounded-full text-sm sm:text-base hover:bg-[#00998f] transition"
              >
                {buttonText}
              </button>
            </div>
          )} */}
          {/* Description and Button Placeholder */}
          <div className="flex flex-col items-center justify-between mb-10" style={{ minHeight: "130px" }}>
            {/* Description (always takes 3-line space) */}
            <p
              className="max-w-4xl mx-auto text-center text-sm sm:text-base lg:text-[14px] 2xl:text-[17px] line-clamp-3"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "4.5em", // around 3 lines height
              }}
            >
              {description}
            </p>

            {/* Button (always takes reserved space even if empty) */}
            <div className="flex justify-center mt-4" style={{ minHeight: "45px" }}>
              {buttonText ? (
                <button
                  // style={{
                  //   backgroundColor: color || "#1A7D85",
                  // }}
                  className="text-white bg-[#1A7D85] px-6 py-2 rounded-full text-sm sm:text-base "
                >
                  {buttonText}
                </button>
              ) : (
                <div style={{ height: "40px" }}></div> // keeps the space if button not present
              )}
            </div>
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {visibleSectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] overflow-hidden shadow-md transition-shadow text-black cursor-pointer"
            // onClick={() => setSelectedSector(sector)}
            >
              <div className="w-full">
                {sector.img && (
                  <div className="relative w-full h-48 md:h-40">
                    <img
                      src={`${Image_URL}${sector.img}`}
                      alt={sector.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h2 className="lg:text-[15px] 2xl:text-[17px] font-semibold  mb-2 tracking-wide">
                  {sector.title}
                </h2>
                {/* 3-line description with ellipsis */}
                <p className="lg:text-[10px] 2xl:text-[12px] line-clamp-3">
                  {sector.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="bg-[#F8F8F8] text-black p-3 rounded-full transition disabled:opacity-50"
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= sectors.length}
            className="bg-[#F8F8F8] text-black p-3 rounded-full transition disabled:opacity-50"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </section>

 <div className="p-4 md:pb-0 pb-32">
  <div
    className="block md:hidden h-[372px] pb-40 rounded-[10px] text-white py-8 px4 text-center bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/backgroundmobile.png')",
    }}
  >
    <p className="max-w-5xl h-24 text-2xl mt-2 mb-4 leading-none">
      <span className="tracking-wide Ebrima">{mainWords}</span>{" "}
      <span className="font-bold tracking-wide ebrima-bold">{lastTwoWords}</span>
    </p>

    <p className="px-2 text-[11px] line-clamp-4 h-24 leading-relaxed mt-2 mb-6">
                   {description}
    </p>

    {/* ✅ Swiper Added Here */}
    <Swiper
      modules={[Autoplay]}
      spaceBetween={12}
      slidesPerView={2.5}
      centeredSlides={false}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[300px]"
    >
      {visibleSectors.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex-shrink-0 bg-white shadow-md text-left rounded-[6px] overflow-hidden h-[220px] flex flex-col">
            <img
              src={`${Image_URL}${item.img}`}
              alt={item.title}
              className="w-full h-[100px] object-cover"
            />
            <div className="p-3 flex flex-col  flex-grow">
              <h3 className="font-semibold text-gray-900 text-[12px] line-clamp-2 h-10">
                {item.title}
              </h3>
              <p className="text-[10px] text-black mt-1 line-clamp-3 h-[px]">
                {item.desc}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>


    </div>
  );
};

export default Sectors;
