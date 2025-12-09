"use client"

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function CustomDropdown({ label, options }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);
    const dropdownRef = useRef(null);

    // toggle dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // select item
    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    // close dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col min-w-[180px] relative" ref={dropdownRef}>
            {/* Label */}
            <label className="text-gray-700 text-lg font-medium mb-1">{label}</label>

            {/* Button */}
            <button
                type="button"
                onClick={toggleDropdown}
                className="flex justify-between items-center border border-black rounded-full px-3 py-2 text-md text-gray-700 bg-white hover:border-black transition focus:outline-none"
            >
                {selected}
                <ChevronDown
                    className={`h-4 w-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Options */}
            {isOpen && (
                <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-md z-20">
                    {options.map((opt, i) => (
                        <li
                            key={i}
                            onClick={() => handleSelect(opt)}
                            className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CustomDropdown;
