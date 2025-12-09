"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../ui/button";
import {
  getValueByFieldNameAndPosition,
  COMMON_FIELD_NAMES,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

// Fallback slides for when no dynamic data is provided
const fallbackSlides = [
  {
    id: 1,
    image: "/handoverImg.png",
    title: "Latest Handover Projects",
    desc: "Discover our most recent project handovers — delivered with precision, quality, and client satisfaction.",
  },
  {
    id: 2,
    image: "/aboutBannerImg.png",
    title: "Discover the Best Properties in Dubai",
    desc: "Explore a wide range of properties tailored for luxury living.",
  },
];

const BannerSliderRightText = ({ data }) => {
  // Extract slides dynamically
  const slide1 = {
    media:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 0) ||
      "/featuredProperty.png",
    sub_head: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0),
    title:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_TITLE, 0) ||
      "Discover the Ultimate Waterfront Living Experience",
    desc:
      getValueByFieldNameAndPosition(
        data,
        COMMON_FIELD_NAMES.SLIDE_DESCRIPTION,
        0
      ) ||
      "Step into luxury with our handpicked project of the month — blending elegant design, unmatched location, and top-tier amenities.",
  };

  const slide2 = {
    media:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 1) ||
      "/featuredProperty.png",
    sub_head: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 1),
    title:
      getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_TITLE, 1) ||
      "Luxury Redefined in Dubai",
    desc:
      getValueByFieldNameAndPosition(
        data,
        COMMON_FIELD_NAMES.SLIDE_DESCRIPTION,
        1
      ) ||
      "Whether you're investing or finding your dream home, this property stands out from the rest.",
  };

  // Buttons
  const buttonText =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "View Project";

  const slides = [slide1, slide2].filter(
    (s) => s.title && s.title !== "undefined"
  );

  const finalSlides = slides.length ? slides : fallbackSlides;

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
        {finalSlides.map((slide, index) => {
          const isVideo = slide.media.endsWith(".mp4");

          return (
            <SwiperSlide key={index}>
              <div className="w-full h-screen relative flex items-center justify-start text-white">
                {/* Background Media */}
                {isVideo ? (
                  <video
                    src={`${Image_URL}${slide.media}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.media})` }}
                  ></div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="xl:w-2/4 md:w-2/3 w-full text-start flex flex-col items-start gap-5 px-5 relative z-10">
                  <h3 className="text-xl">{slide.sub_head}</h3>
                  <h2 className="lg:leading-[5rem] leading-[3rem] lg:text-7xl text-4xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="text-xl">{slide.desc}</p>
                  <div className="flex gap-4 mt-6">
                    <Button
                      text={buttonText}
                      className="text-lg bg-white hover:bg-gray-200 text-black px-10 py-2 rounded-full transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Vertical Pagination */}
      {finalSlides.length > 1 && (
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

export default BannerSliderRightText;
