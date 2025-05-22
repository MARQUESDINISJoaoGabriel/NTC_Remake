"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-blue-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Text + Image */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-ntcBlue mb-4">About the NTC</h2>
          <p className="text-gray-700 text-lg mb-4">
            The Nautical Training Corps (NTC) is a youth organization for young people aged 8–18,
            providing training in leadership, citizenship, and maritime adventure.
          </p>
          <p className="text-gray-700 text-base mb-4">
            Founded in 1944, the NTC has a proud tradition of helping cadets grow through
            discipline, teamwork, and fun activities like sailing, parades, and band performances.
          </p>
          <p className="text-gray-700 text-base mb-6">
            With local training ships across the UK, our mission is to inspire the next generation
            of confident, capable young people.
          </p>

          {/* Image à gauche */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/ntc-cadets.jpg"
              alt="NTC cadets on parade"
              width={1000}
              height={667}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Right: Second image seulement */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/ntc-cadets2.jpg"
            alt="NTC cadets on parade"
            width={1000}
            height={667}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
