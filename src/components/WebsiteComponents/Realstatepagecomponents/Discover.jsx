import React from "react";

export default function Discover() {
  const features = [
    {
      title: "Luxury Finishes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "Strategic Locations",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "World-Class Amenities",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "Luxury Finishes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "Strategic Locations",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      title: "World-Class",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];

  return (
    <div className="relative bg-white font-inter overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/build.png')" }}
      >
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Heading + Paragraph */}
      <div className="relative w-full max-w-3xl mx-auto text-center px-4 pt-12 md:pt-20 pb-8">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-light text-black mb-4 drop-shadow-md">
          DISCOVER THE LIFESTYLE YOU'VE ALWAYS DREAMED OF
        </h1>
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Content grid */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4 py-12 md:py-20">
        {/* Mobile view */}
        <div className="grid grid-cols-1 gap-12 md:hidden">
          {features.map((item, i) => (
            <div key={i} className="text-center">
              <h2 className="text-xl sm:text-2xl font-light text-black mb-2 drop-shadow-md">
                {item.title}
              </h2>
              <p className="text-gray-800 text-sm leading-relaxed max-w-[260px] mx-auto drop-shadow-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-3 gap-12">
          {/* Left column (first 3 features) */}
          <div className="flex flex-col items-end text-right md:pr-6">
            {features.slice(0, 3).map((item, i) => (
              <div key={i} className="mb-12">
                <h2 className="text-2xl font-light text-black mb-2 drop-shadow-md">
                  {item.title}
                </h2>
                <p className="text-gray-800 text-sm leading-relaxed max-w-[260px] drop-shadow-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Middle empty gap */}
          <div></div>

          {/* Right column (next 3 features) */}
          <div className="flex flex-col items-start text-left md:pl-6">
            {features.slice(3, 6).map((item, i) => (
              <div key={i} className="mb-12">
                <h2 className="text-2xl font-light text-black mb-2 drop-shadow-md">
                  {item.title}
                </h2>
                <p className="text-gray-800 text-sm leading-relaxed max-w-[260px] drop-shadow-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
