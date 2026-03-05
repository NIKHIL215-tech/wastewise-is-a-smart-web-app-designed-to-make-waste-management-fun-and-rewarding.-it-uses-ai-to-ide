"use client";

import { useState } from "react";
import Link from "next/link";

const moreLinks = [
  { href: "/start", label: "🚀 Start Recycling Smarter" },
  { href: "/ar", label: "🥽 AR Recycling Tools" },
  { href: "/challenges", label: "🏆 Gamified Challenges" },
  { href: "/barcode", label: "📦 Barcode Eco-Scanner" },
  { href: "/rewards", label: "🎁 Rewards & Coupons" },
  { href: "/community", label: "🌍 Community Impact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f0d]/80 backdrop-blur-md border-b border-green-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Waste<span className="text-green-400">Wise</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              How It Works
            </Link>
            <Link href="/scan" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              AI Scan
            </Link>
            <Link href="/chat" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              AI Chat
            </Link>

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors text-sm font-medium"
              >
                More
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-[#0d1a12] border border-green-900/40 rounded-2xl shadow-xl shadow-black/40 overflow-hidden">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-green-500/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium px-4 py-2">
              Sign In
            </button>
            <Link
              href="/start"
              className="bg-green-500 hover:bg-green-400 text-black font-semibold text-sm px-5 py-2 rounded-full transition-all hover:scale-105"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-green-900/30 flex flex-col gap-1">
            <Link href="/#features" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium px-2 py-2" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium px-2 py-2" onClick={() => setMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="/scan" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium px-2 py-2" onClick={() => setMenuOpen(false)}>
              AI Scan
            </Link>
            <Link href="/chat" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium px-2 py-2" onClick={() => setMenuOpen(false)}>
              AI Chat
            </Link>

            {/* More section in mobile */}
            <div className="border-t border-green-900/20 mt-2 pt-2">
              <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest px-2 mb-2">More Features</p>
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-400 hover:text-green-400 transition-colors text-sm font-medium px-2 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-green-900/20 mt-1">
              <Link
                href="/start"
                onClick={() => setMenuOpen(false)}
                className="block bg-green-500 hover:bg-green-400 text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all text-center"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
