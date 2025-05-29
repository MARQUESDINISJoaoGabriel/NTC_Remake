'use client';
import React, { useState } from 'react';
import { Brain } from 'lucide-react';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const allQuestions: Question[] = [
  {
    question: 'What year was the NTC founded?',
    options: ['1939', '1944', '1951', '1963'],
    answer: '1944',
  },
  {
    question: 'Which city is home to NTC headquarters?',
    options: ['London', 'Brighton', 'Portsmouth', 'Bristol'],
    answer: 'Portsmouth',
  },
  {
    question: 'Which of these is a core NTC value?',
    options: ['Chaos', 'Discipline', 'Selfishness', 'Greed'],
    answer: 'Discipline',
  },
  {
    question: 'What activity is NOT typically part of NTC training?',
    options: ['Canoeing', 'Navigation', 'Skydiving', 'First Aid'],
    answer: 'Skydiving',
  },
  {
    question: 'What does a cadet wear during a formal drill?',
    options: ['Tracksuit', 'Combat uniform', 'Uniform', 'Casual clothes'],
    answer: 'Uniform',
  },
  {
    question: 'Which skill is common in NTC?',
    options: ['Programming', 'Canoeing', 'Skiing', 'Sculpture'],
    answer: 'Canoeing',
  },
];

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

const Quizz = () => {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);

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

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Brain className="w-12 h-12 text-blue-600" />
        </div>

        {!started ? (
          <>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Test Your Cadet Knowledge</h2>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto">
              Each quiz randomly selects 5 questions. Pick the correct answer and see your score!
            </p>
            <button
              onClick={startQuiz}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Start the Quiz
            </button>
          </>
        ) : finished ? (
          <>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Your Score: {score} / {questions.length}</h2>
            <p className="text-gray-600 mb-6">Great job! Want to try again?</p>
            <button
              onClick={startQuiz}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Restart Quiz
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Question {current + 1} of {questions.length}
            </h2>
            <h3 className="text-lg font-medium mb-6">{questions[current].question}</h3>
            <div className="grid gap-4 mb-6">
              {questions[current].options.map((opt) => {
                let bgColor = 'bg-white text-gray-800';
                if (showCorrection) {
                  if (opt === questions[current].answer) {
                    bgColor = 'bg-green-600 text-white';
                  } else if (opt === selected && opt !== questions[current].answer) {
                    bgColor = 'bg-red-500 text-white';
                  }
                } else if (selected === opt) {
                  bgColor = 'bg-blue-600 text-white';
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    disabled={!!selected}
                    className={`px-4 py-2 border rounded ${bgColor} transition`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {showCorrection && (
              <button
                onClick={handleNext}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                {current + 1 < questions.length ? 'Next' : 'Finish'}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Quizz;
