"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ id, image, title, excerpt }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 sm:h-52 md:h-56 object-cover"
      />

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-semibold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
          {excerpt}
        </p>
        <Link
          href={`/blog/${id}`}
          className="text-blue-900 font-semibold text-xs sm:text-sm mt-auto hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
