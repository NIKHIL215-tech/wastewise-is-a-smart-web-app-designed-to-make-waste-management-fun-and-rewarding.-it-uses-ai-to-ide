import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    step: "01",
    title: "Scan Your First Item",
    description: "Use our AI scanner to identify any waste item instantly. Just point your camera and let the AI do the work.",
    action: "Try AI Scan",
    href: "/scan",
    color: "green",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Chat with EcoBot",
    description: "Ask our AI assistant anything about recycling, composting, or waste disposal. Get instant expert answers.",
    action: "Open AI Chat",
    href: "/chat",
    color: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Follow AR Guidance",
    description: "Use augmented reality overlays to get step-by-step recycling instructions right in your environment.",
    action: "Explore AR Tools",
    href: "/ar",
    color: "teal",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Join Challenges",
    description: "Complete daily eco-challenges, earn badges, and compete with friends on the leaderboard.",
    action: "View Challenges",
    href: "/challenges",
    color: "yellow",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Earn Real Rewards",
    description: "Convert your EcoPoints into discount coupons, gift cards, and exclusive deals from eco-conscious brands.",
    action: "See Rewards",
    href: "/rewards",
    color: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Join the Community",
    description: "Connect with eco-warriors worldwide, track collective impact, and organize local clean-up events.",
    action: "Join Community",
    href: "/community",
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { icon: string; border: string; step: string; btn: string }> = {
  green:   { icon: "bg-green-500/10 text-green-400 border-green-500/20",   border: "hover:border-green-500/30",   step: "text-green-400",   btn: "bg-green-500 hover:bg-green-400" },
  emerald: { icon: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", border: "hover:border-emerald-500/30", step: "text-emerald-400", btn: "bg-emerald-500 hover:bg-emerald-400" },
  teal:    { icon: "bg-teal-500/10 text-teal-400 border-teal-500/20",     border: "hover:border-teal-500/30",    step: "text-teal-400",    btn: "bg-teal-500 hover:bg-teal-400" },
  yellow:  { icon: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20", border: "hover:border-yellow-500/30", step: "text-yellow-400",  btn: "bg-yellow-500 hover:bg-yellow-400" },
  purple:  { icon: "bg-purple-500/10 text-purple-400 border-purple-500/20", border: "hover:border-purple-500/30", step: "text-purple-400",  btn: "bg-purple-500 hover:bg-purple-400" },
  blue:    { icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",     border: "hover:border-blue-500/30",    step: "text-blue-400",    btn: "bg-blue-500 hover:bg-blue-400" },
};

export default function StartPage() {
  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(74,222,128,0.06),transparent)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/[0.08] border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Your Eco Journey Starts Here</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
            Start Recycling{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400">
              Smarter
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Follow these six steps to become an eco-warrior. Each step unlocks new tools, rewards, and community connections.
          </p>
        </div>
      </section>

      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {steps.map((step) => {
            const c = colorMap[step.color];
            return (
              <div
                key={step.step}
                className={`group relative bg-white/[0.02] border border-white/[0.06] ${c.border} rounded-2xl p-6 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300`}
              >
                {/* Step badge */}
                <div className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-widest ${c.step} mb-4`}>
                  <span className="opacity-50">STEP</span> {step.step}
                </div>

                {/* Icon */}
                <div className={`w-11 h-11 ${c.icon} border rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2 leading-snug">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.description}</p>

                {/* Action button */}
                <Link
                  href={step.href}
                  className={`inline-flex items-center gap-2 ${c.btn} text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95`}
                >
                  {step.action}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Quick start CTA */}
        <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-8 sm:px-16 py-14 text-center">
            <div className="w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Begin?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
              The fastest way to start is to scan your first waste item. It takes less than 10 seconds!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/scan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Scan Your First Item
              </Link>
              <Link
                href="/chat"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-green-500/30 bg-white/[0.03] hover:bg-white/[0.06] text-gray-300 hover:text-white font-medium text-base px-8 py-4 rounded-full transition-all"
              >
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Ask EcoBot a Question
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
