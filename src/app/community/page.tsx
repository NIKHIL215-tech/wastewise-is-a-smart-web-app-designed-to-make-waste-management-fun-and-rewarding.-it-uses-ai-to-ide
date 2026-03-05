"use client";

import { useState } from "react";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Central Park Clean-Up",
    location: "New York, USA",
    date: "Mar 15, 2026",
    time: "9:00 AM",
    participants: 47,
    maxParticipants: 100,
    icon: "🌳",
    category: "Clean-Up",
    points: 200,
  },
  {
    id: 2,
    title: "Beach Plastic Drive",
    location: "Miami, USA",
    date: "Mar 22, 2026",
    time: "8:00 AM",
    participants: 83,
    maxParticipants: 150,
    icon: "🏖️",
    category: "Clean-Up",
    points: 300,
  },
  {
    id: 3,
    title: "Composting Workshop",
    location: "Online",
    date: "Mar 18, 2026",
    time: "6:00 PM",
    participants: 124,
    maxParticipants: 500,
    icon: "🌿",
    category: "Workshop",
    points: 100,
  },
  {
    id: 4,
    title: "E-Waste Collection Day",
    location: "San Francisco, USA",
    date: "Mar 29, 2026",
    time: "10:00 AM",
    participants: 31,
    maxParticipants: 200,
    icon: "💻",
    category: "Collection",
    points: 150,
  },
];

const impactStats = [
  { value: "2.4M", label: "kg CO₂ Saved", icon: "🌿", color: "text-green-400" },
  { value: "8.1M", label: "Items Recycled", icon: "♻️", color: "text-emerald-400" },
  { value: "127", label: "Countries Active", icon: "🌍", color: "text-teal-400" },
  { value: "50K+", label: "Eco-Warriors", icon: "🦸", color: "text-blue-400" },
  { value: "1,240", label: "Events Organized", icon: "📅", color: "text-purple-400" },
  { value: "340T", label: "Waste Diverted", icon: "🗑️", color: "text-yellow-400" },
];

const topCommunities = [
  { rank: 1, name: "NYC Green Squad", members: 2840, points: 1240000, flag: "🇺🇸" },
  { rank: 2, name: "Tokyo EcoCircle", members: 3120, points: 1180000, flag: "🇯🇵" },
  { rank: 3, name: "Berlin Recyclers", members: 1950, points: 980000, flag: "🇩🇪" },
  { rank: 4, name: "Sydney Sustainables", members: 1640, points: 820000, flag: "🇦🇺" },
  { rank: 5, name: "London EcoHub", members: 2100, points: 790000, flag: "🇬🇧" },
];

const feed = [
  { user: "EcoWarrior_Sam", action: "recycled 12 items", time: "2 min ago", icon: "♻️", points: "+60" },
  { user: "GreenQueen_Mia", action: "completed the Beach Clean-Up challenge", time: "15 min ago", icon: "🏖️", points: "+300" },
  { user: "RecycleKing_Jo", action: "earned the 7-Day Streak badge", time: "1 hr ago", icon: "🔥", points: "+100" },
  { user: "PlanetSaver_Alex", action: "organized a community clean-up event", time: "3 hr ago", icon: "🌳", points: "+500" },
  { user: "EcoNinja_Lee", action: "scanned 50 unique materials", time: "5 hr ago", icon: "🧪", points: "+200" },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"feed" | "events" | "leaderboard">("feed");
  const [joinedEvents, setJoinedEvents] = useState<number[]>([]);

  const handleJoin = (id: number) => {
    setJoinedEvents((prev) => [...prev, id]);
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-emerald-400 text-sm font-medium">🌍 Community Driven</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Join the Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400">
              Eco Movement
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Connect with 50,000+ eco-warriors worldwide. Track collective impact, organize clean-ups, and build a sustainable future together.
          </p>
        </div>

        {/* Global impact stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {impactStats.map((stat) => (
            <div key={stat.label} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {(["feed", "events", "leaderboard"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all capitalize ${
                activeTab === tab
                  ? "bg-emerald-500 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {tab === "feed" && "📰 "}
              {tab === "events" && "📅 "}
              {tab === "leaderboard" && "🏆 "}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Activity Feed */}
        {activeTab === "feed" && (
          <div className="space-y-3">
            {feed.map((item, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-white text-sm">
                    <span className="font-semibold text-green-400">{item.user}</span>{" "}
                    {item.action}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.time}</p>
                </div>
                <div className="text-green-400 font-bold text-sm">{item.points}</div>
              </div>
            ))}
            <div className="text-center pt-4">
              <button className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Load more activity →
              </button>
            </div>
          </div>
        )}

        {/* Events */}
        {activeTab === "events" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {events.map((event) => {
              const joined = joinedEvents.includes(event.id);
              const fillPct = (event.participants / event.maxParticipants) * 100;
              return (
                <div key={event.id} className="bg-gradient-to-br from-emerald-500/10 to-green-500/5 border border-emerald-500/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{event.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-white font-bold text-lg">{event.title}</h3>
                        <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {event.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">📍 {event.location}</p>
                      <p className="text-gray-400 text-sm">📅 {event.date} at {event.time}</p>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{event.participants} / {event.maxParticipants} participants</span>
                      <span>{Math.round(fillPct)}% full</span>
                    </div>
                    <div className="bg-gray-800 rounded-full h-1.5">
                      <div
                        className="bg-emerald-400 h-1.5 rounded-full"
                        style={{ width: `${fillPct}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-semibold text-sm">+{event.points} EcoPoints</span>
                    <button
                      onClick={() => handleJoin(event.id)}
                      disabled={joined}
                      className={`text-sm font-bold px-5 py-2 rounded-full transition-all ${
                        joined
                          ? "bg-gray-700 text-gray-400 cursor-default"
                          : "bg-emerald-500 hover:bg-emerald-400 text-black hover:scale-105"
                      }`}
                    >
                      {joined ? "✓ Joined" : "Join Event"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Community Leaderboard */}
        {activeTab === "leaderboard" && (
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-white font-bold text-xl">🌍 Top Communities</h3>
              <p className="text-gray-400 text-sm mt-1">Communities ranked by total EcoPoints this month</p>
            </div>
            <div className="divide-y divide-gray-800">
              {topCommunities.map((community) => (
                <div key={community.rank} className="flex items-center gap-4 p-5 hover:bg-gray-800/30 transition-colors">
                  <div className="text-2xl w-8 text-center">
                    {community.rank === 1 ? "🥇" : community.rank === 2 ? "🥈" : community.rank === 3 ? "🥉" : "🏅"}
                  </div>
                  <div className="text-2xl">{community.flag}</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">{community.name}</div>
                    <div className="text-gray-500 text-sm">{community.members.toLocaleString()} members</div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-400 font-bold">{(community.points / 1000).toFixed(0)}K</div>
                    <div className="text-gray-500 text-xs">EcoPoints</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-br from-emerald-950/60 to-green-950/40 border border-emerald-500/20 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-4">🤝</div>
          <h2 className="text-3xl font-bold text-white mb-3">Start Your Eco Journey Today</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Join a community near you, attend events, and make a real difference. Every action counts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/start" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105">
              🚀 Get Started
            </Link>
            <Link href="/challenges" className="w-full sm:w-auto border border-gray-700 hover:border-emerald-500/50 text-gray-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all">
              🏆 View Challenges
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
