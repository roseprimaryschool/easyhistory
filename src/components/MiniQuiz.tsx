import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QuizQuestion } from "../types";
import { BrainCircuit, Check, X, ArrowRight, RefreshCw, Trophy, HelpCircle, AlertCircle } from "lucide-react";

interface MiniQuizProps {
  quizQuestions: QuizQuestion[];
  accentColor: string;
}

export default function MiniQuiz({ quizQuestions, accentColor }: MiniQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const activeQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswerLocked) return;
    
    setSelectedOptionIndex(optionIndex);
    setIsAnswerLocked(true);

    if (optionIndex === activeQuestion.correctIndex) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerLocked(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerLocked(false);
    setCorrectCount(0);
    setShowResults(false);
  };

  const getThemeClasses = (color: string) => {
    switch (color) {
      case "indigo":
        return {
          btn: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100",
          text: "text-indigo-600",
          border: "border-indigo-100",
          bg: "bg-indigo-50/50"
        };
      case "amber":
        return {
          btn: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-100",
          text: "text-amber-600",
          border: "border-amber-100",
          bg: "bg-amber-50/50"
        };
      case "sky":
        return {
          btn: "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-100",
          text: "text-sky-600",
          border: "border-sky-100",
          bg: "bg-sky-50/50"
        };
      default:
        return {
          btn: "bg-slate-700 hover:bg-slate-800 text-white shadow-slate-100",
          text: "text-slate-600",
          border: "border-slate-100",
          bg: "bg-slate-50"
        };
    }
  };

  const colors = getThemeClasses(accentColor);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm text-left">
      
      {/* Quiz Category Header Label */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center space-x-2.5">
          <BrainCircuit className={`w-5 h-5 text-${accentColor}-600`} />
          <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900">Era Recall Test</h3>
        </div>
        
        {!showResults && (
          <span className="font-mono text-xs text-slate-400 font-semibold bg-slate-50 border px-2.5 py-1 rounded-lg">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {showResults ? (
          /* RESULT SCORE CARD PANEL */
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-center py-6 max-w-md mx-auto"
            id="quiz-results-card"
          >
            <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 mx-auto mb-4 text-2xl shadow-inner animate-bounce">
              <Trophy className="w-8 h-8" />
            </div>

            <h4 className="font-display font-extrabold text-2xl text-slate-900">Expedition Complete!</h4>
            
            <p className="font-sans text-xs text-slate-500 mt-2">
              You have analyzed key campaigns and turning points. Here is your memory retention report:
            </p>

            {/* Score circle */}
            <div className="my-6 inline-block relative p-4 bg-slate-50 border rounded-2xl">
              <div className="text-4xl font-display font-black text-slate-850">
                {correctCount} <span className="text-slate-350 text-2xl">/</span> {quizQuestions.length}
              </div>
              <span className={`block font-mono text-[10px] font-bold ${colors.text} uppercase tracking-wider mt-1.5`}>
                {correctCount === quizQuestions.length ? "🌟 flawless score" : "🎓 lesson completed"}
              </span>
            </div>

            {/* Explanatory CTA */}
            <button
              onClick={handleRestartQuiz}
              className={`w-full py-3.5 rounded-xl font-display font-bold text-sm flex items-center justify-center space-x-2 border transition duration-200 cursor-pointer ${colors.btn}`}
              id="quiz-retry-btn"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry This Assessment</span>
            </button>
          </motion.div>
        ) : (
          /* ACTIVE QUESTION RUNTIME PANEL */
          <motion.div
            key={`question-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
            id="active-question-wrapper"
          >
            {/* Question title */}
            <h4 className="font-display font-extrabold text-base sm:text-lg text-slate-950 leading-snug">
              {activeQuestion.question}
            </h4>

            {/* Answer choices array with custom indicator actions */}
            <div className="grid grid-cols-1 gap-3.5" id="quiz-options-list">
              {activeQuestion.options.map((option, index) => {
                const isSelected = selectedOptionIndex === index;
                const isCorrectIndex = activeQuestion.correctIndex === index;
                
                // Styling state definitions
                let optionStyleClass = "border-slate-100 bg-white hover:bg-slate-50/50 hover:border-slate-200";
                let iconChoice = null;

                if (isAnswerLocked) {
                  if (isCorrectIndex) {
                    // Correct options highlighted as vibrant green
                    optionStyleClass = "border-emerald-300 bg-emerald-50 text-emerald-900";
                    iconChoice = (
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs animate-midbounce shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    );
                  } else if (isSelected) {
                    // Selected wrong option shakes and flashes crimson red
                    optionStyleClass = "border-red-300 bg-red-50 text-red-900";
                    iconChoice = (
                      <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs shrink-0">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    );
                  } else {
                    // Other options fade out slightly
                    optionStyleClass = "border-slate-50 bg-white/40 text-slate-400 opacity-60";
                  }
                }

                // Shake animation settings if chosen answer is incorrect
                const isShaking = isSelected && isAnswerLocked && !isCorrectIndex;

                return (
                  <motion.button
                    disabled={isAnswerLocked}
                    onClick={() => handleOptionClick(index)}
                    animate={isShaking ? { x: [-10, 10, -6, 6, -3, 3, 0] } : {}}
                    whileHover={!isAnswerLocked ? { scale: 1.006, x: 2 } : {}}
                    key={index}
                    className={`w-full text-left p-4 rounded-xl border font-sans text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${optionStyleClass}`}
                    id={`quiz-option-${index}`}
                  >
                    <span>{option}</span>
                    {iconChoice}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation card & next step, appearing smoothly as response feedback */}
            <AnimatePresence>
              {isAnswerLocked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`p-4 sm:p-5 rounded-xl border border-dashed text-xs ${
                    selectedOptionIndex === activeQuestion.correctIndex 
                      ? "bg-emerald-50/30 border-emerald-200 text-emerald-950" 
                      : "bg-red-50/25 border-red-205 text-red-950"
                  }`}>
                    {/* Visual correctness indicator titles */}
                    <div className="flex items-center space-x-2 font-mono font-bold uppercase tracking-wider text-[11px] mb-2">
                      {selectedOptionIndex === activeQuestion.correctIndex ? (
                        <>
                          <span className="text-emerald-600">✓ Correct Choice</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-red-500" />
                          <span className="text-red-500">Learn From This Node</span>
                        </>
                      )}
                    </div>

                    <p className="font-sans leading-relaxed text-slate-700">
                      {activeQuestion.explanation}
                    </p>

                    {/* Progress to next node trigger */}
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={handleNextQuestion}
                        className={`py-2 px-4 rounded-lg font-display font-semibold text-xs flex items-center space-x-1.5 transition duration-205 pointer-events-auto cursor-pointer ${colors.btn}`}
                        id="quiz-next-question-btn"
                      >
                        <span>
                          {currentQuestionIndex === quizQuestions.length - 1 ? "Finish Assessment" : "Next Question"}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
