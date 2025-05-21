'use client';

import { useState } from 'react';

type Question = {
  question: string;
  options: string[];
  answer: number;
};

const questions: Question[] = [
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
    options: [
      'Scotland',
      'Northern England',
      'Southern England',
      'Wales',
    ],
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
    options: [
      'TS Courage',
      'TS Tenacity',
      'TS Victory',
      'TS Endeavour',
    ],
    answer: 1,
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      {!finished ? (
        <>
          <h2 className="text-xl font-bold mb-4">Question {current + 1} / {questions.length}</h2>
          <p className="mb-4">{questions[current].question}</p>
          <div className="flex flex-col gap-2 mb-4">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`p-2 rounded border ${selected === index ? 'bg-blue-500 text-white' : 'bg-white'}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleAnswer}
            disabled={selected === null}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
          >
            {current < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <p>You scored {score} out of {questions.length} correct!</p>
        </div>
      )}
    </div>
  );
}
