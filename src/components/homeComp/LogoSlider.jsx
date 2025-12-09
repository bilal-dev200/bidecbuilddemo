import React from "react";

const logos = [
  "/revikof.h",
  "/carnkey.png",
  "/carnkey.png",
  "/carnkey.png",
  "/carnkey.png",
  "/carnkey.png",
  "/carnkey.png",
    "/carnkey.png",
      "/carnkey.png",
      "/carnkey.png",

];

const LogoSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-10 bg-white">
      <div className="logo-slider flex gap-16">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-10 w-auto object-contain inline-block opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
