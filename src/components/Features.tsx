"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "AI Waste Identification",
    description:
      "Take a photo of any item and our AI tells you exactly how to recycle it. No more guessing which bin it goes in.",
    badge: "Vision AI",
    href: "/scan",
    accentColor: "green",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "AR Recycling Guides",
    description:
      "Watch step-by-step instructions appear right in front of you. Learn how to break down items properly.",
    badge: "Augmented Reality",
    href: "/ar",
    accentColor: "teal",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    title: "Earn While You Recycle",
    description:
      "Every item you properly sort earns points. Trade them in for discounts at real stores near you.",
    badge: "Rewards",
    href: "/rewards",
    accentColor: "yellow",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Weekly Challenges",
    description:
      "Join thousands completing daily tasks. See how you rank and unlock badges for your impact.",
    badge: "Gamification",
    href: "/challenges",
    accentColor: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Scan Before You Buy",
    description:
      "Check any product's eco-score at the store. Make informed choices before you checkout.",
    badge: "Smart Shopping",
    href: "/barcode",
    accentColor: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8H3a2 2 0 00-2 2v10a2 2 0 002 2h3.5M15 4H5a2 2 0 00-2 2v3" />
      </svg>
    ),
  },
  {
    title: "Join the Movement",
    description:
      "Connect with people making a difference. Track your collective impact with communities worldwide.",
    badge: "Community",
    href: "/community",
    accentColor: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const accentStyles: Record<string, { icon: string; badge: string; border: string; glow: string }> = {
  green:   { icon: "bg-green-500/10 text-green-400",   badge: "bg-green-500/10 text-green-400 border-green-500/20",   border: "hover:border-green-500/30",   glow: "group-hover:shadow-green-500/10" },
  teal:    { icon: "bg-teal-500/10 text-teal-400",     badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",     border: "hover:border-teal-500/30",    glow: "group-hover:shadow-teal-500/10" },
  yellow:  { icon: "bg-yellow-500/10 text-yellow-400", badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", border: "hover:border-yellow-500/30", glow: "group-hover:shadow-yellow-500/10" },
  blue:    { icon: "bg-blue-500/10 text-blue-400",     badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",     border: "hover:border-blue-500/30",    glow: "group-hover:shadow-blue-500/10" },
  purple:  { icon: "bg-purple-500/10 text-purple-400", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", border: "hover:border-purple-500/30", glow: "group-hover:shadow-purple-500/10" },
  emerald: { icon: "bg-emerald-500/10 text-emerald-400", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", border: "hover:border-emerald-500/30", glow: "group-hover:shadow-emerald-500/10" },
};

export default function Features() {
  return (
    <section id="features" className="py-28 relative">
      {/* Subtle section gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(74,222,128,0.04),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/[0.08] border border-green-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-green-400 text-sm font-medium">Everything You Need</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Tools that make recycling{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              actually work
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Most recycling apps just give you information. We built tools that fit into your daily routine and reward you for every sustainable choice.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const accent = accentStyles[feature.accentColor];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={feature.href}
                  className={`group relative bg-white/[0.02] border border-white/[0.06] ${accent.border} rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.04] hover:shadow-xl ${accent.glow} hover:-translate-y-1 block h-full`}
                >
                  {/* Icon */}
                  <div className={`w-11 h-11 ${accent.icon} rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Badge */}
                  <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${accent.badge}`}>
                    {feature.badge}
                  </span>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-2 leading-snug">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>

                  {/* Arrow */}
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-gray-600 group-hover:text-green-400 transition-all duration-200 group-hover:gap-2.5">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
