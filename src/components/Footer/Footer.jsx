import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Logo */}
          <div>
            {/* <img src={} alt="Logo" /> */}
            <h1 className="text-xl text-primary ">Tree Cutter</h1>
          </div>
          {/* Navigation Links */}
          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/search" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Terms and Conditions, Documentation, Privacy Policy */}
          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="terms-conditions" className="hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#documentation" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Subscription Form */}
          <div className="w-full lg:w-1/3">
            <h4 className="text-lg font-bold mb-4">
              Subscribe to our newsletter
            </h4>
            <form className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-4 sm:mb-0 sm:mr-2 rounded border border-gray-300 text-gray-800"
              />
              <button type="submit" className="w-full btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Less-Ego. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
