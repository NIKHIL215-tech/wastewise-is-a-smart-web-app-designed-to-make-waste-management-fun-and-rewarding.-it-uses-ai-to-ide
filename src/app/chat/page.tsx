"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const SUGGESTED_QUESTIONS = [
  "How do I recycle a pizza box?",
  "What plastics can go in the blue bin?",
  "How do I dispose of old batteries?",
  "Can I compost meat scraps?",
  "What is e-waste and how do I recycle it?",
  "How do I recycle broken glass safely?",
];

const AI_RESPONSES: Record<string, string> = {
  default: `Great question! Here's what I know about that:

♻️ **General Recycling Tips:**
- Always rinse containers before recycling
- Check your local recycling guidelines — they vary by city
- When in doubt, throw it out (contamination hurts recycling)

Would you like me to be more specific? Try asking about a particular material like plastic, glass, or cardboard!`,

  pizza: `🍕 **Pizza Box Recycling:**

Pizza boxes are tricky! Here's the rule:

✅ **Top lid** (clean) → Blue recycling bin
❌ **Bottom (greasy)** → Compost bin or general waste

The grease contaminates paper recycling, so it's best to tear the box in half. The clean top can be recycled, while the greasy bottom should go to compost if available.

**EcoTip:** Some cities now accept the whole box — check your local guidelines!`,

  plastic: `🧴 **Plastic Recycling Guide:**

Not all plastics are equal! Look for the number inside the recycling symbol:

| # | Type | Recyclable? |
|---|------|-------------|
| 1 (PET) | Water bottles | ✅ Yes |
| 2 (HDPE) | Milk jugs | ✅ Yes |
| 3 (PVC) | Pipes | ❌ No |
| 4 (LDPE) | Plastic bags | ⚠️ Store drop-off |
| 5 (PP) | Yogurt cups | ✅ Usually |
| 6 (PS) | Styrofoam | ❌ No |
| 7 (Other) | Mixed | ❌ Usually no |

**Pro tip:** Plastic bags (#4) should NEVER go in curbside bins — they jam sorting machines. Return them to grocery stores instead!`,

  battery: `🔋 **Battery Disposal:**

Batteries contain toxic chemicals and should **never** go in regular trash or recycling!

**Where to take them:**
- 🏪 Most electronics stores (Best Buy, Staples) have drop boxes
- 🏛️ Local household hazardous waste (HHW) facilities
- 🔋 Call2Recycle drop-off locations (call2recycle.org)

**By battery type:**
- **AA/AAA/9V** → HHW or store drop-off
- **Lithium-ion (phones/laptops)** → Electronics store
- **Car batteries** → Auto parts stores (they pay you!)
- **Rechargeable** → Call2Recycle program

**EcoPoints:** Properly disposing of batteries earns you **+25 EcoPoints** in WasteWise! 🌱`,

  compost: `🌱 **Composting Meat Scraps:**

Traditional backyard composting: **❌ Avoid meat**
- Attracts pests and creates odors
- Can harbor pathogens

**But you have options!**

✅ **Bokashi composting** — fermentation method that handles meat, dairy, and cooked food
✅ **Green bin programs** — many cities accept meat in municipal composting
✅ **Worm bins** — small amounts of cooked meat are okay
✅ **Electric composters** (like Lomi) — handle all food waste including meat

**Check your city's green bin guidelines** — many now accept all food scraps including meat!`,

  ewaste: `💻 **E-Waste Recycling:**

E-waste (electronics) is the fastest-growing waste stream globally. It contains valuable metals AND toxic materials.

**What counts as e-waste:**
- Phones, tablets, laptops
- TVs and monitors
- Printers and cables
- Appliances with circuit boards

**Where to recycle:**
- 🏪 **Best Buy** — free e-waste drop-off in stores
- 🏛️ **Earth911.com** — find local drop-off sites
- 📦 **Mail-in programs** — many manufacturers offer this
- 🎓 **Schools/libraries** — often host collection events

**Data security:** Always factory reset devices and remove storage before recycling!

**EcoPoints:** E-waste recycling earns **+50 EcoPoints** — our highest reward! 🏆`,

  glass: `🍶 **Broken Glass Disposal:**

Broken glass is a safety hazard and needs special handling!

**DO NOT:**
- ❌ Put loose broken glass in recycling bins (injures workers)
- ❌ Put in regular trash bags (can cut through)

**Safe disposal steps:**
1. Wrap in several layers of newspaper or bubble wrap
2. Place in a sturdy cardboard box
3. Label it "BROKEN GLASS — CAUTION"
4. Place in general waste bin

**For large amounts:**
- Take to a glass recycling facility directly
- Some areas have special glass drop-off points

**Intact glass** (bottles, jars) → Glass recycling bin after rinsing ✅`,
};

function getAIResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("pizza") || lower.includes("greasy")) return AI_RESPONSES.pizza;
  if (lower.includes("plastic") || lower.includes("blue bin") || lower.includes("pet") || lower.includes("hdpe")) return AI_RESPONSES.plastic;
  if (lower.includes("batter")) return AI_RESPONSES.battery;
  if (lower.includes("compost") || lower.includes("meat") || lower.includes("food")) return AI_RESPONSES.compost;
  if (lower.includes("e-waste") || lower.includes("ewaste") || lower.includes("electronic") || lower.includes("phone") || lower.includes("laptop")) return AI_RESPONSES.ewaste;
  if (lower.includes("glass") || lower.includes("broken")) return AI_RESPONSES.glass;
  return AI_RESPONSES.default;
}

function formatContent(content: string) {
  const lines = content.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**")) {
      return <p key={i} className="font-bold text-white mt-3 mb-1">{line.replace(/\*\*/g, "")}</p>;
    }
    if (line.includes("**")) {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="text-gray-300 leading-relaxed">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
          )}
        </p>
      );
    }
    if (line.startsWith("- ") || line.startsWith("✅") || line.startsWith("❌") || line.startsWith("⚠️") || line.startsWith("🏪") || line.startsWith("🏛️") || line.startsWith("🔋") || line.startsWith("📦") || line.startsWith("🎓")) {
      return <p key={i} className="text-gray-300 leading-relaxed pl-2">{line}</p>;
    }
    if (line.startsWith("#")) {
      return null;
    }
    if (line.trim() === "") return <div key={i} className="h-1" />;
    return <p key={i} className="text-gray-300 leading-relaxed">{line}</p>;
  });
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `👋 Hi! I'm **EcoBot**, your AI recycling assistant powered by WasteWise.

I can help you with:
- ♻️ How to recycle specific items
- 🗑️ Which bin to use for different waste
- 🌱 Composting tips and tricks
- 💡 Eco-friendly disposal alternatives
- 🏆 How to earn more EcoPoints

What would you like to know about recycling today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0f0d] text-white flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-green-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">EcoBot — AI Recycling Assistant</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Ask{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400">
              EcoBot
            </span>{" "}
            Anything
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Get instant answers about recycling, composting, and sustainable waste disposal from our
            AI assistant.
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-[1fr_280px] gap-6 items-start">
          {/* Chat Window */}
          <div className="flex flex-col bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden" style={{ minHeight: "520px" }}>
            {/* Chat Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-800 bg-gray-900/60">
              <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-bold">E</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">EcoBot</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span className="text-green-400 text-xs">Online — AI Recycling Expert</span>
                </div>
              </div>
              <div className="ml-auto">
                <Link
                  href="/scan"
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-green-400 transition-colors border border-gray-700 hover:border-green-500/40 rounded-lg px-3 py-1.5"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  AI Scan
                </Link>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5" style={{ maxHeight: "420px" }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "assistant"
                      ? "bg-gradient-to-br from-green-400 to-emerald-600"
                      : "bg-gray-700"
                  }`}>
                    <span className="text-white text-xs font-bold">
                      {msg.role === "assistant" ? "E" : "U"}
                    </span>
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 space-y-1 ${
                    msg.role === "user"
                      ? "bg-green-500/15 border border-green-500/20 rounded-tr-sm"
                      : "bg-gray-800/80 border border-gray-700/50 rounded-tl-sm"
                  }`}>
                    <div className="text-sm leading-relaxed space-y-1">
                      {formatContent(msg.content)}
                    </div>
                    <p className="text-gray-600 text-xs pt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">E</span>
                  </div>
                  <div className="bg-gray-800/80 border border-gray-700/50 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1 items-center h-5">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-800 p-4 bg-gray-900/60">
              <div className="flex gap-3 items-end">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about recycling, composting, disposal…"
                  rows={1}
                  className="flex-1 bg-gray-800 border border-gray-700 focus:border-green-500/50 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none resize-none transition-colors"
                  style={{ minHeight: "44px", maxHeight: "120px" }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isTyping}
                  className="w-11 h-11 bg-green-500 hover:bg-green-400 disabled:bg-gray-700 disabled:cursor-not-allowed text-black disabled:text-gray-500 rounded-xl flex items-center justify-center transition-all hover:scale-105 shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 text-xs mt-2 text-center">
                Press Enter to send · Shift+Enter for new line
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Suggested Questions */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5">
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <span className="text-green-400">💡</span>
                Suggested Questions
              </h3>
              <div className="space-y-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    disabled={isTyping}
                    className="w-full text-left text-xs text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-green-500/10 border border-gray-700/50 hover:border-green-500/30 rounded-lg px-3 py-2.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Scan CTA */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/20 rounded-2xl p-5">
              <div className="text-2xl mb-3">📸</div>
              <h3 className="text-white font-semibold text-sm mb-2">Have an item to scan?</h3>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                Upload a photo and our AI will instantly identify it and tell you how to dispose of it.
              </p>
              <Link
                href="/scan"
                className="block w-full bg-green-500 hover:bg-green-400 text-black font-semibold text-xs py-2.5 rounded-xl transition-all hover:scale-[1.02] text-center"
              >
                Open AI Scanner →
              </Link>
            </div>

            {/* EcoPoints */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span>🏆</span>
                Your EcoPoints
              </h3>
              <div className="text-3xl font-bold text-green-400 mb-1">1,240</div>
              <p className="text-gray-500 text-xs mb-3">Level 4 — Eco Enthusiast</p>
              <div className="bg-gray-800 rounded-full h-2 mb-1">
                <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full w-3/5" />
              </div>
              <p className="text-gray-600 text-xs">760 pts to Level 5</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
