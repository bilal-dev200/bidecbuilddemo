"use client";
import Image from "next/image";

export default function PrimeLocations() {
  const locations = [
    {
      title: "Palm Jumeirah",
      desc: "Luxury beachfront living, high-end villas and apartments.",
    },
    {
      title: "Downtown Dubai",
      desc: "Home of Burj Khalifa, premium urban lifestyle, great ROI.",
    },
    {
      title: "Dubai Marina",
      desc: "Waterfront properties, nightlife, high rental demand.",
    },
    {
      title: "Business Bay",
      desc: "Commercial & residential mix, great for professionals.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-md">
            <Image
              src="/dualImage.png"
              alt="Dubai Luxury Project"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Discover Prime Locations to Build or Buy
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-2 mb-4 rounded"></div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Dubai isn’t just about luxury — it’s one of the most investor-friendly
            cities in the world. Here’s why thousands of international buyers invest
            in Dubai property every year:
          </p>

          {/* Bullet List */}
          <ul className="mt-6 list-disc list-inside space-y-3 text-gray-700 text-sm md:text-base">
            {locations.map((item, index) => (
              <li key={index} className="flex flex-col">
                <span className="font-semibold">{item.title}</span>{" "}
                {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
