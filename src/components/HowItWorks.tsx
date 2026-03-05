"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Snap a Photo",
    description:
      "Open the app and take a quick picture of whatever you're throwing away. It takes about 2 seconds.",
    accent: "green",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Get Instant Guidance",
    description:
      "Our AI immediately tells you which bin it goes in and any special prep needed. No more guessing games.",
    accent: "teal",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Earn Points",
    description:
      "Correctly sorted items earn you points. Stack up rewards and redeem them at partner stores nationwide.",
    accent: "yellow",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Track Your Impact",
    description:
      "See exactly how much you've recycled, CO2 you've saved, and how you compare to others.",
    accent: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const accentMap: Record<string, { icon: string; step: string; connector: string }> = {
  green:  { icon: "bg-green-500/10 text-green-400 border-green-500/20",  step: "text-green-400",  connector: "from-green-500/30" },
  teal:   { icon: "bg-teal-500/10 text-teal-400 border-teal-500/20",    step: "text-teal-400",   connector: "from-teal-500/30" },
  yellow: { icon: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", step: "text-yellow-400", connector: "from-yellow-500/30" },
  purple: { icon: "bg-purple-500/10 text-purple-400 border-purple-500/20", step: "text-purple-400", connector: "from-purple-500/30" },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(74,222,128,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/[0.08] border border-green-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-green-400 text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            From trash to treasure{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              in four steps
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We stripped away the complexity. No accounts to create, no learning curve. Just snap, sort, and earn.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px">
            <motion.div 
              className="w-full h-full bg-gradient-to-r from-green-500/20 via-teal-500/20 via-yellow-500/20 to-purple-500/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const accent = accentMap[step.accent];
              return (
                <motion.div
                  key={step.title}
                  className="relative flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Icon bubble */}
                  <div
                    className={`relative z-10 w-[4.5rem] h-[4.5rem] ${accent.icon} border rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    {step.icon}
                    {/* Step number overlay */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 bg-[#0a0f0d] border border-white/10 rounded-full flex items-center justify-center`}>
                      <span className={`text-[10px] font-bold ${accent.step}`}>{index + 1}</span>
                    </div>
                  </div>

                  {/* Step label */}
                  <div className={`text-xs font-bold ${accent.step} mb-2 tracking-widest uppercase`}>
                    Step {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

                  {/* Mobile connector arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 text-gray-700">
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-white font-semibold text-lg">Ready to give it a try?</p>
              <p className="text-gray-500 text-sm mt-1">Join 50,000+ people already recycling smarter.</p>
            </div>
            <Link
              href="/scan"
              className="shrink-0 bg-green-500 hover:bg-green-400 text-black font-bold text-sm px-7 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 whitespace-nowrap"
            >
              Try It Now →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
