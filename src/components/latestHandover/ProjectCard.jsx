"use client";
import Image from "next/image";
import { FaBed, FaBath, FaPhone } from "react-icons/fa";
import { IoIosResize } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Image_URL } from "@/config/constants";

export default function ProjectCard({
  image = [],
  location,
  title,
  beds,
  baths,
  size,
  price,
  onViewDetail,
}) {

  return (
    <div className="relative bg-white rounded-xl overflow-hidden transition shadow">
      {/* image */}
      <div className="relative">
        {image.length > 1 ? (
          <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="w-full h-80">
            {image.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`${Image_URL}${img.file_path}`}
                  alt={title}
                  // width={400}
                  // height={250}
                  className="object-cover w-full h-80 rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={`${Image_URL}${image[0]?.file_path}` || "/Exterior/image13.png"}
            alt={title}
            // width={400}
            // height={250}
            className="object-cover w-full h-80 rounded-2xl"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gray-500 text-sm">{location}</p>
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <span className="flex items-center gap-1"><FaBed /> {beds}</span>
          <span className="flex items-center gap-1"><FaBath /> {baths}</span>
          <span className="flex items-center gap-1"><IoIosResize /> {size}</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-lg font-bold">${price}</p>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <button
            onClick={onViewDetail}
            className="mt-4 w-full text-black hover:text-white py-2 rounded-full duration-200 border border-black hover:bg-black"
          >
            View Detail
          </button>
          <button className="mt-4 w-fit text-xl text-black hover:text-white p-3 rounded-full duration-200 border border-black hover:bg-black">
            <IoLogoWhatsapp className="cursor-pointer" />
          </button>
          <button className="mt-4 w-fit text-xl text-black hover:text-white p-3 rounded-full duration-200 border border-black hover:bg-black">
            <FaPhone className="cursor-pointer rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}
