import React from "react";
import { motion } from "motion/react";
import { Sparkles, Zap, ArrowRight, Layers, Compass, Brain } from "lucide-react";
import historyVintageBg from "../assets/images/history_vintage_bg_1780828116384.png";

interface HeroSectionProps {
  onStartQuest: () => void;
}

export default function HeroSection({ onStartQuest }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white py-20 sm:py-28 border-b border-slate-900">
      {/* High-quality background image with historical montage elements */}
      <img 
        src={historyVintageBg} 
        alt="Vintage History Backdrop" 
        className="absolute inset-0 w-full h-full object-cover object-center filter opacity-30 brightness-[0.25] contrast-[1.1] saturate-[0.6] pointer-events-none"
        referrerPolicy="no-referrer"
      />
      {/* Absolute dark gradient overlay to guarantee copy contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-slate-950/65 to-slate-950 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
        {/* Animated Feature Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-400/20 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-indigo-300 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Cognitive Learning</span>
        </motion.div>

        {/* Dynamic Display Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-none mb-6"
        >
          Learn History in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-300">5 Visual Minutes</span>
        </motion.h1>

        {/* Short, crisp educational value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
        >
          Stop memorizing boring spreadsheets of dusty raw logs. Our cognitive diagrams, interactive map campaigns, and reactive cause-and-effect nodes unlock deep history instantly. Highly visual. Decisively structured.
        </motion.p>

        {/* Primary Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={onStartQuest}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 text-white font-display font-semibold hover:bg-indigo-500 transition duration-300 shadow-lg shadow-indigo-900/40 flex items-center justify-center space-x-2 group cursor-pointer"
            id="hero-start-btn"
          >
            <span>Begin the Expedition</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById("lesson-grid-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-200 font-display font-medium hover:bg-slate-900/90 hover:text-white transition duration-200 flex items-center justify-center space-x-2 cursor-pointer"
            id="hero-explore-btn"
          >
            <span>View 3 Core Eras</span>
          </button>
        </motion.div>

        {/* Live Stat Capsules / Value pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left"
        >
          <div className="bg-slate-900/40 backdrop-blur-xs border border-slate-900/80 p-4 rounded-xl flex items-start space-x-3">
            <div className="p-1.5 rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-900/40">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-100">Blitz Summaries</h4>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">Read vital events in under 5 minutes.</p>
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xs border border-slate-900/80 p-4 rounded-xl flex items-start space-x-3">
            <div className="p-1.5 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-900/40">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-100">Tactile Maps</h4>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">Interactive pins show campaigns step-by-step.</p>
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xs border border-slate-900/80 p-4 rounded-xl flex items-start space-x-3">
            <div className="p-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-900/40">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-100">Chain Mechanics</h4>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">Understand causal turning points.</p>
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xs border border-slate-900/80 p-4 rounded-xl flex items-start space-x-3">
            <div className="p-1.5 rounded-lg bg-violet-950/80 text-violet-400 border border-violet-900/40">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-100">Active Recall</h4>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5">Flash quizzes with animated correction logic.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
