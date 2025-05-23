import Link from "next/link";

export default function FindShipSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Local Training Ship</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Enter your postcode or browse a map to find your nearest NTC unit.
      </p>
      <Link
        href="/ships"
        className="bg-ntcBlue text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-900 transition"
      >
        Find a Unit Near Me
      </Link>
    </section>
  );
}
