"use client";

import { motion } from "framer-motion";

export default function BackedBy() {
  const investors = [
    { src: "/idrx.png", alt: "Investor 1" },
    { src: "/mantle.png", alt: "Mantle" },
    { src: "/web3jogja.jpg", alt: "Web3 Jogja" },
    { src: "/HackQuest.png", alt: "HackQuest" },
  ];

  // Duplicate investors for seamless loop
  const duplicatedInvestors = [...investors, ...investors, ...investors];

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
              Backed by
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Animated Marquee */}
            <motion.div
              className="flex gap-16"
              animate={{
                x: [0, -100 * investors.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedInvestors.map((investor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={investor.src}
                    alt={investor.alt}
                    className="h-12 lg:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Optional: Testimonial or Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-8 pt-8 border-t border-gray-100"
          >
            <p className="text-gray-600 text-sm">
              Trusted by leading blockchain ecosystems and communities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}