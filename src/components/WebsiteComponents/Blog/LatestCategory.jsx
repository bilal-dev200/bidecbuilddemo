
"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function LatestCategory() {
  return (
    <div className="w-full px-5 md:px-0 mt-12 mx-auto container">
      <h2 className="text-3xl font-bold mb-8">Our Latest Category</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT MAIN CATEGORY CARD */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg flex flex-col h-[36rem] bg-cover bg-center"
          style={{ backgroundImage: "url('/mountain.png')" }}
        >
          {/* Bottom dark overlay */}
          <div className="mt-auto bg-black/40 backdrop-blur-xl text-white px-6 py-5 flex flex-col justify-end">

            <button className="px-4 py-1 bg-white text-black rounded-full text-xs w-fit mb-3">
              Shopify
            </button>

            <p className="text-sm opacity-90 mb-4 leading-snug">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard
            </p>

            <div className="flex justify-between text-[11px] opacity-80">
              <span>May 05, 2025</span>
              <span>7 Min Read</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE STACK */}
        <div className="flex flex-col gap-6">

          {/* AUTHOR CARD */}
          <div className="bg-[#0f8b8d] text-white rounded-3xl p-6 shadow-lg flex flex-col h-[24rem]">

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <Image
                src="/avatar.png"
                width={65}
                height={65}
                alt="author"
                className="rounded-xl object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Ahmed Raza</h3>
                <p className="text-sm opacity-80 leading-tight">
                  is simply dummy text of the printing
                </p>
              </div>
            </div>

            <button className="px-4 py-1 mt-6 bg-white text-black rounded-full text-xs w-fit">
              Shopify
            </button>

            <p className="text-sm opacity-90 leading-snug mt-3">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard
            </p>

            <div className="flex justify-between text-[11px] opacity-80 mt-auto pt-4">
              <span>May 05, 2025</span>
              <span>7 Min Read</span>
            </div>
          </div>

          {/* SOCIAL SHARE BOX */}
          <div className="bg-[#0f8b8d] text-white rounded-3xl shadow-lg p-6 h-[10.5rem]">
            <h3 className="text-lg font-semibold mb-5">Share with your Community</h3>

            <div className="flex gap-6 text-2xl">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
