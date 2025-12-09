
"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {
  COMMON_FIELD_NAMES,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import AppButton from "../homeComp/AppButton";

export default function SoftwareSolutions({ data, color }) {
  const swiperRef = useRef(null);

  // 🧱 Fallback Sectors
  const fallbackSectors = [
    {
      title: "Real Estate",
      description:
        "Driving property management and real estate transactions with digital platforms and tools. We simplify processes, enhance transparency, and unlock new opportunities.",
      icon: "🏢",
      bgImage:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Healthcare",
      description:
        "Innovating patient management, diagnostics, and hospital operations through cutting-edge digital solutions and secure systems.",
      icon: "💊",
      bgImage:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Education",
      description:
        "Transforming learning experiences with e-learning platforms, student management systems, and AI-driven tools for better outcomes.",
      icon: "🎓",
      bgImage:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // 🧩 Dynamic Content
  const heading =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.HEADING)[0]?.value ||
    "Software Development Solutions Tailored for Every Sector";

  const description =
    getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.DESCRIPTION)[0]?.value ||
    "At Bidec, we combine deep domain knowledge with digital innovation to deliver tailored solutions for diverse industries.";

  // const headingWords = headingRaw.split(" ");
  // const mainWords = headingWords.slice(0, -2).join(" ");
  // const lastTwoWords = headingWords.slice(-2).join(" ");

  const featureTitles = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_TITLE
  );
  const featureDescriptions = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_DESCRIPTION
  );
  const featureImages = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.FEATURE_IMAGE
  );
  const featureIcons = getRobustFieldValuesByName(
    data,
    COMMON_FIELD_NAMES.IMAGE
  );

  // const buttonText = getValueByFieldNameAndPosition(
  //   data,
  //   COMMON_FIELD_NAMES.BUTTON_TEXT,
  //   0
  // );
  const btn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
    "";
  const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";

  // 🧠 Combine all dynamic data
  const sectors =
    featureTitles.length > 0
      ? featureTitles.map((titleObj, i) => ({
        title: titleObj?.value || `Sector ${i + 1}`,
        desc: featureDescriptions[i]?.value || "Description not available",
        img: featureImages[i]?.value
          ? featureImages[i].value
          : "/software.png",
        icon: featureIcons[i]?.value || "💡", // ✅ dynamic icon
      }))
      : fallbackSectors;

  return (
    <>
    <div className="px-4">
      <section className="bg-[#0B1F1E] text-white py-20 px-6 max-w-[1200px] mx-auto rounded-[15px] md6 relative">
        {/* Heading */}
        <div className="text-center mb-10">
          {/* <p className="max-w-6xl text-2xl h-[121px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-none">
          <span className="tracking-wide Ebrima">{mainWords}</span>{" "}
          <span className="font-bold tracking-wide ebrima-bold">
            {lastTwoWords}
          </span>
        </p> */}
          <p
            className="max-w-6xl text-2xl h-[121px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 leading-none"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></p>


          <p
            className="max-w-4xl mx-auto text-center text-sm sm:text-base lg:text-[14px] 2xl:text-[17px]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "4.5em",
            }}
          >
            {description}
          </p>

        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper pb-16"
        >
          {sectors.map((sector, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-lg shadow-md p-8 h-[380px] relative overflow-hidden transition-all duration-500 cursor-pointer bg-white text-black hover:border-white border border-transparent">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${Image_URL}${sector.img})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start text-left">
                  {/* Icon */}
                  <div className="text-3xl mb-4 bg-[#1A7D85] text-white rounded-full p-4 inline-flex justify-center items-center transform group-hover:scale-110 transition-transform duration-300">
                    {/* {sector.icon?.startsWith("http") ? ( */}
                    <img
                      src={`${Image_URL}${sector.icon}`}
                      alt="icon"
                      className="h-8 w-8 object-contain"
                    />
                    {/* ) : (
                    sector.icon
                  )} */}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-2 text-black group-hover:text-white transition-all duration-300">
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-black group-hover:text-gray-200 transition-all duration-300">
                    {sector.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="transition-all p-3 rounded-full text-white"
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="transition-all p-3 rounded-full text-white"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>

        {/* {buttonText && (
          <div className="flex justify-center mt-4">
            <button className="text-white bg-[#1A7D85] px-6 py-2 rounded-full text-sm sm:text-base">
              {buttonText}
            </button>
          </div>
        )} */}
      </section>
      </div>
      <AppButton
        text={btn}
        color={buttoncolor}
        link={btnlink}
      // onClick={() => console.log("Button clicked")} 
      />
    </>
  );
}
