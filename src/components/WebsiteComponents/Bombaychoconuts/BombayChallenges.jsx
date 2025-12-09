
"use client";

import Image from "next/image";
import {
    COMMON_FIELD_NAMES,
    getFieldValuesByNameWithPosition,
    getValueByFieldNameAndPosition,
} from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";

export default function BombayChallenges({ data }) {
    if (!data) return null;

    // ===== Dynamic Fields ===== //
    const sub_heading =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
        "";

    const heading =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "";

    const title =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.TITLE, 0) ||
        "";

    const description =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
        "";

    const image1 =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) ||
        "/your-image-1.png";

    const image2 =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 1) ||
        "/your-image-2.png";

    // This will contain UL + LI from admin panel (HTML string)
    const list_html =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.CONTENT, 0) || "";

    return (
        <section className="max-w-[1200px] mx-auto px4 py16">

            {/* TOP HEADING */}
            <div className="text-center mb-10">

                <p className="text-sm tracking-[2px"
                    dangerouslySetInnerHTML={{ __html: sub_heading }}
                />

                <h2 className="text-3xl md:text-4xl  leading-snug"
                    dangerouslySetInnerHTML={{ __html: heading }}
                />

                <p
                    className="prose max-w-[800px] mx-auto mt-4"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>

            {/* CONTENT GRID */}
            <div className="flex flex-col md:flex-row items-center max-w-[1100px] px24  mx-auto gap4">

                {/* LEFT IMAGES */}
                <div className="w-full md:w-[40%] flex justify-center">

                    <div className="relative w-[300px] md:w-[380px]">

                        <div className="relative w-[300px] md:w-[380px] h-[350px] md:h-[420px]">
                            <Image
                                src={`${Image_URL}/${image1}`}
                                alt="Challenge main image"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[50%]">
                    <div
                        className="text-lg prose font-bold mb-4"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    <div
                        className="list-disc prose pl-5 space-y-2 marker:text-black"
                        dangerouslySetInnerHTML={{ __html: list_html }}
                    />
                </div>


            </div>
        </section>
    );
}
