"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ProductResult {
  name: string;
  brand: string;
  ecoScore: number;
  recyclability: string;
  packaging: string;
  alternatives: string[];
  tips: string[];
  co2: string;
}

const MOCK_PRODUCTS: ProductResult[] = [
  {
    name: "Sparkling Water 500ml",
    brand: "AquaFresh",
    ecoScore: 72,
    recyclability: "Fully Recyclable",
    packaging: "PET Plastic #1 — Widely accepted in curbside recycling",
    alternatives: ["Glass bottle (reusable)", "Tap water with filter", "Aluminum can"],
    tips: ["Remove cap before recycling", "Rinse bottle first", "Crush to save space"],
    co2: "0.12 kg CO₂",
  },
  {
    name: "Organic Granola Bar",
    brand: "NatureSnack",
    ecoScore: 85,
    recyclability: "Partially Recyclable",
    packaging: "Cardboard box (recyclable) + inner foil wrapper (not recyclable)",
    alternatives: ["Bulk bin granola", "Homemade granola", "Paper-wrapped bars"],
    tips: ["Separate cardboard from foil", "Recycle the box", "Foil goes in general waste"],
    co2: "0.08 kg CO₂",
  },
  {
    name: "Shampoo 250ml",
    brand: "CleanCo",
    ecoScore: 58,
    recyclability: "Check Locally",
    packaging: "HDPE Plastic #2 — Recyclable in most areas, check your local rules",
    alternatives: ["Shampoo bar (zero waste)", "Refillable bottle service", "Concentrated formula"],
    tips: ["Empty completely before recycling", "Remove pump if possible", "Check local recycling rules"],
    co2: "0.31 kg CO₂",
  },
];

function getScoreStyle(score: number) {
  if (score >= 80) return { color: "text-green-400", border: "border-green-500/20", bg: "bg-green-500/[0.06]", label: "Excellent", ring: "stroke-green-400" };
  if (score >= 60) return { color: "text-yellow-400", border: "border-yellow-500/20", bg: "bg-yellow-500/[0.06]", label: "Good", ring: "stroke-yellow-400" };
  return { color: "text-red-400", border: "border-red-500/20", bg: "bg-red-500/[0.06]", label: "Poor", ring: "stroke-red-400" };
}

function getRecyclabilityStyle(r: string) {
  if (r === "Fully Recyclable") return "text-green-400 bg-green-500/10 border-green-500/20";
  if (r === "Partially Recyclable") return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
  return "text-orange-400 bg-orange-500/10 border-orange-500/20";
}

export default function BarcodePage() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ProductResult | null>(null);
  const [barcodeInput, setBarcodeInput] = useState("");

  const simulateScan = () => {
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      const random = MOCK_PRODUCTS[Math.floor(Math.random() * MOCK_PRODUCTS.length)];
      setResult(random);
      setScanning(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.06),transparent)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/[0.08] border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 text-sm font-medium">Smart Shopping</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight">
            Barcode{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Eco-Scanner
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Scan any product barcode before you buy. Get an instant eco-friendliness score, packaging recyclability rating, and sustainable alternatives.
          </p>
        </div>
      </section>

      <div className="pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Scanner Panel */}
          <div className="space-y-4">
            {/* Barcode input */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8H3a2 2 0 00-2 2v10a2 2 0 002 2h3.5M15 4H5a2 2 0 00-2 2v3" />
                </svg>
                Enter Barcode
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={barcodeInput}
                  onChange={(e) => setBarcodeInput(e.target.value)}
                  placeholder="e.g. 5901234123457"
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/40 text-white placeholder-gray-600 text-sm px-4 py-2.5 rounded-xl outline-none transition-colors"
                />
                <button
                  onClick={simulateScan}
                  disabled={scanning}
                  className="bg-blue-500 hover:bg-blue-400 disabled:bg-gray-700 text-black disabled:text-gray-500 font-semibold text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Scan
                </button>
              </div>
            </div>

            {/* Camera scan button */}
            <button
              onClick={simulateScan}
              disabled={scanning}
              className="w-full flex items-center justify-center gap-2.5 bg-white/[0.02] border-2 border-dashed border-white/10 hover:border-blue-500/30 hover:bg-white/[0.04] text-gray-400 hover:text-white font-medium py-8 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {scanning ? "Scanning…" : "Scan with Camera"}
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "50M+", label: "Products" },
                { value: "2s", label: "Scan Time" },
                { value: "127", label: "Countries" },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 text-center">
                  <div className="text-blue-400 font-bold text-lg tabular-nums">{s.value}</div>
                  <div className="text-gray-600 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Result Panel */}
          <div className="min-h-[340px]">
            {scanning && (
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 flex flex-col items-center justify-center gap-5 h-full min-h-[340px]">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full" />
                  <div className="absolute inset-0 border-2 border-transparent border-t-blue-400 rounded-full animate-spin" />
                  <div className="absolute inset-2 border-2 border-transparent border-t-indigo-300 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.7s" }} />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold mb-1">Looking up product…</p>
                  <p className="text-gray-500 text-sm">Checking eco database</p>
                </div>
              </div>
            )}

            {!scanning && !result && (
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 h-full min-h-[340px] text-center">
                <div className="w-14 h-14 bg-white/[0.04] border border-white/[0.06] rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8H3a2 2 0 00-2 2v10a2 2 0 002 2h3.5M15 4H5a2 2 0 00-2 2v3" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 font-medium mb-1">Ready to scan</p>
                  <p className="text-gray-600 text-sm">Enter a barcode or use your camera</p>
                </div>
              </div>
            )}

            {!scanning && result && (() => {
              const style = getScoreStyle(result.ecoScore);
              return (
                <div className={`${style.bg} border ${style.border} rounded-2xl p-6 space-y-5`}>
                  {/* Product header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-gray-500 text-xs font-medium mb-0.5">{result.brand}</p>
                      <h3 className="text-white font-bold text-lg leading-tight">{result.name}</h3>
                    </div>
                    {/* Eco score */}
                    <div className="text-center shrink-0">
                      <div className={`text-4xl font-bold tabular-nums ${style.color}`}>{result.ecoScore}</div>
                      <div className={`text-xs font-semibold ${style.color}`}>{style.label}</div>
                      <div className="text-gray-600 text-xs">Eco Score</div>
                    </div>
                  </div>

                  {/* Score bar */}
                  <div>
                    <div className="bg-white/[0.06] rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-700 ${
                          result.ecoScore >= 80 ? "bg-gradient-to-r from-green-500 to-emerald-400" :
                          result.ecoScore >= 60 ? "bg-gradient-to-r from-yellow-500 to-amber-400" :
                          "bg-gradient-to-r from-red-500 to-orange-400"
                        }`}
                        style={{ width: `${result.ecoScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Recyclability */}
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${getRecyclabilityStyle(result.recyclability)}`}>
                      {result.recyclability}
                    </span>
                    <span className="text-gray-500 text-xs">{result.co2} per unit</span>
                  </div>

                  {/* Packaging */}
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Packaging</p>
                    <p className="text-gray-300 text-sm">{result.packaging}</p>
                  </div>

                  {/* Tips */}
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2.5">Disposal Tips</p>
                    <ul className="space-y-1.5">
                      {result.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-green-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alternatives */}
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2.5">Sustainable Alternatives</p>
                    <div className="flex flex-wrap gap-2">
                      {result.alternatives.map((alt, i) => (
                        <span key={i} className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-full">
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Reset */}
                  <button
                    onClick={() => setResult(null)}
                    className="w-full border border-white/10 hover:border-white/20 text-gray-400 hover:text-white text-sm font-medium py-2.5 rounded-xl transition-all"
                  >
                    Scan Another Product
                  </button>
                </div>
              );
            })()}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h2 className="text-lg font-semibold text-white mb-6">How the Eco Score Works</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { range: "80–100", label: "Excellent", desc: "Eco-friendly packaging, widely recyclable, low carbon footprint", color: "text-green-400 bg-green-500/10 border-green-500/20" },
              { range: "60–79", label: "Good", desc: "Partially recyclable, moderate environmental impact", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
              { range: "0–59", label: "Poor", desc: "Difficult to recycle, high carbon footprint, consider alternatives", color: "text-red-400 bg-red-500/10 border-red-500/20" },
            ].map((item) => (
              <div key={item.range} className={`border rounded-xl p-4 ${item.color}`}>
                <div className="font-bold text-lg tabular-nums mb-0.5">{item.range}</div>
                <div className="font-semibold text-sm mb-1">{item.label}</div>
                <p className="text-xs opacity-70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
