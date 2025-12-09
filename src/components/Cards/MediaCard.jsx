import Image from "next/image";
import Link from "next/link";

export default function MediaCard({
  id,
  title,
  date,
  description,
  image,
  size = "large",
}) {
  const isSmall = size === "small";

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 
        w-full flex flex-col`} // ✅ responsive: fills grid cell
    >
      {/* Image */}
      <div className={`relative ${isSmall ? "h-32 sm:h-36" : "h-40 sm:h-48"}`}>
        {/* ✅ adaptive heights */}
        <Image
          src={image}
          alt={`${title} - featured image`}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      {/* Content */}
      <div className={isSmall ? "p-2 sm:p-3" : "p-4"}>
        {/* Date Row */}
        <div className="flex items-center justify-between text-gray-500 text-xs mb-2">
          <Image
            src="/vector.png"
            alt="calendar icon"
            width={isSmall ? 12 : 16}
            height={isSmall ? 12 : 16}
            className="opacity-70"
          />
          <p className="truncate max-w-[70%]">{date}</p> {/* ✅ prevents overflow */}
        </div>

        {/* Title */}
        <h2
          className={`font-semibold ${
            isSmall ? "text-sm sm:text-base" : "text-base md:text-lg"
          } mb-2 line-clamp-2`}
        >
          {title}
        </h2>

        {/* Description (only in large) */}
        {!isSmall && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 sm:line-clamp-4">
            {description}
          </p>
        )}

        {/* CTA */}
        <Link
          href={`/media/${id}`}
          className={`text-blue-600 hover:underline ${
            isSmall ? "text-xs sm:text-sm" : "text-sm"
          }`}
        >
          View Full Article →
        </Link>
      </div>
    </div>
  );
}
