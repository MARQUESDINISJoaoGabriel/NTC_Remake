"use client";
import { motion } from "framer-motion";
import { Compass, Waves, Trophy, Users, Heart, Anchor, Star, Ship } from "lucide-react";
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
      title: "Drill & Ceremonial Training",
      description: "Master precision drill movements and ceremonial procedures that build discipline, teamwork, and respect for naval traditions. Develop the sharp coordination skills that set NTC cadets apart.",
      skills: ["Parade Drill", "Naval Traditions", "Team Coordination", "Self-Discipline"],
      difficulty: "Beginner",
      category: "training"
    },
    {
      icon: Compass,
      title: "Navigation & Seamanship",
      description: "Learn essential maritime navigation skills including chart reading, compass work, and coastal navigation. Develop the technical expertise that forms the backbone of professional seamanship.",
      skills: ["Chart Reading", "Compass Navigation", "Boat Handling", "Maritime Law"],
      difficulty: "Intermediate",
      category: "seamanship"
    },
    {
      icon: Waves,
      title: "Sailing & Watersports",
      description: "Experience the thrill of sailing while developing practical boat handling skills. From dinghy sailing to powerboating, master the water in all conditions and build real confidence on the waves.",
      skills: ["Dinghy Sailing", "Powerboat Operations", "Water Safety", "Weather Assessment"],
      difficulty: "All Levels",
      category: "water"
    },
    {
      icon: Trophy,
      title: "Competitions & Events",
      description: "Compete at regional and national levels, showcasing your skills in drill, seamanship, and band competitions. Experience the intensity of competition while representing your unit with pride.",
      skills: ["Competition Performance", "Band & Music", "Team Leadership", "Event Organization"],
      difficulty: "Advanced",
      category: "events"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Make a real difference in your community through organized service projects, heritage events, and public ceremonies. Develop civic responsibility while representing the values of the NTC.",
      skills: ["Public Speaking", "Event Planning", "Community Engagement", "Heritage Knowledge"],
      difficulty: "All Levels",
      category: "community"
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Take on real responsibility as you progress through the ranks. Mentor younger cadets, organize activities, and develop the leadership skills that will serve you throughout your life.",
      skills: ["Team Management", "Public Speaking", "Decision Making", "Mentoring"],
      difficulty: "Advanced",
      category: "leadership"
    }
  ];

  const categories = [
    { id: "all", label: "All Activities", icon: Star },
    { id: "training", label: "Training", icon: Anchor },
    { id: "seamanship", label: "Seamanship", icon: Compass },
    { id: "water", label: "Watersports", icon: Waves },
    { id: "events", label: "Competitions", icon: Trophy },
    { id: "community", label: "Community", icon: Heart },
    { id: "leadership", label: "Leadership", icon: Users }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-blue-50 text-blue-800 border-blue-200";
      case "Intermediate": return "bg-yellow-50 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-50 text-red-800 border-red-200";
      default: return "bg-gray-50 text-gray-800 border-gray-200";
    }
  };

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

      {/* Activity Categories Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8 bg-gray-100 p-2 rounded-lg">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 text-xs lg:text-sm rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-800 data-[state=active]:shadow-sm transition-all duration-300"
              >
                <category.icon className="w-4 h-4" />
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
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 group bg-white rounded-lg overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                            <activity.icon className="w-6 h-6 text-white" />
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
                            <h4 className="font-semibold text-blue-900 mb-3">Skills You'll Develop:</h4>
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
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      {/* Age Groups Section */}
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

      {/* Call to Action */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Card className="bg-blue-900 text-white border-0 rounded-lg overflow-hidden relative">
          {/* Background pattern */}
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
              Join thousands of young people who've discovered their potential through the NTC. 
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
    </main>
  );
}