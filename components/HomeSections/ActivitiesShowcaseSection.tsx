import React from 'react';
import Image from 'next/image';

const activities = [
  {
    title: "Drill & Discipline",
    image: "/assets/images/activity-drill.jpg",
    description:
      "Apprends les bases de la discipline militaire et le respect des ordres dans un environnement structuré.",
  },
  {
    title: "Canoeing & Water Sports",
    image: "/assets/images/activity-canoe.jpg",
    description:
      "Développe ton esprit d’équipe et ta confiance en participant à des activités nautiques sécurisées.",
  },
  {
    title: "Navigation & Maritime Skills",
    image: "/assets/images/ntc-81years.png",
    description:
      "Découvre les fondamentaux de la navigation, la sécurité en mer et les techniques de survie maritime.",
  },
];

const ActivitiesShowcaseSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Nos Activités</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesShowcaseSection;
