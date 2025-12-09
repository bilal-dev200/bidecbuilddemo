"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaLocationDot, FaBed, FaPhone } from "react-icons/fa6";
import { IoIosResize } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { Image_URL } from "@/config/constants";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

export default function ProjectCardNew({
    slug,
    images,
    location,
    title,
    beds,
    size,
    price,
    description,
    isButtonView,
    onViewDetail
}) {
    const whatsappNumber = "+971525817802";
    const whatsappPhoneNumber = "+971543399005";

    return (
        <div className="relative bg-white overflow-hidden transition rounded-2xl shadow-sm">
            <button
                onClick={onViewDetail}
                className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
            >
                <IoEyeOutline className="text-[#4B4B4B] text-lg" />
            </button>
            <div className="relative">
                {images.length > 1 ? (
                    <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="w-full h-80">
                        {images?.map((img, i) => (
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
                        src={`${Image_URL}${images[0]?.file_path}` || "/Exterior/image13.png"}
                        alt={title}
                        // width={400}
                        // height={250}
                        className="object-cover w-full h-80 rounded-2xl"
                    />
                )}
            </div>
            {/* Content */}
            <div className="p-4">
                {/* Location */}
                <div className="text-gray-500 flex items-center gap-2 text-sm mb-1">
                    <FaLocationDot className="text-gray-400" />
                    <p>{location}</p>
                </div>

                {/* Title & Description */}
                <h2 className="text-base font-semibold">{title}</h2>
                <p className="text-gray-500 text-xs mt-1">{description}</p>
                <hr className="bg-gray-200 my-2" />

                {/* Beds, Size & Price */}
                <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <MdOutlineKingBed /> {beds}
                        </span>
                        <span className="flex items-center gap-1">
                            <IoIosResize /> {size}
                        </span>
                    </div>
                    <p className="text-sm font-bold text-black">{price}</p>
                </div>
                {/* {isButtonView === 0 && ( */}
                < div className="flex flex-row items-center justify-center gap-3 mt-3">
                    <Link
                        href={`/update-all-properties/${slug}`}
                        className="w-full text-xs text-black hover:text-white py-2 rounded-full duration-200 border border-black hover:bg-black text-center"
                    >
                        View Detail
                    </Link>

                    <a
                        href={`https://wa.me/${whatsappNumber.replace(/\+/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit text-lg text-black hover:text-white p-2 rounded-full duration-200 border border-black hover:bg-black flex items-center justify-center"
                    >
                        <IoLogoWhatsapp className="cursor-pointer" />
                    </a>

                    <a
                        href={`tel:${whatsappPhoneNumber}`}
                        className="w-fit text-lg text-black hover:text-white p-2 rounded-full duration-200 border border-black hover:bg-black flex items-center justify-center"
                    >
                        <FaPhone className="cursor-pointer" />
                    </a>
                </div>
                {/* )} */}

            </div>
        </div >
    );
}
