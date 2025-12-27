"use client";

import { motion } from "framer-motion";

export default function Definition() {
  return (
    <section className="w-full bg-gray-50 py-8 lg:py-15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold uppercase tracking-wide">
                The Problem
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              DeFi is too complex.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Managing yield across multiple protocols is overwhelming. Tracking positions, comparing APYs, and rebalancing portfolios requires constant monitoring and deep technical knowledge.
            </p>
          </motion.div>

          {/* Solution Statement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold uppercase tracking-wide">
                The Solution
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              AI makes DeFi accessible.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Malgist is your AI-powered portfolio companion. Build strategies with simple questions, monitor yields across protocols in one dashboard, and optimize positions—all non-custodial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
