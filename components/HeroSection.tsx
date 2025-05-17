"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" /> 

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Adventure Starts Here</h1>
        <p className="text-lg md:text-xl text-white/80 mb-6">
          Join the Nautical Training Corps – where future leaders learn discipline, skills, and teamwork.
        </p>
        <a
          href="#why-join"
          className="inline-block bg-ntcBlue hover:bg-blue-900 transition px-6 py-3 rounded-full text-white text-sm font-semibold"
        >
          Find Out More
        </a>
      </motion.div>
    </section>
  );
}
