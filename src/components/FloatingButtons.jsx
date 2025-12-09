"use client";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <a
      href="https://wa.me/971500000000" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gray-200 hover:bg-gray-300 border hover:border-none text-black p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingButtons;
