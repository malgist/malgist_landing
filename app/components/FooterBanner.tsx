"use client";

import { motion } from "framer-motion";

export default function FooterBanner() {
  return (
    <section className="w-full bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Start building smarter
            <br />
            DeFi portfolios today.
          </h2>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full overflow-hidden rounded-3xl shadow-lg"
        >
          <img
            src="/footer-banner.png"
            alt="Glider Platform Visualization"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}