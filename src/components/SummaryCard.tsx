import React from "react";
import { motion } from "motion/react";
import { BookOpen, HelpCircle, Star, Sparkles } from "lucide-react";

interface SummaryCardProps {
  summaryText: string;
  era: string;
  duration: string;
  accentColor: string;
}

export default function SummaryCard({ summaryText, era, duration, accentColor }: SummaryCardProps) {
  const getAccentColorStyle = (color: string) => {
    switch (color) {
      case "indigo":
        return {
          bg: "bg-indigo-50/50",
          border: "border-indigo-100",
          text: "text-indigo-800",
          iconBg: "bg-indigo-100 text-indigo-700"
        };
      case "amber":
        return {
          bg: "bg-amber-50/50",
          border: "border-amber-100",
          text: "text-amber-900",
          iconBg: "bg-amber-100 text-amber-700"
        };
      case "sky":
        return {
          bg: "bg-sky-50/50",
          border: "border-sky-100",
          text: "text-sky-900",
          iconBg: "bg-sky-100 text-sky-700"
        };
      default:
        return {
          bg: "bg-slate-50",
          border: "border-slate-100",
          text: "text-slate-800",
          iconBg: "bg-slate-100 text-slate-700"
        };
    };
  };

  const style = getAccentColorStyle(accentColor);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl border ${style.border} ${style.bg} p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden`}
      id="summary-card-container"
    >
      {/* Decorative background visual */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-white/20 rounded-full blur-2xl" />

      <div className="max-w-3xl text-left">
        <div className="flex items-center space-x-2.5 mb-3.5">
          <div className={`p-2 rounded-lg ${style.iconBg} font-mono text-xs font-semibold flex items-center gap-1`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>MIND-MAP BRIEFING</span>
          </div>
          <span className="text-xs font-mono text-slate-500 font-medium">Era: {era}</span>
        </div>

        <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight mb-3">
          The 5-Minute Executive Takeaway
        </h3>

        <p className="font-sans text-slate-700 text-sm leading-relaxed mb-1">
          {summaryText}
        </p>
      </div>

      {/* Speed Metrics panel */}
      <div className="flex flex-row md:flex-col items-center justify-between gap-4 w-full md:w-auto p-4 rounded-xl bg-white border border-slate-10 border-dashed shrink-0">
        <div className="text-left md:text-center">
          <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">Fast Read</span>
          <span className="block text-lg font-display font-bold text-slate-800 leading-none mt-1">{duration}</span>
        </div>
        
        <div className="h-px w-full bg-slate-100 hidden md:block" />
        <div className="h-8 w-px bg-slate-100 block md:hidden" />

        <div className="text-right md:text-center">
          <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">Key Takeaways</span>
          <span className="block text-sm font-display font-bold text-indigo-600 mt-1 flex items-center justify-end md:justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High Retention</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
