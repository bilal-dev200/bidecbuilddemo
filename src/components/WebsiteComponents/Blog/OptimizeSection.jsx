"use client";
import Image from "next/image";

export default function OptimizeSection() {
  return (
    <section className="w-full px4 py-10">
      <div
        className="
          w-full 
          max-w-[1350px] 
          mx-auto 
          bg-gradient-to-r from-[#157E9F] to-[#3DB3B4]
          rounded-[25px] 
          border border-[#3DB3F4]
          p-10
          flex flex-col md:flex-row 
          items-center 
          justify-between
          gap-10
        "
      >
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-semibold mb-4">
            Lorem Ipsum is simply
          </h2>

          <p className="mb-3 text-[15px] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a
          </p>

          <button
            className="
              mt-4 
              bg-white 
              text-black 
              px-6 py-3 
              rounded-full 
              shadow-md
              hover:bg-gray-100 
              transition
            "
          >
            Optimize My Store Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/optimize-banner.png" // 👉 apni image ka naam rakhen
            alt="Optimize Illustration"
            width={500}
            height={500}
            className="w-[350px] md:w-[430px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
