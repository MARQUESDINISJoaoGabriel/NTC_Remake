"use client";

import { Trophy, Star, Anchor, ShieldCheck } from "lucide-react";

const ranks = [
  {
    title: "New Entry",
    description: "First step into the Corps — learn the basics, meet your team.",
    icon: <Anchor className="w-6 h-6" />,
  },
  {
    title: "Junior Cadet",
    description: "Begin training and earn your first badge in seamanship.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "Cadet",
    description: "Take part in parades, learn navigation and water safety.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Leading Cadet",
    description: "Lead drills, mentor juniors, and earn advanced badges.",
    icon: <Trophy className="w-6 h-6" />,
  },
];

export default function CadetPathSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-ntcBlue mb-4">Your Cadet Journey</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Grow through the ranks as you gain skills, confidence, and leadership.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {ranks.map((rank, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-ntcBlue mb-3">{rank.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{rank.title}</h3>
              <p className="text-sm text-gray-600">{rank.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
