import Image from "next/image";
import React from "react";

const ReturnEstimation = () => {
  return (
    <div className="w-full py-12 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="flex justify-center flex-col md:flex-row gap-8 items-center">
        {/* LEFT TEXT */}
        <div className="md:w-1/4 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Estimate Your Return on Investment
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            When building a house, attention to detail is essential. Sobha
            recognises this, and we pay attention to every detail, whether it's
            the quality of the materials, textures and finishes, door hinges,
            doors, floor tiling, bathroom flooring, fittings or window size. A
            true craftsman for a harmonious life.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="md:w-1/2 flex gap-4">
          <div className="relative h-[400px] w-[180px]">
            <Image
              src="/verticalProjectImage.png"
              alt="ROI 1"
              fill
              className="object-cover rounded-lg shadow"
            />
          </div>
          <div className="relative h-[300px] w-[180px]">
            <Image
              src="/verticalProjectImage.png"
              alt="ROI 2"
              fill
              className="object-cover rounded-lg shadow"
            />
          </div>
          <div className="relative h-[200px] w-[180px]">
            <Image
              src="/verticalProjectImage.png"
              alt="ROI 3"
              fill
              className="object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnEstimation;
