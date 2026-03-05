"use client";

import Link from "next/link";

const steps = [
  {
    icon: "📸",
    step: "01",
    title: "Scan Your First Item",
    description: "Use our AI scanner to identify any waste item instantly. Just point your camera and let the AI do the work.",
    action: "Try AI Scan",
    href: "/scan",
    color: "green",
  },
  {
    icon: "🤖",
    step: "02",
    title: "Chat with EcoBot",
    description: "Ask our AI assistant anything about recycling, composting, or waste disposal. Get instant expert answers.",
    action: "Open AI Chat",
    href: "/chat",
    color: "emerald",
  },
  {
    icon: "🥽",
    step: "03",
    title: "Follow AR Guidance",
    description: "Use augmented reality overlays to get step-by-step recycling instructions right in your environment.",
    action: "Explore AR Tools",
    href: "/ar",
    color: "teal",
  },
  {
    icon: "🏆",
    step: "04",
    title: "Join Challenges",
    description: "Complete daily eco-challenges, earn badges, and compete with friends on the leaderboard.",
    action: "View Challenges",
    href: "/challenges",
    color: "yellow",
  },
  {
    icon: "🎁",
    step: "05",
    title: "Earn Real Rewards",
    description: "Convert your EcoPoints into discount coupons, gift cards, and exclusive deals from eco-conscious brands.",
    action: "See Rewards",
    href: "/rewards",
    color: "purple",
  },
  {
    icon: "🌍",
    step: "06",
    title: "Join the Community",
    description: "Connect with eco-warriors worldwide, track collective impact, and organize local clean-up events.",
    action: "Join Community",
    href: "/community",
    color: "blue",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; btn: string; badge: string }> = {
  green: {
    bg: "from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
    text: "text-green-400",
    btn: "bg-green-500 hover:bg-green-400",
    badge: "bg-green-500/10 text-green-400",
  },
  emerald: {
    bg: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    btn: "bg-emerald-500 hover:bg-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400",
  },
  teal: {
    bg: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/30",
    text: "text-teal-400",
    btn: "bg-teal-500 hover:bg-teal-400",
    badge: "bg-teal-500/10 text-teal-400",
  },
  yellow: {
    bg: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    btn: "bg-yellow-500 hover:bg-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-400",
  },
  purple: {
    bg: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    text: "text-purple-400",
    btn: "bg-purple-500 hover:bg-purple-400",
    badge: "bg-purple-500/10 text-purple-400",
  },
  blue: {
    bg: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    text: "text-blue-400",
    btn: "bg-blue-500 hover:bg-blue-400",
    badge: "bg-blue-500/10 text-blue-400",
  },
};

export default function StartPage() {
  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white">
      {/* Back nav */}
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Your Eco Journey Starts Here</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Start Recycling{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400">
              Smarter
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Follow these six steps to become an eco-warrior. Each step unlocks new tools, rewards, and community connections.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => {
            const c = colorMap[step.color];
            return (
              <div
                key={step.step}
                className={`relative group bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Step badge */}
                <div className={`inline-block text-xs font-bold tracking-widest ${c.badge} px-2.5 py-1 rounded-full mb-4`}>
                  STEP {step.step}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-3">{step.icon}</div>

                {/* Content */}
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{step.description}</p>

                {/* Action button */}
                <Link
                  href={step.href}
                  className={`inline-flex items-center gap-2 ${c.btn} text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105`}
                >
                  {step.action}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Quick start CTA */}
        <div className="bg-gradient-to-br from-green-950/60 to-emerald-950/40 border border-green-500/20 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Begin?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            The fastest way to start is to scan your first waste item. It takes less than 10 seconds!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/scan"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              📸 Scan Your First Item
            </Link>
            <Link
              href="/chat"
              className="w-full sm:w-auto border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all"
            >
              💬 Ask EcoBot a Question
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
