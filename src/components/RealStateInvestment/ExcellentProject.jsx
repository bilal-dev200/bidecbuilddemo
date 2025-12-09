"use client";

import Image from "next/image";

export default function ExcellentProject() {
  const projects = [
    { id: 1, title: "Premium Residential Developments" },
    { id: 2, title: "Strategic Commercial Projects" },
    { id: 3, title: "Turnkey Investment Solutions" },
    { id: 4, title: "Sustainable & Smart Building Practices" },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 max-w-[1200px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 uppercase">
          Delivering Excellence Through Every Project
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
          From concept to completion, Park Home is committed to creating developments 
          that embody quality, innovation, and timeless design — built to inspire and endure.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-xl shadow-md overflow-hidden group"
          >
            {/* Image */}
            <Image
              src="/verticalProjectImage.png"
              alt={project.title}
              width={500}
              height={700}
              className="w-full h-84 object-cover"
            />

            {/* Transparent Overlay with Text */}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-center py-4">
              <h3 className="text-white font-medium text-sm md:text-base">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
