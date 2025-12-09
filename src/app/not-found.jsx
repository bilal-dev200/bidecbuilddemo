"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mb-10 justify-center min-h-screen bg-[#1A7D85] text-center px-4">
      
      {/* Main heading */}
      <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-white">
        404
      </h1>

      {/* Subheading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
        PAGE NOT FOUND
      </h2>

      {/* Description */}
      <p className="text-white max-w-md mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Homepage link */}
      <Link
        href="/"
        className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
}
