"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { Image_URL } from "@/config/constants";

export default function HeroSection({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract dynamic values using the new helper functions
  const mainImage = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/skyscrap.png';
  const heading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'A LANDMARK IN MODERN LIVING';
  const description1 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Nestled in the heart of [Location], this newly launched project blends luxury, convenience, and contemporary design to redefine urban living.';
  const description2 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 1) || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.';

  // Extract images - support multiple images using position-based approach
  const images = [
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 0) || '/l1.png',
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 1) || '/l2.png',
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SLIDE_IMAGE, 2) || '/l3.png',
  ].filter(img => img && img !== 'undefined');

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Optional Auto Slide (every 5 sec)
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  console.log('HeroSection data:', data);

  return (
    <div className="relative z-0 flex flex-col md:flex-row w-full max-w-[1200px] mx-auto items-center md:items-end px-4 sm:px-6 lg:px-8 py-10 gap-8">
      {/* Left Side (Building Image) */}
      <div className="w-full md:w-[400px] h-[400px] md:h-[680px] rounded-lg flex-shrink-0">
        <img
          src={`${Image_URL}${mainImage}`}
          alt="Building"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side (Content + Carousel) */}
      <div className="w-full flex flex-col justify-center text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-normal mb-3 md:mb-4">
          {heading}
        </h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base max-w-2xl">
          {description1}
        </p>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl">
          {description2}
        </p>

        {/* Carousel */}
        {images.length > 0 && (
          <div className="relative w-full">
            {/* Images */}
            <div className="flex gap-5 overflow-hidden justify-center md:justify-start">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={`${Image_URL}${img}`}
                  alt={`Property ${index}`}
                  className={`w-40 sm:w-32 md:w-64 h-28 sm:h-56 md:h-72 object-cover rounded-2xl shadow-md transition-all duration-500 ${index === currentIndex
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-100"
                    }`}
                />
              ))}
            </div>

            {/* Arrows (right side, below last image) */}
            {images.length > 1 && (
              <div className="flex justify-end items-center gap-4 mt-4 pr-4">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center hover:text-[#26326A] transition-colors duration-300"
                >
                  <LuMoveLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center hover:text-[#26326A] transition-colors duration-300"
                >
                  <LuMoveRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Indicators */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 mt-3">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-[3px] w-8 rounded-full transition-all cursor-pointer ${currentIndex === idx ? "bg-black" : "bg-gray-300"
                      }`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 