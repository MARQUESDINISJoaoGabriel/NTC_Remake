'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const JoinNowSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <section className="bg-blue-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Join the Corps?</h2>
        <p className="text-gray-700 mb-6">
          Your journey in maritime adventure, leadership, and lifelong friendships begins here.
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Join Now
        </button>
      </div>
    </section>
  );
};

export default JoinNowSection;
