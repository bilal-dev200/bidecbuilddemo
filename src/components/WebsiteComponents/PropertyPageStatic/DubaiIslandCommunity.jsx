'use client';
import React from 'react';
import Image from 'next/image';
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from '@/config/constants';

export default function DubaiIslandCommunity({ data }) {
  console.log('DubaiIslandCommunity data:', data);

  // Extract dynamic values using position-based approach
  const title = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Dubai Island Community';
  const desc1 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 0) || 'Located in the heart of Dubai Island, our community offers unparalleled luxury living with stunning waterfront views.';
  const desc2 = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.DESCRIPTION, 1) || 'Experience world-class amenities, pristine beaches, and a vibrant lifestyle in one of Dubai\'s most prestigious locations.';

  // Extract info icons data - supporting multiple info items
  const infoIcons = [
    {
      icon: getValueByFieldNameAndPosition(data, 'info_icon', 0) || '/ico1.png',
      text: getValueByFieldNameAndPosition(data, 'info_text', 0) || '5 min to Downtown'
    },
    {
      icon: getValueByFieldNameAndPosition(data, 'info_icon', 1) || '/ico2.png',
      text: getValueByFieldNameAndPosition(data, 'info_text', 1) || '10 min to Airport'
    },
    {
      icon: getValueByFieldNameAndPosition(data, 'info_icon', 2) || '/ico3.png',
      text: getValueByFieldNameAndPosition(data, 'info_text', 2) || 'Beachfront Access'
    },
    {
      icon: getValueByFieldNameAndPosition(data, 'info_icon', 3) || '/ico4.png',
      text: getValueByFieldNameAndPosition(data, 'info_text', 3) || 'Marina Views'
    }
  ].filter(item => item.text && item.text !== 'undefined');

  // Extract images - supporting multiple images
  const images = [
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 0) || '/l1.png',
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 1) || '/l2.png',
    getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.IMAGE, 2) || '/l3.png',
  ].filter(img => img && img !== 'undefined');

  return (
    <section className="relative py-10 px-6 lg:px-20 flex flex-col lg:flex-row items-start gap-8">
      {/* Text Section */}
      <div className="bg-gray-100 p-8 rounded-lg max-w-xl w-full z-10 relative mt-14 lg:-mb-0 lg:-mr-20">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed">{desc1}</p>
        <p className="text-gray-800 mb-6 leading-relaxed">{desc2}</p>

        {/* Info Icons */}
        <div className="grid grid-cols-2 gap-4 text-sm md:text-base text-gray-900">
          {infoIcons.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={item.icon}
                alt={item.text}
                // width={20}
                // height={20}
                className="object-contain"
              />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Images Section */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden ${index === 0 ? 'md:col-span-2 h-64' : 'h-48'
              }`}
          >
            <img
              src={`${Image_URL}${image}`}
              alt={`Community image ${index + 1}`}
              // fill
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
