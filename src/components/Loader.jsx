import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0f8b8d]">
      <div className="relative flex items-center justify-center">

        {/* Soft Glow Circle */}
        <div
          className="
            absolute 
            w-40 h-40 
            bg-white 
            opacity-20 
            blur-3xl 
            rounded-full
            animate-[pulse_3s_ease-in-out_infinite]
          "
        ></div>

        {/* Soft Highlight Ring */}
        <div
          className="
            absolute 
            w-44 h-44 
            rounded-full 
            border-4 
            border-white/10 
            backdrop-blur-sm
            animate-[pulse_4s_ease-in-out_infinite]
          "
        ></div>

        {/* Logo With Premium Scale Animation */}
        <img
          src="/logo.png"
          alt="Loading..."
          className="
            relative z-10
            w-28 h-28 
            object-contain
            animate-[scaleGlow_2.2s_ease-in-out_infinite]
            drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]
          "
        />
      </div>
    </div>
  );
};

export default Loader;
