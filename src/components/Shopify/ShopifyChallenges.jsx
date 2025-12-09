"use client";
import Image from "next/image";
import {
    COMMON_FIELD_NAMES,
    getRobustFieldValuesByName,
    getValueByFieldNameAndPosition,
    highlightLastWords,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function ShopifyChallenges({ data }) {
    const heading =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
        "Choose by 500+ Brands Worldwide";

    const featureTitles = getRobustFieldValuesByName(
        data,
        COMMON_FIELD_NAMES.FEATURE_TITLE
    );
    const featureIcons = getRobustFieldValuesByName(
        data,
        COMMON_FIELD_NAMES.FEATURE_ICON_WHITE
    );
    const featureDesc1 = getRobustFieldValuesByName(
        data,
        COMMON_FIELD_NAMES.FEATURE_DESCRIPTION1
    );
    const featureDesc2 = getRobustFieldValuesByName(
        data,
        COMMON_FIELD_NAMES.FEATURE_DESCRIPTION2
    );

    const cards = featureTitles.map((titleObj, idx) => ({
        icon: featureIcons[idx]?.value
            ? `${Image_URL}${featureIcons[idx].value}`
            : "/default-icon.png",
        title: titleObj?.value || "No Title",
        pain: featureDesc1[idx]?.value || "",
        solution: featureDesc2[idx]?.value || "",
    }));

    const isFiveCards = cards.length === 5;

    return (
        <section
            className={`max-w-[1200px] mx-auto bg-white ${isFiveCards ? "flex flex-col items-center" : ""
                }`}
        >
            {/* Heading */}
            <h2 className="text-2xl max-w-2xl md:text-3xl lg:text-4xl 2xl:text-6xl  text-center mx-auto  leadingtight mb-5">
                {highlightLastWords(heading, 2, "text-[#95BF47]")}
            </h2>

            {/* Cards Grid */}
            {isFiveCards ? (
                // ✅ Custom layout for exactly 5 cards
                <div className="flex flex-col items-center">
                    {/* First Row (3 cards) */}
                    <div className="flex flex-wrap justify-between gap-6">
                        {cards.slice(0, 3).map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col text-left p-6 rounded-lg bg-white h-[420px]
                           md:text-left md:items-start
                           sm:text-center sm:items-center items-center w-[370px]"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#1A7D85] mb-4 md:mx-0 sm:mx-auto mx-auto">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div>
                                {/* <h3 className="ebrima-bold text-base md:text-[20px] mb-4 leading-snug min-h-[56px] md:text-left sm:text-center text-center">
                  {item.title}
                </h3> */}
                                <h3
                                    className="ebrima-bold text-base md:text-[20px] mb-4 leading-snug text-center md:text-left w-[270px]"
                                >
                                    {item.title}
                                </h3>

                                <div className="flex-1 w-full md:w-[285px] sm:w-[80%] mx-auto md:mx-0">
                                    <div className="overflow-hidden mb-3 text-[14px]">
                                        <p>
                                            <span className="font-bold text-[15px]">Pain:</span>{" "}
                                            {item.pain}
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-300 my-3"></div>
                                    <div className="   overflow-hidden text-[14px]">
                                        <p>
                                            <span className="font-bold">Solution:</span>{" "}
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row (2 cards centered) */}
                    <div className="flex justify-between gap-6">
                        {cards.slice(3).map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col text-left p6 rounded-lg bg-white h-[420px]
                           md:text-left md:items-start
                           sm:text-center sm:items-center items-left w-[300px]"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#1A7D85] mb-4 md:mx-0 sm:mx-auto mx-auto">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div>
                                  <h3
                                    className="ebrima-bold text-base md:text-[20px]  leading-snug min-h-[56px]
             text-center md:text-left w-[400px] mx-auto"
                                >
                                    {item.title}
                                </h3>   
                                <div className="flex-1 w-full md:w-[285px] sm:w-[80%] mx-auto md:mx-0">
                                    <div className="h-[80px] overflow-hidden mb-3 text-[14px]">
                                        <p>
                                            <span className="font-bold text-[15px]">Pain:</span>{" "}
                                            {item.pain}
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-300 my-3"></div>
                                    <div className="[80px] overflow-hidden text-[14px]">
                                        <p>
                                            <span className="font-bold">Solution:</span>{" "}
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // ✅ Default grid layout (for all other cases)
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
                    {cards.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col text-left p-6 rounded-lg bg-white h-[420px]
                         md:text-left md:items-start
                         sm:text-center sm:items-center text-center items-center"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#1A7D85] mb-4 md:mx-0 sm:mx-auto mx-auto">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="ebrima-bold text-base md:text-[20px] mb-4 leading-snug min-h-[56px] md:text-left sm:text-center text-center">
                                {item.title}
                            </h3>
                            <div className="flex-1 w-full md:w-[270px] sm:w-[80%] mx-auto md:mx-0">
                                <div className="h-[80px] overflow-hidden mb-3 text-[14px]">
                                    <p>
                                        <span className="font-bold text-[15px]">Pain:</span>{" "}
                                        {item.pain}
                                    </p>
                                </div>
                                <div className="border-t border-gray-300 my-3"></div>
                                <div className="overflow-hidden text-[14px]">
                                    <p>
                                        <span className="font-bold">Solution:</span>{" "}
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
