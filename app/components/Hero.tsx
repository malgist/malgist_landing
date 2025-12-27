"use client";

import DotGrid from "./DotGrid";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-50">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#d1d5db"
          activeColor="#151816"
          proximity={80}
          speedTrigger={80}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={3000}
          resistance={200}
          returnDuration={0.8}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 mb-8 border border-gray-200 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#151816] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#151816]"></span>
            </span>
            <span className="text-gray-900 text-sm font-semibold">
              AI-Powered DeFi Portfolio Management
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <BlurText
              text="DeFi investing made"
              delay={50}
              animateBy="letters"
              direction="top"
              className="inline-block"
            />
            <br />
            <BlurText
              text="simple and intelligent"
              delay={50}
              animateBy="letters"
              direction="top"
              className="inline-block text-[#151816]"
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            AI-powered portfolio management across multiple DeFi protocols. Build, optimize, and track your yield strategies—non-custodial and effortless.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-[#151816] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-full bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[#151816] hover:text-[#151816] transition-all duration-300 shadow-sm hover:shadow-md">
              View Demo
            </button>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">$10M+</div>
              <div className="text-sm text-gray-600">Assets Managed</div>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Auto Rebalancing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
              <div className="text-sm text-gray-600">Blockchain Networks</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}