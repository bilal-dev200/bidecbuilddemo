"use client";
import Image from "next/image";

export default function CollaborateModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-4xl md:max-w-[1200px] rounded-2xl shadow-2xl overflow-hidden relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl z-20"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Side - Form */}
          <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 leading-snug text-center md:text-left">
              COLLABORATE WITH US — <br className="hidden sm:block" /> FILL THE FORM
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 text-center md:text-left">
              Tell us a bit about your project — we’ll be in touch soon.
            </p>

            <form className="flex flex-col gap-3 sm:gap-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows={4}
                className="border rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Submit */}
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md mt-2 w-full sm:w-fit mx-auto md:mx-0"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Image (hidden on mobile) */}
          <div className="mt-6 md:mt-0 md:flex-1 hidden md:block">
            <Image
              src="/collabrateImage.png"
              alt="Building"
              width={600}
              height={800}
              className="object-cover h-full w-full rounded-tr-2xl rounded-br-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}