'use client';

import { useEffect, useState } from 'react';

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
    options: [
      '5 to 12 years old',
      '7 to 18 years old',
      '10 to 20 years old',
      '12 to 25 years old',
    ],
    answer: 1,
  },
  {
    question: 'What is the name of one of NTC’s training ships mentioned on their site?',
    options: ['TS Courage', 'TS Tenacity', 'TS Victory', 'TS Endeavour'],
    answer: 1,
  },
  {
    question: 'When was the NTC founded?',
    options: ['1932', '1944', '1951', '1967'],
    answer: 1,
  },
  {
    question: 'What uniform color is most associated with NTC cadets?',
    options: ['Red', 'Green', 'Navy Blue', 'Black'],
    answer: 2,
  },
  {
    question: 'Which value is emphasized in NTC training?',
    options: ['Profit', 'Discipline', 'Tourism', 'Competition'],
    answer: 1,
  },
  {
    question: 'Who founded the Nautical Training Corps in 1944?',
    options: ['Commodore Frank Froëst-Carr', 'Rear Admiral John Lippiett','Commodore David Wright','Admiral Nelson'],
    answer: 0,
  },
  {
    question: 'Where is the NTC’s National Sailing Centre located?',
    options: ['Shoreham Harbour','Tipner, Hampshire','Brighton Marina','Portsmouth Dockyard'],
    answer: 1,
  },
];

function getRandomQuestions(count: number) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function QuizPage() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setQuizQuestions(getRandomQuestions(5));
  }, []);

  const currentQuestion = quizQuestions[current];

  const handleOptionClick = (index: number) => {
    if (selected === null) {
      setSelected(index);
      setShowFeedback(true);
      if (index === currentQuestion.answer) {
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
    setQuizQuestions(getRandomQuestions(5));
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
    setShowFeedback(false);
  };

  const getButtonStyle = (index: number) => {
    if (!showFeedback) return 'bg-white';
    if (index === currentQuestion.answer) return 'bg-green-500 text-white'; // bonne réponse
    if (index === selected) return 'bg-red-500 text-white'; // mauvaise réponse cliquée
    return 'bg-white'; // les autres
  };

  if (quizQuestions.length === 0) return <p>Loading quiz...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      {!finished ? (
        <>
          <h2 className="text-xl font-bold mb-4">
            Question {current + 1} / {quizQuestions.length}
          </h2>
          <p className="mb-4">{currentQuestion.question}</p>
          <div className="flex flex-col gap-2 mb-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={showFeedback}
                className={`p-2 rounded border ${getButtonStyle(index)}`}
              >
                {option}
              </button>
            ))}
          </div>
          {showFeedback && (
            <p className="mb-4">
              {selected === currentQuestion.answer
                ? '✅ Correct!'
                : `❌ Incorrect.`}
            </p>
          )}
          <button
            onClick={handleNext}
            disabled={!showFeedback}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {current < quizQuestions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p className="mb-4">
            You scored {score} out of {quizQuestions.length} correct!
          </p>
          <button
            onClick={handleRestart}
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
