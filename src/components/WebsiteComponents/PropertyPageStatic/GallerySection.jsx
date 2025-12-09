'use client';
import Image from 'next/image';
import { useState } from 'react';
import { getValueByFieldNameAndPosition, COMMON_FIELD_NAMES } from "@/lib/utils/sectionDataHelpers";
import { Image_URL } from '@/config/constants';

export default function GallerySection({ data }) {
  console.log('GallerySection data:', data);

  const [activeTab, setActiveTab] = useState('interior');

  // Extract dynamic values using position-based approach
  const sectionTitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.HEADING, 0) || 'Gallery';
  const sectionSubtitle = getValueByFieldNameAndPosition(data, COMMON_FIELD_NAMES.SUB_HEADING, 0) || 'Explore our stunning spaces';

  // Extract gallery images - supporting multiple categories
  const interiorImages = [
    getValueByFieldNameAndPosition(data, 'interior_image', 0) || '/l1.png',
    getValueByFieldNameAndPosition(data, 'interior_image', 1) || '/l2.png',
    getValueByFieldNameAndPosition(data, 'interior_image', 2) || '/l3.png',
    getValueByFieldNameAndPosition(data, 'interior_image', 3) || '/l1.png',
    getValueByFieldNameAndPosition(data, 'interior_image', 4) || '/l2.png',
    getValueByFieldNameAndPosition(data, 'interior_image', 5) || '/l3.png',
  ].filter(img => img && img !== 'undefined').map(src => ({ thumb: src }));

  const exteriorImages = [
    getValueByFieldNameAndPosition(data, 'exterior_image', 0) || '/l2.png',
    getValueByFieldNameAndPosition(data, 'exterior_image', 1) || '/l3.png',
    getValueByFieldNameAndPosition(data, 'exterior_image', 2) || '/l1.png',
    getValueByFieldNameAndPosition(data, 'exterior_image', 3) || '/l2.png',
  ].filter(img => img && img !== 'undefined').map(src => ({ thumb: src }));

  // const amenitiesImages = [
  //   getValueByFieldNameAndPosition(data, 'amenity_image', 0) || '/l3.png',
  //   getValueByFieldNameAndPosition(data, 'amenity_image', 1) || '/l1.png',
  //   getValueByFieldNameAndPosition(data, 'amenity_image', 2) || '/l2.png',
  // ].filter(img => img && img !== 'undefined').map(src => ({ thumb: src }));

  // Create gallery object
  const gallery = {
    interior: interiorImages.length > 0 ? interiorImages : [
      { thumb: '/l1.png' },
      { thumb: '/l2.png' },
      { thumb: '/l3.png' },
      { thumb: '/l1.png' },
      { thumb: '/l2.png' },
      { thumb: '/l3.png' },
    ],
    exterior: exteriorImages.length > 0 ? exteriorImages : [
      { thumb: '/l2.png' },
      { thumb: '/l3.png' },
      { thumb: '/l1.png' },
      { thumb: '/l2.png' },
    ],
  };
  //  amenities: amenitiesImages.length > 0 ? amenitiesImages : [
  //       { thumb: '/l3.png' },
  //       { thumb: '/l1.png' },
  //       { thumb: '/l2.png' },
  //     ]
  // ✅ Guard: if gallery is missing or active tab not found
  if (!gallery || !gallery[activeTab]) {
    return (
      <section className="px-4 py-16 text-center text-gray-500">
        No gallery data available.
      </section>
    );
  }

  const renderImage = (item, index, height) => (
    <div
      key={index}
      className={`relative w-full ${height} rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300`}
    >
      <img
        src={`${Image_URL}${item.thumb}`}
        alt={`gallery-${item.thumb}`}
        // fill
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
  );

  const tabs = [
    { key: 'interior', label: 'Interior' },
    { key: 'exterior', label: 'Exterior' },
    // { key: 'amenities', label: 'Amenities' },
  ];

  return (
    <section className="px-4 py-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">{sectionTitle}</h2>
          <p className="text-gray-600 text-lg">{sectionSubtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.key
                  ? 'bg-[#26326A] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#26326A]'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery[activeTab].map((item, index) => {
            // Vary heights for visual interest
            const heights = ['h-64', 'h-80', 'h-72', 'h-64', 'h-80', 'h-72'];
            const height = heights[index % heights.length];
            return renderImage(item, index, height);
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#26326A] hover:bg-[#1E2A78] text-white px-8 py-3 rounded-full transition-colors duration-300">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
