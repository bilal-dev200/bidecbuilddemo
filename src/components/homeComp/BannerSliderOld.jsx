"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../ui/button";
import { getFieldValue, findSectionByIdentifier, COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

// Fallback slides for when no dynamic data is provided
const fallbackSlides = [
  {
    id: 1,
    image: "/handoverImg.png",
    title: "Latest Handover Projects",
    subtitle:
      "Discover our most recent project handovers — delivered with precision, quality, and client satisfaction.",
  },
  {
    id: 2,
    image: "/aboutBannerImg.png",
    title: "Discover the Best Properties in Dubai",
    subtitle: "Explore a wide range of properties tailored for luxury living.",
  },
];

const BannerSliderOld = ({ data }) => {

  // Process section data into slides format
  const processSectionData = (sectionData) => {
    const heading = getFieldValue(sectionData, COMMON_FIELD_NAMES.HEADING);
    const subHeading = getFieldValue(sectionData, COMMON_FIELD_NAMES.SUB_HEADING);
    const description = getFieldValue(sectionData, COMMON_FIELD_NAMES.DESCRIPTION);
    const image = getValueByFieldNameAndPosition(sectionData, COMMON_FIELD_NAMES.IMAGE)
    const buttonText = getFieldValue(sectionData, COMMON_FIELD_NAMES.BUTTON_TEXT);
    const buttonLink = getFieldValue(sectionData, COMMON_FIELD_NAMES.BUTTON_LINK);
    // For now, create a single slide from the section data
    // In the future, you might want to support multiple slides from one section
    const dynamicSlide = {
      id: sectionData.id || 1,
      title: heading || "Welcome to Park Home",
      subtitle: subHeading || description || "Discover exceptional properties",
      image: image || "/handoverImg.png", // fallback image
      buttonText: buttonText || "View Property",
      buttonLink: buttonLink || "#"
    };

    // If you want multiple slides, you could create variations or 
    // extend this logic to handle multiple image/content sets
    return [dynamicSlide];
  };

  // Process dynamic data or use fallback
  const slides = React.useMemo(() => {
    if (!data) {
      console.log("No dynamic data provided, using fallback slides");
      return fallbackSlides;
    }

    // If data is an array of sections, find the banner section
    if (Array.isArray(data)) {
      const bannerSection = data.find(section =>
        section.type === "section_one" ||
        section.title?.toLowerCase().includes("banner")
      );

      if (bannerSection) {
        return processSectionData(bannerSection);
      }
    }

    // If data is a single section object
    if (data.form_fields && data.results) {
      return processSectionData(data);
    }

    // Fallback if data structure doesn't match
    console.log("Data structure not recognized, using fallback slides");
    return fallbackSlides;
  }, [data]);

  console.log("Processed slides:", data);

  return (
    <div className="w-full h-screen relative">
      <Swiper
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
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white relative"
              style={{ backgroundImage: `url(${Image_URL}${slide.image})` }}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0  bg-black/50"></div>

              <div className="xl:w-2/4 md:w-2/3 w-full text-center flex flex-col items-center gap-5 px-5 relative z-10">
                <p className="text-xl">{slide.subtitle}</p>
                <h2 className="lg:leading-[5rem] leading-[3rem] lg:text-7xl text-4xl font-bold">
                  {slide.title}
                </h2>
                <Button
                  text={slide.buttonText || "View Property"}
                  className="text-lg w-fit mt-6 bg-[#26326A] hover:bg-[#1E2A78] text-white px-10 py-2 rounded-full transition-colors duration-300"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Vertical Pagination - Only show if multiple slides */}
      {slides.length > 1 && (
        <div className="custom-pagination absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3"></div>
      )}

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 3px;
          height: 25px;
          background: #fff;
          border-radius: 0;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default BannerSliderOld;

// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import Button from "../ui/button";

// const slides = [
//   {
//     id: 1,
//     title: "The Leading Luxury Real Estate Developer UAE, Creating Iconic Residences and Elite Investment Opportunities",
//     subtitle: "Your Gateway to Luxurious Living in the UAE",
//     buttonText: "View Property",
//   },
//   {
//     id: 2,
//     title: "Discover the Best Properties in Dubai",
//     subtitle: "Explore a wide range of properties tailored for luxury living.",
//     buttonText: "Explore Now",
//   },
//   {
//     id: 3,
//     title: "Experience Luxury Living",
//     subtitle: "Find premium villas and apartments in iconic Dubai locations.",
//     buttonText: "Browse Listings",
//   },
// ];

// const BannerSliderOld = () => {
//   return (
//     <div className="w-full h-screen relative overflow-hidden">
//       {/* Background Video - Positioned outside the Swiper */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/dd.mp4"
//         autoPlay
//         loop
//         muted
//       />

//       {/* Dark overlay for better text readability */}
//       {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}

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
//         className="w-full h-full relative z-10"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             {/* The SwiperSlide content now focuses only on the text and button */}
//             <div className="w-full h-screen flex items-center justify-center text-white">
//               <div className=" md:w-3/4 w-full text-center flex flex-col items-center gap-5 px-5">
//                 <h2 className="lg:leading-[3rem] leading-[3rem] lg:text-5xl text-4xl font-bold">
//                   {slide.title}
//                 </h2>
//                 <p className="text-xl">{slide.subtitle}</p>
//                 <Button
//                   text={slide.buttonText}
//                   className="text-lg w-fit mt-6 bg-[#26326A] hover:bg-[#1E2A78] text-white px-10 py-2 rounded-full transition-colors duration-300"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Vertical Pagination */}
//       {slides.length > 1 && (
//         <div className="custom-pagination absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3"></div>
//       )}

//             <style jsx global>{`
//         .custom-pagination .swiper-pagination-bullet {
//           width: 3px;
//           height: 25px;
//           background: #fff;
//           border-radius: 0;
//           opacity: 0.5;
//           transition: opacity 0.3s ease;
//         }
//         .custom-pagination .swiper-pagination-bullet-active {
//           opacity: 1;
//         }
//       `}</style>
//         </div>
//     );
// };

// export default BannerSliderOld;
