
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/blogbanner.png')" }}
    >
      

      <div className="relative container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-10 py-14">

        {/* ---------- LEFT SIDE (Vertically Centered) ---------- */}
        <div className="text-white flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            BidecSol Tech Insights <br /> Lorem Ipsum is <br /> dummy text
          </h1>

          <p className="mt-5 text-sm md:text-base text-gray-200 max-w-lg">
            Stay ahead with curated updates on software development, ecommerce,
            AI, and digital transformation for growing businesses.
          </p>
        </div>

        {/* ---------- RIGHT SIDE FORM (Less Width, More Height) ---------- */}
        <div className="flex justify-center mt-20 py-10 md:justify-end">
          <div className="bg-white rounded-xl shadow-xl p-8 md:w-[500px] py10">

            <form className="space-y-3">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b border-gray-300 focus:outline-none py-3"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border-b border-gray-300 focus:outline-none py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-gray-300 focus:outline-none py-3"
              />

              {/* Phone + Service */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border-b border-gray-300 focus:outline-none py-3"
                />
                <input
                  type="text"
                  placeholder="Service of Interest"
                  className="border-b border-gray-300 focus:outline-none py-3"
                />
              </div>

              <textarea
                rows="2"
                placeholder="Project Description"
                className="w-full border-b border-gray-300 focus:outline-none py-3"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full"
              >
                Get My Free Consultation
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
