"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Star, Anchor, Filter, Trophy, Users, Heart, Compass } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  featured: boolean;
  readTime: string;
}

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

// CHANGE THIS TO YOUR ADMIN WEBSITE URL
const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:3001';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Stories", icon: Star },
    { id: "events", label: "Events", icon: Calendar },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "training", label: "Training", icon: Anchor },
    { id: "community", label: "Community", icon: Heart },
    { id: "news", label: "General News", icon: Compass }
  ];

  // Fetch news from admin API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const categoryParam = selectedCategory === "all" ? "" : `?category=${selectedCategory}`;
        const response = await fetch(`${ADMIN_API_URL}/api/public/news${categoryParam}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        setNewsItems(data);
        setError(null);
      } catch (err) {
        setError('Failed to load news articles');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory]);

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

  const featuredNews = newsItems.filter(item => item.featured);

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Error Loading News</h1>
          <p className="text-gray-600">{error}</p>
          <Button onClick={() => window.location.reload()} className="mt-4">
            Try Again
          </Button>
        </div>
      </main>
    );
  }

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

      {/* Loading State */}
      {loading && (
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading news articles...</p>
        </div>
      )}

      {/* Featured Stories */}
      {!loading && featuredNews.length > 0 && (
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
      {!loading && (
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
      )}

      {/* All News Stories */}
      {!loading && (
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
              {newsItems.length} {newsItems.length === 1 ? 'story' : 'stories'} available
            </p>
          </div>

          <div className="grid gap-6">
            {newsItems.map((item, index) => (
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
      )}

      {/* Call to Action */}
      {!loading && (
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
      )}
    </main>
  );
}