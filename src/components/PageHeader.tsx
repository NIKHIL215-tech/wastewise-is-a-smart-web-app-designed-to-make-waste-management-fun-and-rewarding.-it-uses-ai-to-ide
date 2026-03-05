interface PageHeaderProps {
  badge?: string;
  badgeColor?: "green" | "teal" | "yellow" | "blue" | "purple" | "emerald";
  title: React.ReactNode;
  description: string;
}

const badgeStyles = {
  green:   "bg-green-500/[0.08] border-green-500/20 text-green-400",
  teal:    "bg-teal-500/[0.08] border-teal-500/20 text-teal-400",
  yellow:  "bg-yellow-500/[0.08] border-yellow-500/20 text-yellow-400",
  blue:    "bg-blue-500/[0.08] border-blue-500/20 text-blue-400",
  purple:  "bg-purple-500/[0.08] border-purple-500/20 text-purple-400",
  emerald: "bg-emerald-500/[0.08] border-emerald-500/20 text-emerald-400",
};

export default function PageHeader({ badge, badgeColor = "green", title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-28 pb-14 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(74,222,128,0.06),transparent)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 ${badgeStyles[badgeColor]}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            <span className="text-sm font-medium">{badge}</span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
          {title}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
