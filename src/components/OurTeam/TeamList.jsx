// components/TeamList.jsx
"use client";
import React, { useState } from "react";
import TeamCard from "./TeamCard";

const TeamList = () => {
  const [category, setCategory] = useState("All");

  // Team members data
  const teamMembers = [
    { name: "Hira Faisal", category: "Interior Design Lead", image: "/teamImage.png" },
    { name: "Ahmed Khan", category: "Architecture", image: "/teamImage.png" },
    { name: "Sara Malik", category: "Customer Support", image: "/teamImage.png" },
    { name: "Usman Ali", category: "Engineering", image: "/teamImage.png" },
    { name: "Ayesha Noor", category: "Marketing", image: "/teamImage.png" },
  ];

  const categories = [
    "All",
    "Architecture",
    "Customer Support",
    "Engineering",
    "Marketing",
    "Interior Design Lead",
  ];

  // Filtered members
  const filteredMembers =
    category === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.category === category);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-20 py-12 text-black">
      
      {/* Heading */}
      <div className="mb-10 text-center">
        <h6 className="text-sm tracking-widest text-gray-500 font-semibold uppercase">
          Our Team
        </h6>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e2b50]">
          Passionate Minds. Proven Results.
        </h1>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((element) => (
          <button
            key={element}
            onClick={() => setCategory(element)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                category === element
                  ? "bg-[#1e2b50] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {element}
          </button>
        ))}
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
