import Link from "next/link";

const features = [
  {
    icon: "🤖",
    title: "AI Waste Identification",
    description:
      "Point your camera at any waste item and our AI instantly identifies it, classifies the material, and tells you exactly how to dispose of it responsibly.",
    badge: "Powered by Vision AI",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    badgeColor: "bg-green-500/10 text-green-400",
    href: "/scan",
  },
  {
    icon: "🥽",
    title: "AR Recycling Tutorials",
    description:
      "Augmented reality overlays guide you step-by-step through recycling and upcycling processes. See exactly what to do, right in your environment.",
    badge: "Augmented Reality",
    color: "from-teal-500/20 to-cyan-500/10",
    border: "border-teal-500/20",
    badgeColor: "bg-teal-500/10 text-teal-400",
    href: "/ar",
  },
  {
    icon: "🏆",
    title: "Gamified Challenges",
    description:
      "Complete daily and weekly eco-challenges, climb leaderboards, and earn badges. Compete with friends and communities to make the biggest environmental impact.",
    badge: "Earn & Compete",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/20",
    badgeColor: "bg-yellow-500/10 text-yellow-400",
    href: "/challenges",
  },
  {
    icon: "📦",
    title: "Barcode Eco-Scanner",
    description:
      "Scan any product barcode before you buy. Get an instant eco-friendliness score, packaging recyclability rating, and sustainable alternatives.",
    badge: "Smart Shopping",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
    badgeColor: "bg-blue-500/10 text-blue-400",
    href: "/barcode",
  },
  {
    icon: "🎁",
    title: "Rewards & Coupons",
    description:
      "Convert your EcoPoints into real-world rewards — discount coupons, gift cards, and exclusive deals from 500+ eco-conscious brand partners.",
    badge: "Real Rewards",
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20",
    badgeColor: "bg-purple-500/10 text-purple-400",
    href: "/rewards",
  },
  {
    icon: "🌍",
    title: "Community Impact",
    description:
      "Join local and global eco-communities. Track your collective impact, organize neighborhood clean-ups, and see how your actions contribute to a circular economy.",
    badge: "Community Driven",
    color: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/20",
    badgeColor: "bg-emerald-500/10 text-emerald-400",
    href: "/community",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-950/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-green-400 text-sm font-medium">Everything You Need</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Smart Features for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Greener Planet
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            WasteWise combines cutting-edge AI, AR technology, and behavioral science to make
            sustainable waste management second nature.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className={`relative group bg-gradient-to-br ${feature.color} border ${feature.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg block`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Badge */}
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${feature.badgeColor}`}>
                {feature.badge}
              </span>

              {/* Content */}
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>

              {/* Arrow on hover */}
              <div className="mt-4 flex items-center gap-1 text-green-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore feature
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
