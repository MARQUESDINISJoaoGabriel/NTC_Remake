"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Waves,
  Trophy,
  Users,
  Heart,
  Anchor,
  Star,
  Ship,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";

// Icon mapping si tu enregistres l’icône dans chaque activité
const iconMap = {
  Anchor,
  Compass,
  Waves,
  Trophy,
  Users,
  Heart,
  Star,
  Ship,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<any[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/admin/activities");
        const data = await res.json();
        console.log("Fetched activities:", data);
        setActivities(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchActivities();
  }, []);

  const categories = [
    { id: "all", label: "Toutes", icon: Star },
    { id: "sport", label: "Sport", icon: Heart },
    { id: "education", label: "Éducation", icon: Compass },
    { id: "community", label: "Communauté", icon: Users },
    { id: "competition", label: "Compétition", icon: Trophy },
  ];

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Débutant":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermédiaire":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Avancé":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Activités</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Découvre des activités enrichissantes pour progresser, s’amuser et se
          challenger !
        </p>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 p-2 bg-gray-100 rounded-lg">
          {categories.map(({ id, label, icon: Icon }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow transition"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map(({ id }) => (
          <TabsContent key={id} value={id}>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {activities
                .filter((act) => id === "all" || act.category === id)
                .map((act, idx) => {
                  const Icon = iconMap[act.icon] || Star;
                  return (
                    <motion.div key={idx} variants={fadeInUp}>
                      <Card className="hover:shadow-lg hover:scale-[1.02] transition-all border border-gray-200 rounded-lg bg-white">
                        <CardHeader>
                          <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-md mb-3">
                            <Icon className="w-5 h-5" />
                          </div>
                          <CardTitle className="text-blue-900 font-semibold">
                            {act.title}
                          </CardTitle>
                          <Badge
                            className={`mt-2 ${getDifficultyColor(act.difficulty)} border rounded-full px-2 py-0.5 text-xs`}
                          >
                            {act.difficulty}
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-3">
                            {act.description}
                          </p>
                          <div className="text-xs font-medium text-blue-800">
                            {act.skills?.map((s: string, i: number) => (
                              <Badge
                                key={i}
                                className="mr-2 mb-2 bg-blue-50 text-blue-700 border border-blue-200"
                              >
                                {s}
                              </Badge>
                            ))}
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

      {/* Call to Action */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-blue-900 text-white py-12 px-6 rounded-lg relative overflow-hidden">
          <CardContent className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
            <p className="mb-6 max-w-xl mx-auto text-blue-100">
              Inscris-toi dès aujourd’hui pour découvrir des activités qui te
              feront progresser.
            </p>
            <Link href="/inscription">
              <motion.div
                className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md inline-block hover:bg-yellow-300 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rejoindre une activité
              </motion.div>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
