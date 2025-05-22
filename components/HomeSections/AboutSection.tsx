"use client";

import  Image  from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-blue-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 content-center">
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
          <p className="text-gray-700 text-base">
            With local training ships across the UK, our mission is to inspire the next generation
            of confident, capable young people.
          </p>
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mt-6">
            <Image
              src="/images/ntc-cadets.jpg"
              alt="NTC cadets on parade"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-auto">
          <Image
            src="/images/ntc-cadets2.jpg"
            alt="NTC cadets on parade"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
