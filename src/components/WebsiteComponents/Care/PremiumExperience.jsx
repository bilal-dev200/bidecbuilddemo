import React from "react";
import Image from "next/image";
import {
    COMMON_FIELD_NAMES,
    getFieldValuesByNameWithPosition,
    getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

const PremiumExperience = ({ data }) => {
    console.log(data, "checking")
    const points = [
        {
            title: "Outdated Digital Presence:",
            description: "The clinic lacked a professional website to represent its premium services.",
        },
        {
            title: "Limited Service Visibility:",
            description: "Treatments such as PRP/PRF, Botox, and exosomes were not clearly explained online.",
        },
        {
            title: "Client Interaction Gaps:",
            description: "No integrated appointment booking or inquiry system for potential clients.",
        },
        {
            title: "Brand Identity Misalignment:",
            description: "The luxury, medical-grade experience of the clinic was not reflected digitally.",
        },
    ];

    const description =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TEXTEDITOR, 0) ||
        "";

    const heading =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

    const image =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
        "/";

    return (<div>
        <h2 className="text2xl text-5xl text-center" dangerouslySetInnerHTML={{ __html: heading }} />

        <section className="bg-gray-50 py16 px6 md:px20">


            <div className="max-w-7xl px-10 mx-auto flex flex-col mt-10 md:flex-row items-center gap-10">
                {/* Left: Main Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={`${Image_URL}${image}`}
                        alt="Clinic Showcase"
                        className="w-full"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-1/2 space-y-6">

                    {/* <p className="text-gray-700 text-base md:text-lg" dangerouslySetInnerHTML={{ __html: description }} />
                    {/* Caviar by Dr. Ambreen Roshan empowers individuals through advanced,
                        science-backed treatments. In a competitive skincare market, the clinic
                        struggled to effectively showcase its premium services and highlight
                        the distinct advantages of medical care over standard beauty treatments.
                        Without a strong digital presence, its luxury image and advanced offerings
                        were limited. Caviar needed a platform to build trust, reflect its brand,
                        and make services accessible to clients. */}
                    {/* <ul className="space-y-4 text-gray-700 list-disc list-inside">
                        {points.map((point, index) => (
                            <li key={index}>
                                <span className="font-semibold">{point.title}</span> {point.description}
                            </li>
                        ))}
                    </ul> */}
                    <div
                        className=" text-base  space-y-4 prose"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />

                </div>
            </div>
        </section>
    </div>
    );
};

export default PremiumExperience;
