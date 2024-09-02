import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">TAXTONE</h1>
            <p className="text-dark2">
              Founded in 2023, Taxtone specializes in teaching tax and
              accounting subjects. We offer clear, practical training to help
              you master financial topics. Our expert team is here to make
              complex tax and accounting concepts easy to understand.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Accounting Mastery
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Excel Essentials
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    GST Essentials
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    GST Masterclass
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            {/* <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div> */}
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/EP5n23djpJZHHKaiPVCYod">
                <FaWhatsapp className="cursor-pointer hover:text-blue-700 hover:scale-150 duration-500" />
              </a>
              <a href="https://www.instagram.com/tax_tone_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram className="cursor-pointer hover:text-blue-700 hover:scale-150 duration-500" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555438953621">
                <FaFacebook className="cursor-pointer hover:text-blue-700 hover:scale-150 duration-500" />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube className="cursor-pointer hover:text-blue-700 hover:scale-150 duration-500" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
