
import React from "react";

const AppButton = ({
  text,
  color = "#1A7D85",
  link = "",
  onClick,
  center = true,
  marginTop = true
}) => {
  const baseStyle = `
    text-white 
    px-6 py-2 
    rounded-full 
    text-sm font-medium 
    transition-all duration-300 
    transform hover:scale-105 hover:opacity-90
    ${marginTop ? "mt-10" : ""}
    ${center ? "flex justify-center mx-auto" : ""}
  `;

  if (!text && !link)
    return <div className={marginTop ? "mt-10 h-10 w-full" : "h-10 w-full"} />;

  // ⭐ 1. LINK STARTS WITH "#" → SCROLL TO SECTION
  if (link && link.startsWith("#")) {
    const id = link.replace("#", "");

    return (
      <button
        onClick={() => {
          const section = document.getElementById(id);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
        className={baseStyle}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    );
  }

  // ⭐ 2. LINK EXISTS AND NOT EMPTY → NORMAL REDIRECT
  if (link && link.trim() !== "") {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button
          className={baseStyle}
          style={{ backgroundColor: color }}
        >
          {text}
        </button>
      </a>
    );
  }

  // ⭐ 3. NO LINK → USE onClick
  return (
    <button
      onClick={onClick}
      className={baseStyle}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default AppButton;
