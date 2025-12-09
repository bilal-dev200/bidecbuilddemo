"use client";
import { useState } from "react";
import Image from "next/image";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function RealEstatePromo({ data }) {
  console.log('RealEstatePromo data:', data);

  const [showVideo, setShowVideo] = useState(false);

  // Extract dynamic values using position-based approach
  // Top Section
  const topSectionMainImage = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/l1.png';
  const topSectionOverlayImage = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 1) || '/l2.png';
  const topSectionHeading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Luxury Living Redefined';
  const topSectionDescription = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Experience unparalleled luxury in our meticulously designed residences that blend modern sophistication with timeless elegance.';
  const topSectionButtonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 1) || 'Discover More';
  const featureTitle01 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 0) || 'Discover More';
  const featureImage01 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, 0) || 'Discover More';
  const featureTitle02 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 1) || 'Discover More';
  const featureImage02 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, 1) || 'Discover More';
  const featureTitle03 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, 2) || 'Discover More';
  const featureImage03 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, 2) || 'Discover More';

  // Bottom Section
  const bottomSectionImage = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 2) || '/l3.png';
  const bottomSectionHeading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 1) || 'Prime Location';
  const bottomSectionDescription = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 1) || 'Strategically located in the heart of the city, offering convenient access to shopping, dining, and entertainment.';
  const bottomSectionButtonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 1) || 'View Location';
  console.log('topSectionMainImage', topSectionMainImage);
  console.log('featureImage01', featureImage01);

  // Video URL
  const videoUrl = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.VIDEO_URL, 0) || '/video.mp4';
  // w-[260px] sm:w-[300px] md:w-[520px] h-[340px] sm:h-[380px] md:h-[500px]
  // -bottom-10 sm:-bottom-12 right-20 sm:right-32 xl:right-10 w-[160px] sm:w-[200px] md:w-[250px] h-[220px] sm:h-[260px] md:h-[300px]
  // w-[280px] sm:w-[320px] md:w-[360px] h-[300px] sm:h-[340px] md:h-[380px]
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-14 md:py-16 text-[#1e1e1e] font-sans">
      {/* Top Section */}
      <div className="flex flex-col items-center lg:flex-row gap-10 sm:gap-12 md:gap-[10rem] mb-20 sm:mb-28 md:mb-40">
        {/* Image Section */}
        <div className="relative w-4/5 lg:w-1/2 max-w-2xl flex justify-center lg:justify-start">
          <div className="relative w-full h-[50vh] rounded-xl overflow-hidden">
            <img
              src={`${Image_URL}${topSectionMainImage}`}
              alt="Main Property"
              // fill
              className="object-cover w-full h-full"
            // sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="absolute w-1/3 h-60 -right-10 -bottom-10 rounded-xl overflow-hidden shadow-xl">
            <img
              src={`${Image_URL}${topSectionOverlayImage}`}
              alt="Overlay Property"
              // fill
              className="object-cover w-full h-full"
            // sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1e1e1e] mb-4 sm:mb-6 leading-tight">
            <p>{topSectionHeading}</p>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            {topSectionDescription}
          </p>

          <div className="space-y-3">
            <div className=" w-full flex flex-row justify-between items-center bg-gray-200 p-3 rounded-xl px-4">
              <div className="flex gap-3">
                <img src={`${Image_URL}${featureImage01}`} className="w-fit" alt="" />
                <p> {featureTitle01}</p>
              </div>
              <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full w-fit transition-colors duration-300">
                {topSectionButtonText}
              </button>
            </div>

            <div className=" w-full flex flex-row justify-between items-center bg-gray-200 p-3 rounded-xl px-4">
              <div className="flex gap-3">
                <img src={`${Image_URL}${featureImage02}`} className="w-fit" alt="" />
                <p> {featureTitle02}</p>
              </div>
              <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full w-fit transition-colors duration-300">
                {topSectionButtonText}
              </button>
            </div>

            <div className=" w-full flex flex-row justify-between items-center bg-gray-200 p-3 rounded-xl px-4">
              <div className="flex gap-3">
                <img src={`${Image_URL}${featureImage03}`} className="w-fit" alt="" />
                <p> {featureTitle03}</p>
              </div>
              <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full w-fit transition-colors duration-300">
                {topSectionButtonText}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row-reverse gap-10 sm:gap-12 md:gap-16">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-4/5 h-full rounded-2xl overflow-hidden">
            <img
              src={`${Image_URL}${bottomSectionImage}`}
              alt="Bottom Property"
              // fill
              className="object-cover w-full h-full"
            // sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Video Play Button Overlay */}
            <div className=" inset-0  flex items-center justify-center">
              <button
                onClick={() => setShowVideo(true)}
                className="absolute left-1 bottom-1 z-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-3xl bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 group"
              >
                <div className="w-0 h-0 border-l-[12px] sm:border-l-[16px] border-l-white border-t-[8px] sm:border-t-[10px] border-t-transparent border-b-[8px] sm:border-b-[10px] border-b-transparent ml-1 group-hover:scale-110 transition-transform"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1e1e1e] mb-4 sm:mb-6 leading-tight">
            {bottomSectionHeading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            {bottomSectionDescription}
          </p>
          <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full w-fit transition-colors duration-300">
            {bottomSectionButtonText}
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <video
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
