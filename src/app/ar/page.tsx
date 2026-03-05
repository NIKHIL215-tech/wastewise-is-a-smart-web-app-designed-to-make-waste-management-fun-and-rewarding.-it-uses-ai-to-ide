"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tutorials = [
  {
    id: 1,
    title: "Glass Bottle Recycling",
    category: "Glass",
    duration: "2 min",
    difficulty: "Easy",
    steps: 4,
    description: "Learn how to properly clean and sort glass bottles for recycling. Includes tips on removing labels and caps.",
    tags: ["Glass", "Bottles", "Recycling"],
    color: "teal",
  },
  {
    id: 2,
    title: "Cardboard Box Breakdown",
    category: "Paper",
    duration: "3 min",
    difficulty: "Easy",
    steps: 5,
    description: "Step-by-step AR guide to flatten, fold, and prepare cardboard boxes for recycling pickup.",
    tags: ["Cardboard", "Paper", "Packaging"],
    color: "yellow",
  },
  {
    id: 3,
    title: "Battery Safe Disposal",
    category: "Hazardous",
    duration: "4 min",
    difficulty: "Medium",
    steps: 6,
    description: "Critical safety guide for disposing of batteries — from AA to lithium-ion. Find your nearest drop-off point.",
    tags: ["Batteries", "Hazardous", "Safety"],
    color: "red",
  },
  {
    id: 4,
    title: "Textile Upcycling",
    category: "Textiles",
    duration: "8 min",
    difficulty: "Medium",
    steps: 10,
    description: "Transform old clothes into useful items. AR overlays show you exactly how to cut, fold, and repurpose fabric.",
    tags: ["Clothes", "Upcycling", "DIY"],
    color: "purple",
  },
  {
    id: 5,
    title: "E-Waste Disassembly",
    category: "Electronics",
    duration: "6 min",
    difficulty: "Hard",
    steps: 8,
    description: "Safely disassemble old electronics to separate recyclable components. Includes safety precautions.",
    tags: ["Electronics", "E-Waste", "Components"],
    color: "blue",
  },
  {
    id: 6,
    title: "Composting Basics",
    category: "Organic",
    duration: "5 min",
    difficulty: "Easy",
    steps: 7,
    description: "Set up your home compost bin with AR guidance. Learn what goes in, what stays out, and how to maintain it.",
    tags: ["Compost", "Organic", "Garden"],
    color: "green",
  },
];

const accentMap: Record<string, { icon: string; badge: string; border: string; tag: string }> = {
  teal:   { icon: "bg-teal-500/10 text-teal-400 border-teal-500/20",     badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",     border: "hover:border-teal-500/25",   tag: "bg-teal-500/10 text-teal-400" },
  yellow: { icon: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", border: "hover:border-yellow-500/25", tag: "bg-yellow-500/10 text-yellow-400" },
  red:    { icon: "bg-red-500/10 text-red-400 border-red-500/20",         badge: "bg-red-500/10 text-red-400 border-red-500/20",         border: "hover:border-red-500/25",    tag: "bg-red-500/10 text-red-400" },
  purple: { icon: "bg-purple-500/10 text-purple-400 border-purple-500/20", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", border: "hover:border-purple-500/25", tag: "bg-purple-500/10 text-purple-400" },
  blue:   { icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",       badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",       border: "hover:border-blue-500/25",   tag: "bg-blue-500/10 text-blue-400" },
  green:  { icon: "bg-green-500/10 text-green-400 border-green-500/20",   badge: "bg-green-500/10 text-green-400 border-green-500/20",   border: "hover:border-green-500/25",  tag: "bg-green-500/10 text-green-400" },
};

const difficultyStyle: Record<string, string> = {
  Easy:   "text-green-400 bg-green-500/10 border-green-500/20",
  Medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  Hard:   "text-red-400 bg-red-500/10 border-red-500/20",
};

const categories = ["All", "Glass", "Paper", "Hazardous", "Textiles", "Electronics", "Organic"];

export default function ARPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? tutorials
    : tutorials.filter((t) => t.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(20,184,166,0.06),transparent)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/[0.08] border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
            <span className="text-teal-400 text-sm font-medium">Augmented Reality</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
            AR Recycling{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400">
              Tutorials
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Step-by-step augmented reality guides that overlay instructions directly onto your environment. No guesswork — just clear, visual guidance.
          </p>
        </div>
      </section>

      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* AR Demo Banner */}
        <div className="bg-white/[0.02] border border-teal-500/15 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 bg-teal-500/10 border border-teal-500/20 rounded-2xl flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white font-semibold text-lg mb-1">AR Mode Available on Mobile</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Download the WasteWise app to experience full AR overlays. On desktop, tutorials play as interactive step-by-step guides.
            </p>
          </div>
          <button className="shrink-0 bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105 whitespace-nowrap">
            Get the App
          </button>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-teal-500 text-black shadow-lg shadow-teal-500/20"
                  : "bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tutorials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filtered.map((tutorial) => {
            const c = accentMap[tutorial.color];
            return (
              <div
                key={tutorial.id}
                className={`group bg-white/[0.02] border border-white/[0.06] ${c.border} rounded-2xl p-6 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 ${c.icon} border rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                    </svg>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyStyle[tutorial.difficulty]}`}>
                    {tutorial.difficulty}
                  </span>
                </div>

                {/* Category badge */}
                <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${c.badge}`}>
                  {tutorial.category}
                </span>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2 leading-snug">{tutorial.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{tutorial.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tutorial.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {tutorial.steps} steps
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tutorial.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600 group-hover:text-teal-400 transition-all duration-200 group-hover:gap-2.5">
                  Start Tutorial
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile App CTA */}
        <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />
          <div className="px-8 sm:px-16 py-14 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Experience Full AR on Mobile</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Download the WasteWise app to unlock the full augmented reality experience. Point your camera at any item and see real-time recycling guidance overlaid on your screen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Download for iOS
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-teal-500/30 bg-white/[0.03] hover:bg-white/[0.06] text-gray-300 hover:text-white font-medium text-sm px-8 py-3.5 rounded-full transition-all">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
