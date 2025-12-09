"use client";
import Image from "next/image";
import { Image_URL } from "@/config/constants";
import { COMMON_FIELD_NAMES, getFieldValue, getMultipleFieldValuesByName } from "@/lib/utils/sectionDataHelpers";
// import {
//     getFieldValue,
//     getMultipleFieldValuesByName,
//     COMMON_FIELD_NAMES,
// } from "@/utils/fieldExtractors"; // adjust path

const KeyMilestone = ({ data }) => {
    if (!data) return null;

    // Single value fields
    const subHeading = getFieldValue(data, COMMON_FIELD_NAMES.SUB_HEADING);
    const heading = getFieldValue(data, COMMON_FIELD_NAMES.HEADING);
    const description = getFieldValue(data, COMMON_FIELD_NAMES.DESCRIPTION);
    const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE);

    // Multiple values (features list)
    const features = getMultipleFieldValuesByName(
        data,
        COMMON_FIELD_NAMES.FEATURE_TITLE
    );

    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* Left Image */}
            <div className="w-full md:w-1/2">
                <div className="p-4">
                    {image && (
                        <img
                            src={`${Image_URL}${image}`}
                            alt={heading || "Milestone Image"}
                            // width={500}
                            // height={500}
                            className="object-cover w-fit"
                        />
                    )}
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 px-6 py-10">
                {subHeading && (
                    <p className="text-blue-800 uppercase text-xl tracking-widest font-medium">
                        {subHeading}
                    </p>
                )}
                {heading && (
                    <h2 className="text-5xl font-semibold mt-2 mb-4">{heading}</h2>
                )}
                {description && (
                    <p className="text-gray-600 mb-6 text-xl">{description}</p>
                )}

                {features.length > 0 && (
                    <ul className="space-y-2 text-gray-800 text-xl">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="text-blue-500 mr-2">•</span> {feature}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default KeyMilestone;
