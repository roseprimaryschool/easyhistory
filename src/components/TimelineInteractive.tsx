import React, { useState } from "react";
import { motion } from "motion/react";
import { TimelineEvent } from "../types";
import { Calendar, CheckCircle2, ChevronRight, GraduationCap, Shield } from "lucide-react";

interface TimelineInteractiveProps {
  events: TimelineEvent[];
  accentColor: string;
}

export default function TimelineInteractive({ events, accentColor }: TimelineInteractiveProps) {
  const [activeEventId, setActiveEventId] = useState<number | null>(events[0]?.id || null);

  const getThemeClasses = (color: string) => {
    switch (color) {
      case "indigo":
        return {
          text: "text-indigo-600",
          border: "border-indigo-200",
          bg: "bg-indigo-50",
          bullet: "bg-indigo-600",
          line: "bg-indigo-200"
        };
      case "amber":
        return {
          text: "text-amber-600",
          border: "border-amber-200",
          bg: "bg-amber-50",
          bullet: "bg-amber-600",
          line: "bg-amber-200"
        };
      case "sky":
        return {
          text: "text-sky-600",
          border: "border-sky-200",
          bg: "bg-sky-50",
          bullet: "bg-sky-600",
          line: "bg-sky-200"
        };
      default:
        return {
          text: "text-slate-600",
          border: "border-slate-200",
          bg: "bg-slate-50",
          bullet: "bg-slate-600",
          line: "bg-slate-200"
        };
    }
  };

  const style = getThemeClasses(accentColor);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm text-left">
      
      {/* Mini Section Header */}
      <div className="flex items-center space-x-2.5 mb-8">
        <div className={`p-1.5 rounded bg-indigo-50 text-indigo-600`}>
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-extrabold text-xl text-slate-900">Chronological Path</h3>
          <p className="font-sans text-xs text-slate-500">Scroll down or click panels to animate key turning points.</p>
        </div>
      </div>

      {/* Main Timeline Column */}
      <div className="relative">
        
        {/* Central vertical connecting line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[3px] bg-slate-100 -translate-x-1/2 rounded" />

        {/* Dynamic active connecting line projection */}
        <div className={`absolute left-6 md:left-1/2 top-4 w-[3px] bg-gradient-to-b ${
          accentColor === "indigo" ? "from-indigo-500 to-violet-500" :
          accentColor === "amber" ? "from-amber-400 to-orange-500" :
          "from-sky-400 to-indigo-500"
        } -translate-x-1/2 rounded pointer-events-none transition-all duration-700`}
        style={{
          height: activeEventId 
            ? `${Math.max(10, ((events.findIndex(e => e.id === activeEventId) + 0.5) / events.length) * 100)}%` 
            : '0%'
        }} />

        {/* Timeline Event rows */}
        <div className="space-y-12">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            const isActive = activeEventId === event.id;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between"
              >
                {/* Visual Intersecting Central Pin indicator */}
                <button
                  onClick={() => setActiveEventId(event.id)}
                  className={`absolute left-6 md:left-1/2 w-6 h-6 rounded-full border-4 border-white shadow -translate-x-1/2 z-20 cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? `${style.bullet} scale-125 ring-4 ring-indigo-100` 
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  id={`timeline-pin-${event.id}`}
                />

                {/* Left Block Space (Visible on desktops) */}
                <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${isLeft ? "md:text-right" : "md:hidden"}`}>
                  {isLeft && (
                    <div
                      onClick={() => setActiveEventId(event.id)}
                      className={`cursor-pointer transition-all duration-300 p-5 rounded-xl border ${
                        isActive 
                          ? `border-${accentColor}-200 bg-${accentColor}-50/30 shadow-md` 
                          : "border-slate-100 bg-white hover:bg-slate-50/50"
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold ${style.text} block mb-1`}>
                        {event.year}
                      </span>
                      <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-indigo-600">
                        {event.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex items-center space-x-1.5 justify-end mt-3">
                        <span className="font-mono text-[9px] uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                          {event.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center marker spacer representing years on desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-4 font-mono font-bold text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full z-10 select-none">
                  {event.year}
                </div>

                {/* Right Block Space */}
                <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${!isLeft ? "md:text-left" : "hidden md:block"}`}>
                  {!isLeft ? (
                    <div
                      onClick={() => setActiveEventId(event.id)}
                      className={`cursor-pointer transition-all duration-300 p-5 rounded-xl border ${
                        isActive 
                          ? `border-${accentColor}-300 bg-${accentColor}-50/30 shadow-md` 
                          : "border-slate-100 bg-white hover:bg-slate-50/50"
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold ${style.text} block mb-1`}>
                        {event.year}
                      </span>
                      <h4 className="font-display font-bold text-base text-slate-900">
                        {event.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="flex items-center space-x-1.5 justify-start mt-3">
                        <span className="font-mono text-[9px] uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                          {event.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Display placeholder to maintain alignment of vertical components */
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Mobile backup rendering of nodes that are hidden above */}
                <div className="w-full pl-14 pr-4 block md:hidden mt-2">
                  {isLeft && (
                    <div
                      onClick={() => setActiveEventId(event.id)}
                      className={`cursor-pointer p-4 rounded-xl border ${
                        isActive 
                          ? `border-${accentColor}-300 bg-${accentColor}-50/30 shadow` 
                          : "border-slate-100 bg-white hover:bg-slate-50/50"
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold ${style.text} block mb-1`}>
                        {event.year}
                      </span>
                      <h4 className="font-display font-bold text-sm text-slate-900">
                        {event.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 mt-1 lines-relaxed">
                        {event.description}
                      </p>
                      <span className="inline-block mt-2 font-mono text-[9px] uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                        {event.category}
                      </span>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
