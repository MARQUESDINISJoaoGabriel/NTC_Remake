import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (

    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Nautical Training Corps has empowered young people across the UK since 1944,
            building confidence, maritime skills, and lifelong friendships.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through discipline, teamwork, and real-world adventure, cadets grow into strong leaders with
            respect for tradition and service.
          </p>
        </div>

        <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/ntc-cadets.jpg"
            alt="NTC cadets in training"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

