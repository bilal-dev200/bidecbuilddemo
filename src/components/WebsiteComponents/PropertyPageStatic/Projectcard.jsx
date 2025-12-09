"use client";

import Image from "next/image";
import { FaBed, FaBath, FaPhone } from "react-icons/fa";
import { IoIosResize } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

export default function ProjectCard({
  images = [],
  location,
  title,
  beds,
  baths,
  size,
  price,
}) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden transition flex flex-col h-full shadow-sm">
      {/* Image Section */}
      <div className="relative">
        {images.length > 1 ? (
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full h-64"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img}
                  alt={title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-64 rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Image
            src={images[0] || "/placeholder.jpg"}
            alt={title}
            width={400}
            height={250}
            className="object-cover w-full h-64 rounded-2xl"
          />
        )}
      </div>

      {/* Eye Button */}
      <button className="bg-white cursor-pointer absolute z-20 top-3 right-3 p-2 rounded-full text-xl text-black shadow-md hover:bg-gray-100">
        <LuEye />
      </button>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-gray-500 text-sm">{location}</p>
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>

        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaBed /> {beds}
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> {baths}
          </span>
          <span className="flex items-center gap-1">
            <IoIosResize /> {size}
          </span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-lg font-bold">${price}</p>
        </div>

        {/* Buttons bottom */}
        <div className="mt-auto w-full flex items-center gap-3">
          {/* View Detail */}
          <button className="flex-1 text-sm md:text-base text-black hover:text-white py-2 rounded-full duration-200 border border-black hover:bg-black">
            View Detail
          </button>

          {/* WhatsApp */}
          <button className="w-10 h-10 flex items-center justify-center text-lg text-black hover:text-white rounded-full duration-200 border border-black hover:bg-black">
            <IoLogoWhatsapp />
          </button>

          {/* Phone */}
          <button className="w-10 h-10 flex items-center justify-center text-lg text-black hover:text-white rounded-full duration-200 border border-black hover:bg-black">
            <FaPhone className="rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}
