"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const impactStats = [
  { value: "2.4M", label: "kg CO₂ Saved" },
  { value: "8.1M", label: "Items Recycled" },
  { value: "127", label: "Countries Active" },
];

const trustItems = [
  "Free forever plan",
  "No credit card required",
  "Available on iOS & Android",
];

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(74,222,128,0.06),transparent)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA card */}
        <motion.div 
          className="relative bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/[0.04] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-8 sm:px-16 py-16 text-center">
            {/* Icon */}
            <motion.div 
              className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Start making a difference{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                today
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join thousands who&apos;ve already transformed how they think about waste. It only takes a moment to get started.
            </p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/start"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold text-base px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 active:scale-95"
              >
                Get Started Free
              </Link>
              <Link
                href="/scan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-green-500/30 bg-white/[0.03] hover:bg-white/[0.06] text-gray-300 hover:text-white font-medium text-base px-10 py-4 rounded-full transition-all"
              >
                Try a Demo Scan
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Impact stats */}
        <motion.div 
          className="mt-10 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {impactStats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center py-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.03] transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 tabular-nums">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
