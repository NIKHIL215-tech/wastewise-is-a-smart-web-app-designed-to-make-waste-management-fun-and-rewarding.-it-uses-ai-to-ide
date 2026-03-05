export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Card */}
        <div className="bg-gradient-to-br from-green-950/60 to-emerald-950/40 border border-green-500/20 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="text-6xl mb-6">🌍</div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to Make the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                Planet Greener?
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join 50,000+ eco-warriors using WasteWise to reduce waste, earn rewards, and build a
              sustainable future — one scan at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold text-base px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/30">
                🚀 Get Started Free
              </button>
              <button className="w-full sm:w-auto border border-gray-600 hover:border-green-500/50 text-gray-300 hover:text-white font-medium text-base px-10 py-4 rounded-full transition-all">
                Download App
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free forever plan
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Available on iOS & Android
              </span>
            </div>
          </div>
        </div>

        {/* Impact counter */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          {[
            { value: "2.4M", label: "kg CO₂ Saved", icon: "🌿" },
            { value: "8.1M", label: "Items Recycled", icon: "♻️" },
            { value: "127", label: "Countries Active", icon: "🌍" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
