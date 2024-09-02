import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import ContactButton from "../ContactButton/ContactButton";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    to: "home",
  },
  {
    id: 2,
    title: "Programs",
    to: "programs",
  },
  {
    id: 3,
    title: "Services",
    to: "services",
  },
  {
    id: 4,
    title: "Our Team",
    to: "team",
  },
  {
    id: 5,
    title: "Reviews",
    to: "reviews",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">TAX TONE</h1>
        </div>

        {/* Menu section for larger screens */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <ScrollLink
                  to={menu.to}
                  smooth={true}
                  duration={500}
                  className="inline-block py-2 px-3 hover:text-secondary relative group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </ScrollLink>
              </li>
            ))}
            <ContactButton />
          </ul>
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <IoMdMenu className="text-4xl" />
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-lg z-40">
          <div className="container py-4">
            <button
              onClick={toggleMenu}
              className="text-xl flex items-center justify-between w-full"
            >
              <span className="font-bold text-2xl">TAX TONE</span>
              <IoMdClose className="text-3xl" />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-4 py-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <ScrollLink
                  to={menu.to}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="inline-block py-2 px-3 text-lg hover:text-secondary cursor-pointer"
                >
                  {menu.title}
                </ScrollLink>
              </li>
            ))}
            <ContactButton />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
