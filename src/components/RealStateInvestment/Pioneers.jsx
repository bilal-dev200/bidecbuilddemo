import Image from "next/image";
import React from "react";

const Pioneers = () => {
  return (
    <div className="w-full py-12  max-w-[1200px] mx-auto">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4 px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Pioneers of Dubai’s Real Estate Excellence
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Discover the leading names behind Dubai’s iconic developments. From
          luxury towers to master communities, meet the developers shaping the
          city. Leading Builders Shaping Dubai's Skyline.
        </p>
      </div>

      {/* Logos Section */}
      <div className="bg-white w-full mt-10 py-8 flex flex-wrap justify-center items-center gap-8 rounded-lg">
        <Image
          src="/logo.png"
          alt="Logo 1"
          width={120}
          height={60}
          className="object-contain"
        /><Image
          src="/logo.png"
          alt="Logo 1"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logo.png"
          alt="Logo 1"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logo.png"
          alt="Logo 1"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logo.png"
          alt="Logo 2"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logo.png"
          alt="Logo 3"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logo.png"
          alt="Logo 4"
          width={120}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logo.png"
          alt="Logo 5"
          width={120}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Pioneers;
