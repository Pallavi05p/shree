import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-red-950 py-6 flex flex-col items-center gap-3">
      
      {/* Marathi Name with Colors */}
      <h1 className="text-5xl font-bold">
        <span className="text-yellow-400">||महाकाल</span>{" "}
        <span className="text-white">प्रतिष्ठान||


        </span>
      </h1>

      {/* Social Icons */}
      <div className="flex items-center gap-6">
        <a
          href="https://instagram.com"
          target="_blank"
          className="text-white text-2xl hover:text-yellow-400 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          className="text-white text-2xl hover:text-yellow-400 transition"
        >
          <FaFacebook />
        </a>
      </div>

      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} महाकाल प्रतिष्ठान. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
