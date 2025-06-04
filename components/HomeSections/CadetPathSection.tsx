import React from "react";

const pathSteps = [
  {
    title: "Step 1: Join as a Recruit",
    description: "New members begin their journey learning basic discipline, teamwork, and NTC values.",
  },
  {
    title: "Step 2: Become a Cadet",
    description: "Cadets engage in regular drills, maritime skills training, and community activities.",
  },
  {
    title: "Step 3: Senior Cadet",
    description: "Demonstrate leadership, assist with training new recruits, and take on responsibilities.",
  },
  {
    title: "Step 4: Cadet Officer",
    description: "Lead units, help plan events, and represent NTC at regional and national levels.",
  },
];

const CadetPathSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Cadet Progression Path</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {pathSteps.map((step, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-6 relative before:absolute before:left-[-10px] before:top-[10px] before:w-4 before:h-4 before:rounded-full before:bg-blue-600"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CadetPathSection;
