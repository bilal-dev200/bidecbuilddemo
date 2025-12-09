"use client";
import Image from "next/image";
import React from "react";

const TeamIntro = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-[1200px] mx-auto">
      
      {/* Left Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/OurTeamDualImage.png"
          alt="Our Team"
          width={500}
          height={500}
          className="object-contain rounded-xl"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        
        {/* Small Heading */}
        <h4 className="text-sm tracking-widest text-gray-500 font-semibold uppercase">
          Meet the Minds Behind Park Home
        </h4>

        {/* Main Heading */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e2b50] mb-4">
            Driven by Dedication, United by Vision
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            At Park Home, our success is rooted in the dedication, creativity, and
            collaboration of our team. Every project reflects our people’s
            passion for delivering exceptional spaces and outstanding service.
            From visionary leaders to skilled professionals, we work together
            with one shared mission — to make every home meaningful.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-5">
          {/* Feature 1 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1e2b50] mb-2">
              Experienced Leadership
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Our leadership team brings decades of industry experience, guiding
              every project with vision, integrity, and strategic foresight.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1e2b50] mb-2">
              Skilled Professionals
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              From architects to engineers, our professionals work seamlessly to
              ensure precision, quality, and creativity in every build.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamIntro;
