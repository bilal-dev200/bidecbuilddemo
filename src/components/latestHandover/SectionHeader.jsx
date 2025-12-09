"use client"
import React from "react"
import {
    getValueByFieldNameAndPosition,
    COMMON_FIELD_NAMES,
} from "@/lib/utils/sectionDataHelpers"

const SectionHeader = ({ data }) => {
    console.log("asas data",data);
    
    // Extract fields dynamically
    const subtitle =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) ||
        "Default Subtitle"

    const title =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) ||
        "Default Title"

    const description =
        getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) ||
        "Default description text goes here."

    return (
        <div className="text-center max-w-[1200px] mx-auto my-12">
            {subtitle && (
                <p className="uppercase tracking-widest text-xl text-gray-500">
                    {subtitle}
                </p>
            )}
            {title && (
                <h2 className="text-3xl md:text-5xl font-bold mt-2">{title}</h2>
            )}
            {description && (
                <p className="text-gray-600 mt-4 text-xl leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
