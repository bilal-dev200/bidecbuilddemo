// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import {
//   getValueByFieldNameAndPosition,
//   COMMON_FIELD_NAMES,
//   scrollToSection,
// } from "@/lib/utils/sectionDataHelpers";
// import { Image_URL } from "@/config/constants";
// import { MdArrowOutward } from "react-icons/md";
// import { usePathname } from "next/navigation";

// // Fallback slides for when no dynamic data is provided
// // const fallbackSlides = [
// //   {
// //     id: 1,
// //     media: "/handoverImg.png",
// //     title: "Latest Handover Projects",
// //     desc: "Discover our most recent project handovers — delivered with precision, quality, and client satisfaction.",
// //   },
// //   {
// //     id: 2,
// //     media: "/aboutBannerImg.png",
// //     title: "Discover the Best Properties in Dubai",
// //     desc: "Explore a wide range of properties tailored for luxury living.",
// //   },
// // ];

// const BannerSlider = ({ data, setIsOpen, bannerBtn = false, color }) => {
//   console.log("dd", data)
//   // Extract slides dynamically
//   const slide1 = {
//     media:
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 0) ||
//       "/featuredProperty.png",
//     title:
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_TITLE, 0) ||
//       "",
//     head:
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
//       "Dis ss",
//     sub_head:
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
//       "Step into luxury with our handpicked project of the month",
//     top_subhead:
//       getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
//       "Custom Software Development Company with AI-Powered Innovation",
//     desc:
//       getValueByFieldNameAndPosition(
//         data,
//         COMMON_FIELD_NAMES.SLIDE_DESCRIPTION,
//         0
//       ) ||
//       "Step s luxury with our handpicked project of the month — blending elegant design, unmatched location, and top-tier amenities.",
//   };
//   const pathname = usePathname();

//   const buttonText =
//     getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0);

//   const slides = [slide1].filter((s) => s.title && s.title !== "undefined");
//   const finalSlides = slides.length ? slides : fallbackSlides;

//   const openModal = () => {
//     if (setIsOpen) setIsOpen(true);
//   };

//   // Function to highlight first 2 words
//   const highlightWords = (text) => {
//     if (!text) return "";

//     const words = text.split(" ");
//     if (pathname === "/") {
//       // ✅ Highlight first word for home
//       const first = words[0];
//       const rest = words.slice(1).join(" ");
//       return (
//         <>
//           <span style={{ color: color || "#1A7D85" }}>{first}</span>{" "}
//           {rest}
//         </>
//       );
//     } else {
//       // ✅ Highlight last 2 words for other routes
//       const main = words.slice(0, -2).join(" ");
//       const last = words.slice(-2).join(" ");
//       return (
//         <>
//           {main}{" "}
//           <span style={{ color: color || "#1A7D85" }}>{last}</span>
//         </>
//       );
//     }
//   };;

//   return (
//     <div className="w-full h-screen relative overflow-x-hidden">
//       <Swiper
//         direction="horizontal"
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           el: ".custom-pagination",
//         }}
//         modules={[Autoplay, Pagination]}
//         className="w-full h-full"
//       >
//         {finalSlides.map((slide, index) => {
//           const isVideo = slide.media.endsWith(".mp4");

//           return (
//             <SwiperSlide key={index}>
//               <div className="w-full h-screen relative flex items-center justify-start  text-white px-4 sm:px-8 ">
//                 {/* Background Media */}
//                 {isVideo ? (
//                   <video
//                     src={`${Image_URL}/${slide.media}`}
//                     className="absolute top-0 left-0 w-full h-full object-cover"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                   />
//                 ) : (
//                   <div
//                     className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//                     style={{ backgroundImage: `url(${Image_URL}${slide.media})` }}
//                   />
//                 )}

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 {/* Content */}
//                 <div className="xl:w-3/5 md:w-2/3 w-full mt-14 flex flex-col 2xl:gap-5 gap-3 sm:px-4 relative z-10 items-center md:items-start text-center md:text-left">
//                   {slide.top_subhead && (
//                     <span
//                       style={{
//                         backgroundColor: pathname === "/" ? "#FFF" : color ? color : "#FFF",
//                         color: pathname === "/" ? "#000" : color ? "#FFF" : "#000",
//                       }}
//                       className={`px-2 py-1 rounded-2xl md:rounded-r-full text-[10px] lg:text-[12px] 2xl:text-[20px]  md:text-[10px] sm:text-[12px] font-semibold mb-2`}
//                     >
//                       {slide.top_subhead}
//                     </span>
//                   )}
//                     <h2 className="lg:leading-none 2xl:w-[800px] lg:w-[700px] ebrima-bold leading-none 2xl:text-[5rem] 7xl lg:text-6xl md:text-5xl text-3xl font-bold">
//                       {highlightWords(slide.head)}
//                     </h2>
//                   <h2 className="2xl:text-[30px] lg:text-[26px] fontsemibold">{slide.title}</h2>
//                   <p className="2xl:text-[18px] lg:text-[14px] xl:w-[700px] lg:w-[500px] sm:text-[10px]">{slide.desc}</p>

//                   {/* {buttonText && (
//                     <div className="flex gap-4 mt-3 justify-center md:justify-start">
//                       <button
//                         onClick={openModal}
//                         style={{ backgroundColor: color }}
//                         className={`inline-flex items-center gap-2 bg-[${color}] text-white px-5 py-3 rounded-full font-semibold text-sm sm:text-xs transition`}
//                       >
//                         {buttonText}
//                         <MdArrowOutward className="text-lg" />
//                       </button>
//                     </div>
//                   )} */}
//                   {buttonText && (
//                     <div className="flex gap-4 mt-3 justify-center md:justify-start">
//                       <button
//                          onClick={() => scrollToSection("get-in-touch")}
//                         style={{ backgroundColor: color }}
//                         className={`inline-flex items-center gap-4 cursor-pointer text-white 2xl:px-8 px-6 2xl:py-3 py-2 rounded-full font-semibold 2xl:text-lg lg:text-md`}
//                       >
//                         {buttonText}
//                         <MdArrowOutward className="text-xl" />
//                       </button>
//                     </div>
//                   )}

//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>

//   );
// };

// export default BannerSlider;
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  getValueByFieldNameAndPosition,
  COMMON_FIELD_NAMES,
  scrollToSection,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import { MdArrowOutward } from "react-icons/md";
import { usePathname } from "next/navigation";

const BannerSlider = ({ data, setIsOpen, bannerBtn = false, color }) => {
  const pathname = usePathname();

  // 🧩 Extract slides dynamically
  const slide1 = {
    media:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 0) ||
      "",
    mobileMedia:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 1) ||
      "",
    title:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_TITLE, 0) ||
      "",
    head:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
      "Discover the Ultimate Waterfront Living",
    sub_head:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
      "",
    top_subhead:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
      "",
    desc:
      getValueByFieldNameAndPosition(
        data,
        COMMON_FIELD_NAMES.SLIDE_DESCRIPTION,
        0
      ) || "",
  };

  const buttonText =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0);

  // 🧩 Only keep valid slides
  const slides = [slide1].filter(
    (s) => s.title.trim() !== "" || s.head.trim() !== "" || s.desc.trim() !== ""
  );

  // 🧩 No fallback slides
  const finalSlides = slides.length ? slides : [];

  // 🧠 Highlight words function
  const highlightWords = (text) => {
    if (!text) return "";
    const words = text.split(" ");
    if (pathname === "/") {
      const first = words[0];
      const rest = words.slice(1).join(" ");
      return (
        <>
          <span
          // style={{ color: color || "#1A7D85" }}
          >{first}</span>{" "}
          {rest}
        </>
      );
    } else {
      const main = words.slice(0, -2).join(" ");
      const last = words.slice(-2).join(" ");
      return (
        <>
          {main}{" "}
          <span
          // style={{ color: color || "#1A7D85" }}
          >{last}</span>
        </>
      );
    }
  };

  if (finalSlides.length === 0) {
    // ❌ No data case — show nothing
    return null;
  }

  return (
    <div className="w-full md:h-screen relative overflow-x-hidden">
      {/* <Swiper
        direction="horizontal"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      > */}
        {finalSlides.map((slide, index) => {
          const isVideo = slide.media.endsWith(".mp4");

          return (
            <div key={index}>
              <div className="w-full h-[70vh] md:h-screen relative flex items-center justify-start text-white px-4 sm:px-8">
                {/* Background Media */}
                {isVideo ? (
                  <video
                    src={`${Image_URL}/${slide.media}`}
                    className="absolute hidden md:block top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  slide.media && (
                    <div
                      className="absolute hidden md:block top-0 left-0 w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${Image_URL}${slide.media})`,
                      }}
                    />
                  )
                )}
                {slide.mobileMedia && (
                  <div
                    className="absolute block md:hidden top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${Image_URL}${slide.mobileMedia})`,
                    }}
                  />
                )}


                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}

                {/* Content */}
                <div className="xl:w-3/5 md:w-2/3 w-full mt-14 flex flex-col 2xl:gap-5 gap-3 sm:px-4 relative z-10 items-start md:items-start text-left md:text-left">
                  {slide.top_subhead && (
                    <span
                      style={{
                        backgroundColor: color === "#FFFFFF" ? "#FFF" : color ? color : "#FFF",
                        color: color === "#FFFFFF" ? "#000" : color ? "#FFF" : "#000",
                      }}
                      className={`px-2 pr-5 py-1 rounded-2xl md:rounded-r-full text-[10px] lg:text-[12px] 2xl:text-[20px]  md:text-[10px] sm:text-[12px] font-semibold mb-2`}
                    >
                      {slide.top_subhead}
                    </span>
                  )}
                  {/* <h2 className="lg:leading-none 2xl:w-[800px] lg:w-[700px] ebrima-bold leading-none 2xl:text-[5rem] 7xl lg:text-6xl md:text-5xl text-2xl font-bold"
                           dangerouslySetInnerHTML={{ __html: slide.head }}
 >
                  </h2> */}
                  <h2
  className="lg:leading-none 2xl:w-[800px] lg:w-[700px] ebrima-bold leading-none 2xl:text-[5rem] 7xl lg:text-6xl md:text-5xl text-2xl font-bold select-text"
  style={{ userSelect: "text" }}
  dangerouslySetInnerHTML={{ __html: slide.head }}
></h2>

                  <h2 className="2xl:text-[30px] lg:text-[26px] fontsemibold">{slide.title}</h2>
                  <p className="2xl:text-[18px] lg:text-[14px]  lg:w-[540px] text-[11px]">{slide.desc}</p>

                  {/* {buttonText && (
                    <div className="flex gap-4 mt-3 justify-center md:justify-start">
                      <button
                        onClick={openModal}
                        style={{ backgroundColor: color }}
                        className={`inline-flex items-center gap-2 bg-[${color}] text-white px-5 py-3 rounded-full font-semibold text-sm sm:text-xs transition`}
                      >
                        {buttonText}
                        <MdArrowOutward className="text-lg" />
                      </button>
                    </div>
                  )} */}
            {/* {buttonText && (
  <div className="flex gap-3 mt-3 justify-start">
    <button
      style={{
        backgroundColor:
          color === "#FFFFFF" ? "#FFF" : color ? color : "#FFF",
        color: color === "#FFFFFF" ? "#000" : color ? "#FFF" : "#000",
      }}
      onClick={() => {
        const section = document.getElementById("get-in-touch");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`inline-flex items-center gap-2 md:gap-3 cursor-pointer
        px-4 py-1.5 md:px-4 md:py-1 
        rounded-full font-semibold 
        text-sm md:text-md lg:text-lg
        transition-all duration-300 ease-in-out transform
        hover:scale-105 hover:shadow-lg hover:brightness-110
      `}
    >
      {buttonText}
      <MdArrowOutward className="text-base md:text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  </div>
)} */}
{/* {buttonText && (
  <div className="flex gap-3 mt-3 justify-start">
    <button
      onClick={() => {
        const section = document.getElementById("get-in-touch");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`inline-flex items-center gap-2 md:gap-3 cursor-pointer
        px-4 py-1.5 md:px-4 md:py-1 
        rounded-full font-semibold 
        text-sm md:text-md lg:text-lg
        bg-white text-black 
        border border-gray-300
        transition-all duration-300 ease-in-out transform
        hover:scale-105 hover:shadow-lg
        hover:bg-gradient-to-r hover:from-[#1A7D85] hover:to-[#0C4A6E]
        hover:text-white
      `}
    >
      {buttonText}
      <MdArrowOutward className="text-base md:text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  </div>
)} */}
{buttonText && (
  <div className="flex gap-3 mt-3 justify-start">
    <button
      onClick={() => {
        const section = document.getElementById("get-in-touch");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`inline-flex items-center gap-2 md:gap-3 cursor-pointer
        px-4 py-1.5 md:px-4 md:py-1 
        rounded-full font-semibold 
        text-sm md:text-md lg:text-lg
        bg-white text-black border border-gray-300
        transition-all duration-300 ease-in-out transform
        hover:scale-105 hover:shadow-lg
        hover:bg-black hover:text-white
      `}
    >
      {buttonText}
      <MdArrowOutward className="text-base md:text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  </div>
)}




                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BannerSlider;
