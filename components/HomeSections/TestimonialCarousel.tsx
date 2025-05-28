'use client';
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Emily R.',
    text: "Joining the NTC was the best decision I’ve made. I learned discipline, built confidence, and made friends for life.",
    role: 'Former Cadet – Portsmouth',
  },
  {
    name: 'James T.',
    text: "The NTC gave my son purpose and pride. I couldn’t recommend it enough as a parent.",
    role: 'Parent of Cadet – Brighton',
  },
  {
    name: 'Aisha M.',
    text: "It’s more than a youth group – it’s a community that supports and inspires you every step of the way.",
    role: 'Current Cadet – London',
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">What People Say</h2>

        <div className="bg-white p-8 rounded-lg shadow-md transition duration-500">
          <p className="text-gray-800 text-lg italic mb-4">“{testimonials[current].text}”</p>
          <p className="text-blue-700 font-semibold">{testimonials[current].name}</p>
          <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === current ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
