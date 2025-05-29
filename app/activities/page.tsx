"use client";
import { motion } from "framer-motion";
import { Compass, Waves, Trophy, Users, Heart, Anchor, Star, Ship, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

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

export default function ActivitiesPage() {
  const activities = [
    {
      icon: Anchor,
      title: "Drill & Being Awesome Together! 💪",
      description: "Learn super cool parade moves, work as an amazing team, and discover what it feels like to be part of something special! It's like synchronized swimming but on land! 🌟",
      skills: ["Epic Parade Moves", "Naval Traditions", "Team Power!", "Self-Discipline"],
      difficulty: "Beginner",
      category: "training",
      color: "from-blue-500 to-purple-600",
      emoji: "⚓"
    },
    {
      icon: Compass,
      title: "Navigation & Sea Smarts! 🧭",
      description: "Become a real-life treasure hunter! Learn to read maps, use compasses, and navigate like the legendary sailors of old. You'll feel like a maritime detective! 🕵️‍♀️",
      skills: ["Treasure Map Reading", "Compass Magic", "Boat Mastery", "Sea Rules"],
      difficulty: "Intermediate",
      category: "seamanship",
      color: "from-green-500 to-emerald-600",
      emoji: "🗺️"
    },
    {
      icon: Waves,
      title: "Sailing & Epic Water Fun! 🌊",
      description: "Get ready to splash into adventure! Learn to sail like a pro, race through the waves, and discover why the water is our second home. Pure aquatic awesomeness! 💦",
      skills: ["Sailing Like a Pro", "Powerboat Racing", "Water Ninja Skills", "Weather Wisdom"],
      difficulty: "All Levels",
      category: "water",
      color: "from-cyan-500 to-blue-600",
      emoji: "⛵"
    },
    {
      icon: Trophy,
      title: "Competitions & Camp Adventures! 🏆",
      description: "Summer camps that are pure magic and competitions where you can show off your amazing skills! Make memories that'll last forever and friendships that are unbreakable! ✨",
      skills: ["Competition Champion", "Band Rockstar", "Team Captain", "Event Master"],
      difficulty: "Advanced",
      category: "events",
      color: "from-purple-500 to-pink-600",
      emoji: "🎉"
    },
    {
      icon: Heart,
      title: "Community Heroes & Fun Events! ❤️",
      description: "Be a real-life superhero in your community! Join parades, help others, and show everyone how awesome NTC cadets are. Making the world better, one adventure at a time! 🦸‍♂️",
      skills: ["Public Speaking Pro", "Event Planning", "Community Champion", "History Detective"],
      difficulty: "All Levels",
      category: "community",
      color: "from-pink-500 to-red-600",
      emoji: "🌟"
    },
    {
      icon: Users,
      title: "Leadership & Becoming Amazing! 👑",
      description: "Ready to become the leader you were born to be? Guide younger cadets, organize epic activities, and discover your inner superhero powers! Leadership has never been this fun! 🚀",
      skills: ["Team Leadership", "Amazing Speaking", "Smart Decisions", "Mentoring Magic"],
      difficulty: "Advanced",
      category: "leadership",
      color: "from-orange-500 to-red-600",
      emoji: "👑"
    }
  ];

  const categories = [
    { id: "all", label: "All Adventures", icon: Star, emoji: "🌟" },
    { id: "training", label: "Training Fun", icon: Anchor, emoji: "⚓" },
    { id: "seamanship", label: "Sea Skills", icon: Compass, emoji: "🧭" },
    { id: "water", label: "Water Fun", icon: Waves, emoji: "🌊" },
    { id: "events", label: "Epic Events", icon: Trophy, emoji: "🎉" },
    { id: "community", label: "Hero Work", icon: Heart, emoji: "❤️" },
    { id: "leadership", label: "Leadership", icon: Users, emoji: "👑" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-200 text-green-800 border-green-300 font-bold";
      case "Intermediate": return "bg-yellow-200 text-yellow-800 border-yellow-300 font-bold";
      case "Advanced": return "bg-red-200 text-red-800 border-red-300 font-bold";
      default: return "bg-blue-200 text-blue-800 border-blue-300 font-bold";
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Fun Hero Section */}
      <motion.div 
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating fun elements */}
        <div className="absolute top-0 left-10 animate-bounce">
          <div className="bg-yellow-400 rounded-full p-3">
            <Star className="w-6 h-6 text-blue-800" />
          </div>
        </div>
        <div className="absolute top-10 right-10 animate-pulse">
          <div className="bg-pink-400 rounded-full p-3">
            <Heart className="w-6 h-6 text-purple-800" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full px-6 py-3 inline-flex items-center gap-2 mb-6">
          <Waves className="w-5 h-5 text-blue-600" />
          <span className="text-blue-800 font-bold">Epic Adventures Await! 🚀</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Amazing Activities for <span className="text-yellow-500">YOU!</span> 🎉
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Get ready for the most incredible adventures ever! From sailing the seas to becoming 
          an awesome leader, we've got activities that'll make you go "WOW!" every single time! ⚓✨
        </p>
      </motion.div>

      {/* Fun Activity Categories Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8 bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-2xl">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 text-xs lg:text-sm rounded-xl data-[state=active]:bg-white data-[state=active]:text-blue-800 data-[state=active]:font-bold transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg">{category.emoji}</span>
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {activities
                  .filter(activity => category.id === "all" || activity.category === category.id)
                  .map((activity, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 border-3 hover:border-purple-300 group bg-gradient-to-br from-white to-blue-50 rounded-2xl overflow-hidden">
                        <CardHeader className="pb-4 relative">
                          <div className="absolute top-4 right-4 text-3xl animate-bounce">
                            {activity.emoji}
                          </div>
                          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                            <activity.icon className="w-10 h-10 text-white" />
                          </div>
                          <CardTitle className="text-xl text-blue-800 group-hover:text-purple-600 transition-colors font-bold">
                            {activity.title}
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={`${getDifficultyColor(activity.difficulty)} text-xs px-3 py-1 rounded-full`}>
                              {activity.difficulty} ⭐
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                            {activity.description}
                          </p>
                          <div>
                            <h4 className="font-bold text-blue-800 mb-3 text-lg">Super Cool Skills You'll Learn:</h4>
                            <div className="flex flex-wrap gap-2">
                              {activity.skills.map((skill, skillIndex) => (
                                <Badge 
                                  key={skillIndex} 
                                  variant="secondary" 
                                  className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 border border-blue-200 rounded-full px-3 py-1 font-medium"
                                >
                                  {skill} ✨
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      {/* Fun Age Groups Section */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Adventures for <span className="text-purple-600">Every Age!</span> 🎂
          </h2>
          <p className="text-xl text-gray-600">No matter how old you are, we've got the perfect adventure waiting for you!</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Little Adventurers! 🌟",
              age: "7-11 years",
              focus: "Fun, games, and magical first steps into seamanship!",
              activities: ["Super fun drill games", "Amazing knot tricks", "Epic maritime stories", "Awesome team adventures"],
              color: "from-green-400 to-emerald-500",
              emoji: "🎮",
              bgGradient: "from-green-50 to-emerald-100"
            },
            {
              title: "Adventure Masters! 🚀",
              age: "12-15 years",
              focus: "Skill building and incredible adventures await!",
              activities: ["Navigation wizardry", "Sailing like pros", "Leadership superpowers", "Epic competitions"],
              color: "from-blue-400 to-cyan-500",
              emoji: "⚡",
              bgGradient: "from-blue-50 to-cyan-100"
            },
            {
              title: "Future Leaders! 👑",
              age: "16-18 years",
              focus: "Leadership mastery and advanced epic training!",
              activities: ["Officer training academy", "Teaching little ones", "Advanced sailing mastery", "Event planning genius"],
              color: "from-purple-400 to-pink-500",
              emoji: "🎯",
              bgGradient: "from-purple-50 to-pink-100"
            }
          ].map((group, index) => (
            <Card key={index} className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 border-3 hover:border-purple-300 bg-gradient-to-br ${group.bgGradient} rounded-2xl overflow-hidden`}>
              <CardHeader className="relative">
                <div className="absolute top-4 right-4 text-4xl animate-pulse">
                  {group.emoji}
                </div>
                <div className={`w-full h-3 rounded-full bg-gradient-to-r ${group.color} mb-6 shadow-lg`}></div>
                <CardTitle className="text-2xl text-blue-800 font-bold">{group.title}</CardTitle>
                <CardDescription className="text-xl font-bold text-purple-600">{group.age}</CardDescription>
                <p className="text-gray-700 text-lg font-medium">{group.focus}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {group.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center gap-3 text-gray-800 text-lg">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Epic Call to Action */}
      <motion.div 
        className="mt-20 text-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Fun floating elements around CTA */}
        <div className="absolute -top-6 left-1/4 animate-bounce">
          <div className="bg-yellow-400 rounded-full p-2">
            <Zap className="w-5 h-5 text-purple-800" />
          </div>
        </div>
        <div className="absolute -top-6 right-1/4 animate-bounce delay-1000">
          <div className="bg-pink-400 rounded-full p-2">
            <Ship className="w-5 h-5 text-blue-800" />
          </div>
        </div>
        
        <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white border-0 rounded-3xl overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10">
              <Anchor className="w-16 h-16" />
            </div>
            <div className="absolute bottom-10 right-10">
              <Waves className="w-20 h-20" />
            </div>
          </div>
          
          <CardContent className="py-16 relative z-10">
            <div className="text-6xl mb-6">🚀⚓🌊</div>
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your EPIC Adventure?</h2>
            <p className="text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join thousands of amazing young adventurers who've discovered their superpowers through the NTC! 
              Your incredible journey starts NOW! 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/find-ship">
                <motion.div
                  className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 text-center cursor-pointer text-xl border-4 border-yellow-400"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🗺️ Find Your Adventure Base!
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  className="border-4 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center cursor-pointer text-xl"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💬 Let's Chat!
                </motion.div>
              </Link>
            </div>
            <div className="mt-8 text-yellow-300 text-lg font-medium">
              ✨ Adventure is calling... will you answer? ✨
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}