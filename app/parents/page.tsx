import TestimonialsSimple from "@/components/TestimonialsSimple";

export default function ParentsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-ntcBlue mb-8 text-center">For Parents & Leaders</h1>

      {/* PARENTS SECTION */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-ntcBlue mb-4">Information for Parents</h2>
        <p className="mb-4 text-gray-700">
          The Nautical Training Corps is a UK-based youth organisation for young people aged 8 to 18. We combine fun, discipline, and maritime heritage to help your child grow in confidence, skills, and leadership.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Safety First:</strong> All adult volunteers are DBS checked and trained in safeguarding.</li>
          <li><strong>Costs:</strong> Local units may charge small subs (usually £1–3/week). Uniforms are often loaned or subsidised.</li>
          <li><strong>Commitment:</strong> Cadets typically meet once or twice a week. Camps and parades are optional but highly rewarding.</li>
          <li><strong>Uniform & Equipment:</strong> Cadets wear smart naval-style uniform, provided by most units.</li>
          <li><strong>Activities:</strong> Sailing, drill, navigation, camps, competitions, and more.</li>
        </ul>
      </section>

      {/* LEADERS & VOLUNTEERS SECTION */}
      <section>
        <h2 className="text-2xl font-semibold text-ntcBlue mb-4">Become a Leader or Volunteer</h2>
        <p className="mb-4 text-gray-700">
          We’re always looking for dedicated adult volunteers to help run units, teach skills, or support events. No naval experience required — just commitment and a willingness to inspire.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>DBS checks & safeguarding training</strong> are mandatory for all volunteers.</li>
          <li>Opportunities include: <em>Instructors, Officers, Admin Support, Camp Staff</em>.</li>
          <li>Training and guidance is provided by Headquarters and senior officers.</li>
          <li>You’ll be helping shape the next generation — and it’s rewarding, too.</li>
        </ul>

        <div className="mt-8 bg-blue-50 p-6 rounded-xl shadow text-center">
          <h3 className="text-lg font-semibold mb-2">Interested in Helping?</h3>
          <p className="mb-4">Reach out to your local unit or <a href="/contact" className="text-ntcBlue underline">contact NTC Headquarters</a> to learn more about volunteering.</p>
          <a href="/contact" className="inline-block bg-ntcBlue text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Get in Touch
          </a>
        </div>
      </section>
      <TestimonialsSimple />
    </main>

    
  );
}
