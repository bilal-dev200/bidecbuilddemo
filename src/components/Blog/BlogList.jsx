"use client";
import React from "react";
import BlogCard from "../Cards/BlogCard";

// sample data
const blogs = [
  {
    id: 1,
    image: "/propertyImage.png",
    title: "Am I Still Able to Work While on UI (Unemployability)?",
    excerpt:
      "Learn if you can still work while receiving UI and how it affects your benefits...",
  },
  {
    id: 2,
    image: "/propertyImage.png",
    title: "10 Interior Design Tips to Elevate Your Space",
    excerpt:
      "Discover simple but effective interior design tips to make your home shine...",
  },
  {
    id: 3,
    image: "/propertyImage.png",
    title: "Best Architecture Trends of 2025",
    excerpt:
      "Explore modern architecture ideas shaping the future of design...",
  },
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          image={blog.image}
          title={blog.title}
          excerpt={blog.excerpt}
        />
      ))}
    </div>
  );
};

export default BlogList;
