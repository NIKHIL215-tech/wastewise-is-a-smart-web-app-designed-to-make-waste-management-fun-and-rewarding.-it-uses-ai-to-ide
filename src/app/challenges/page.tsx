"use client";

import { useState } from "react";
import Link from "next/link";

const dailyChallenges = [
  { id: 1, icon: "♻️", title: "Recycle 5 Items", description: "Scan and recycle 5 different items today", points: 50, progress: 3, total: 5, category: "Recycling", timeLeft: "8h 23m" },
  { id: 2, icon: "🌿", title: "Zero Plastic Day", description: "Go the whole day without single-use plastic", points: 100, progress: 1, total: 1, category: "Lifestyle", timeLeft: "8h 23m" },
  { id: 3, icon: "📸", title: "Scan 3 New Items", description: "Identify 3 items you've never scanned before", points: 30, progress: 1, total: 3, category: "Discovery", timeLeft: "8h 23m" },
];

const weeklyChallenges = [
  { id: 4, icon: "🏆", title: "Recycling Champion", description: "Recycle 30 items this week", points: 300, progress: 18, total: 30, category: "Recycling", timeLeft: "4d 12h" },
  { id: 5, icon: "🌍", title: "Community Hero", description: "Participate in 3 community clean-up events", points: 500, progress: 1, total: 3, category: "Community", timeLeft: "4d 12h" },
  { id: 6, icon: "📚", title: "Eco Educator", description: "Complete 5 AR recycling tutorials", points: 200, progress: 2, total: 5, category: "Learning", timeLeft: "4d 12h" },
];

const leaderboard = [
  { rank: 1, name: "EcoWarrior_Sam", points: 12450, badge: "🥇", change: "+2" },
  { rank: 2, name: "GreenQueen_Mia", points: 11820, badge: "🥈", change: "-1" },
  { rank: 3, name: "RecycleKing_Jo", points: 10990, badge: "🥉", change: "+1" },
  { rank: 4, name: "PlanetSaver_Alex", points: 9870, badge: "🏅", change: "0" },
  { rank: 5, name: "You", points: 4230, badge: "⭐", change: "+3", isUser: true },
];

const badges = [
  { icon: "🌱", name: "First Scan", description: "Completed your first AI scan", earned: true },
  { icon: "♻️", name: "Recycler", description: "Recycled 10 items", earned: true },
  { icon: "🔥", name: "7-Day Streak", description: "Used WasteWise 7 days in a row", earned: true },
  { icon: "🏆", name: "Champion", description: "Reached top 10 on leaderboard", earned: false },
  { icon: "🌍", name: "Global Impact", description: "Saved 10kg of CO₂", earned: false },
  { icon: "💎", name: "Diamond Eco", description: "Earned 10,000 EcoPoints", earned: false },
  { icon: "🤝", name: "Community Leader", description: "Organized a clean-up event", earned: false },
  { icon: "🧪", name: "Scientist", description: "Identified 50 unique materials", earned: false },
];

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = useState<"daily" | "weekly" | "leaderboard" | "badges">("daily");

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
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-yellow-400 text-sm font-medium">🏆 Gamified Eco-Challenges</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Compete, Earn &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400">
              Save the Planet
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Complete daily and weekly challenges, climb the leaderboard, and earn badges. Making a difference has never been this fun.
          </p>
        </div>

        {/* User stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Your EcoPoints", value: "4,230", icon: "⭐" },
            { label: "Current Rank", value: "#5", icon: "🏆" },
            { label: "Day Streak", value: "12", icon: "🔥" },
            { label: "Badges Earned", value: "3/8", icon: "🎖️" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {(["daily", "weekly", "leaderboard", "badges"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all capitalize ${
                activeTab === tab
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {tab === "daily" && "📅 "}
              {tab === "weekly" && "📆 "}
              {tab === "leaderboard" && "🏆 "}
              {tab === "badges" && "🎖️ "}
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Challenges
            </button>
          ))}
        </div>

        {/* Daily Challenges */}
        {activeTab === "daily" && (
          <div className="space-y-4">
            <p className="text-gray-500 text-sm mb-4">Resets in <span className="text-yellow-400 font-semibold">8h 23m</span></p>
            {dailyChallenges.map((challenge) => (
              <div key={challenge.id} className="bg-gradient-to-r from-yellow-500/10 to-amber-500/5 border border-yellow-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{challenge.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-white font-bold text-lg">{challenge.title}</h3>
                        <p className="text-gray-400 text-sm">{challenge.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-yellow-400 font-bold text-lg">+{challenge.points}</div>
                        <div className="text-gray-500 text-xs">EcoPoints</div>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{challenge.progress} / {challenge.total} completed</span>
                        <span>{Math.round((challenge.progress / challenge.total) * 100)}%</span>
                      </div>
                      <div className="bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-amber-400 h-2 rounded-full transition-all"
                          style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Weekly Challenges */}
        {activeTab === "weekly" && (
          <div className="space-y-4">
            <p className="text-gray-500 text-sm mb-4">Resets in <span className="text-yellow-400 font-semibold">4d 12h</span></p>
            {weeklyChallenges.map((challenge) => (
              <div key={challenge.id} className="bg-gradient-to-r from-orange-500/10 to-amber-500/5 border border-orange-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{challenge.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-white font-bold text-lg">{challenge.title}</h3>
                        <p className="text-gray-400 text-sm">{challenge.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-orange-400 font-bold text-lg">+{challenge.points}</div>
                        <div className="text-gray-500 text-xs">EcoPoints</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{challenge.progress} / {challenge.total} completed</span>
                        <span>{Math.round((challenge.progress / challenge.total) * 100)}%</span>
                      </div>
                      <div className="bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-400 to-amber-400 h-2 rounded-full transition-all"
                          style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Leaderboard */}
        {activeTab === "leaderboard" && (
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-white font-bold text-xl">🌍 Global Leaderboard</h3>
              <p className="text-gray-400 text-sm mt-1">Top eco-warriors this month</p>
            </div>
            <div className="divide-y divide-gray-800">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`flex items-center gap-4 p-5 transition-colors ${entry.isUser ? "bg-yellow-500/5 border-l-2 border-yellow-500" : "hover:bg-gray-800/30"}`}
                >
                  <div className="text-2xl w-8 text-center">{entry.badge}</div>
                  <div className="flex-1">
                    <div className={`font-semibold ${entry.isUser ? "text-yellow-400" : "text-white"}`}>
                      {entry.name} {entry.isUser && <span className="text-xs text-gray-500">(You)</span>}
                    </div>
                    <div className="text-gray-500 text-sm">{entry.points.toLocaleString()} EcoPoints</div>
                  </div>
                  <div className={`text-sm font-semibold ${entry.change.startsWith("+") ? "text-green-400" : entry.change === "0" ? "text-gray-500" : "text-red-400"}`}>
                    {entry.change !== "0" ? entry.change : "—"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Badges */}
        {activeTab === "badges" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className={`rounded-2xl p-5 text-center border transition-all ${
                  badge.earned
                    ? "bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border-yellow-500/30"
                    : "bg-gray-900/40 border-gray-800 opacity-50"
                }`}
              >
                <div className={`text-4xl mb-3 ${!badge.earned && "grayscale"}`}>{badge.icon}</div>
                <h4 className={`font-bold text-sm mb-1 ${badge.earned ? "text-white" : "text-gray-500"}`}>{badge.name}</h4>
                <p className="text-gray-500 text-xs">{badge.description}</p>
                {badge.earned && (
                  <span className="inline-block mt-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">Earned ✓</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-br from-yellow-950/60 to-amber-950/40 border border-yellow-500/20 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold text-white mb-3">Start Earning Points Now</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Every scan earns you EcoPoints. Start with a quick scan to complete your first daily challenge!
          </p>
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            📸 Scan & Earn Points
          </Link>
        </div>
      </div>
    </main>
  );
}
