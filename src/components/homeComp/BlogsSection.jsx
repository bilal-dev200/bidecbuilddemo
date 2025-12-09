"use client";
import Image from "next/image";
import React from "react";

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      image: "/blog.png", // replace with your image
      title: "Lorem Ipsum is simply dummy text of the printing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      image: "/blog.png", // replace with your image
      title: "Lorem Ipsum is simply dummy text of the printing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      image: "/blog.png", // replace with your image
      title: "Lorem Ipsum is simply dummy text of the printing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-[#1A7D85]">Blogs</span> Lorem Ipsum is
        </h2>
        <p className="text-gray-600 mt-3">
          At Bidec, launching your app is only the beginning. As a full-service
          mobile app development
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-[1200px] mx-auto grid gap-8 px-4 md:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-56">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-1">
              <h3 className="font-semibold text-lg mb-3">{blog.title}</h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
            <div className="bg-[#1A7D85] text-center py-3">
              <button className="text-white font-medium">View Detail</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
