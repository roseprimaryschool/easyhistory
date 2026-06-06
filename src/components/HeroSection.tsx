import React from "react";
import { motion } from "motion/react";
import { Sparkles, Zap, ArrowRight, Layers, Compass, Brain } from "lucide-react";

interface HeroSectionProps {
  onStartQuest: () => void;
}

export default function HeroSection({ onStartQuest }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-white py-16 sm:py-24 border-b border-gray-100">
      {/* Decorative ambient background blur vectors */}
      <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      <div className="absolute -top-10 left-10 -z-10 h-[250px] w-[250px] rounded-full bg-amber-100/30 blur-2xl" />

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Animated Feature Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-indigo-700 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Cognitive Learning</span>
        </motion.div>

        {/* Dynamic Display Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-display font-extrabold text-gray-950 tracking-tight leading-none mb-6"
        >
          Learn History in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">5 Visual Minutes</span>
        </motion.h1>

        {/* Short, crisp educational value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 font-sans"
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 text-white font-display font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-100 flex items-center justify-center space-x-2 group cursor-pointer"
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-gray-200 bg-white text-gray-700 font-display font-medium hover:bg-gray-50 transition duration-200 flex items-center justify-center space-x-2 cursor-pointer"
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
          <div className="bg-slate-50/80 border border-slate-100 p-4 rounded-xl flex items-start space-x-3">
            <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-900">Blitz Summaries</h4>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">Read vital events in under 5 minutes.</p>
            </div>
          </div>

          <div className="bg-slate-50/80 border border-slate-100 p-4 rounded-xl flex items-start space-x-3">
            <div className="p-1.5 rounded-lg bg-amber-100 text-amber-600">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-900">Tactile Maps</h4>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">Interactive pins show campaigns step-by-step.</p>
            </div>
          </div>

          <div className="bg-slate-50/80 border border-slate-100 p-4 rounded-xl flex items-start space-x-3">
            <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-600">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-900">Chain Mechanics</h4>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">Understand causal turning points.</p>
            </div>
          </div>

          <div className="bg-slate-50/80 border border-slate-100 p-4 rounded-xl flex items-start space-x-3">
            <div className="p-1.5 rounded-lg bg-violet-100 text-violet-600">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-slate-900">Active Recall</h4>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">Flash quizzes with animated correction logic.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
