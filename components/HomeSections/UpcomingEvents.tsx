import React from 'react';
import { CalendarDays } from 'lucide-react';

const events = [
  {
    date: 'June 15, 2025',
    title: 'Summer Leadership Camp',
    description: 'A 3-day training event focused on leadership, survival skills, and team building.',
  },
  {
    date: 'July 8, 2025',
    title: 'National Parade in London',
    description: 'Cadets from all over the UK will gather in central London for our official annual parade.',
  },
  {
    date: 'August 20, 2025',
    title: 'Maritime Safety Workshop',
    description: 'Learn about water safety, rescue protocols, and navigation basics.',
  },
];

const UpcomingEvents = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Upcoming Events</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4 text-blue-700">
                <CalendarDays className="w-5 h-5 mr-2" />
                <span className="text-sm">{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
