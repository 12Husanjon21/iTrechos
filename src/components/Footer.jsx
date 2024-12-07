import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-[1130px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between  gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Itrechos</h2>
            <ul className="space-y-2">
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                About
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Features
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Works
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Career
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Customer Support
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Delivery Details
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Free eBooks
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Development Tutorial
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                How to - Blog
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                YouTube Playlist
              </li>
            </ul>
          </div>

          {/* Extra Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Extra Links</h3>
            <ul className="space-y-2">
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Customer Support
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Delivery Details
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-white hover:text-[#ff8911] transition duration-300 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Footer Bottom */}
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white text-xl hover:text-[#ff8911] transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-[#ff8911] transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-[#ff8911] transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white text-xl hover:text-[#ff8911] transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Privacy Links */}
          <div className="text-sm space-x-4 text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Support</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © Copyright 2024, All Rights Reserved by company
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
