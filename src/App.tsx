import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HISTORY_TOPICS } from "./data";
import { HistoryTopic } from "./types";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureCardsSection from "./components/FeatureCardsSection";
import SummaryCard from "./components/SummaryCard";
import TacticalMap from "./components/TacticalMap";
import TimelineInteractive from "./components/TimelineInteractive";
import CauseConsequence from "./components/CauseConsequence";
import KeyPeople from "./components/KeyPeople";
import MiniQuiz from "./components/MiniQuiz";
import { 
  ArrowLeft, 
  Map, 
  Calendar, 
  GitBranch, 
  UserCheck, 
  CheckSquare, 
  Award,
  BookOpen,
  HelpCircle,
  GraduationCap
} from "lucide-react";

export default function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"map" | "timeline" | "causality" | "people" | "quiz">("map");
  
  // Track viewed tabs per topic for progress tracking (gamified learning)
  const [completions, setCompletions] = useState<Record<string, Set<string>>>({});

  const currentTopic = HISTORY_TOPICS.find((t) => t.id === selectedTopicId) || null;

  const handleSelectTopic = (id: string | null) => {
    setSelectedTopicId(id);
    setActiveTab("map"); // Reset to first tab
    if (id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      markTabAsRead(id, "map");
    }
  };

  const markTabAsRead = (topicId: string, tab: string) => {
    setCompletions((prev) => {
      const currentSet = prev[topicId] ? new Set(prev[topicId]) : new Set<string>();
      currentSet.add(tab);
      return {
        ...prev,
        [topicId]: currentSet
      };
    });
  };

  const handleTabChange = (tab: "map" | "timeline" | "causality" | "people" | "quiz") => {
    setActiveTab(tab);
    if (selectedTopicId) {
      markTabAsRead(selectedTopicId, tab);
    }
  };

  const calculateProgress = (topicId: string) => {
    const readTabs = completions[topicId]?.size || 0;
    return Math.round((readTabs / 5) * 100);
  };

  return (
    <div className="min-h-screen bg-slate-50/35 font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
      
      {/* Universal Navigation Header */}
      <Header 
        topics={HISTORY_TOPICS} 
        selectedTopicId={selectedTopicId} 
        onSelectTopic={handleSelectTopic} 
      />

      <AnimatePresence mode="wait">
        {currentTopic === null ? (
          /* HOMEPAGE VIEW */
          <motion.div
            key="homepage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HeroSection 
              onStartQuest={() => {
                const el = document.getElementById("lesson-grid-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }} 
            />
            
            <FeatureCardsSection 
              topics={HISTORY_TOPICS} 
              onSelectTopic={handleSelectTopic} 
            />
          </motion.div>
        ) : (
          /* ACTIVE TOPIC EXPEDITION VIEW */
          <motion.div
            key={currentTopic.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            id={`topic-layout-${currentTopic.id}`}
          >
            {/* Upper Breadcrumbs and Lesson Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <button
                onClick={() => handleSelectTopic(null)}
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-slate-500 hover:text-indigo-600 transition duration-200 group cursor-pointer"
                id="back-to-home-link"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-205" />
                <span>Return to Central Selection</span>
              </button>

              {/* Progress tracker pill */}
              <div className="flex items-center space-x-3 bg-white border border-slate-150 p-2 rounded-xl text-left shadow-sm shrink-0">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700 font-bold text-sm">
                  {calculateProgress(currentTopic.id)}%
                </div>
                <div>
                  <span className="block text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">Lesson Progress</span>
                  <span className="block text-[10px] text-slate-600 font-sans font-medium">Tabs visited on this topic</span>
                </div>
              </div>
            </div>

            {/* Display Header of the specific Topic */}
            <div className="text-left mb-10">
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase ${currentTopic.badgeBg}`}>
                  {currentTopic.era}
                </span>
                <span className="text-xs font-mono text-slate-400">{currentTopic.duration} visual lesson</span>
              </div>
              
              <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-none mt-2">
                {currentTopic.title}
              </h2>
              
              <p className="font-sans text-slate-500 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
                {currentTopic.subtitle}
              </p>
            </div>

            {/* Five-minute Summary component briefing */}
            <div className="mb-10">
              <SummaryCard 
                summaryText={currentTopic.summary} 
                era={currentTopic.era} 
                duration={currentTopic.duration} 
                accentColor={currentTopic.accentColor}
              />
            </div>

            {/* SEGMENTED TAB SELECTOR CONTROLS */}
            <div className="border-b border-slate-250 mb-8" id="lesson-tab-bar">
              <div className="flex space-x-2 overflow-x-auto pb-px scrollbar-none">
                
                <button
                  onClick={() => handleTabChange("map")}
                  className={`py-3 px-4 sm:px-6 inline-flex items-center space-x-2 font-display text-xs sm:text-sm font-semibold border-b-2 transition duration-200 shrink-0 cursor-pointer ${
                    activeTab === "map"
                      ? `border-indigo-600 text-indigo-600`
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                  }`}
                  id="tab-btn-map"
                >
                  <Map className="w-4 h-4" />
                  <span>Strategic Map</span>
                </button>

                <button
                  onClick={() => handleTabChange("timeline")}
                  className={`py-3 px-4 sm:px-6 inline-flex items-center space-x-2 font-display text-xs sm:text-sm font-semibold border-b-2 transition duration-200 shrink-0 cursor-pointer ${
                    activeTab === "timeline"
                      ? `border-indigo-600 text-indigo-600`
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                  }`}
                  id="tab-btn-timeline"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Chrono-Timeline</span>
                </button>

                <button
                  onClick={() => handleTabChange("causality")}
                  className={`py-3 px-4 sm:px-6 inline-flex items-center space-x-2 font-display text-xs sm:text-sm font-semibold border-b-2 transition duration-200 shrink-0 cursor-pointer ${
                    activeTab === "causality"
                      ? `border-indigo-600 text-indigo-600`
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                  }`}
                  id="tab-btn-causality"
                >
                  <GitBranch className="w-4 h-4" />
                  <span>Causal Chain</span>
                </button>

                <button
                  onClick={() => handleTabChange("people")}
                  className={`py-3 px-4 sm:px-6 inline-flex items-center space-x-2 font-display text-xs sm:text-sm font-semibold border-b-2 transition duration-200 shrink-0 cursor-pointer ${
                    activeTab === "people"
                      ? `border-indigo-600 text-indigo-600`
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                  }`}
                  id="tab-btn-people"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Key Directors</span>
                </button>

                <button
                  onClick={() => handleTabChange("quiz")}
                  className={`py-3 px-4 sm:px-6 inline-flex items-center space-x-2 font-display text-xs sm:text-sm font-semibold border-b-2 transition duration-200 shrink-0 cursor-pointer ${
                    activeTab === "quiz"
                      ? `border-indigo-600 text-indigo-600`
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                  }`}
                  id="tab-btn-quiz"
                >
                  <CheckSquare className="w-4 h-4" />
                  <span>Recall Practice</span>
                </button>

              </div>
            </div>

            {/* DYNAMIC TAB COMPONENT OUTPUT CONTAINER */}
            <div className="min-h-96" id="lesson-interactive-workspace">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "map" && (
                    <TacticalMap 
                      mapData={currentTopic.map} 
                      accentColor={currentTopic.accentColor} 
                    />
                  )}

                  {activeTab === "timeline" && (
                    <TimelineInteractive 
                      events={currentTopic.timeline} 
                      accentColor={currentTopic.accentColor} 
                    />
                  )}

                  {activeTab === "causality" && (
                    <CauseConsequence 
                      chains={currentTopic.causeEffect} 
                      accentColor={currentTopic.accentColor} 
                    />
                  )}

                  {activeTab === "people" && (
                    <KeyPeople 
                      people={currentTopic.people} 
                      accentColor={currentTopic.accentColor} 
                    />
                  )}

                  {activeTab === "quiz" && (
                    <MiniQuiz 
                      quizQuestions={currentTopic.quiz} 
                      accentColor={currentTopic.accentColor} 
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating Navigation helper pill */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm text-left">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-sm text-slate-900">Finished exploring this tab?</h5>
                  <p className="font-sans text-xs text-slate-500 mt-0.5">Toggle adjacent header selectors to complete the remaining aspects of {currentTopic.title}.</p>
                </div>
              </div>
              <button
                onClick={() => handleSelectTopic(null)}
                className="text-xs font-mono font-bold text-indigo-650 bg-indigo-50 hover:bg-indigo-100/70 border border-indigo-100 px-4 py-2 rounded-xl transition duration-200 self-stretch text-center sm:self-auto cursor-pointer"
                id="bottom-back-home-btn"
              >
                &larr; Choose Another Topic
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer credits disclaimer (No Tech-Larping / Anti-AI-slop compliance) */}
      <footer className="py-12 border-t border-slate-100 bg-white/40 mt-20 text-center">
        <p className="font-mono text-[10px] text-slate-400 tracking-wider">
          EASYHISTORY ACADEMIC ENGINE &bull; DEVELOPED FOR RAPID RETENTION &bull; 2026
        </p>
      </footer>

    </div>
  );
}
