"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              How It Works
            </Link>
            <Link href="/#rewards" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              Rewards
            </Link>
            <Link href="/scan" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              AI Scan
            </Link>
            <Link href="/chat" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
              AI Chat
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium px-4 py-2">
              Sign In
            </button>
            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold text-sm px-5 py-2 rounded-full transition-all hover:scale-105">
              Get Started Free
            </button>
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
          <div className="md:hidden py-4 border-t border-green-900/30 flex flex-col gap-4">
            <Link href="/#features" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="/#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="/#rewards" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>
              Rewards
            </Link>
            <Link href="/scan" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>
              AI Scan
            </Link>
            <Link href="/chat" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>
              AI Chat
            </Link>
            <button className="bg-green-500 hover:bg-green-400 text-black font-semibold text-sm px-5 py-2 rounded-full transition-all w-full">
              Get Started Free
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
