const steps = [
  {
    step: "01",
    icon: "📸",
    title: "Scan Your Waste",
    description:
      "Open the WasteWise app and point your camera at any waste item. Our AI instantly identifies the material type and recyclability.",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    step: "02",
    icon: "🥽",
    title: "Follow AR Guidance",
    description:
      "Get step-by-step augmented reality instructions on how to properly sort, recycle, or upcycle the item. No guesswork needed.",
    color: "text-teal-400",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
  },
  {
    step: "03",
    icon: "✅",
    title: "Complete & Earn",
    description:
      "Confirm your action and earn EcoPoints. Complete challenges for bonus rewards and climb the community leaderboard.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    step: "04",
    icon: "🎁",
    title: "Redeem Rewards",
    description:
      "Exchange your EcoPoints for real coupons, discounts, and gift cards from eco-friendly brands. Your green actions have real value.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green-400 text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              WasteWise
            </span>{" "}
            Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From scan to reward in four simple steps. Making sustainable choices has never been
            easier or more rewarding.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-center text-center group">
                {/* Step number bubble */}
                <div
                  className={`relative z-10 w-16 h-16 ${step.bgColor} border-2 ${step.borderColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Step number badge */}
                <div className={`text-xs font-bold ${step.color} mb-2 tracking-widest`}>
                  STEP {step.step}
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                {/* Arrow between steps (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-green-500/40">
                    <svg className="w-6 h-6 mx-auto rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-green-500/5 border border-green-500/20 rounded-2xl px-8 py-5">
            <span className="text-3xl">🌱</span>
            <div className="text-left">
              <p className="text-white font-semibold">Ready to make a difference?</p>
              <p className="text-gray-400 text-sm">Join 50,000+ eco-warriors already using WasteWise</p>
            </div>
            <button className="ml-4 bg-green-500 hover:bg-green-400 text-black font-bold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 whitespace-nowrap">
              Join Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
