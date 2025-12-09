"use client";
import { FaMapMarkerAlt, FaBed, FaRulerCombined, FaSyncAlt, FaHeart } from "react-icons/fa";

export default function PropertySection() {
  const properties = [
    {
      id: 1,
      image: "/property.png", // your property image
      location: "Oslo, Norway",
      title: "Elegant Contemporary Villa with Garden",
      beds: 2,
      size: "3142–4028 sq. ft.",
      price: "$284,220",
    },
    {
      id: 2,
      image: "/property.png",
      location: "Oslo, Norway",
      title: "Elegant Contemporary Villa with Garden",
      beds: 3,
      size: "3142–4028 sq. ft.",
      price: "$284,220",
    },
    {
      id: 3,
      image: "/property.png",
      location: "Oslo, Norway",
      title: "Elegant Contemporary Villa with Garden",
      beds: 4,
      size: "3142–4028 sq. ft.",
      price: "$284,220",
    },
    {
      id: 4,
      image: "/property.png",
      location: "Oslo, Norway",
      title: "Elegant Contemporary Villa with Garden",
      beds: 2,
      size: "3142–4028 sq. ft.",
      price: "$284,220",
    },
    {
      id: 5,
      image: "/property.png",
      location: "Oslo, Norway",
      title: "Elegant Contemporary Villa with Garden",
      beds: 3,
      size: "3142–4028 sq. ft.",
      price: "$284,220",
    },
    {
      id: 6,
      image: "/property.png",
      location: "Oslo, Norway",
      title: "Elegant Contemporary Villa with Garden",
      beds: 4,
      size: "3142–4028 sq. ft.",
      price: "$284,220",
    },
  ];

  return (
    <div className="bg-white text-black py-16 px-6 md:px-12 max-w-[1200px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-xl tracking-wide text-gray-800 font-semibold">
          SELECT WHAT FITS YOUR LIFESTYLE
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
          Dubai isn’t just about luxury — it’s one of the most investor-friendly cities in the world.
          Here’s why thousands of international buyers invest in Dubai property every year.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white shadow-md rounded-xl px-6 py-4 mb-12 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
        <select className="border rounded-md px-4 py-2 w-full md:w-auto">
          <option>The Saudi Residences</option>
        </select>
        <select className="border rounded-md px-4 py-2 w-full md:w-auto">
          <option>Any</option>
        </select>
        <select className="border rounded-md px-4 py-2 w-full md:w-auto">
          <option>Any</option>
        </select>
        <select className="border rounded-md px-4 py-2 w-full md:w-auto">
          <option>Any</option>
        </select>
        <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
          Find Now
        </button>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Image */}
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-60 object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                <FaHeart className="text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="flex items-center text-gray-500 text-sm mb-2">
                <FaMapMarkerAlt className="mr-2 text-gray-400" /> {property.location}
              </p>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{property.title}</h3>

              <div className="flex items-center text-gray-600 text-sm mb-4 gap-4">
                <span className="flex items-center gap-2">
                  <FaBed /> {property.beds} Bed
                </span>
                <span className="flex items-center gap-2">
                  <FaRulerCombined /> {property.size}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-gray-900">{property.price}</p>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-lg">
                  View Detail
                </button>
              </div>
            </div>

            {/* Bottom icons */}
            <div className="flex justify-center gap-6 py-3 border-t text-gray-500">
              <FaSyncAlt className="cursor-pointer hover:text-black" />
              <FaHeart className="cursor-pointer hover:text-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
