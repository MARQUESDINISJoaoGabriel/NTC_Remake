"use client";

import  React, { useState }  from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Star, Zap, Heart, Anchor, Trophy, Users, ArrowRight, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock news data - replace with your actual data import
const newsItems = [
  {
    id: 1,
    title: "Epic Summer Camp 2024 - Best Adventure Yet!",
    date: "2024-08-15",
    summary: "Our cadets had the most incredible summer camp ever! From sailing adventures to leadership challenges, friendships were made and skills were mastered. Check out the amazing photos and stories!",
    category: "events",
    featured: true,
    readTime: "3 min"
  },
  {
    id: 2,
    title: "New Training Ships Join Our Fleet!",
    date: "2024-07-28",
    summary: "Three new Training Ships have officially joined the NTC family! Welcome to TS Victory, TS Adventure, and TS Explorer. These units are already making waves with their enthusiastic cadets.",
    category: "news",
    featured: false,
    readTime: "2 min"
  },
  {
    id: 3,
    title: "National Competition Success - Our Cadets Are Champions!",
    date: "2024-07-10",
    summary: "What an incredible performance at the National Band & Colour Competition! Our cadets brought home multiple awards and showed everyone what teamwork and dedication can achieve.",
    category: "achievements",
    featured: true,
    readTime: "4 min"
  },
  {
    id: 4,
    title: "Community Heroes - Beach Clean Up Success!",
    date: "2024-06-22",
    summary: "Our amazing cadets rolled up their sleeves for a massive beach clean-up event! Over 200 cadets from 15 Training Ships worked together to make our coastlines cleaner and better for everyone.",
    category: "community",
    featured: false,
    readTime: "2 min"
  },
  {
    id: 5,
    title: "Advanced Sailing Course Graduation Ceremony",
    date: "2024-06-08",
    summary: "Congratulations to all our cadets who completed the Advanced Sailing Course! Their skills on the water are now absolutely incredible, and we couldn't be prouder of their achievements.",
    category: "training",
    featured: false,
    readTime: "3 min"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Stories", emoji: "🌟", color: "from-blue-500 to-purple-500" },
    { id: "events", label: "Epic Events", emoji: "🎉", color: "from-green-500 to-emerald-500" },
    { id: "achievements", label: "Achievements", emoji: "🏆", color: "from-yellow-500 to-orange-500" },
    { id: "training", label: "Training Fun", emoji: "⚓", color: "from-cyan-500 to-blue-500" },
    { id: "community", label: "Community", emoji: "❤️", color: "from-pink-500 to-red-500" },
    { id: "news", label: "General News", emoji: "📰", color: "from-purple-500 to-pink-500" }
  ];

  const getCategoryInfo = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat || categories[0];
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Yesterday! 🌟";
    if (diffDays < 7) return `${diffDays} days ago! ⭐`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago! 📅`;
    return `${Math.ceil(diffDays / 30)} months ago! 📆`;
  };

  const filteredNews = selectedCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 relative">
      {/* Fun floating elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <div className="bg-yellow-400 rounded-full p-3">
          <Star className="w-6 h-6 text-blue-800" />
        </div>
      </div>
      <div className="absolute top-20 right-20 animate-pulse">
        <div className="bg-pink-400 rounded-full p-3">
          <Heart className="w-6 h-6 text-purple-800" />
        </div>
      </div>

      {/* Epic Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full px-6 py-3 inline-flex items-center gap-2 mb-6">
          <Zap className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800 font-bold">Latest Epic Adventures! 📰</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Amazing NTC <span className="text-yellow-500">News!</span> 🎉
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Stay up to date with all the incredible adventures, awesome achievements, and epic events 
          happening across our amazing NTC family! Every story is a celebration! 🌟⚓
        </p>
      </motion.div>

      {/* Featured Stories */}
      {featuredNews.length > 0 && (
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              Featured Epic Stories! 🌟
            </h2>
            <p className="text-gray-600">The most incredible adventures happening right now!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 border-4 hover:border-yellow-300 bg-gradient-to-br from-white to-blue-50 rounded-3xl overflow-hidden">
                  <CardHeader className="relative pb-4">
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 font-bold px-3 py-1 rounded-full">
                        ⭐ FEATURED!
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${getCategoryInfo(item.category).color} flex items-center justify-center`}>
                        <span className="text-2xl">{getCategoryInfo(item.category).emoji}</span>
                      </div>
                      <div>
                        <Badge variant="outline" className="text-xs font-bold text-blue-600 border-blue-300">
                          {getCategoryInfo(item.category).label}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-blue-800 leading-tight hover:text-purple-600 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {item.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {getTimeAgo(item.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime} read
                        </span>
                      </div>
                      <Link href={`/news/${item.id}`}>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-2 font-bold group">
                          Read More! 
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Category Filter */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-2 flex items-center justify-center gap-2">
            <Filter className="w-6 h-6" />
            Filter by Epic Category! 🎯
          </h3>
          <p className="text-gray-600">Find exactly the kind of awesome stories you want to read!</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-2xl px-6 py-3 font-bold transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
              }`}
            >
              <span className="text-lg mr-2">{category.emoji}</span>
              {category.label}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* All News Stories */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            {selectedCategory === "all" ? "All Our Amazing Stories! 📚" : `${getCategoryInfo(selectedCategory).emoji} ${getCategoryInfo(selectedCategory).label} Stories!`}
          </h2>
          <p className="text-gray-600">
            {filteredNews.length} incredible {filteredNews.length === 1 ? 'story' : 'stories'} to discover!
          </p>
        </div>

        <div className="grid gap-8">
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeInUp}
              className="group"
            >
              <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-102 border-2 hover:border-purple-300 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${getCategoryInfo(item.category).color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <span className="text-3xl">{getCategoryInfo(item.category).emoji}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs font-bold text-blue-600 border-blue-300 rounded-full px-3 py-1">
                          {getCategoryInfo(item.category).label}
                        </Badge>
                        {item.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 font-bold rounded-full px-3 py-1">
                            ⭐ Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h2>
                      
                      <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                        {item.summary}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-2 font-medium">
                            <Calendar className="w-4 h-4" />
                            {getTimeAgo(item.date)}
                          </span>
                          <span className="flex items-center gap-2 font-medium">
                            <Clock className="w-4 h-4" />
                            {item.readTime} read ⏱️
                          </span>
                        </div>
                        
                        <Link href={`/news/${item.id}`}>
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 font-bold group-hover:scale-105 transition-all duration-300">
                            🌟 Read the Full Epic Story! 
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white border-0 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10">
              <Anchor className="w-16 h-16" />
            </div>
            <div className="absolute bottom-10 right-10">
              <Users className="w-20 h-20" />
            </div>
          </div>
          
          <CardContent className="py-16 relative z-10">
            <div className="text-6xl mb-6">📰⚓🌟</div>
            <h2 className="text-4xl font-bold mb-6">Want to Be Part of These Amazing Stories?</h2>
            <p className="text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Every adventure starts with a single step! Join our incredible NTC family and 
              become the star of your own epic story! 🚀✨
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.div
                  className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 text-center cursor-pointer text-xl border-4 border-yellow-400"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌟 Start My Adventure!
                </motion.div>
              </Link>
              <Link href="/activities">
                <motion.div
                  className="border-4 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center cursor-pointer text-xl"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎯 See All Activities!
                </motion.div>
              </Link>
            </div>
            <div className="mt-8 text-yellow-300 text-lg font-medium">
              ⚓ Your epic adventure awaits! ⚓
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}