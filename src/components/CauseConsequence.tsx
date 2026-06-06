import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CauseEffectNode } from "../types";
import { GitCommit, HelpCircle, ArrowRight, CornerRightDown, Shield, RefreshCw } from "lucide-react";

interface CauseConsequenceProps {
  chains: CauseEffectNode[];
  accentColor: string;
}

export default function CauseConsequence({ chains, accentColor }: CauseConsequenceProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeChain = chains[activeIndex];

  const getAccentColors = (color: string) => {
    switch (color) {
      case "indigo":
        return {
          bg: "bg-indigo-50",
          border: "border-indigo-100",
          text: "text-indigo-600",
          button: "bg-indigo-600 hover:bg-indigo-700",
          highlight: "bg-indigo-100 text-indigo-800"
        };
      case "amber":
        return {
          bg: "bg-amber-50",
          border: "border-amber-100",
          text: "text-amber-600",
          button: "bg-amber-600 hover:bg-amber-700",
          highlight: "bg-amber-100 text-amber-800"
        };
      case "sky":
        return {
          bg: "bg-sky-50",
          border: "border-sky-100",
          text: "text-sky-600",
          button: "bg-sky-600 hover:bg-sky-700",
          highlight: "bg-sky-100 text-sky-850"
        };
      default:
        return {
          bg: "bg-slate-50",
          border: "border-slate-100",
          text: "text-slate-600",
          button: "bg-slate-600 hover:bg-slate-700",
          highlight: "bg-slate-100 text-slate-800"
        };
    }
  };

  const colors = getAccentColors(accentColor);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center space-x-2.5">
            <GitCommit className={`w-5 h-5 text-${accentColor}-600`} />
            <h3 className="font-display font-extrabold text-xl text-slate-900">Cause-and-Consequence Loop</h3>
          </div>
          <p className="font-sans text-slate-500 text-xs mt-1">
            Analyze the deep structural chain-reactions behind critical historical turning points.
          </p>
        </div>

        {/* Chain selector buttons */}
        <div className="flex items-center space-x-1.5 bg-slate-100 p-1.5 rounded-xl self-start md:self-auto">
          {chains.map((chain, index) => (
            <button
              key={chain.id}
              onClick={() => setActiveIndex(index)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition cursor-pointer ${
                activeIndex === index
                  ? `bg-white text-slate-800 shadow-sm`
                  : "text-slate-400 hover:text-slate-600"
              }`}
              id={`cc-chain-select-${index}`}
            >
              Chain {index + 1}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeChain.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative"
          id="cc-chain-visualization"
        >
          {/* STEP 1: CAUSE BLOCK */}
          <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                1. Pre-Condition (The Cause)
              </span>
              <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                {activeChain.cause}
              </h4>
              <p className="font-sans text-slate-600 text-xs leading-relaxed">
                {activeChain.causeDesc}
              </p>
            </div>
            
            {/* Visual connector icon */}
            <div className="flex justify-end mt-4 text-slate-300 md:hidden">
              <CornerRightDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>

          {/* STEP 2: CATALYST (TURNING POINT) */}
          <div className={`bg-slate-900 text-white p-5 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden`}>
            {/* Ambient vector glow inside the turning point */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${accentColor}-500/20 rounded-full blur-xl`} />

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                  2. Catalyst (The Spark)
                </span>
                <span className="text-xs">⚡</span>
              </div>
              
              <h4 className="font-display font-extrabold text-base text-indigo-50 leading-tight mb-3">
                {activeChain.trigger}
              </h4>
              <p className="font-sans text-slate-350 text-xs leading-relaxed">
                Critical decisions or unpredictable actions that triggered the systemic shift.
              </p>
            </div>

            {/* Visual connector icons */}
            <div className="hidden md:flex justify-between items-center mt-4 text-indigo-400/80">
              <span className="text-[10px] uppercase font-mono tracking-widest font-semibold">Evolution</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>

            <div className="flex justify-end mt-4 text-indigo-400 md:hidden">
              <CornerRightDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>

          {/* STEP 3: CONSEQUENCE BLOCK */}
          <div className={`bg-emerald-50/50 border border-emerald-100 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all`}>
            <div>
              <span className="font-mono text-[10px] font-bold text-emerald-500 uppercase tracking-wider block mb-2">
                3. Systemic Effect (The Outcome)
              </span>
              <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                {activeChain.effect}
              </h4>
              <p className="font-sans text-slate-600 text-xs leading-relaxed">
                {activeChain.effectDesc}
              </p>
            </div>

            <span className="inline-block self-start mt-4 font-mono text-[9px] uppercase font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
              High Retention Analysis
            </span>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Micro quiz connection line hint */}
      <p className="text-[11px] font-mono text-slate-400 mt-6 select-none text-center">
        💡 Real learning isn&apos;t names and dates: it is understanding how these 3-stage chains altered the course of human development.
      </p>

    </div>
  );
}
