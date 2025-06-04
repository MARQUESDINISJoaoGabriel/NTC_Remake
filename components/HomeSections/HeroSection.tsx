import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Vidéo en fond */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Contenu central */}
      <div className="relative z-20 text-center px-4">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image src="/images/logo.png" alt="NTC Logo" width={300} height={300} />
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Join the Nautical Adventure</h1>

        {/* Sous-texte */}
        <p className="text-lg md:text-xl mb-6">Discipline, Leadership, Maritime Skills</p>

        {/* Bouton */}
        <a
          href="#join"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
        >
          Join Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
