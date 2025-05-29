"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Star, Anchor, Trophy, Users, ArrowRight, Filter, Heart, Compass } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock news data - replace with your actual data import
const newsItems = [
  {
    id: 1,
    title: "Summer Camp 2024 - Outstanding Success",
    date: "2024-08-15",
    summary: "Our cadets achieved exceptional results at this year's summer camp. From advanced sailing techniques to leadership development, participants demonstrated remarkable progress in all areas of training.",
    category: "events",
    featured: true,
    readTime: "3 min"
  },
  {
    id: 2,
    title: "New Training Ships Join Our Fleet",
    date: "2024-07-28",
    summary: "Three new Training Ships have officially joined the NTC network. TS Victory, TS Adventure, and TS Explorer are already operational with dedicated cadets and experienced officers.",
    category: "news",
    featured: false,
    readTime: "2 min"
  },
  {
    id: 3,
    title: "National Competition Victory",
    date: "2024-07-10",
    summary: "Outstanding performance at the National Band & Colour Competition. Our cadets secured multiple awards, demonstrating the excellence of their training and dedication to the organization.",
    category: "achievements",
    featured: true,
    readTime: "4 min"
  },
  {
    id: 4,
    title: "Community Beach Clean-Up Initiative",
    date: "2024-06-22",
    summary: "Over 200 cadets from 15 Training Ships participated in a coordinated beach clean-up operation. The initiative demonstrates our commitment to environmental stewardship and community service.",
    category: "community",
    featured: false,
    readTime: "2 min"
  },
  {
    id: 5,
    title: "Advanced Sailing Course Graduation",
    date: "2024-06-08",
    summary: "Congratulations to all cadets who successfully completed the Advanced Sailing Course. Their enhanced skills and qualifications represent significant personal and professional development.",
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
    { id: "all", label: "All Stories", icon: Star },
    { id: "events", label: "Events", icon: Calendar },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "training", label: "Training", icon: Anchor },
    { id: "community", label: "Community", icon: Heart },
    { id: "news", label: "General News", icon: Compass }
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
    
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const filteredNews = selectedCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-full px-6 py-2 inline-flex items-center gap-2 mb-6">
          <Anchor className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800 font-semibold">Latest Updates</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
          NTC News & Events
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Stay informed about achievements, activities, and developments across the NTC community. 
          Every story represents the dedication and progress of our cadets and officers.
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-yellow-500" />
              Featured Stories
            </h2>
            <p className="text-gray-600">Highlighting our most significant recent developments</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 bg-white rounded-lg overflow-hidden">
                  <CardHeader className="relative pb-4">
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200 font-semibold px-3 py-1 rounded-full">
                        Featured
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                        {React.createElement(getCategoryInfo(item.category).icon, { 
                          className: "w-5 h-5 text-white" 
                        })}
                      </div>
                      <Badge variant="outline" className="text-xs font-semibold text-blue-700 border-blue-200">
                        {getCategoryInfo(item.category).label}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-blue-900 leading-tight hover:text-blue-700 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">
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
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-semibold group">
                          Read More
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
          <h3 className="text-2xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-2">
            <Filter className="w-6 h-6" />
            Filter by Category
          </h3>
          <p className="text-gray-600">Browse stories by topic area</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-lg px-6 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {React.createElement(category.icon, { className: "w-4 h-4 mr-2" })}
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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            {selectedCategory === "all" ? "All Stories" : `${getCategoryInfo(selectedCategory).label} Stories`}
          </h2>
          <p className="text-gray-600">
            {filteredNews.length} {filteredNews.length === 1 ? 'story' : 'stories'} available
          </p>
        </div>

        <div className="grid gap-6">
          {filteredNews.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeInUp}
              className="group"
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-102 border border-gray-200 bg-white rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                        {React.createElement(getCategoryInfo(item.category).icon, { 
                          className: "w-8 h-8 text-white" 
                        })}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs font-semibold text-blue-700 border-blue-200 rounded-md px-3 py-1">
                          {getCategoryInfo(item.category).label}
                        </Badge>
                        {item.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200 font-semibold rounded-md px-3 py-1">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h2>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {item.summary}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {getTimeAgo(item.date)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {item.readTime} read
                          </span>
                        </div>
                        
                        <Link href={`/news/${item.id}`}>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-semibold group-hover:scale-105 transition-all duration-300">
                            Read Full Story
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
        <Card className="bg-blue-900 text-white border-0 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10">
              <Anchor className="w-16 h-16" />
            </div>
            <div className="absolute bottom-10 right-10">
              <Users className="w-20 h-20" />
            </div>
          </div>
          
          <CardContent className="py-16 relative z-10">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Anchor className="w-8 h-8 text-yellow-400" />
              <Trophy className="w-8 h-8 text-white" />
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Own Story?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Every achievement starts with taking the first step. Join the NTC community and 
              become part of our ongoing story of excellence and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.div
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 text-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.div>
              </Link>
              <Link href="/activities">
                <motion.div
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 text-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Activities
                </motion.div>
              </Link>
            </div>
            <div className="mt-6 text-blue-200">
              Your journey begins here
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}