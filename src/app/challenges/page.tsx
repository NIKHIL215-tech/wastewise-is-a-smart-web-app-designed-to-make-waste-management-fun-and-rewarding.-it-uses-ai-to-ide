"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dailyChallenges = [
  { id: 1, title: "Recycle 5 Items", description: "Scan and recycle 5 different items today", points: 50, progress: 3, total: 5, category: "Recycling", timeLeft: "8h 23m" },
  { id: 2, title: "Zero Plastic Day", description: "Go the whole day without single-use plastic", points: 100, progress: 1, total: 1, category: "Lifestyle", timeLeft: "8h 23m" },
  { id: 3, title: "Scan 3 New Items", description: "Identify 3 items you've never scanned before", points: 30, progress: 1, total: 3, category: "Discovery", timeLeft: "8h 23m" },
];

const weeklyChallenges = [
  { id: 4, title: "Recycling Champion", description: "Recycle 30 items this week", points: 300, progress: 18, total: 30, category: "Recycling", timeLeft: "4d 12h" },
  { id: 5, title: "Community Hero", description: "Participate in 3 community clean-up events", points: 500, progress: 1, total: 3, category: "Community", timeLeft: "4d 12h" },
  { id: 6, title: "Eco Educator", description: "Complete 5 AR recycling tutorials", points: 200, progress: 2, total: 5, category: "Learning", timeLeft: "4d 12h" },
];

const leaderboard = [
  { rank: 1, name: "EcoWarrior_Sam", points: 12450, badge: "🥇", change: "+2" },
  { rank: 2, name: "GreenQueen_Mia", points: 11820, badge: "🥈", change: "-1" },
  { rank: 3, name: "RecycleKing_Jo", points: 10990, badge: "🥉", change: "+1" },
  { rank: 4, name: "PlanetSaver_Alex", points: 9870, badge: "🏅", change: "0" },
  { rank: 5, name: "You", points: 4230, badge: "⭐", change: "+3", isUser: true },
];

const badges = [
  { name: "First Scan", description: "Completed your first AI scan", earned: true },
  { name: "Recycler", description: "Recycled 10 items", earned: true },
  { name: "7-Day Streak", description: "Used WasteWise 7 days in a row", earned: true },
  { name: "Champion", description: "Reached top 10 on leaderboard", earned: false },
  { name: "Global Impact", description: "Saved 10kg of CO₂", earned: false },
  { name: "Diamond Eco", description: "Earned 10,000 EcoPoints", earned: false },
  { name: "Community Leader", description: "Organized a clean-up event", earned: false },
  { name: "Scientist", description: "Identified 50 unique materials", earned: false },
];

const tabs = [
  { id: "daily", label: "Daily" },
  { id: "weekly", label: "Weekly" },
  { id: "leaderboard", label: "Leaderboard" },
  { id: "badges", label: "Badges" },
] as const;

type Tab = typeof tabs[number]["id"];

export default function ChallengesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("daily");

  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(234,179,8,0.06),transparent)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/[0.08] border border-yellow-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 text-sm font-medium">Gamified Eco-Challenges</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
            Compete, Earn &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400">
              Save the Planet
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Complete daily and weekly challenges, climb the leaderboard, and earn badges. Making a difference has never been this fun.
          </p>
        </div>
      </section>

      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* User stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: "Your EcoPoints", value: "4,230", icon: (
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            )},
            { label: "Current Rank", value: "#5", icon: (
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            )},
            { label: "Day Streak", value: "12", icon: (
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            )},
            { label: "Badges Earned", value: "3/8", icon: (
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            )},
          ].map((stat) => (
            <div key={stat.label} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-xl font-bold text-white tabular-nums">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-8 overflow-x-auto pb-1 bg-white/[0.02] border border-white/[0.06] rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Daily Challenges */}
        {activeTab === "daily" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-500 text-sm">3 challenges available</p>
              <p className="text-sm">Resets in <span className="text-yellow-400 font-semibold">8h 23m</span></p>
            </div>
            {dailyChallenges.map((challenge) => (
              <div key={challenge.id} className="bg-white/[0.02] border border-yellow-500/15 hover:border-yellow-500/25 rounded-2xl p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <span className="text-xs text-yellow-600 font-semibold uppercase tracking-wider">{challenge.category}</span>
                        <h3 className="text-white font-semibold text-base mt-0.5">{challenge.title}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{challenge.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-yellow-400 font-bold text-lg tabular-nums">+{challenge.points}</div>
                        <div className="text-gray-600 text-xs">pts</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-500">{challenge.progress} / {challenge.total} completed</span>
                        <span className="text-yellow-400 font-semibold">{Math.round((challenge.progress / challenge.total) * 100)}%</span>
                      </div>
                      <div className="bg-white/[0.06] rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-amber-400 h-1.5 rounded-full transition-all"
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
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-500 text-sm">3 challenges available</p>
              <p className="text-sm">Resets in <span className="text-orange-400 font-semibold">4d 12h</span></p>
            </div>
            {weeklyChallenges.map((challenge) => (
              <div key={challenge.id} className="bg-white/[0.02] border border-orange-500/15 hover:border-orange-500/25 rounded-2xl p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <span className="text-xs text-orange-600 font-semibold uppercase tracking-wider">{challenge.category}</span>
                        <h3 className="text-white font-semibold text-base mt-0.5">{challenge.title}</h3>
                        <p className="text-gray-500 text-sm mt-0.5">{challenge.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-orange-400 font-bold text-lg tabular-nums">+{challenge.points}</div>
                        <div className="text-gray-600 text-xs">pts</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-500">{challenge.progress} / {challenge.total} completed</span>
                        <span className="text-orange-400 font-semibold">{Math.round((challenge.progress / challenge.total) * 100)}%</span>
                      </div>
                      <div className="bg-white/[0.06] rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-orange-400 to-amber-400 h-1.5 rounded-full transition-all"
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
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-white/[0.06]">
              <h3 className="text-white font-semibold text-lg">Global Leaderboard</h3>
              <p className="text-gray-500 text-sm mt-0.5">Top eco-warriors this month</p>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`flex items-center gap-4 px-6 py-4 transition-colors ${
                    entry.isUser
                      ? "bg-yellow-500/[0.05] border-l-2 border-yellow-500"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="text-xl w-8 text-center">{entry.badge}</div>
                  <div className="w-9 h-9 bg-white/[0.04] border border-white/[0.06] rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400">{entry.name.slice(0, 1)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${entry.isUser ? "text-yellow-400" : "text-white"}`}>
                      {entry.name} {entry.isUser && <span className="text-xs text-gray-500 font-normal">(You)</span>}
                    </div>
                    <div className="text-gray-500 text-xs tabular-nums">{entry.points.toLocaleString()} EcoPoints</div>
                  </div>
                  <div className={`text-sm font-semibold tabular-nums ${
                    entry.change.startsWith("+") ? "text-green-400" : entry.change === "0" ? "text-gray-600" : "text-red-400"
                  }`}>
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
                    ? "bg-yellow-500/[0.06] border-yellow-500/20 hover:border-yellow-500/30"
                    : "bg-white/[0.01] border-white/[0.04] opacity-40"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  badge.earned ? "bg-yellow-500/10 border border-yellow-500/20" : "bg-white/[0.04] border border-white/[0.06]"
                }`}>
                  <svg className={`w-6 h-6 ${badge.earned ? "text-yellow-400" : "text-gray-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className={`font-semibold text-sm mb-1 ${badge.earned ? "text-white" : "text-gray-500"}`}>{badge.name}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{badge.description}</p>
                {badge.earned && (
                  <span className="inline-flex items-center gap-1 mt-2.5 text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2.5 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Earned
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 relative bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
          <div className="px-8 sm:px-12 py-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Earning Points Now</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
              Every scan earns you EcoPoints. Start with a quick scan to complete your first daily challenge!
            </p>
            <Link
              href="/scan"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Scan Now to Earn Points
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
