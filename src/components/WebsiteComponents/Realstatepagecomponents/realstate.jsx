"use client";
import Image from "next/image";
import { getFieldValue } from "@/lib/utils/sectionDataHelpers";

export default function RealEstateSection({ data }) {
  // Dynamic values from API
  const heading =
    getFieldValue(data, "realestate_heading") ||
    "Experience the next generation of living spaces";

  const description =
    getFieldValue(data, "realestate_description") ||
    "We don’t just launch projects — we build futures. Each of our new developments combines innovative design, prime locations, and lasting value. Whether you're looking to invest or find your forever home, our latest projects promise quality, comfort, and growth potential.";

  const buttonText = getFieldValue(data, "realestate_button") || "Contact us";

  const smallImage = getFieldValue(data, "realestate_small_image") || "/small.png";
  const bigImage = getFieldValue(data, "realestate_big_image") || "/big.png";

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-16 gap-12">
      {/* === LEFT TEXT BLOCK === */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black uppercase leading-tight">
          {heading}
        </h1>

        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
          {description}
        </p>

        <div>
          <button className="bg-[#1A237E] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0d1755] transition">
            {buttonText}
          </button>
        </div>
      </div>

      {/* === RIGHT IMAGE BLOCK === */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start gap-4 sm:gap-6">
        {/* Left image - smaller */}
        <div className="relative w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] mt-10 lg:mt-20 rounded-lg overflow-hidden shadow-md">
          <Image
            src={smallImage}
            alt="Small Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Right image - larger */}
        <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-[300px] sm:h-[370px] md:h-[420px] lg:h-[450px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={bigImage}
            alt="Big Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
