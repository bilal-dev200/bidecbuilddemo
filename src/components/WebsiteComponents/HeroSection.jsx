"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useMemo } from "react";

const HeroSection = () => {
  const pathname = usePathname(); // e.g. "/blog"
  const pageKey = pathname.replace("/", "") || "blog"; // convert to "blog"

  // Decide content per page
  const config = useMemo(() => {
    const pages = {
      home: {
        heading: "Welcome to Our Website",
        description: "This is our homepage hero section with amazing features.",
        button: "Get Started",
        align: "center", // "start" | "center"
      },
      blog: {
        heading: "Our Blog",
        description: "Latest articles, news, and updates for you.",
        button: null, // no button
        align: "start",
      },
      contact: {
        heading: "Contact Us",
        description: "We’d love to hear from you. Reach out anytime!",
        button: "Send Message",
        align: "center",
      },
    };
    return pages[pageKey] || pages["home"];
  }, [pageKey]);

  // Detect background type (image or video)
  const bgSrc = `/Banner/${pageKey}`;
  const isVideo = [".mp4", ".webm"].some((ext) => pathname.includes(ext));

  return (
    <section className="relative w-full h-screen">
      {/* Background */}
      {isVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={`${bgSrc}.mp4`} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={`${bgSrc}.png`}
          alt={`${pageKey} banner`}
          fill
          className="object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col gap-4 text-white max-w-2xl p-8 ${
          config.align === "center"
            ? "items-center justify-center h-full text-center"
            : "items-start justify-start h-full text-left"
        }`}
      >
        {/* If button page → order = p > h1 > button */}
        {config.button ? (
          <>
            <p className="text-xl px-5">{config.description}</p>
            <h1 className="lg:leading-[5rem] leading-[3.5rem] lg:text-7xl text-5xl">{config.heading}</h1>
            <button className="mt-4 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              {config.button}
            </button>
          </>
        ) : (
          <>
            <h1 className="lg:leading-[5rem] leading-[3.5rem] lg:text-7xl text-5xl">{config.heading}</h1>
            <p className="text-xl px-5">{config.description}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
