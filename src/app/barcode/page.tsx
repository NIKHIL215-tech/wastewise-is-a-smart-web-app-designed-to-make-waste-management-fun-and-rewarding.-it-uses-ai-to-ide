"use client";

import { useState } from "react";
import Link from "next/link";

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

function EcoScoreRing({ score }: { score: number }) {
  const color = score >= 80 ? "text-green-400" : score >= 60 ? "text-yellow-400" : "text-red-400";
  const label = score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Poor";
  return (
    <div className="flex flex-col items-center">
      <div className={`text-5xl font-bold ${color}`}>{score}</div>
      <div className={`text-sm font-semibold ${color}`}>{label}</div>
      <div className="text-xs text-gray-500 mt-0.5">Eco Score</div>
    </div>
  );
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

  const scoreColor = result
    ? result.ecoScore >= 80
      ? "from-green-500/20 to-green-500/5 border-green-500/30"
      : result.ecoScore >= 60
      ? "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30"
      : "from-red-500/20 to-red-500/5 border-red-500/30"
    : "";

  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f0d]/80 backdrop-blur-md border-b border-green-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Waste<span className="text-green-400">Wise</span>
            </span>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-blue-400 text-sm font-medium">📦 Smart Shopping</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Barcode{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Eco-Scanner
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Scan any product barcode before you buy. Get an instant eco-friendliness score, packaging recyclability rating, and sustainable alternatives.
          </p>
        </div>

        {/* Scanner UI */}
        <div className="bg-gradient-to-br from-blue-950/40 to-indigo-950/30 border border-blue-500/20 rounded-3xl p-8 mb-8">
          <h2 className="text-white font-bold text-xl mb-6 text-center">Scan a Product Barcode</h2>

          {/* Barcode scanner area */}
          <div className="relative bg-black/40 border-2 border-dashed border-blue-500/30 rounded-2xl aspect-video max-h-48 flex flex-col items-center justify-center mb-6 overflow-hidden">
            {scanning ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
                <p className="text-blue-400 text-sm font-medium">Scanning barcode...</p>
                {/* Scan line animation */}
                <div className="absolute inset-x-0 h-0.5 bg-blue-400/60 animate-bounce" style={{ top: "50%" }} />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-center px-4">
                <div className="text-4xl">📦</div>
                <p className="text-gray-400 text-sm">Camera scanner available on mobile app</p>
                <p className="text-gray-600 text-xs">Use the demo below to try it out</p>
              </div>
            )}
          </div>

          {/* Manual input */}
          <div className="flex gap-3">
            <input
              type="text"
              value={barcodeInput}
              onChange={(e) => setBarcodeInput(e.target.value)}
              placeholder="Enter barcode number (or leave blank for demo)"
              className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50"
            />
            <button
              onClick={simulateScan}
              disabled={scanning}
              className="bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-black font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 whitespace-nowrap"
            >
              {scanning ? "Scanning..." : "🔍 Scan"}
            </button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className={`bg-gradient-to-br ${scoreColor} border rounded-3xl p-8 mb-8`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
              <EcoScoreRing score={result.ecoScore} />
              <div className="flex-1">
                <h3 className="text-white font-bold text-2xl">{result.name}</h3>
                <p className="text-gray-400">{result.brand}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    result.recyclability === "Fully Recyclable"
                      ? "bg-green-500/20 text-green-400"
                      : result.recyclability === "Partially Recyclable"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-orange-500/20 text-orange-400"
                  }`}>
                    ♻️ {result.recyclability}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                    🌿 {result.co2} per unit
                  </span>
                </div>
              </div>
            </div>

            {/* Packaging info */}
            <div className="bg-black/20 rounded-2xl p-4 mb-4">
              <h4 className="text-white font-semibold text-sm mb-1">📦 Packaging</h4>
              <p className="text-gray-400 text-sm">{result.packaging}</p>
            </div>

            {/* Recycling tips */}
            <div className="mb-4">
              <h4 className="text-white font-semibold text-sm mb-2">♻️ Recycling Tips</h4>
              <ul className="space-y-1">
                {result.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Alternatives */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">🌱 Eco-Friendly Alternatives</h4>
              <div className="flex flex-wrap gap-2">
                {result.alternatives.map((alt, i) => (
                  <span key={i} className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1.5 rounded-full">
                    {alt}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setResult(null); setBarcodeInput(""); }}
              className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              ← Scan another product
            </button>
          </div>
        )}

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: "📱", title: "Point & Scan", desc: "Aim your camera at any product barcode" },
            { icon: "🤖", title: "AI Analysis", desc: "Our AI checks packaging, materials, and eco-impact" },
            { icon: "🌿", title: "Make Better Choices", desc: "Get alternatives and recycling guidance instantly" },
          ].map((item) => (
            <div key={item.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-blue-950/60 to-indigo-950/40 border border-blue-500/20 rounded-3xl p-8 text-center">
          <div className="text-4xl mb-3">🛒</div>
          <h2 className="text-2xl font-bold text-white mb-2">Shop Smarter, Live Greener</h2>
          <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
            Every scan earns EcoPoints. Build your eco-score and unlock exclusive rewards from sustainable brands.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/rewards" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-black font-bold px-6 py-3 rounded-full transition-all hover:scale-105 text-sm">
              🎁 View Rewards
            </Link>
            <Link href="/scan" className="w-full sm:w-auto border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-full transition-all text-sm">
              📸 AI Waste Scanner
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
