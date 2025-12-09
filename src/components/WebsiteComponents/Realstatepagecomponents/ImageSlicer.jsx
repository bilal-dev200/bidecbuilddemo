// ImageSlicer.jsx

import Image from "next/image";

// Data yahan rakho
const slices = [
  {
    title: "EMARR SOUTH",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    pos: "6.25% 50%",
  },
  {
    title: "DUBAI MARINA",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    pos: "31.25% 50%",
  },
  {
    title: "EXPO LIVING",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    pos: "56.25% 50%",
  },
  {
    title: "THE VALLEY",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    pos: "81.25% 50%",
  },
];

export default function ImageSlicer() {
  const imagePath = "/slice.png";

  return (
    <div className="w-full bg-white py-10">
      {/* Header */}
      <div className="container mx-auto max-w-[1200px] px-4 mb-8 flex flex-col md:flex-row justify-between md:items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-normal text-black uppercase leading-tight md:max-w-[50%] text-left">
          Discover the lifestyle <br className="hidden md:block" /> you’ve always dreamed of
        </h1>
        <p className="mt-4 md:mt-0 text-xs sm:text-sm text-gray-600 md:text-right text-left md:max-w-[40%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting <br className="hidden sm:block" />
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] w-full">
        {slices.map(({ title, description, pos }, index) => (
          <div key={index} className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[414/400] overflow-hidden">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover brightness-75"
              style={{ objectPosition: pos }}
              priority
            />
            <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-4 text-white z-10">
              <h3 className="text-xs sm:text-sm md:text-base font-semibold drop-shadow-md">{title}</h3>
              <p className="text-[10px] sm:text-xs md:text-sm mt-1 max-w-[90%] drop-shadow-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
