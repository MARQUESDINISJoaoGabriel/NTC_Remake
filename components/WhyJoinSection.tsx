const benefits = [
  {
    icon: "🛶",
    title: "Try Sailing",
    desc: "Get on the water and learn how to command real boats.",
  },
  {
    icon: "🥁",
    title: "Join the Band",
    desc: "Drum, bugle, and march in real public parades.",
  },
  {
    icon: "🎖️",
    title: "Wear a Uniform",
    desc: "Look sharp in an official NTC uniform and earn your badges.",
  },
  {
    icon: "🎉",
    title: "Make Friends",
    desc: "Meet other cadets from all over the country at events and camps.",
  },
];

export default function WhyJoinSection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join the NTC?</h2>
        <p className="text-lg text-gray-600">
          Whether you're into boats, bands, or badges — there's something for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition transform"
          >
            <div className="text-4xl mb-4">{b.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-gray-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
