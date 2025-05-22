"use client";
import { motion } from "framer-motion";
import { Compass, Waves, Trophy, Users, Heart, Anchor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      title: "Drill and Discipline",
      description: "Drill training develops discipline, teamwork, and respect for naval customs, forming a key part of cadet life.",
      skills: ["Parade Drill", "Naval Traditions", "Team Coordination", "Self-Discipline"],
      difficulty: "Beginner",
      category: "training",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Compass,
      title: "Seamanship and Navigation",
      description: "Cadets learn boating, navigation, map reading, and compass skills, following a curriculum inspired by Merchant Navy traditions.",
      skills: ["Chart Reading", "Compass Navigation", "Boat Handling", "Maritime Law"],
      difficulty: "Intermediate",
      category: "seamanship",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Waves,
      title: "Sailing and Watersports",
      description: "Practical sailing lessons and watersports at the NSTC Lion and local Ships introduce cadets to real maritime experiences.",
      skills: ["Dinghy Sailing", "Powerboating", "Water Safety", "Weather Reading"],
      difficulty: "All Levels",
      category: "water",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Trophy,
      title: "Camps and Competitions",
      description: "Summer camps and competitions such as the National Band & Colour Competition build camaraderie and allow cadets to showcase skills.",
      skills: ["Competition Drill", "Band Performance", "Team Leadership", "Event Planning"],
      difficulty: "Advanced",
      category: "events",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Community Service and Events",
      description: "Participation in maritime heritage visits, Founder's Day parades, and community projects fosters pride and responsibility.",
      skills: ["Public Speaking", "Event Organization", "Community Engagement", "Heritage Knowledge"],
      difficulty: "All Levels",
      category: "community",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Advanced cadets take on leadership roles, mentoring younger members and organizing unit activities.",
      skills: ["Team Management", "Public Speaking", "Decision Making", "Mentoring"],
      difficulty: "Advanced",
      category: "leadership",
      color: "from-orange-500 to-red-500"
    }
  ];

  const categories = [
    { id: "all", label: "All Activities", icon: Anchor },
    { id: "training", label: "Training", icon: Anchor },
    { id: "seamanship", label: "Seamanship", icon: Compass },
    { id: "water", label: "Water Sports", icon: Waves },
    { id: "events", label: "Events", icon: Trophy },
    { id: "community", label: "Community", icon: Heart },
    { id: "leadership", label: "Leadership", icon: Users }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="outline" className="mb-4 text-ntcBlue border-ntcBlue">
          <Waves className="w-4 h-4 mr-2" />
          Adventure Awaits
        </Badge>
        <h1 className="text-5xl font-bold text-ntcBlue mb-6 bg-gradient-to-r from-ntcBlue to-blue-600 bg-clip-text text-transparent">
          Activities for Cadets
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From seamanship and sailing to leadership and community service, discover the exciting range of activities that make the NTC experience unforgettable.
        </p>
      </motion.div>

      {/* Activity Categories Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2 text-xs lg:text-sm"
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
                      <Card className="h-full hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-ntcBlue/20 group">
                        <CardHeader className="pb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <activity.icon className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-xl text-slate-800 group-hover:text-ntcBlue transition-colors">
                            {activity.title}
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={getDifficultyColor(activity.difficulty)}>
                              {activity.difficulty}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 leading-relaxed mb-6">
                            {activity.description}
                          </p>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-3">Skills You'll Learn:</h4>
                            <div className="flex flex-wrap gap-2">
                              {activity.skills.map((skill, skillIndex) => (
                                <Badge 
                                  key={skillIndex} 
                                  variant="secondary" 
                                  className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200"
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
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Activities by Age Group</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Junior Cadets",
              age: "7-11 years",
              focus: "Fun, games, and basic seamanship",
              activities: ["Basic drill", "Knot tying", "Maritime stories", "Team games"],
              color: "from-green-400 to-green-500"
            },
            {
              title: "Cadets",
              age: "12-15 years",
              focus: "Skill development and adventure",
              activities: ["Navigation training", "Sailing courses", "Leadership roles", "Competitions"],
              color: "from-blue-400 to-blue-500"
            },
            {
              title: "Senior Cadets",
              age: "16-18 years",
              focus: "Leadership and advanced training",
              activities: ["Officer training", "Teaching juniors", "Advanced sailing", "Event planning"],
              color: "from-purple-400 to-purple-500"
            }
          ].map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-ntcBlue/20">
              <CardHeader>
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${group.color} mb-4`}></div>
                <CardTitle className="text-xl text-slate-800">{group.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-ntcBlue">{group.age}</CardDescription>
                <p className="text-slate-600">{group.focus}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {group.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-ntcBlue rounded-full"></div>
                      {activity}
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
        <Card className="bg-gradient-to-br from-ntcBlue to-blue-600 text-white border-0">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of young people who have discovered their potential through the NTC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-ntcBlue px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Your Local Unit
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-ntcBlue transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}