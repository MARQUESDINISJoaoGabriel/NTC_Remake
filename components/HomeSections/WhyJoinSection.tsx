import React from 'react';
import { ShieldCheck, Users, Anchor } from 'lucide-react'; // Make sure you have lucide-react installed

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Discipline & Respect",
    description:
      "Cadets learn structure, routine, and mutual respect—core values that build strong foundations.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Leadership & Teamwork",
    description:
      "We develop future leaders through group tasks, challenges, and responsibilities.",
  },
  {
    icon: <Anchor className="w-8 h-8 text-blue-600" />,
    title: "Maritime Skills",
    description:
      "From boating to navigation, cadets explore hands-on nautical training in a safe and exciting environment.",
  },
];

const WhyJoinSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">Why Join the NTC?</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          Joining the Nautical Training Corps is more than just a hobby — it's an adventure that builds character, confidence,
          and lifelong friendships.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
