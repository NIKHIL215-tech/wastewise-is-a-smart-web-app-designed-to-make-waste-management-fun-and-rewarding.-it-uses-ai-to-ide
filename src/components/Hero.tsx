"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "2M+", label: "Items Recycled" },
  { value: "98%", label: "AI Accuracy" },
  { value: "500+", label: "Reward Partners" },
];

const trustBadges = [
  "ISO 14001 Certified",
  "Carbon Neutral",
  "GDPR Compliant",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(74,222,128,0.08),transparent)]" />
        {/* Blob accents */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/[0.06] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-400/[0.05] rounded-full blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0f0d_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement badge */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-green-500/[0.08] border border-green-500/20 rounded-full px-4 py-1.5 mb-8 hover:bg-green-500/[0.12] transition-colors cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">AI-Powered Waste Management Platform</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-6 leading-[1.08]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-white">Don&apos;t throw it away — </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400">
            turn it into something good
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Snap a photo of any item and we&apos;ll instantly tell you how to recycle it properly. 
          Earn points, unlock rewards, and join thousands making a real difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/scan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 active:scale-95"
          >
            Try It Now — It&apos;s Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-green-500/30 bg-white/[0.03] hover:bg-white/[0.06] text-gray-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 text-xs text-gray-500">
              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {badge}
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06] max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`bg-[#0a0f0d] px-6 py-5 text-center hover:bg-white/[0.02] transition-colors ${
                i < 2 ? "border-b border-white/[0.04] md:border-b-0" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 tabular-nums">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* App mockup */}
        <motion.div 
          className="relative max-w-xs mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-green-500/10 rounded-[3rem] blur-2xl" />
          {/* Phone frame */}
          <div className="relative bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-[2.5rem] p-[3px] border border-white/10 shadow-2xl">
            <div className="bg-[#0d1a12] rounded-[2.3rem] overflow-hidden">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-4 pb-2">
                <span className="text-xs text-gray-400 font-medium">9:41</span>
                <div className="w-24 h-5 bg-gray-800/80 rounded-full" />
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-2 bg-green-400/80 rounded-sm" />
                </div>
              </div>

              {/* App content */}
              <div className="px-4 pb-6 space-y-3">
                {/* AI result card */}
                <div className="bg-green-500/[0.08] border border-green-500/20 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-7 h-7 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                      </svg>
                    </div>
                    <span className="text-green-400 text-xs font-semibold">AI Scan Result</span>
                  </div>
                  <p className="text-white text-sm font-semibold">Plastic Bottle (PET #1)</p>
                  <p className="text-gray-400 text-xs mt-0.5">Recyclable · Blue bin</p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <div className="flex-1 bg-gray-800 rounded-full h-1.5">
                      <div className="bg-green-400 h-1.5 rounded-full w-[98%]" />
                    </div>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 bg-green-500/20 rounded-lg px-2.5 py-1">
                    <span className="text-green-300 text-xs font-semibold">+15 EcoPoints earned!</span>
                  </div>
                </div>

                {/* Challenge card */}
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-400 text-xs font-medium">Today&apos;s Challenge</p>
                    <span className="text-yellow-400 text-xs">8h left</span>
                  </div>
                  <p className="text-white text-sm font-semibold mb-2">Recycle 5 items</p>
                  <div className="bg-gray-800 rounded-full h-1.5 mb-1">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-1.5 rounded-full w-3/5" />
                  </div>
                  <p className="text-gray-500 text-xs">3 / 5 completed</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
