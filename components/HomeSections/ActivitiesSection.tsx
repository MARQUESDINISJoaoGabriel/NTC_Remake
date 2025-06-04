import React from "react";
import { LifeBuoy, Navigation, Users, Waves, Map, Compass } from "lucide-react";

const activities = [
  {
    icon: <Waves className="w-8 h-8 text-blue-600" />,
    title: "Canoeing & Water Sports",
    description: "Learn paddling, balance, and teamwork through exciting aquatic activities.",
  },
  {
    icon: <Navigation className="w-8 h-8 text-blue-600" />,
    title: "Navigation & Map Reading",
    description: "Understand bearings, charts, and practical navigation both on land and sea.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Drill & Discipline",
    description: "Master coordination, discipline, and respect through structured drills.",
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-blue-600" />,
    title: "First Aid & Rescue",
    description: "Train in basic first aid, emergency response, and rescue techniques.",
  },
  {
    icon: <Map className="w-8 h-8 text-blue-600" />,
    title: "Field Exercises",
    description: "Participate in camps and exercises that promote independence and team leadership.",
  },
  {
    icon: <Compass className="w-8 h-8 text-blue-600" />,
    title: "Maritime Skills",
    description: "Develop practical boating and seamanship abilities from the very first stage.",
  },
];

const ActivitiesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-12">What We Do</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
