"use client";
import React, { useState, useEffect } from "react";
import { Brain} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const allQuestions: Question[] = [
  {
    question: "What year was the NTC founded?",
    options: ["1939", "1944", "1951", "1963"],
    answer: "1944",
  },
  {
    question: "Which city is home to NTC headquarters?",
    options: ["London", "Brighton", "Portsmouth", "Bristol"],
    answer: "Portsmouth",
  },
  {
    question: "Which of these is a core NTC value?",
    options: ["Chaos", "Discipline", "Selfishness", "Greed"],
    answer: "Discipline",
  },
  {
    question: "What activity is NOT typically part of NTC training?",
    options: ["Canoeing", "Navigation", "Skydiving", "First Aid"],
    answer: "Skydiving",
  },
  {
    question: "What does a cadet wear during a formal drill?",
    options: ["Tracksuit", "Combat uniform", "Uniform", "Casual clothes"],
    answer: "Uniform",
  },
  {
    question: "Which skill is common in NTC?",
    options: ["Programming", "Canoeing", "Skiing", "Sculpture"],
    answer: "Canoeing",
  },
];

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

const QuizDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);

  // Auto-open dialog when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Delay of 1 second after page load

    return () => clearTimeout(timer);
  }, []);

  const startQuiz = () => {
    const selectedQuestions = shuffleArray(allQuestions).slice(0, 5).map(q => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setQuestions(selectedQuestions);
    setStarted(true);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowCorrection(false);
  };

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    setShowCorrection(true);
    if (option === questions[current].answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
      setSelected(null);
      setShowCorrection(false);
    } else {
      setFinished(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset quiz state when closing
    setStarted(false);
    setFinished(false);
    setSelected(null);
    setShowCorrection(false);
    setCurrent(0);
    setScore(0);
  };

  const reopenQuiz = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Button to reopen quiz if needed */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            onClick={reopenQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
            size="lg"
          >
            <Brain className="w-6 h-6" />
          </Button>
        </motion.div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-3 text-2xl text-blue-800">
              <Brain className="w-8 h-8 text-blue-600" />
              NTC Cadet Knowledge Quiz
            </DialogTitle>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {!started ? (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-6"
              >
                <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                  Test your knowledge about the Naval Training Corps! Each quiz randomly selects 5 questions. 
                  Pick the correct answer and see your score!
                </p>
                <Button
                  onClick={startQuiz}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  size="lg"
                >
                  Start the Quiz
                </Button>
              </motion.div>
            ) : finished ? (
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-6"
                >
                  <div className="text-4xl font-bold text-blue-800 mb-2">
                    {score} / {questions.length}
                  </div>
                  <div className="text-lg text-gray-600">
                    {score === questions.length ? "Perfect Score! 🎉" : 
                     score >= questions.length * 0.8 ? "Great Job! 👏" :
                     score >= questions.length * 0.6 ? "Good Effort! 👍" :
                     "Keep Learning! 📚"}
                  </div>
                </motion.div>
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={startQuiz}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Try Again
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Close
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`question-${current}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="py-6"
              >
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-blue-600">
                      Question {current + 1} of {questions.length}
                    </span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">
                    {questions[current].question}
                  </h3>
                </div>

                <div className="grid gap-3 mb-6">
                  {questions[current].options.map((opt, index) => {
                    let buttonClasses = "p-4 text-left border-2 rounded-lg transition-all duration-200 ";
                    
                    if (showCorrection) {
                      if (opt === questions[current].answer) {
                        buttonClasses += "bg-green-100 border-green-500 text-green-800";
                      } else if (opt === selected && opt !== questions[current].answer) {
                        buttonClasses += "bg-red-100 border-red-500 text-red-800";
                      } else {
                        buttonClasses += "bg-gray-50 border-gray-200 text-gray-600";
                      }
                    } else if (selected === opt) {
                      buttonClasses += "bg-blue-100 border-blue-500 text-blue-800";
                    } else {
                      buttonClasses += "bg-white border-gray-200 text-gray-800 hover:border-blue-300 hover:bg-blue-50";
                    }

                    return (
                      <motion.button
                        key={opt}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleSelect(opt)}
                        disabled={!!selected}
                        className={buttonClasses}
                      >
                        <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {opt}
                      </motion.button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {showCorrection && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center"
                    >
                      <Button
                        onClick={handleNext}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                      >
                        {current + 1 < questions.length ? "Next Question" : "See Results"}
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizDialog;