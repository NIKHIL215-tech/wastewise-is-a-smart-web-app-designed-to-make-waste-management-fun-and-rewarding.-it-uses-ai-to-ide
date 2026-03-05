"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const rewards = [
  { brand: "EcoCafe", discount: "20% Off", category: "Food & Drink", points: 500, popular: true },
  { brand: "GreenThreads", discount: "15% Off", category: "Sustainable Fashion", points: 750, popular: false },
  { brand: "OrganicMart", discount: "$5 Voucher", category: "Grocery", points: 400, popular: true },
  { brand: "BikeShare", discount: "Free Ride", category: "Transport", points: 300, popular: false },
  { brand: "NaturalBeauty", discount: "25% Off", category: "Beauty & Care", points: 600, popular: false },
  { brand: "EcoBox", discount: "Free Delivery", category: "Eco Products", points: 350, popular: false },
];

const leaderboard = [
  { rank: 1, name: "Sarah K.", points: 12450, level: "Eco Champion", medal: "🥇" },
  { rank: 2, name: "Marcus T.", points: 11200, level: "Green Hero", medal: "🥈" },
  { rank: 3, name: "Priya M.", points: 9800, level: "Eco Warrior", medal: "🥉" },
  { rank: 4, name: "James L.", points: 8650, level: "Recycler Pro", medal: null },
  { rank: 5, name: "Aisha N.", points: 7900, level: "Recycler Pro", medal: null },
];

const pointsBreakdown = [
  { icon: "♻️", label: "Per Recycle", value: "+10–50 pts" },
  { icon: "🎯", label: "Challenge Bonus", value: "+100 pts" },
  { icon: "👥", label: "Referral Bonus", value: "+200 pts" },
];

export default function Rewards() {
  return (
    <section id="rewards" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(234,179,8,0.03),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/[0.08] border border-yellow-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-yellow-400 text-sm font-medium">Earn Real Rewards</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Your recycling habit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
              pays off
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Every correctly sorted item adds up. We&apos;ve partnered with hundreds of brands to give your efforts real value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Rewards marketplace */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Reward Marketplace
              </h3>
              <Link href="/rewards" className="text-xs text-green-400 hover:text-green-300 transition-colors font-medium">
                View all 500+ →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rewards.map((reward) => (
                <motion.div
                  key={reward.brand}
                  className="relative bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 transition-all hover:bg-white/[0.04] group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {reward.popular && (
                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 bg-white/[0.04] border border-white/[0.06] rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-400">{reward.brand.slice(0, 2)}</span>
                    </div>
                    <span className="text-xs text-gray-600 bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded-full">
                      {reward.points.toLocaleString()} pts
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm">{reward.brand}</p>
                  <p className="text-gray-600 text-xs mb-2">{reward.category}</p>
                  <p className="text-green-400 font-bold text-sm group-hover:text-green-300 transition-colors">
                    {reward.discount}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Points breakdown */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {pointsBreakdown.map((item) => (
                <motion.div 
                  key={item.label} 
                  className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-lg mb-1">{item.icon}</div>
                  <p className="text-green-400 font-bold text-sm">{item.value}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Community Leaderboard
              </h3>
              <Link href="/community" className="text-xs text-green-400 hover:text-green-300 transition-colors font-medium">
                Full leaderboard →
              </Link>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center justify-between text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  <span>Rank / User</span>
                  <span>EcoPoints</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-white/[0.04]">
                {leaderboard.map((user, index) => (
                  <motion.div
                    key={user.rank}
                    className={`flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors ${
                      user.rank === 1 ? "bg-yellow-500/[0.04]" : ""
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 text-center">
                        {user.medal ? (
                          <span className="text-lg">{user.medal}</span>
                        ) : (
                          <span className="text-sm font-bold text-gray-600">#{user.rank}</span>
                        )}
                      </div>
                      <div className="w-8 h-8 bg-white/[0.04] border border-white/[0.06] rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-400">{user.name.slice(0, 1)}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{user.name}</p>
                        <p className="text-gray-600 text-xs">{user.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold text-sm tabular-nums">
                        {user.points.toLocaleString()}
                      </p>
                      <p className="text-gray-700 text-xs">points</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Your rank teaser */}
              <div className="px-5 py-4 bg-green-500/[0.04] border-t border-green-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Your position</p>
                      <p className="text-gray-600 text-xs">Sign up to join the leaderboard</p>
                    </div>
                  </div>
                  <Link href="/start" className="text-green-400 text-sm font-semibold hover:text-green-300 transition-colors">
                    Join →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
