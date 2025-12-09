
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Image_URL } from "@/config/constants";

export default function CarouselCard({ blogs }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!blogs || blogs.length === 0) return null; // handle empty blogs

    // Auto-rotate every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % blogs.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [blogs.length]);

    const currentCard = blogs[currentIndex];

    return (
        <div className="max-w-[1200px] px5 md:px-0 mt-12 mx-auto container">
            <h2 className="text-3xl font-bold mb-8">Our Latest Blogs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* LEFT MAIN CARD */}
                <div
                    className="rounded-3xl overflow-hidden shadow-lg flex flex-col h-[29rem] bg-cover bg-center transition-all duration-700"
                    //   style={{ backgroundImage: `url('${currentCard.img}')` }}
                    style={{ backgroundImage: `url('${Image_URL}${currentCard.img}')` }}

                >
                    <div className="mt-auto bg-black/40 backdrop-blur-xl text-white px-6 py-5 flex flex-col justify-end">
                        <button className="px-4 py-1 bg-white text-black rounded-full text-xs w-fit mb-3">
                            {currentCard.category}
                        </button>
                        <p className="text-sm opacity-90 mb-4 leading-snug">{currentCard.desc}</p>
                        <div className="flex justify-between text-[11px] opacity-80">
                            <span>{currentCard.date}</span>
                            <span>—</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE STACK */}
                <div className="flex flex-col gap-6">
                    {/* AUTHOR CARD */}
                    <div className="bg-[#0f8b8d] text-white rounded-3xl p-6 shadow-lg flex flex-col h-[20rem] transition-all duration-700">
                        <div className="flex items-center gap-4">
                            <Image
                                src={currentCard.authorAvatar ? `${Image_URL}${currentCard.authorAvatar}` : "/avatar.png"}
                                width={65}
                                height={65}
                                alt={currentCard.author}
                                className="rounded-xl object-cover"
                            />

                        </div>
                        <div>
                            <h3 className="text-lg mt-2">{currentCard.author}</h3>
                            <p className="text-sm opacity-90 leading-snug mt-3">{currentCard.authorbio}</p>

                        </div>

                        <button className="px-4 py-1 mt-6 bg-white text-black rounded-full text-xs w-fit">
                            {currentCard.category}
                        </button>

                        <p className="text-sm opacity-90 leading-snug mt-3">{currentCard.desc}</p>

                        <div className="flex justify-between text-[11px] opacity-80 mt-auto pt-4">
                            <span>{currentCard.date}</span>
                            <span>—</span>
                        </div>
                    </div>

                    {/* SOCIAL SHARE BOX */}
                    <div className="bg-[#0f8b8d] text-white rounded-3xl shadow-lg p-6 h-[7.5rem]">
                        <h3 className="text-lg font-semibold mb-5">Share with your Community</h3>
                        {/* <div className="flex gap-6 text-2xl">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                            <FaXTwitter />
                            <FaYoutube />
                        </div> */}
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Image
                                    src="/facebook.png"    // public folder
                                    alt="Facebook"
                                    width={18}
                                    height={18}
                                />
                            </div>

                            {/* Instagram */}
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Image
                                    src="/insta.png"
                                    alt="Instagram"
                                    width={18}
                                    height={18}
                                />
                            </div>

                            {/* LinkedIn */}
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Image
                                    src="/link.png"
                                    alt="LinkedIn"
                                    width={18}
                                    height={18}
                                />
                            </div>

                            {/* Twitter (X) */}
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Image
                                    src="/twitter.png"
                                    alt="Twitter"
                                    width={18}
                                    height={18}
                                />
                            </div>

                            {/* YouTube */}
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                <Image
                                    src="/youtube.png"
                                    alt="YouTube"
                                    width={18}
                                    height={18}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
