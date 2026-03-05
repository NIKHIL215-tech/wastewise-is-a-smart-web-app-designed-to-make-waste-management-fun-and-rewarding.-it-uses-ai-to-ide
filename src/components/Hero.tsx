export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">AI-Powered Waste Management</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Turn Trash Into{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400">
              Treasure
            </span>
          </span>
          <br />
          <span className="text-gray-300">& Rewards</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          WasteWise uses AI to identify waste, guide you with AR recycling tutorials, and rewards
          you for every sustainable choice. Make waste management fun, smart, and impactful.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
            Start Recycling Smarter →
          </button>
          <button className="w-full sm:w-auto border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "50K+", label: "Active Users" },
            { value: "2M+", label: "Items Recycled" },
            { value: "98%", label: "AI Accuracy" },
            { value: "500+", label: "Reward Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Floating phone mockup */}
        <div className="mt-20 relative max-w-sm mx-auto">
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 border border-gray-700 shadow-2xl shadow-green-900/20">
            <div className="bg-[#0d1a12] rounded-[2rem] overflow-hidden aspect-[9/16] max-h-96 flex flex-col">
              {/* Phone status bar */}
              <div className="flex items-center justify-between px-6 py-3 bg-[#0d1a12]">
                <span className="text-xs text-gray-400">9:41</span>
                <div className="w-20 h-5 bg-gray-800 rounded-full" />
                <div className="flex gap-1">
                  <div className="w-4 h-2 bg-green-400 rounded-sm opacity-80" />
                </div>
              </div>
              {/* App UI mockup */}
              <div className="flex-1 px-4 py-2 flex flex-col gap-3">
                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400 text-xs">🤖</span>
                    </div>
                    <span className="text-green-400 text-xs font-semibold">AI Scan Result</span>
                  </div>
                  <p className="text-white text-sm font-medium">Plastic Bottle (PET #1)</p>
                  <p className="text-gray-400 text-xs mt-1">Recyclable ✓ — Drop at blue bin</p>
                  <div className="mt-2 bg-green-500/20 rounded-lg px-3 py-1.5 inline-block">
                    <span className="text-green-300 text-xs font-medium">+15 EcoPoints earned!</span>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-3 text-left">
                  <p className="text-gray-400 text-xs mb-2">Today&apos;s Challenge</p>
                  <p className="text-white text-sm font-medium">Recycle 5 items 🎯</p>
                  <div className="mt-2 bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-3/5" />
                  </div>
                  <p className="text-gray-500 text-xs mt-1">3 / 5 completed</p>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect under phone */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-green-500/20 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
