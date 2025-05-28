'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type Question = {
  question: string;
  options: string[];
  answer: number;
};

const allQuestions: Question[] = [
  {
    question: 'What is the main mission of the Nautical Training Corps (NTC)?',
    options: [
      'To train merchant navy officers',
      'To provide nautical training and activities to young people',
      'To organize cruises for the public',
      'To offer sea rescue services',
    ],
    answer: 1,
  },
  {
    question: 'Where is the NTC primarily based?',
    options: ['Scotland', 'Northern England', 'Southern England', 'Wales'],
    answer: 2,
  },
  {
    question: 'What is the legal status of the NTC?',
    options: [
      'Government organization',
      'Private company',
      'Non-governmental organization',
      'Registered charity',
    ],
    answer: 3,
  },
  {
    question: 'What age range can join the NTC?',
    options: ['5 to 12 years old', '7 to 18 years old', '10 to 20 years old', '12 to 25 years old'],
    answer: 1,
  },
  {
    question: 'When was the NTC founded?',
    options: ['1932', '1944', '1951', '1967'],
    answer: 1,
  },
];

function getRandomQuestions(count: number) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Quizz() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [started, setStarted] = useState(false);
  const [open, setOpen] = useState(false);

  // Auto-open dialog on load
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // When quiz starts, load questions
  useEffect(() => {
    if (started) {
      setQuizQuestions(getRandomQuestions(5));
      setCurrent(0);
      setScore(0);
      setSelected(null);
      setFinished(false);
      setShowFeedback(false);
    }
  }, [started]);

  const currentQuestion =
  started && quizQuestions.length > 0 && current < quizQuestions.length
    ? quizQuestions[current]
    : null;

  const handleOptionClick = (index: number) => {
    if (selected === null) {
      setSelected(index);
      setShowFeedback(true);
      if (index === currentQuestion?.answer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setStarted(true);
  };

  const getButtonStyle = (index: number) => {
    if (!showFeedback) return 'bg-white';
    if (index === currentQuestion?.answer) return 'bg-green-500 text-white';
    if (index === selected) return 'bg-red-500 text-white';
    return 'bg-white';
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      setOpen(val);
      if (!val) setStarted(false);
    }}>
      <DialogContent className="sm:max-w-xl text-center">
        <DialogHeader>
          <DialogTitle>NTC Quiz</DialogTitle>
        </DialogHeader>

        {!started ? (
          <div className="p-4">
            <p className="mb-4">Would you like to take the NTC quiz?</p>
            <Button onClick={() => setStarted(true)} className='px-6 py-y items-center bg-zinc-900 text-white rounded-lg'>Start</Button>
          </div>
        ) : !finished ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-lg font-bold mb-2">
                Question {current + 1} / {quizQuestions.length}
              </h2>
              <p className="mb-4">{currentQuestion?.question}</p>

              <div className="flex flex-col gap-2 mb-4">
                {currentQuestion?.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    disabled={showFeedback}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-2 rounded border transition-colors duration-200 ${getButtonStyle(index)}`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {showFeedback && (
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {selected === currentQuestion?.answer ? '✅ Correct!' : '❌ Incorrect.'}
                </motion.p>
              )}

              <Button
                onClick={handleNext}
                disabled={!showFeedback}
                className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                {current < quizQuestions.length - 1 ? 'Next' : 'Finish'}
              </Button>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <p className="mb-4">You scored {score} out of {quizQuestions.length} correct!</p>
            <Button onClick={handleRestart} className="bg-blue-600 text-white">Restart Quiz</Button>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
}
