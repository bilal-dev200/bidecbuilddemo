// components/TeamCard.jsx
import Image from "next/image";
import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-lg">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Category */}
      <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">
        {member.category}
      </p>

      {/* Name */}
      <h5 className="font-semibold text-base sm:text-lg">{member.name}</h5>
    </div>
  );
};

export default TeamCard;
