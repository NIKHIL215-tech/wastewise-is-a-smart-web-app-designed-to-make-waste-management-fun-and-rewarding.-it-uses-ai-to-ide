"use client";

import { useState } from "react";
import Link from "next/link";

const rewards = [
  {
    id: 1,
    icon: "☕",
    brand: "EcoBrews Coffee",
    title: "20% Off Any Drink",
    description: "Valid at all EcoBrews locations. Use your reusable cup for an extra 5% off.",
    points: 500,
    category: "Food & Drink",
    expiry: "30 days",
    color: "amber",
    popular: true,
  },
  {
    id: 2,
    icon: "🌿",
    brand: "GreenLeaf Market",
    title: "$10 Gift Card",
    description: "Spend at GreenLeaf's organic grocery store. Valid on all products.",
    points: 1000,
    category: "Grocery",
    expiry: "60 days",
    color: "green",
    popular: false,
  },
  {
    id: 3,
    icon: "🚲",
    brand: "CycleCity",
    title: "Free 1-Hour Bike Rental",
    description: "Explore the city sustainably. Valid at any CycleCity docking station.",
    points: 750,
    category: "Transport",
    expiry: "45 days",
    color: "blue",
    popular: true,
  },
  {
    id: 4,
    icon: "👕",
    brand: "EcoThreads",
    title: "30% Off Sustainable Fashion",
    description: "Discount on all organic cotton and recycled fabric clothing.",
    points: 800,
    category: "Fashion",
    expiry: "30 days",
    color: "purple",
    popular: false,
  },
  {
    id: 5,
    icon: "🌱",
    brand: "PlantBox",
    title: "Free Seed Kit",
    description: "Start your home garden with 10 organic seed varieties. Includes growing guide.",
    points: 400,
    category: "Garden",
    expiry: "90 days",
    color: "emerald",
    popular: false,
  },
  {
    id: 6,
    icon: "🧴",
    brand: "PureEarth",
    title: "Eco Cleaning Bundle",
    description: "3 bottles of plant-based, biodegradable cleaning products.",
    points: 1200,
    category: "Home",
    expiry: "60 days",
    color: "teal",
    popular: true,
  },
  {
    id: 7,
    icon: "🎬",
    brand: "EcoStream",
    title: "1 Month Free Streaming",
    description: "Watch eco-documentaries and nature content. Carbon-neutral streaming service.",
    points: 600,
    category: "Entertainment",
    expiry: "30 days",
    color: "indigo",
    popular: false,
  },
  {
    id: 8,
    icon: "🌍",
    brand: "TreeNation",
    title: "Plant 5 Trees",
    description: "We'll plant 5 trees in your name in reforestation projects worldwide.",
    points: 300,
    category: "Impact",
    expiry: "Never",
    color: "green",
    popular: true,
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; btn: string }> = {
  amber: { bg: "from-amber-500/15 to-amber-500/5", border: "border-amber-500/25", text: "text-amber-400", btn: "bg-amber-500 hover:bg-amber-400" },
  green: { bg: "from-green-500/15 to-green-500/5", border: "border-green-500/25", text: "text-green-400", btn: "bg-green-500 hover:bg-green-400" },
  blue: { bg: "from-blue-500/15 to-blue-500/5", border: "border-blue-500/25", text: "text-blue-400", btn: "bg-blue-500 hover:bg-blue-400" },
  purple: { bg: "from-purple-500/15 to-purple-500/5", border: "border-purple-500/25", text: "text-purple-400", btn: "bg-purple-500 hover:bg-purple-400" },
  emerald: { bg: "from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/25", text: "text-emerald-400", btn: "bg-emerald-500 hover:bg-emerald-400" },
  teal: { bg: "from-teal-500/15 to-teal-500/5", border: "border-teal-500/25", text: "text-teal-400", btn: "bg-teal-500 hover:bg-teal-400" },
  indigo: { bg: "from-indigo-500/15 to-indigo-500/5", border: "border-indigo-500/25", text: "text-indigo-400", btn: "bg-indigo-500 hover:bg-indigo-400" },
};

const categories = ["All", "Food & Drink", "Grocery", "Transport", "Fashion", "Garden", "Home", "Entertainment", "Impact"];

export default function RewardsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [userPoints] = useState(4230);
  const [redeemedIds, setRedeemedIds] = useState<number[]>([]);

  const filtered = activeCategory === "All"
    ? rewards
    : rewards.filter((r) => r.category === activeCategory);

  const handleRedeem = (id: number) => {
    setRedeemedIds((prev) => [...prev, id]);
  };

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
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-purple-400 text-sm font-medium">🎁 Real Rewards</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Redeem Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400">
              EcoPoints
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Turn your sustainable actions into real-world rewards. 500+ eco-conscious brand partners ready to reward your green choices.
          </p>
        </div>

        {/* Points balance */}
        <div className="bg-gradient-to-r from-purple-950/60 to-pink-950/40 border border-purple-500/20 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="text-4xl font-bold text-white">{userPoints.toLocaleString()}</div>
            <div className="text-purple-400 font-semibold">Your EcoPoints Balance</div>
          </div>
          <div className="flex-1 hidden sm:block">
            <div className="bg-gray-800 rounded-full h-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: "42%" }} />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>Next tier: 5,000 pts (Gold)</span>
              <span>10,000</span>
            </div>
          </div>
          <Link href="/challenges" className="bg-purple-500 hover:bg-purple-400 text-black font-bold px-6 py-3 rounded-full transition-all hover:scale-105 text-sm whitespace-nowrap">
            🏆 Earn More Points
          </Link>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-purple-500 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rewards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {filtered.map((reward) => {
            const c = colorMap[reward.color] || colorMap.green;
            const canAfford = userPoints >= reward.points;
            const redeemed = redeemedIds.includes(reward.id);

            return (
              <div
                key={reward.id}
                className={`relative group bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300`}
              >
                {reward.popular && (
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2.5 py-1 rounded-full">
                    🔥 Popular
                  </div>
                )}

                {/* Icon & brand */}
                <div className="text-3xl mb-2">{reward.icon}</div>
                <div className={`text-xs font-semibold ${c.text} mb-1`}>{reward.brand}</div>

                {/* Content */}
                <h3 className="text-white font-bold text-base mb-1">{reward.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{reward.description}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>⏱ Valid {reward.expiry}</span>
                  <span className="bg-gray-800 px-2 py-0.5 rounded-full">{reward.category}</span>
                </div>

                {/* Points & redeem */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-lg font-bold ${c.text}`}>{reward.points.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">EcoPoints</div>
                  </div>
                  <button
                    onClick={() => handleRedeem(reward.id)}
                    disabled={!canAfford || redeemed}
                    className={`text-sm font-bold px-4 py-2 rounded-full transition-all ${
                      redeemed
                        ? "bg-gray-700 text-gray-400 cursor-default"
                        : canAfford
                        ? `${c.btn} text-black hover:scale-105`
                        : "bg-gray-800 text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    {redeemed ? "✓ Redeemed" : canAfford ? "Redeem" : "Need more pts"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-purple-950/60 to-pink-950/40 border border-purple-500/20 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-4">⭐</div>
          <h2 className="text-3xl font-bold text-white mb-3">Need More EcoPoints?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Every scan, challenge, and community action earns you points. Start scanning to unlock more rewards!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/scan" className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105">
              📸 Scan & Earn
            </Link>
            <Link href="/challenges" className="w-full sm:w-auto border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all">
              🏆 View Challenges
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
