"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Smart Rebalancing",
      description: "AI monitors your portfolio 24/7 and suggests optimal rebalancing strategies based on market conditions and your goals.",
      video: "/rebalance-clock.mp4",
    },
    {
      title: "Multi-Protocol Allocation",
      description: "Seamlessly distribute assets across Aave, Lido, Compound, and other DeFi protocols from a unified interface.",
      video: "/coins-vertical.mp4",
    },
    {
      title: "Non-Custodial & Secure",
      description: "Your keys, your crypto. All transactions execute directly from your wallet—we never hold your funds.",
      video: "/secure-lock.mp4",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
            Intelligent portfolio management, simplified.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl">
            AI-driven insights and automation for optimizing your DeFi yield strategies.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col items-center shadow-sm"
            >
              <div className="mb-6 rounded-2xl overflow-hidden bg-gray-100 p-4 ">
                <video
                  src={feature.video}
                  width={280}
                  height={280}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-base text-gray-700 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Multi-Chain Feature - Highlighted Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-3xl p-10 lg:p-12 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                AI Strategy Builder
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Answer simple questions about your goals and risk tolerance. Our AI designs a personalized DeFi strategy, allocating across protocols to maximize your yield.
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div className="rounded-2xl overflow-hidden bg-gray-100 p-6 ">
                <video
                  src="/token-fan.mp4"
                  width={320}
                  height={320}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
