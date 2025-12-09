"use client";
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

const AgentRegistrationForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    onClose(); // Submit ke baad modal close karna ho
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-xl max-w-4xl w-full overflow-hidden shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left Side - Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">AGENT REGISTRATION</h2>
            <p className="text-gray-600 mb-6">
              Join us as a registered agent and start growing your business today
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  required
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition w-full"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/agentRegistrationImage.png"
              alt="Vertical Building"
              width={400}
              height={550}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentRegistrationForm;
