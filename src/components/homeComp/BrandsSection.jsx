"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  COMMON_FIELD_NAMES,
  getRobustFieldValuesByName,
  getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import AppButton from "./AppButton";

const BrandsSection = ({ data ,color }) => {
  console.log("asasasasasas", data);

  const heading =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
    "";
 const bttn =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON, 0) ||
    "";
  const description =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
    "We’re product with Shopify, BigCommerce, and Magento, providing Tailored solutions and access to the ident tool to you eCommerce success";
   const buttoncolor =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
    "";
  const btnlink =
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
    "";
  const imageFields = getRobustFieldValuesByName(data, COMMON_FIELD_NAMES.IMAGE);

  // Extract just the URLs
  const brandImages = imageFields
    .map((item) => {
      const path = item.value;
      if (!path) return null;

      return path.startsWith("http") ? path : `/${path}`;
    })
    .filter(Boolean); 
  console.log("brandImages", brandImages);


  
const currentBrands = brandImages.concat(brandImages);

  return (
    <section className="w-full bg-white  mt10 relative">
      <div className=" relative mx-auto container max-w-[1200px] text-center px4">
       
        <h2 className="text-2xl md:text-5xl text-gray-800" dangerouslySetInnerHTML={{ __html: heading }}
>

        </h2>


        {/* Description */}
        <p className="my-4 sm:my-6 text-[11px] sm:text-sm md:text-base lg:text-lg max-w-5xl mx-auto">
          {description}
        </p>

        {/* Brand Logos */}


        <div className="hidden md:block overflow-hidden whitespace-nowrap pt10 bg-white">
          
   <div className="w-full py10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={0} // ⚡ No extra space between slides
            speed={5000} // ⚡ Smooth continuous scroll
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            allowTouchMove={false} // ⚡ Keeps motion consistent
            className="w-full flex items-center"
          >
            {currentBrands.map((src, index) => (
              <SwiperSlide
                key={index}
                className="!w-auto flex justify-center items-center px-6"
              >
                <img
                  src={`${Image_URL}${src}`}
                  alt={`logo-${index}`}
                  className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
<div className="">
        {/* <button
    className="bg-[#1A7D85] text-white mt-5 px-6 sm:px-8 py-1.5 rounded-full transition text-sm sm:text-sm"
        >
        {bttn}
        </button> */}
     <AppButton 
  text={bttn} 
  color={buttoncolor} 
  link={btnlink} 
  // onClick={() => console.log("Button clicked")} 
/></div>
        </div>
{/* <div className="hidden md:block bg-white py-10">
  <Swiper
    modules={[Autoplay]}
    spaceBetween={40}
    slidesPerView={6}
    autoplay={{
      delay: 1500,
      disableOnInteraction: false,
    }}
    loop={true}
    className="logo-slider"
  >
    {currentBrands.map((src, index) => (
      <SwiperSlide key={index} className="flex justify-center items-center">
        <img
          src={`${Image_URL}${src}`}
          alt={`logo-${index}`}
          className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div> */}

<div className="block md:hidden bg-white py-8">
  {/* 🔹 First Row (scrolling left to right) */}
  <Swiper
    modules={[Autoplay]}
    slidesPerView="auto"
    spaceBetween={0}
    speed={5000}
    loop={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: false, // normal direction
    }}
    freeMode={true}
    allowTouchMove={false}
    className="w-full flex items-center mb-4"
  >
    {currentBrands.map((src, index) => (
      <SwiperSlide
        key={`row1-${index}`}
        className="!w-auto flex justify-center items-center px-6"
      >
        <img
          src={`${Image_URL}${src}`}
          alt={`logo-${index}`}
          className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* 🔹 Second Row (scrolling right to left) */}
  <Swiper
    modules={[Autoplay]}
    slidesPerView="auto"
    spaceBetween={0}
    speed={5000}
    loop={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true, // opposite direction
    }}
    freeMode={true}
    allowTouchMove={false}
    className="w-full flex items-center"
  >
    {currentBrands.map((src, index) => (
      <SwiperSlide
        key={`row2-${index}`}
        className="!w-auto flex justify-center items-center px-6"
      >
        <img
          src={`${Image_URL}${src}`}
          alt={`logo-${index}`}
          className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-transform duration-300 hover:scale-105"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>




        {/* Pagination Dots */}
        {/* <div className="flex justify-center mt-8 space-x-3">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-transform transform
                ${i === page
                  ? "scale-125 bg-[#1A7D85]"
                  : "bg-gray-300 hover:scale-110"
                }`}
            />
          ))}
        </div> */}
        {/* <div className="overflow-hidden whitespace-nowrap py-10 bg-white">
      <div className="logo-slider flex gap-16">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-10 w-auto object-contain inline-block opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div> */}

      </div>
      {/* <Image
        src="/layer-shape.png"
        alt="Decorative Layer"
        width={300}
        height={300}
        className="absolute bottom-0 right-0 select-none"
      /> */}
      {/* <img
        className="hidden md:block absolute  opacity-50 -top-[25rem] z-10 w-2/4 right-60"
        src="/blueblureffect.png"
        alt=""
      /> */}
    </section>
  );
};

export default BrandsSection;

