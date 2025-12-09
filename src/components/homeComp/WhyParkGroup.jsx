"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../ui/button";
import { COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function WhyParkGroup({ data }) {
  const sectionSubtitle =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
    "Featured Property";

  const slide1Data = {
    file: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_VIDEO, 0) || "/featuredProperty.png",
    title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_TITLE, 0) || "Discover the Ultimate Waterfront Living Experience",
    desc: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_DESCRIPTION, 0) || "Step into luxury with our handpicked project of the month — blending elegant design, unmatched location, and top-tier amenities."
  };

  const slide2Data = {
    file: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_VIDEO, 1) || "/featuredProperty.png",
    title: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_TITLE, 1) || "Luxury Redefined in Dubai",
    desc: getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_DESCRIPTION, 1) || "Whether you're investing or finding your dream home, this property stands out from the rest."
  };

  const primaryButtonText =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.PRIMARY_BUTTON_TEXT, 0) || "View Project";
  const secondaryButtonText =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SECONDARY_BUTTON_TEXT, 0) || "Watch Video";

  const slides = [slide1Data, slide2Data].filter(
    (slide) => slide.title && slide.title !== "undefined"
  );

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-4">
      {/* Hero Slider */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="rounded-3xl overflow-hidden"
      >
        {slides.map((slide, index) => {
          const ext = slide.file.split(".").pop().toLowerCase();
          const isVideo = ["mp4", "webm"].includes(ext);

          return (
            <SwiperSlide key={index}>
              <div className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white">
                {/* Background video or image */}
                {isVideo ? (
                  <video
                    src={`${Image_URL}/${slide.file}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${Image_URL}/${slide.file})`,
                    }}
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative text-center px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center">
                  <p className="uppercase text-sm sm:text-base md:text-lg tracking-wide font-semibold">
                    {sectionSubtitle}
                  </p>
                  <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 max-w-3xl">
                    {slide.title}
                  </h2>
                  <p className="mt-3 sm:mt-4 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mx-auto">
                    {slide.desc}
                  </p>
                  <div className="mt-6 flex justify-center gap-2 md:gap-4">
                    <Button
                      text={primaryButtonText}
                      className="text-sm md:text-lg mt-2 md:mt-6 bg-white hover:bg-gray-200 text-black px-4 md:px-10 py-2 rounded-full transition-colors duration-300"
                    />
                    <Button
                      text={secondaryButtonText}
                      className="text-sm md:text-lg mt-2 md:mt-6 border border-white hover:bg-white hover:text-black text-white px-4 md:px-10 py-2 rounded-full transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
