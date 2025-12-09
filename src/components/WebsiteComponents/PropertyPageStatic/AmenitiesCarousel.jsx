"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function AmenitiesCarousel({ data }) {
  console.log('AmenitiesCarousel data:', data);

  // Extract dynamic values using position-based approach
  const title = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'World-Class Amenities';
  const subtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Discover luxury amenities designed for your lifestyle';

  // Extract amenity items - supporting multiple amenities
  const amenityItems = [];
  for (let i = 0; i < 10; i++) { // Support up to 10 amenities
    const amenityTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_TITLE, i);
    const amenityImage = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_IMAGE, i);
    const amenityDescription = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.FEATURE_DESCRIPTION, i);

    if (amenityTitle && amenityImage) {
      amenityItems.push({
        title: amenityTitle,
        image: amenityImage,
        description: amenityDescription || `Experience luxury ${amenityTitle.toLowerCase()}`
      });
    }
  }

  // Fallback amenities if no dynamic data
  const items = amenityItems.length > 0 ? amenityItems : [
    {
      title: "Swimming Pool",
      image: "/adult-pool.png",
      description: "Olympic-sized swimming pool with stunning views"
    },
    {
      title: "Kids Pool",
      image: "/kid-pool.png",
      description: "Safe and fun pool area designed for children"
    },
    {
      title: "Fitness Center",
      image: "/adult-pool.png",
      description: "State-of-the-art gym with modern equipment"
    },
    {
      title: "Garden",
      image: "/garden.png",
      description: "Landscaped gardens with walking paths"
    },
    {
      title: "Kitchen",
      image: "/kitchen.png",
      description: "Modern kitchen facilities for residents"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      const slide = carouselRef.current.querySelector(".carousel-item");
      if (slide) {
        const slideWidth = slide.offsetWidth + 16; // account for mx-2 gap
        carouselRef.current.scrollTo({
          left: currentIndex * slideWidth,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* {items.map((item, index) => (
              <div
                key={index}
                className="carousel-item flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={`${Image_URL}${item.image}`}
                    alt={item.title}
                    // fill
                    className="object-cover w-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))} */}
            {items.map((item, index) => (
              <div
                key={index}
                className="carousel-item flex-none w-68 h-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
                style={{
                  backgroundImage: `url(${Image_URL}${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content on top */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  {/* <p className="text-sm leading-relaxed">{item.description}</p> */}
                </div>
              </div>
            ))}

          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-[#26326A]' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
