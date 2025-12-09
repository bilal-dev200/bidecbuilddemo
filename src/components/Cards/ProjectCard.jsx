"use client";

import Image from "next/image";
import { FaBed, FaBath, FaWhatsapp, FaRegHeart, FaPhone } from "react-icons/fa";
import { IoIosResize } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

export default function ProjectCard({
    images = [], // 👈 array of images
    location,
    title,
    beds,
    baths,
    size,
    price,
}) {
    return (
        <div className="relative bg-white rounded-xl overflow-hidden transition">
            <div className="relative">
                {images.length > 1 ? (
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="w-full h-80"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    src={img}
                                    alt={title}
                                    width={400}
                                    height={250}
                                    className="object-cover w-full h-80 rounded-2xl"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Image
                        src={images[0] || "/projectImage.png"}
                        alt={title}
                        width={400}
                        height={250}
                        className="object-cover w-full h-80 rounded-2xl"
                    />
                )}
            </div>
            <button className="bg-white cursor-pointer absolute z-20 top-3 right-3 p-1 rounded-full text-xl text-black">
                <LuEye />
            </button>
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

                <div className="w-full flex flex-row items-center justify-center gap-4">
                    <button className="mt-4 w-full text-black hover:text-white py-2 rounded-full duration-200 border border-black hover:bg-black">
                        View Detail
                    </button>
                    <button className="mt-4 w-fit text-xl text-black hover:text-white p-3 rounded-full duration-200 border border-black hover:bg-black">
                        <IoLogoWhatsapp className="cursor-pointer " />
                    </button>
                    <button className="mt-4 w-fit text-xl text-black hover:text-white p-3 rounded-full duration-200 border border-black hover:bg-black">
                        <FaPhone className="cursor-pointer rotate-90" />
                    </button>
                </div>
            </div>
        </div>
    );
}
