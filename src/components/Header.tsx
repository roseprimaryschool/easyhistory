import React from "react";
import { HistoryTopic } from "../types";
import { Sparkles, Calendar, BookOpen, Compass } from "lucide-react";

interface HeaderProps {
  topics: HistoryTopic[];
  selectedTopicId: string | null;
  onSelectTopic: (id: string | null) => void;
}

export default function Header({ topics, selectedTopicId, onSelectTopic }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Branding */}
        <button
          onClick={() => onSelectTopic(null)}
          className="flex items-center space-x-2.5 text-left group transition duration-300"
          id="nav-home-btn"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-100 group-hover:bg-indigo-700 transition duration-300">
            <Compass className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="block font-display font-bold text-lg text-gray-900 leading-tight tracking-tight">
              EasyHistory
            </span>
            <span className="block font-mono text-[10px] text-indigo-600 font-medium">
              FAST &bull; VISUAL &bull; HISTORY
            </span>
          </div>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
          <button
            onClick={() => onSelectTopic(null)}
            className={`px-4 py-2 rounded-lg font-display text-sm font-medium transition duration-200 ${
              selectedTopicId === null
                ? "text-indigo-600 bg-indigo-50"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
            id="nav-link-home"
          >
            Home Overview
          </button>
          
          <div className="h-4 w-px bg-gray-200 mx-2" />

          {topics.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`px-4 py-2 rounded-lg font-display text-sm font-medium transition duration-200 flex items-center space-x-2 ${
                  isSelected
                    ? "text-indigo-600 bg-indigo-50 font-semibold"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
                id={`nav-link-${topic.id}`}
              >
                <span>{topic.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Navigation Trigger Indicator */}
        <div className="md:hidden flex items-center space-x-2">
          {selectedTopicId && (
            <button
              onClick={() => onSelectTopic(null)}
              className="text-xs font-mono px-2.5 py-1 rounded bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
            >
              &larr; Back Home
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
