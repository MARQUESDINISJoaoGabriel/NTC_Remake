"use client"

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Charlie, age 11",
    quote: "The Nautical Training Corps gave me the confidence to speak on parade and sail a boat!",
  },
  {
    name: "Emily, age 15",
    quote: "I made my best friends at summer camp. We still talk every day.",
  },
  {
    name: "Liam, age 13",
    quote: "I love marching with the band and showing my badges to family.",
  },
  {
    name: "Sophie, age 14",
    quote: "The training helped me learn teamwork and leadership skills I use every day.",
  },
  {
    name: "Jacob, age 12",
    quote: "I never thought I'd love sailing so much. It’s the best part of my week!",
  },
  {
    name: "Ava, age 16",
    quote: "NTC made me feel part of a big family and taught me responsibility.",
  },
  {
    name: "Ethan, age 10",
    quote: "I look forward to every parade and camp. It’s so much fun!",
  },
  {
    name: "Isla, age 13",
    quote: "Before NTC, I was shy. Now I lead drills and help new cadets feel welcome.",
  },
  {
    name: "Noah, age 14",
    quote: "The boating weekends are amazing. I’ve learned how to navigate and tie proper knots.",
  },
  {
    name: "Grace, age 12",
    quote: "I earned my first badge last month and I’ve never been prouder!",
  },
  {
    name: "Mason, age 15",
    quote: "NTC taught me how to take responsibility and stay focused during challenges.",
  },
  {
    name: "Lily, age 11",
    quote: "My favourite memory is sailing during sunset with my squad. I’ll never forget it.",
  },
  {
    name: "Oliver, age 13",
    quote: "The band practices are loud, fun, and full of energy. I love every minute.",
  },
  {
    name: "Freya, age 10",
    quote: "Campfire nights, learning songs, and stories with friends are the best!",
  },
  {
    name: "Harry, age 16",
    quote: "NTC gave me real skills and a sense of purpose. I’m thinking of joining the Navy now.",
  },
];


export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (  
    <section className="bg-gray-100 py-16 px-4 text-center">  
      <h2 className="text-3xl font-bold mb-8">What Cadets Say</h2>  
    
      <div className="max-w-2xl mx-auto relative h-40">   
        <AnimatePresence mode="wait">   
          <motion.div   
            key={index}   
            initial={{ opacity: 0, y: 20 }}   
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -20 }}   
            transition={{ duration: 0.6 }}  
            className="text-xl italic text-gray-700"  
          >   
            “{testimonials[index].quote}”   
            <div className="mt-4 text-sm font-semibold text-ntcBlue">   
              – {testimonials[index].name}  
            </div>  
          </motion.div>   
        </AnimatePresence>  
      </div>  
    </section>  
  );  
}   