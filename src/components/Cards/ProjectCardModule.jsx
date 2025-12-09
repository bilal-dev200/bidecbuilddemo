"use client";

import { Image_URL } from "@/config/constants";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function ProjectCardModule({ project, onClose }) {
  const {
    name,
    description,
    price,
    slug,
    location,
    media_with_files = [],
  } = project;

  // Right side highlight cards (match screenshot)
  const smallCards = [
    {
      icon: '/moduleIcon1.png',
      title: "Launch Offer",
      text: "Be among the first to invest at unbeatable prices.",
    },
    {
      icon: '/moduleIcon2.png',
      title: "Ready to Move",
      text: "Move in immediately — no waiting, no hassle.",
    },
    {
      icon: '/moduleIcon3.png',
      title: "1% Monthly",
      text: "Own your dream home with just 1% monthly payments.",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-[1200px] flex flex-col lg:flex-row gap-10 overflow-y-auto">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <FaTimes size={22} />
        </button>

        {/* Left side images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Main Image */}
          <div className="relative h-[320px] lg:h-[420px] rounded-xl overflow-hidden">
            <img
              src={
                media_with_files?.[0]
                  ? `${Image_URL}${media_with_files[0].file_path}`
                  : "/placeholder.jpg"
              }
              alt={name}
              // fill
              className="object-cover w-full h-full"
            />
          </div>

          {/* Thumbnails (slider style row) */}
          {media_with_files.length > 1 && (
            <div className="flex gap-3 overflow-x-auto">
              {media_with_files.slice(1, 6).map((m, i) => (
                <div
                  key={i}
                  className="relative h-[80px] w-[120px] flex-shrink-0 rounded-md overflow-hidden"
                >
                  <img
                    src={`${Image_URL}${m.file_path}`}
                    alt={m.title || `thumb-${i}`}
                    // fill
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side content */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          {/* Title + description */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold uppercase">{name}</h2>
            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Price + Location */}
          <div className="flex gap-12 flex-wrap">
            <div>
              <h4 className="text-sm text-gray-500">STARTING PRICE</h4>
              <h2 className="font-semibold text-xl lg:text-2xl">
                AED {price}
              </h2>
            </div>
            <div>
              <h4 className="text-sm text-gray-500">LOCATION</h4>
              <h2 className="font-semibold text-xl lg:text-2xl">
                {location || slug}
              </h2>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {smallCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl p-3 flex flex-col items-start justify-between text-start shadow-sm"
              >
                <img src={card.icon} alt="" />
                <h2 className="font-semibold mt-1 text-lg">{card.title}</h2>
                <p className="text-xs text-gray-600 mt-1">{card.text}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-3 rounded-full bg-[#26326A] text-white font-medium hover:bg-[#141c42] transition">
              View Details
            </button>
            <button className="px-6 py-3 rounded-full border text-black font-medium transition">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
