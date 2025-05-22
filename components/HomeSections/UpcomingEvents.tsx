"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Summer Camp 2025",
    date: "July 22–28",
    location: "Isle of Wight",
    badge: "Overnight",
  },
  {
    title: "National Band Parade",
    date: "June 9",
    location: "Portsmouth",
    badge: "Public Event",
  },
  {
    title: "Sailing Regatta",
    date: "August 12",
    location: "Brighton Marina",
    badge: "Competition",
  },
  {
    title: "Cadet Open Day",
    date: "May 31",
    location: "Training Ship Aurora",
    badge: "Try It!",
  },
];

export function UpcomingEvents() {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          Activities, camps, parades, and more — see what’s coming up soon.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {events.map((event, idx) => (
          <Card key={idx} className="bg-gray-100">
            <CardContent className="p-6">
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                {event.date}
              </div>
              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{event.location}</p>
              <Badge variant="default" className="bg-ntcBlue text-white">
                {event.badge}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}