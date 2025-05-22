"use client";

import { Music, Compass, LifeBuoy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    title: "Marching Band",
    description: "Play drums, bugles, and more in parades and national events.",
    icon: <Music className="w-6 h-6 text-ntcBlue" />,
  },
  {
    title: "Boating & Sailing",
    description: "Learn to handle boats safely on lakes and coastal waters.",
    icon: <LifeBuoy className="w-6 h-6 text-ntcBlue" />,
  },
  {
    title: "Field Camps",
    description: "Overnight and weekend camps build friendship and skills.",
    icon: <Compass className="w-6 h-6 text-ntcBlue" />,
  },
  {
    title: "Teamwork & Citizenship",
    description: "Take part in civic events and represent your community.",
    icon: <Users className="w-6 h-6 text-ntcBlue" />,
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="bg-blue-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-ntcBlue mb-4">
          What You’ll Get Up To
        </h2>
        <p className="text-gray-700 mb-12 max-w-xl mx-auto">
          Cadets take part in exciting activities that build real-world skills, discipline, and fun!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, idx) => (
            <Card key={idx} className="transition hover:shadow-md">
              <CardContent className="p-6 text-left">
                <div className="mb-3">{activity.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
