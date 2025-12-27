"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between w-full max-w-2xl bg-white/95 text-gray-900 px-6 py-3 rounded-full items-center text-base shadow-sm backdrop-blur-lg border border-gray-200"
      >
        <a href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Malgist Logo"
            width={32}
            height={32}
            className="transition-transform duration-300 hover:scale-110"
          />
        </a>

        <ol className="hidden md:flex gap-6">
          <li className="hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium">
            Explore
          </li>
          <li className="hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium">
            Careers
          </li>
          <li className="hover:text-[#151816] cursor-pointer transition-colors duration-300 font-medium">
            Blog
          </li>
        </ol>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="bg-[#151816] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-sm"
          >
            Go to app
          </a>
          <a
            href="#"
            className="hidden sm:block text-gray-600 text-sm font-medium hover:text-[#151816] transition-colors duration-300"
          >
            Sign in
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
