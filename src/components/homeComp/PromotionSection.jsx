"use client"
import Image from "next/image";
import Button from "../ui/button";
import { COMMON_FIELD_NAMES, getFieldValue, getValueByFieldNameAndPosition } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from "@/config/constants";
import CollaborateModal from "../Cards/CollaborateModal";
import { useState } from "react";

export default function PromotionSection({ data }) {
      const [isModalOpen, setIsModalOpen] = useState(false);
    // Create a complete field map for debugging
    // const fieldMap = createStructuredFieldMap(data);
    
    // Extract dynamic values based on the actual structure using the simple helper
    // First sub_heading (position 0) - section subtitle
    const sectionSubtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Want to promote your property project?';
    
    // Heading (position 0) - main heading
    const mainHeading = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || "We don't just list – we elevate!";
    
    // Description (position 0) - main description
    const description = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 
        `If you're a real estate developer looking to market your project the smart way, we're ready to collaborate.

Our platform offers more than visibility — we provide strategic brand positioning, creative storytelling, and targeted digital campaigns to make your project stand out.

Whether it's a residential community, commercial hub, or mixed-use development, we're here to help you reach serious buyers and investors faster and more effectively.`;
    
    // Second sub_heading (position 1) - closing text
    const closingText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 1) || "Let's work together to turn your vision into a landmark.";
    
    // Button values
    const primaryButtonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON, 0) || "Let's Talk";
    const secondaryButtonText = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.BUTTON, 1) || "View More Detail";
    
    // Image - fallback to default if not found
    const image = getFieldValue(data, COMMON_FIELD_NAMES.IMAGE) || '/promotionSection.png';
    
    // Button links (these would need to be added to the form if needed)
    const primaryButtonLink = getFieldValue(data, 'primary_button_link') || '#';
    const secondaryButtonLink = getFieldValue(data, 'secondary_button_link') || '#';

    // console.log('data', data);
    // console.log('=== PromotionSection Debug Info ===');
    // console.log('Complete field map:', fieldMap);
    // console.log('Extracted values:', {
    //     sectionSubtitle,
    //     mainHeading,
    //     description: description.substring(0, 100) + '...',
    //     closingText,
    //     primaryButtonText,
    //     secondaryButtonText
    // });

    return (
        <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center md:justify-start">
               <img
  src={
    image.startsWith("http")
      ? image
      : `${Image_URL}/${image.replace(/^\//, "")}`
  }
  alt="Property Project"
  width={600}
  height={700}
  className="rounded-2xl shadow-lg w-full object-cover max-w-sm md:max-w-full"
/>

            </div>

            {/* Right Content */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <p className="text-base md:text-lg font-semibold tracking-wide text-[#26326A] uppercase">
                    Want to promote your property project?
                </p>
                <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight max-w-2xl">
                    Maximize Your Property Value by Listing with Park Development.
                </h2>
                <div className="text-sm md:text-md text-gray-600 mt-4 space-y-4 max-w-2xl">
                    <p>
                        Listing your property with Park Development means placing it in the hands of a trusted name in luxury real estate. We bring expertise, credibility, and access to an exclusive network of high-net-worth buyers.
                    </p>
                    <p className="mt-4">
                        Our dedicated team ensures your property is showcased with the same prestige and attention to detail that define our own developments. We highlight the unique strengths of your asset, from professional marketing to personalized sales strategies.
                    </p>
                    <p className="mt-4">
                        With Park Development, your property is positioned for maximum value and exposure. Partner with us to connect your investment to the right buyers and experience the confidence of working with one of the UAE’s most respected real estate developers.
                    </p>
                </div>

                <p className="text-base md:text-lg mt-6 font-semibold text-gray-900 max-w-2xl">
                    Let&apos;s work together to turn your vision into a landmark.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                        href="https://wa.me/971525817802"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            text="Let's Talk"
                            className="text-sm md:text-lg bg-[#26326A] hover:bg-[#1E2A78] text-white px-6 md:px-10 py-2 rounded-full transition-colors duration-300 w-full sm:w-auto"
                        />
                    </a>
                     <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm md:text-lg bg-white text-black border border-black hover:bg-gray-100 px-6 md:px-10 py-2 rounded-full transition-colors duration-300 w-full sm:w-auto"
          >
            View More Detail
          </button>
                </div>
            </div>

             {/* ✅ Modal Call */}
      <CollaborateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
        </section>
    );
}
