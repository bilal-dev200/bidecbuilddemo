"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getFieldValue, COMMON_FIELD_NAMES, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import { useServicesStore } from "@/lib/stores/servicesStore";
import { Image_URL } from "@/config/constants";
import AppButton from "./AppButton";
// import { useServicesStore } from "@/store/useServicesStore";
import Link from "next/link";



export default function CaseStudiesSection({ data, color, serviceSlug = "" }) {
    const { services, getAllServices, isLoading, error } = useServicesStore();
    // console.log("color", color);

    // 🔥 Call API on mount or when serviceSlug changes
    useEffect(() => {
        getAllServices(serviceSlug);
    }, [serviceSlug, getAllServices]);
    console.log("🎨 CaseStudiesSection color:", color);

    const btn =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_TEXT, 0) ||
        "";
    const buttoncolor =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTONBGCOLOR, 0) ||
        "";
    const btnlink =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON_LINK, 0) ||
        "";
    const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
    const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
    const subHead = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
    console.log("servicessas", services);

    const highlightLastWord = (text) => {
        if (!text) return null;
        const words = text.split(" ");
        const lastWord = words.pop();
        return (
            <>
                <span className="text-black">{words.join(" ")}</span>{" "}
                <span className={`text-[${color}] font-bold ebrima-bold`}>{lastWord}</span>
            </>
        );
    };

    return (
        <section id="case-studies" className="py16 md:pl-5 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    {/* Heading & Description */}
                    <div className="md:col-span-1 text-center md:text-left">
                        {/* <h2 className="text-3xl md:text-3xl lg:text-6xl leading-none mb-8">
                            {highlightLastWord(heading)}
                        </h2> */}
                        <h2
                            className="text-3xl md:text-3xl lg:text-6xl leading-none mb-8"
                            dangerouslySetInnerHTML={{ __html: heading }}
                        ></h2>

                        {subHead && <p className="text-sm font-bold  md:text-lg ebrima-bold"
                            dangerouslySetInnerHTML={{ __html: subHead }} ></p>}
                        <p className="mb-8 text-[11px] sm:text-base md:text-[14px] xl:text-[17px] leading-normal">{description}</p>

                        {/* Navigation Buttons */}
                        {/* <div className="flex justify-center md:justify-start space-x-3">
                            <button className="case-prev w-10 h-10 rounded-full border flex items-center justify-center text-gray-700 hover:bg-[#1A7D85] hover:text-white transition">
                                <FiChevronLeft className="text-xl" />
                            </button>
                            <button className={`case-next w-10 h-10 rounded-full border flex items-center justify-center bg-[${color}] text-white hover:bg-#1A7D85 transition`}>
                                <FiChevronRight className="text-xl" />
                            </button>
                        </div> */}
                        {/* Navigation Buttons */}
                        <div className="hidden md:flex justify-center md:justify-start space-x-3">
                            <button className="case-prev w-10 h-10 rounded-full border flex items-center justify-center text-gray-700 hover:bg-[#1A7D85] hover:text-white transition">
                                <FiChevronLeft className="text-xl" />
                            </button>
                            <button
                                className={`case-next w-10 h-10 rounded-full border flex items-center justify-center bg-[#1A7D85] text-white hover:bg-[#1A7D85] transition`}
                            >
                                <FiChevronRight className="text-xl" />
                            </button>
                        </div>

                    </div>

                    {/* Swiper Slider */}
                    <div className="md:col-span-2">
                        {isLoading && <p>Loading case studies...</p>}
                        {error && <p className="text-red-500">Error: {error}</p>}

                        <Swiper
                            modules={[Navigation]}
                            navigation={{ nextEl: ".case-next", prevEl: ".case-prev" }}
                            spaceBetween={16}
                            slidesPerView={1.05}
                            breakpoints={{
                                640: { slidesPerView: 1.3, spaceBetween: 20 },
                                768: { slidesPerView: 2.1, spaceBetween: 24 },
                                1024: { slidesPerView: 2.5, spaceBetween: 28 },
                            }}
                        >
                            {(services || []).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="bg-white rounded-xl overflow-hidden shadow-md transition transform hover:-translate-y-1 duration-300">
                                        <div className="relative w-full h-[600px] sm:h-[650px] md:h-[500px]">
                                            <Image
                                                src={`${Image_URL}${item.image}` || "/placeholder.jpg"}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />

                                            <div
                                                className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t"
                                                style={{
                                                    backgroundImage: `linear-gradient(to top, ${color}cc, ${color}90, transparent)`,
                                                }}
                                            ></div>

                                            {/* ✅ Fixed top-left tag */}
                                            <div className={`absolute top-3 left-3 bg-white text-[$}] text-black px-4 py-1 rounded-full text-[8px] font-semibold shadow-md`}>
                                                {item.service?.name || "CASE STUDY"}
                                            </div>

                                            <div className="absolute bottom-4 left-4 right-4 text-white flex flex-col">
                                                <h3 className="font-semibold text-[16px] mb-2">{item.title}</h3>
                                                <p className="text-[9px] mb-3">{item.summary}</p>

                                                <div className="flex font-medium mb-3">
                                                    <div className="flex items-center gap-1 ">
                                                        <span className="text-[20px] font-bold">{Number(item.sales_value_increase)}%</span>
                                                        <span className="text-[9px] max-w-[4rem]">Increased Sales Value</span>
                                                    </div>
                                                    <div className="border-l border-white mx-2 h-6"></div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-[20px] font-bold">{Number(item.cost_reduction)}%</span>
                                                        <span className="text-[9px] max-w-[4rem]">Lesser Costs</span>
                                                    </div>
                                                </div>

                                                {/* <button
                                                    className="w-full text-xs text-white border border-white py-1.5 rounded-full font-medium hover:bg-teal-600 transition"
                                                    style={{ backgroundColor: color }}
                                                >
                                                    Read More
                                                </button> */}
                                                <Link
                                                    href={`/case-studies/${item.slug}`}   // ← API slug here
                                                    className="w-full text-xs text-white border border-white py-1.5 rounded-full font-medium hover:bg-teal-600 transition text-center block"
                                                    style={{ backgroundColor: color }}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <AppButton/> */}
            <AppButton
                text={btn}
                color={buttoncolor}
                link={btnlink}
            // onClick={() => console.log("Button clicked")} 
            />
        </section>
    );
}
