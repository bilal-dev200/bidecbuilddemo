
import { footerApi, footerlinks } from "@/lib/api/watchlist";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { toast } from "react-toastify";

// import { footerApi } from "@/lib/api/footer"; // <-- import API

// const socialIcons = [
//   { icon: <FaFacebookF />, name: "Facebook" },
//   { icon: <FaLinkedinIn />, name: "LinkedIn" },
//   { icon: <FaInstagram />, name: "Instagram" },
//   { icon: <FaYoutube />, name: "YouTube" },
// ];
const iconMap = {
  Facebook: <FaFacebookF />,
  LinkedIn: <FaLinkedinIn />,
  Instagram: <FaInstagram />,
  YouTube: <FaYoutube />,
};
export default function Footer() {
  const [email, setEmail] = useState("");
  const [footerData, setFooterData] = useState({
    services: [],
    products: [],
    social_links: {},
  });


  const handleSubscribe = async () => {
    if (!email) {
    toast.error("Please enter your email!");
      return;
    }

    try {
      const res = await footerApi.subcriber({ email });
      console.log("Success:", res.data);
    toast.success("Subscribed Successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
    toast.error("Subscription failed!");
    }
  };
  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await footerlinks.footer(); // API call
        console.log("reswqwiokwq", res.data.data);

        setFooterData(res.data.data);
      } catch (error) {
        console.error("Error fetching footer:", error);
      }
    };
    fetchFooter();
  }, []);
  return (
    <footer className="bg-[#0f8b8d] text-white pt-10 pb-4 px-6 rounded-t-3xl mt-10">
      <div className="bg-[url('/Footer.png')] bg-cover bg-center md:p-6 py-6 px-2 rounded-2xl mb-10">        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* <img
                          className="w-40 object-contain"
              /> */}

        {/* <div className="w-full flex  justify-end">                <h3 className="text-lg text-black font-semibold  mb-2">Subscribe to Our Newsletter</h3>
                <div className=" bg-[#0f8b8d] rounded-full overflow-hidden shadow-md w-full md:w-80">
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="flex-1 px-4 py-2 text-white outline-none"
                  />
                  <button className="bg-white  text-black px-6 py-2 font-medium hover:bg-[#0c6e70]">
                    Send
                  </button>
                </div>
              </div> */}
        <div className="w-full md:flex justify-end">
          <div className="md:flex flex-col">
            {/* Heading */}
            <h3 className="text-lg text-black -10  font-semibold mb-2">
              Subscribe to Our Newsletter
            </h3>

            {/* Input + Button */}
            <div className="flex bg-[#0f8b8d] rounded-full overflow-hidden shadow-md w-full md:w-80">
              <input
                type="text"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 text-white outline-none"
              />
              <button className="bg-white text-black px-6 py-2 font-medium"
                onClick={handleSubscribe}>
                Send
              </button>
            </div>
          </div>
        </div>




      </div>
      </div>

      {/* Links Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-1 opacity-80">
            <li>Shopify Store</li>
            <li>Mobile Application</li>
            <li>AI & ML Services</li>
            <li>ERP Integration</li>
            <li>CRM Customization</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="space-y-1 opacity-80">
            <li>CRM Systems</li>
            <li>Learning Management Services</li>
            <li>AI Chatbots</li>
            <li>HRMS Software</li>
            <li>Custom Product Development</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">About Bidec</h4>
          <ul className="space-y-1 opacity-80">
            <li>About us</li>
            <li>Contact us</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Socials</h4>
          <div className="flex gap-3 text-xl">
            {socialIcons.map((social, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-md cursor-pointer hover:bg-gray-100"
                title={social.name}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-1 opacity-80">
            {footerData && footerData.services?.map((service, idx) => (
              <li key={idx}>
                <a href={service.url || "#"} target="_blank" rel="noopener noreferrer">
                  {service.title || service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* Products */}
        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="space-y-1 opacity-80">
            {footerData.products?.map((product, idx) => (
              <li key={idx}>
                <a
                  href={product.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About (if any) */}
        {/* Uncomment if you have an about array */}
        {/* <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-1 opacity-80">
            {footerData.about?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div> */}

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-3">Socials</h4>
          <div className="flex gap-3 text-xl">
            {footerData.social_links &&
              Object.entries(footerData.social_links).map(([key, link]) => (
                <a
                  key={key}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-md cursor-pointer hover:bg-gray-100"
                  title={key}
                >
                  {iconMap[key]}
                </a>
              ))}
          </div>
        </div>
      </div>
      <hr className="border-white/30 my-6" />

      {/* Bottom Text */}
      <p className="text-center text-xs opacity-80">
        © 2025 BidecSol. All rights reserved
      </p>
    </footer>
  );
}
