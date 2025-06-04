"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Waves, Trophy, Users, Heart, Anchor, Star, Ship } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  skills: string[];
  published: boolean;
}

interface Category {
  id: string;
  label: string;
  count: number;
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
const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL;

// Icon mapping for categories
const categoryIcons = {
  all: Star,
  training: Anchor,
  seamanship: Compass,
  water: Waves,
  events: Trophy,
  community: Heart,
  leadership: Users
};

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch activities and categories from admin API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories with counts
        const categoriesResponse = await fetch(`${ADMIN_API_URL}/api/public/activities/categories`);
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        }

        // Fetch activities based on selected category
        const categoryParam = selectedCategory === "all" ? "" : `?category=${selectedCategory}`;
        const activitiesResponse = await fetch(`${ADMIN_API_URL}/api/public/activities${categoryParam}`);
        
        if (!activitiesResponse.ok) {
          throw new Error("Failed to fetch activities");
        }
        
        const activitiesData = await activitiesResponse.json();
        setActivities(activitiesData);
        setError(null);
      } catch (err) {
        setError("Failed to load activities");
        console.error("Error fetching activities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const getCategoryIcon = (categoryId: string) => {
    return categoryIcons[categoryId as keyof typeof categoryIcons] || Star;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-blue-50 text-blue-800 border-blue-200";
      case "Intermediate": return "bg-yellow-50 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-50 text-red-800 border-red-200";
      case "All Levels": return "bg-green-50 text-green-800 border-green-200";
      default: return "bg-gray-50 text-gray-800 border-gray-200";
    }
  };

  const getActivityIcon = (category: string) => {
    return getCategoryIcon(category);
  };

  if (error) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Error Loading Activities</h1>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-full px-6 py-2 inline-flex items-center gap-2 mb-6">
          <Anchor className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800 font-semibold">Discover Your Potential</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
          Activities & Training
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Challenge yourself with diverse activities that build real skills, lasting friendships, and 
          the confidence to tackle anything life throws your way.
        </p>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading activities...</p>
        </div>
      )}

      {/* Activity Categories Tabs */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8 bg-gray-100 p-2 rounded-lg">
              {categories.map((category) => {
                const CategoryIcon = getCategoryIcon(category.id);
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 text-xs lg:text-sm rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-800 data-[state=active]:shadow-sm transition-all duration-300"
                  >
                    <CategoryIcon className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      {category.label}
                      <span className="ml-1 text-xs opacity-70">({category.count})</span>
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {activities.map((activity) => {
                    const ActivityIcon = getActivityIcon(activity.category);
                    return (
                      <motion.div key={activity.id} variants={fadeInUp}>
                        <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 group bg-white rounded-lg overflow-hidden">
                          <CardHeader className="pb-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                              <ActivityIcon className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-xl text-blue-900 group-hover:text-blue-700 transition-colors font-bold">
                              {activity.title}
                            </CardTitle>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className={`${getDifficultyColor(activity.difficulty)} text-xs px-3 py-1 rounded-full border`}>
                                {activity.difficulty}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 leading-relaxed mb-6">
                              {activity.description}
                            </p>
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-3">Skills You"ll Develop:</h4>
                              <div className="flex flex-wrap gap-2">
                                {activity.skills.map((skill, skillIndex) => (
                                  <Badge 
                                    key={skillIndex} 
                                    variant="secondary" 
                                    className="text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-md px-2 py-1"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      )}

      {/* Age Groups Section - Same as before */}
      {!loading && (
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Progression by Age Group
            </h2>
            <p className="text-xl text-gray-600">Structured development pathways for every stage</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Junior Cadets",
                age: "7-11 years",
                focus: "Foundation skills and introduction to maritime activities",
                activities: ["Basic drill training", "Knot work & seamanship", "Maritime heritage", "Team building exercises"],
                color: "border-blue-200 bg-blue-50"
              },
              {
                title: "Cadets",
                age: "12-15 years",
                focus: "Skill development and practical application",
                activities: ["Advanced navigation", "Sailing proficiency", "Leadership opportunities", "Competition participation"],
                color: "border-yellow-200 bg-yellow-50"
              },
              {
                title: "Senior Cadets",
                age: "16-18 years",
                focus: "Leadership roles and advanced training",
                activities: ["Officer training", "Junior instructor roles", "Advanced qualifications", "Event coordination"],
                color: "border-red-200 bg-red-50"
              }
            ].map((group, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 ${group.color} rounded-lg overflow-hidden`}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 font-bold">{group.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-gray-700">{group.age}</CardDescription>
                  <p className="text-gray-600">{group.focus}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {group.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
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
                <Waves className="w-20 h-20" />
              </div>
              <div className="absolute top-10 right-10">
                <Ship className="w-14 h-14" />
              </div>
            </div>
            
            <CardContent className="py-16 relative z-10">
              <div className="flex justify-center items-center gap-4 mb-6">
                <Anchor className="w-8 h-8 text-yellow-400" />
                <Ship className="w-8 h-8 text-white" />
                <Waves className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Ready to Take on the Challenge?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join thousands of young people who"ve discovered their potential through the NTC. 
                Every skill you learn, every challenge you overcome, shapes who you become.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/find-ship">
                  <motion.div
                    className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 text-center cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Find Your Local Unit
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <motion.div
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 text-center cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get More Information
                  </motion.div>
                </Link>
              </div>
              <div className="mt-6 text-blue-200">
                Your journey starts here
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </main>
  );
}