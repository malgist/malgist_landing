"use client";

import { motion } from "framer-motion";

export default function Closing() {
  const features = [
    {
      media: "/price-cards.mp4",
      type: "video",
      description:
        "Compare yields across protocols instantly. AI highlights the best opportunities based on your strategy.",
    },
    {
      media: "/dynamic-yield.mp4",
      type: "video",
      description:
        "Real-time analytics track performance vs targets. Know exactly where your assets are working hardest.",
    },
    {
      media: "/s2-f3-liquidity.png",
      type: "image",
      description:
        "Unified dashboard aggregates positions from Aave, Lido, Compound, and more—all in one view.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Text with Circular Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 lg:mb-28"
        >
          {/* Decorative Circles Background */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="absolute w-64 h-64 rounded-full border border-gray-200 opacity-40"></div>
            <div className="absolute w-96 h-96 rounded-full border border-gray-200 opacity-30"></div>
            <div className="absolute w-128 h-128 rounded-full border border-gray-200 opacity-20"></div>
          </div>

          {/* Main Heading */}
          <h2 className="relative text-center text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Malgist works 24/7
            <br />
            so you don&apos;t have to.
          </h2>
        </motion.div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-100 rounded-3xl p-8 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Media Container */}
              <div className="w-full aspect-square mb-6 flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
                {feature.type === "video" ? (
                  <video
                    src={feature.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={feature.media}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-900 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Predictive Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-3xl p-10 lg:p-16 text-center shadow-sm"
        >
          <div className="flex items-center justify-center gap-8">
            {/* Left decorative image */}
            <div className="hidden lg:block w-16 h-16">
              <img
                src="/Logo.png"
                alt="Investor"
                className="w-full h-full object-contain opacity-60"
              />
            </div>

            {/* Center Text */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 max-w-3xl">
              AI-powered insights turn complex DeFi strategies into simple, actionable decisions.
            </p>

            {/* Right decorative image */}
            <div className="hidden lg:block w-16 h-16">
              <img
                src="/Logo.png"
                alt="Investor"
                className="w-full h-full object-contain opacity-60"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}