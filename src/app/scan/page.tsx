"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ScanResult = {
  item: string;
  category: string;
  recyclable: boolean;
  bin: string;
  tips: string[];
  points: number;
  confidence: number;
};

const MOCK_RESULTS: ScanResult[] = [
  {
    item: "Plastic Bottle (PET #1)",
    category: "Plastic",
    recyclable: true,
    bin: "Blue Recycling Bin",
    tips: [
      "Rinse the bottle before recycling",
      "Remove the cap — recycle separately",
      "Crush to save space in the bin",
    ],
    points: 15,
    confidence: 98,
  },
  {
    item: "Cardboard Box",
    category: "Paper & Cardboard",
    recyclable: true,
    bin: "Blue Recycling Bin",
    tips: [
      "Flatten the box to save space",
      "Remove any tape or staples if possible",
      "Keep dry — wet cardboard is not recyclable",
    ],
    points: 10,
    confidence: 96,
  },
  {
    item: "Banana Peel",
    category: "Organic Waste",
    recyclable: false,
    bin: "Green Compost Bin",
    tips: [
      "Great for composting — adds potassium",
      "Can be used in a home compost pile",
      "Never put in recycling or general waste",
    ],
    points: 8,
    confidence: 99,
  },
  {
    item: "Glass Jar",
    category: "Glass",
    recyclable: true,
    bin: "Glass Recycling Bin",
    tips: [
      "Rinse thoroughly before recycling",
      "Remove metal lids — recycle separately",
      "Do not break — whole glass is preferred",
    ],
    points: 12,
    confidence: 97,
  },
];

export default function ScanPage() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateScan = (file?: File) => {
    setScanning(true);
    setResult(null);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
    setTimeout(() => {
      const random = MOCK_RESULTS[Math.floor(Math.random() * MOCK_RESULTS.length)];
      setResult(random);
      setScanning(false);
    }, 2200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateScan(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) simulateScan(file);
  };

  const handleReset = () => {
    setResult(null);
    setPreviewUrl(null);
    setScanning(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-400/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-green-400 text-lg">🔍</span>
            <span className="text-green-400 text-sm font-medium">AI-Powered Waste Scanner</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Scan Any{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400">
              Waste Item
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Upload a photo and our AI will instantly identify the item, tell you how to dispose of it
            correctly, and reward you with EcoPoints.
          </p>
        </div>
      </section>

      {/* Main Scanner Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Upload Zone */}
          <div className="space-y-4">
            <div
              className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
                dragOver
                  ? "border-green-400 bg-green-500/10"
                  : "border-gray-700 hover:border-green-500/50 bg-gray-900/40"
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              {previewUrl ? (
                <div className="space-y-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewUrl}
                    alt="Uploaded waste item"
                    className="w-full max-h-48 object-contain rounded-xl mx-auto"
                  />
                  <p className="text-gray-400 text-sm">Click to upload a different image</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Drop your image here</p>
                    <p className="text-gray-500 text-sm">or click to browse files</p>
                    <p className="text-gray-600 text-xs mt-2">PNG, JPG, WEBP up to 10MB</p>
                  </div>
                </div>
              )}
            </div>

            {/* Camera button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-black font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Take or Upload Photo
            </button>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "98%", label: "Accuracy" },
                { value: "<2s", label: "Scan Time" },
                { value: "500+", label: "Item Types" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-900/60 border border-gray-800 rounded-xl p-3 text-center">
                  <div className="text-green-400 font-bold text-lg">{s.value}</div>
                  <div className="text-gray-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Result Panel */}
          <div className="min-h-[320px]">
            {scanning && (
              <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 h-full min-h-[320px]">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 border-4 border-green-500/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-transparent border-t-green-400 rounded-full animate-spin" />
                  <div className="absolute inset-2 border-4 border-transparent border-t-emerald-300 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold mb-1">Analyzing image…</p>
                  <p className="text-gray-500 text-sm">AI is identifying your waste item</p>
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {!scanning && !result && (
              <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 h-full min-h-[320px] text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <p className="text-gray-400 font-medium mb-1">Ready to scan</p>
                  <p className="text-gray-600 text-sm">Upload an image to get instant AI analysis</p>
                </div>
              </div>
            )}

            {!scanning && result && (
              <div className="bg-gray-900/60 border border-green-500/20 rounded-2xl p-6 space-y-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2.5 h-2.5 rounded-full ${result.recyclable ? "bg-green-400" : "bg-yellow-400"}`} />
                      <span className={`text-xs font-semibold uppercase tracking-wide ${result.recyclable ? "text-green-400" : "text-yellow-400"}`}>
                        {result.recyclable ? "Recyclable" : "Compostable"}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">{result.item}</h3>
                    <p className="text-gray-500 text-sm">{result.category}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2 text-center shrink-0">
                    <div className="text-green-400 font-bold text-xl">+{result.points}</div>
                    <div className="text-green-600 text-xs">EcoPoints</div>
                  </div>
                </div>

                {/* Confidence */}
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>AI Confidence</span>
                    <span className="text-green-400 font-medium">{result.confidence}%</span>
                  </div>
                  <div className="bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                </div>

                {/* Bin */}
                <div className="flex items-center gap-3 bg-gray-800/60 rounded-xl p-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-xl">🗑️</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Dispose in</p>
                    <p className="text-white font-semibold text-sm">{result.bin}</p>
                  </div>
                </div>

                {/* Tips */}
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-2">Recycling Tips</p>
                  <ul className="space-y-1.5">
                    {result.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={handleReset}
                    className="flex-1 border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-white text-sm font-medium py-2.5 rounded-xl transition-all"
                  >
                    Scan Another
                  </button>
                  <Link
                    href="/chat"
                    className="flex-1 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium py-2.5 rounded-xl transition-all text-center"
                  >
                    Ask AI More →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Scans */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-white mb-6">Recent Community Scans</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { emoji: "🍾", item: "Wine Bottle", category: "Glass", points: 12, user: "eco_user_42" },
              { emoji: "📦", item: "Amazon Box", category: "Cardboard", points: 10, user: "green_sarah" },
              { emoji: "🥫", item: "Tin Can", category: "Metal", points: 14, user: "recycle_pro" },
              { emoji: "🧴", item: "Shampoo Bottle", category: "Plastic #2", points: 15, user: "planet_first" },
            ].map((scan) => (
              <div key={scan.item} className="bg-gray-900/40 border border-gray-800 hover:border-green-500/20 rounded-xl p-4 transition-all">
                <div className="text-3xl mb-3">{scan.emoji}</div>
                <p className="text-white font-semibold text-sm">{scan.item}</p>
                <p className="text-gray-500 text-xs mb-2">{scan.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-xs font-medium">+{scan.points} pts</span>
                  <span className="text-gray-600 text-xs">@{scan.user}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
