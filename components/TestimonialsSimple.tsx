"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function TestimonialsSimple() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const quotes = [
    {
      name: "Sarah Mitchell",
      role: "Parent of Cadet",
      text: "The NTC has been transformational for my daughter. She's gained so much confidence and leadership skills that I see in her everyday life. The officers are dedicated and the activities are both fun and educational.",
      rating: 5,
      avatar: "SM",
      location: "Portsmouth",
    },
    {
      name: "Commander David Richards",
      role: "Unit Officer",
      text: "Volunteering with the NTC has been incredibly rewarding. Watching young people develop into confident leaders while having adventures they'll never forget - there's nothing quite like it.",
      rating: 5,
      avatar: "DR",
      location: "Southampton",
    },
    {
      name: "Lisa Thompson",
      role: "Parent of Two Cadets",
      text: "Both my children have thrived in the NTC. The discipline, teamwork, and friendship they've gained is invaluable. It's wonderful to see them so excited about their weekly meetings.",
      rating: 5,
      avatar: "LT",
      location: "Liverpool",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, quotes.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="max-w-6xl mx-auto my-20 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-ntcBlue px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Quote className="w-4 h-4" />
          Testimonials
        </div>
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          What Our Community Says
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Hear from parents, cadets, and officers about their experiences with the Nautical Training Corps
        </p>
      </div>

      {/* Main Testimonial Display */}
      <div className="relative">
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 mb-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full translate-y-12 -translate-x-12 opacity-50" />
          
          {/* Quote icon */}
          <div className="absolute top-6 left-6">
            <Quote className="w-8 h-8 text-ntcBlue opacity-30" />
          </div>

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(quotes[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-xl md:text-2xl text-slate-700 text-center leading-relaxed mb-8 max-w-4xl mx-auto">
              "{quotes[currentIndex].text}"
            </blockquote>

            {/* Author info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-ntcBlue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {quotes[currentIndex].avatar}
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-800 text-lg">
                  {quotes[currentIndex].name}
                </div>
                <div className="text-ntcBlue font-medium">
                  {quotes[currentIndex].role}
                </div>
                <div className="text-slate-500 text-sm">
                  {quotes[currentIndex].location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200 hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-ntcBlue scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200 hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      {/* All testimonials preview */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {quotes.map((quote, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? 'border-ntcBlue bg-blue-50 shadow-lg'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-ntcBlue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {quote.avatar}
              </div>
              <div>
                <div className="font-semibold text-slate-800">{quote.name}</div>
                <div className="text-xs text-slate-500">{quote.role}</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 line-clamp-3">"{quote.text}"</p>
            <div className="flex gap-1 mt-3">
              {[...Array(quote.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-12">
        <p className="text-slate-600 mb-4">Ready to join our community?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-ntcBlue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-200 hover:shadow-lg">
            Find Your Local Unit
          </button>
          <button className="border-2 border-ntcBlue text-ntcBlue px-8 py-3 rounded-full font-semibold hover:bg-ntcBlue hover:text-white transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}