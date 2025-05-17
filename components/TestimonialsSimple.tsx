"use client";

export default function TestimonialsSimple() {
  const quotes = [
    // TODO: Replace these placeholders with real parent/leader quotes from NTC HQ
    {
      name: "Parent Name",
      role: "Parent of Cadet",
      text: "“[Real quote from a parent about trust, safety, and benefits]”",
    },
    {
      name: "Leader Name",
      role: "Unit Officer",
      text: "“[Real quote from an officer about volunteering rewards and cadet growth]”",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto my-16 px-6 text-center">
      <h2 className="text-2xl font-semibold text-ntcBlue mb-8">Voices of Parents & Leaders</h2>
      <div className="space-y-8">
        {quotes.map((q, i) => (
          <blockquote key={i} className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="italic text-gray-800 mb-4">{q.text}</p>
            <footer className="font-semibold text-ntcBlue">
              {q.name}, <span className="text-gray-600">{q.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
