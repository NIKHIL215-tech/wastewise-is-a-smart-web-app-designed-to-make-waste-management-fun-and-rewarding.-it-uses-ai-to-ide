const rewards = [
  { icon: "☕", brand: "EcoCafe", discount: "20% Off", category: "Food & Drink", points: "500 pts" },
  { icon: "👕", brand: "GreenThreads", discount: "15% Off", category: "Sustainable Fashion", points: "750 pts" },
  { icon: "🛒", brand: "OrganicMart", discount: "$5 Voucher", category: "Grocery", points: "400 pts" },
  { icon: "🚲", brand: "BikeShare", discount: "Free Ride", category: "Transport", points: "300 pts" },
  { icon: "🌿", brand: "NaturalBeauty", discount: "25% Off", category: "Beauty & Care", points: "600 pts" },
  { icon: "📦", brand: "EcoBox", discount: "Free Delivery", category: "Eco Products", points: "350 pts" },
];

const leaderboard = [
  { rank: 1, name: "Sarah K.", points: 12450, badge: "🥇", level: "Eco Champion" },
  { rank: 2, name: "Marcus T.", points: 11200, badge: "🥈", level: "Green Hero" },
  { rank: 3, name: "Priya M.", points: 9800, badge: "🥉", level: "Eco Warrior" },
  { rank: 4, name: "James L.", points: 8650, badge: "🏅", level: "Recycler Pro" },
  { rank: 5, name: "Aisha N.", points: 7900, badge: "🏅", level: "Recycler Pro" },
];

export default function Rewards() {
  return (
    <section id="rewards" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-yellow-400 text-sm font-medium">🏆 Earn Real Rewards</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Green Actions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
              Pay Off
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every item you recycle earns EcoPoints. Redeem them for exclusive discounts and rewards
            from our eco-conscious brand partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Rewards marketplace */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span>🎁</span> Reward Marketplace
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rewards.map((reward) => (
                <div
                  key={reward.brand}
                  className="bg-gray-900/50 border border-gray-800 hover:border-green-500/30 rounded-xl p-4 transition-all hover:bg-gray-900/80 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-xl">
                      {reward.icon}
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                      {reward.points}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-sm">{reward.brand}</p>
                  <p className="text-gray-500 text-xs mb-2">{reward.category}</p>
                  <p className="text-green-400 font-bold text-sm group-hover:text-green-300 transition-colors">
                    {reward.discount}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center">
              + 494 more rewards from eco-conscious brands
            </p>
          </div>

          {/* Leaderboard */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <span>🏆</span> Community Leaderboard
            </h3>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 px-6 py-4 border-b border-gray-800">
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium uppercase tracking-wider">
                  <span>Rank / User</span>
                  <span>EcoPoints</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-800/50">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between px-6 py-4 hover:bg-gray-800/30 transition-colors ${
                      user.rank === 1 ? "bg-yellow-500/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl w-8 text-center">{user.badge}</span>
                      <div>
                        <p className="text-white font-medium text-sm">{user.name}</p>
                        <p className="text-gray-500 text-xs">{user.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold text-sm">
                        {user.points.toLocaleString()}
                      </p>
                      <p className="text-gray-600 text-xs">points</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Your rank teaser */}
              <div className="px-6 py-4 bg-green-500/5 border-t border-green-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-sm">
                      👤
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Your position</p>
                      <p className="text-gray-500 text-xs">Sign up to join the leaderboard</p>
                    </div>
                  </div>
                  <button className="text-green-400 text-sm font-semibold hover:text-green-300 transition-colors">
                    Join →
                  </button>
                </div>
              </div>
            </div>

            {/* EcoPoints info */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: "♻️", label: "Per Recycle", value: "+10–50 pts" },
                { icon: "🎯", label: "Challenge Bonus", value: "+100 pts" },
                { icon: "👥", label: "Referral Bonus", value: "+200 pts" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center">
                  <div className="text-xl mb-1">{item.icon}</div>
                  <p className="text-green-400 font-bold text-sm">{item.value}</p>
                  <p className="text-gray-500 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
