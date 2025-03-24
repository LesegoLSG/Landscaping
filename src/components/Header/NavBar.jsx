import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white h-auto fixed top-0 left-0 z-50 shadow-md">
      <div className="w-full text-white bg-secondary flex justify-between items-center px-6 lg:px-24 py-1 text-sm">
        {/* Contact details */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center">
            <FaPhoneAlt />
            <p>+27 64 037 3089</p>
          </div>
          <div className="flex items-center">
            <MdEmail />
            <p>lesegomhlongo78@gmail.com</p>
          </div>
        </div>
        {/* Social Media */}
        <div className="flex  items-center gap-4">
          <FaWhatsapp size={16} />
          <FaFacebook size={16} />
          <FaInstagram size={16} />
          <FaTwitter size={16} />
          <FaLinkedin size={16} />
        </div>
      </div>
      <div className="w-full px-6 lg:px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-green-800 text-lg">Tree Cutter</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {["Home", "About", "Service", "Team", "Contact"].map((item) => (
            <li
              key={item}
              className="font-semibold cursor-pointer  hover:text-green-900 transition"
            >
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                {item}
              </Link>
            </li>
          ))}
          <button className="btn">Contact</button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-action"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-22 left-0 w-full bg-green-600 text-white flex flex-col items-center gap-4 py-6 md:hidden"
          >
            {["Home", "About", "Service", "Team", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                <p className="text-lg font-medium cursor-pointer hover:text-green-900 transition">
                  {item}
                </p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
