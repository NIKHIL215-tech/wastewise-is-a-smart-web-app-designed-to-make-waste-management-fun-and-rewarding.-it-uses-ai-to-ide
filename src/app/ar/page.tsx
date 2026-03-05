"use client";

import { useState } from "react";
import Link from "next/link";

const tutorials = [
  {
    id: 1,
    icon: "🍾",
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
    icon: "📦",
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
    icon: "🔋",
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
    icon: "👕",
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
    icon: "💻",
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
    icon: "🌿",
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

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; diff: string }> = {
  teal: { bg: "from-teal-500/20 to-teal-500/5", border: "border-teal-500/30", text: "text-teal-400", badge: "bg-teal-500/10 text-teal-400", diff: "bg-teal-500/20 text-teal-300" },
  yellow: { bg: "from-yellow-500/20 to-yellow-500/5", border: "border-yellow-500/30", text: "text-yellow-400", badge: "bg-yellow-500/10 text-yellow-400", diff: "bg-yellow-500/20 text-yellow-300" },
  red: { bg: "from-red-500/20 to-red-500/5", border: "border-red-500/30", text: "text-red-400", badge: "bg-red-500/10 text-red-400", diff: "bg-red-500/20 text-red-300" },
  purple: { bg: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30", text: "text-purple-400", badge: "bg-purple-500/10 text-purple-400", diff: "bg-purple-500/20 text-purple-300" },
  blue: { bg: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30", text: "text-blue-400", badge: "bg-blue-500/10 text-blue-400", diff: "bg-blue-500/20 text-blue-300" },
  green: { bg: "from-green-500/20 to-green-500/5", border: "border-green-500/30", text: "text-green-400", badge: "bg-green-500/10 text-green-400", diff: "bg-green-500/20 text-green-300" },
};

const difficultyColor: Record<string, string> = {
  Easy: "text-green-400 bg-green-500/10",
  Medium: "text-yellow-400 bg-yellow-500/10",
  Hard: "text-red-400 bg-red-500/10",
};

export default function ARPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Glass", "Paper", "Hazardous", "Textiles", "Electronics", "Organic"];

  const filtered = activeCategory === "All"
    ? tutorials
    : tutorials.filter((t) => t.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f0d]/80 backdrop-blur-md border-b border-green-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Waste<span className="text-green-400">Wise</span>
            </span>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-teal-400 text-sm font-medium">🥽 Augmented Reality</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            AR Recycling{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400">
              Tutorials
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Step-by-step augmented reality guides that overlay instructions directly onto your environment. No guesswork — just clear, visual guidance.
          </p>
        </div>

        {/* AR Demo Banner */}
        <div className="bg-gradient-to-r from-teal-950/60 to-cyan-950/40 border border-teal-500/20 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-6xl">🥽</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white font-bold text-xl mb-1">AR Mode Available on Mobile</h3>
            <p className="text-gray-400 text-sm">
              Download the WasteWise app to experience full AR overlays. On desktop, tutorials play as interactive step-by-step guides.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 whitespace-nowrap">
              📱 Get the App
            </button>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-teal-500 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tutorials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((tutorial) => {
            const c = colorMap[tutorial.color];
            return (
              <div
                key={tutorial.id}
                className={`group bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{tutorial.icon}</div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColor[tutorial.difficulty]}`}>
                    {tutorial.difficulty}
                  </span>
                </div>

                {/* Category badge */}
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${c.badge}`}>
                  {tutorial.category}
                </span>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-2">{tutorial.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{tutorial.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tutorial.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {tutorial.steps} steps
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tutorial.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/5 text-gray-400 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Start button */}
                <button className={`w-full flex items-center justify-center gap-2 ${c.text} border ${c.border} font-semibold text-sm px-4 py-2.5 rounded-xl transition-all group-hover:bg-white/5`}>
                  🥽 Start AR Tutorial
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-teal-950/60 to-cyan-950/40 border border-teal-500/20 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-4">🌱</div>
          <h2 className="text-3xl font-bold text-white mb-3">Not Sure What to Recycle?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Use our AI scanner to identify any item first, then follow the AR tutorial for that specific material.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/scan"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              📸 Scan an Item First
            </Link>
            <Link
              href="/chat"
              className="w-full sm:w-auto border border-gray-700 hover:border-teal-500/50 text-gray-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all"
            >
              💬 Ask EcoBot
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
