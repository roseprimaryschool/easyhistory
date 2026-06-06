import React from "react";
import { motion } from "motion/react";
import { HistoryTopic } from "../types";
import { Sword, Crown, Globe, ArrowRight, Hourglass, Bookmark, Trophy } from "lucide-react";

interface FeatureCardsSectionProps {
  topics: HistoryTopic[];
  onSelectTopic: (id: string) => void;
}

export default function FeatureCardsSection({ topics, onSelectTopic }: FeatureCardsSectionProps) {
  // Map icon names to Lucide icons
  const getIcon = (name: string, color: string) => {
    const classes = `w-6 h-6 text-${color}-600`;
    switch (name) {
      case "Sword":
        return <Sword className={classes} />;
      case "Crown":
        return <Crown className={classes} />;
      case "Globe":
        return <Globe className={classes} />;
      default:
        return <Sword className={classes} />;
    }
  };

  const getTopicAccentGradient = (color: string) => {
    switch (color) {
      case "indigo":
        return "from-indigo-500 to-violet-600 shadow-indigo-100";
      case "amber":
        return "from-amber-500 to-orange-600 shadow-amber-100";
      case "sky":
        return "from-sky-500 to-blue-600 shadow-sky-100";
      default:
        return "from-gray-500 to-gray-600 shadow-gray-100";
    }
  };

  return (
    <section className="py-20 bg-slate-50" id="lesson-grid-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Select Your Historical Expedition
          </h2>
          <p className="font-sans text-slate-500 text-sm mt-3 max-w-xl mx-auto">
            Choose an era to start. Each module contains a custom battle/campaign map, causal diagrams, a chronolog timeline, and a quick mastery assessment.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => {
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col h-full group"
                id={`feature-card-${topic.id}`}
              >
                {/* Visual Top Header of the Card */}
                <div className={`h-3 bg-gradient-to-r ${
                  topic.accentColor === "indigo" ? "from-indigo-600 to-violet-500" :
                  topic.accentColor === "amber" ? "from-amber-500 to-orange-500" :
                  "from-sky-500 to-indigo-500"
                }`} />

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Floating Info Badges */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                        {topic.era}
                      </span>
                      <span className="font-mono text-xs font-medium text-slate-500 flex items-center space-x-1">
                        <Hourglass className="w-3.5 h-3.5 text-slate-400 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>{topic.duration}</span>
                      </span>
                    </div>

                    {/* Topic Icon & Title */}
                    <div className="flex items-center space-x-3.5 mb-4">
                      <div className={`p-3 rounded-xl ${
                        topic.accentColor === "indigo" ? "bg-indigo-50" :
                        topic.accentColor === "amber" ? "bg-amber-50" :
                        "bg-sky-50"
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {getIcon(topic.icon, topic.accentColor)}
                      </div>
                      <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
                        {topic.title}
                      </h3>
                    </div>

                    {/* Subtitle / summary hook */}
                    <p className="font-sans text-slate-600 text-sm leading-relaxed mb-6">
                      {topic.summary}
                    </p>
                  </div>

                  {/* Lesson Meta Points & Launch Trigger */}
                  <div className="border-t border-slate-50 pt-5 mt-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                        <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                        <span>Visual Maps</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                        <Trophy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Micro-Quiz</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectTopic(topic.id)}
                      className={`w-full py-3 px-4 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r ${getTopicAccentGradient(topic.accentColor)} shadow-md hover:brightness-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg cursor-pointer`}
                      id={`launch-${topic.id}`}
                    >
                      <span>Explore Lesson</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cognitive Pedagogy Statement block (Visual details prompt) */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <h4 className="font-display font-bold text-lg text-slate-900 flex items-center gap-2">
              <span className="text-xl">💡</span> Why Visual Cognition Works
            </h4>
            <p className="font-sans text-slate-600 text-sm mt-2 leading-relaxed">
              According to the **Dual-Coding Theory** of education, the human mind recalls historical timelines and cause-and-effect vectors far better when text context is matched directly with dynamic, simplified diagrams and maps. ChronoVisuals replaces linear textbooks with high-retention structural blocks.
            </p>
          </div>
          <div className="flex items-center space-x-3 font-mono text-xs text-indigo-700 bg-indigo-50 border border-indigo-100 p-3 rounded-lg self-stretch justify-center md:self-auto">
            <span>🚀 3 Topic Modules Active</span>
          </div>
        </div>

      </div>
    </section>
  );
}
