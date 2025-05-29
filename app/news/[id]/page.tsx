"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Star, Heart, Anchor, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock news data - replace with your actual data import
const newsItems = [
  {
    id: "1",
    title: "Epic Summer Camp 2024 - Best Adventure Yet!",
    date: "2024-08-15",
    summary: "Our cadets had the most incredible summer camp ever! From sailing adventures to leadership challenges, friendships were made and skills were mastered. Check out the amazing photos and stories!",
    category: "events",
    featured: true,
    readTime: "3 min",
    content: `What an absolutely INCREDIBLE week we've had at NTC Summer Camp 2024! 🏕️⚓

Our amazing cadets from across the UK came together for seven days of pure maritime magic at our beautiful camp location. From the moment they arrived with their kit bags and huge smiles, we knew this was going to be something special!

## Epic Adventures Every Day! 🌟

**Monday - Welcome Aboard!**
The week kicked off with our traditional "Welcome Aboard" ceremony where new and returning cadets got to know each other through fun team-building games. The energy was incredible right from the start!

**Tuesday - Sailing Like Pros!** ⛵
Our sailing instructors were blown away by how quickly everyone picked up the skills. From complete beginners to advanced sailors, everyone pushed their boundaries and achieved things they never thought possible!

**Wednesday - Leadership Challenges!** 👑
Teams worked together on our famous treasure hunt challenge, learning navigation, teamwork, and problem-solving. The creativity and determination shown by our cadets was absolutely inspiring!

**Thursday - Community Heroes!** ❤️
We organized a beach clean-up that made a real difference to our local environment. Over 50 bags of rubbish collected and countless new friendships formed!

**Friday - Skills Showcase!**
Our final day celebration saw cadets demonstrating everything they'd learned. From knot-tying competitions to drill displays, everyone had their moment to shine!

## Friendships That Will Last Forever! 🤝

But the best part? The incredible friendships formed during the week. We watched shy cadets become confident leaders, saw experienced members become amazing mentors, and witnessed the true spirit of the NTC family in action.

One 14-year-old cadet told us: "I came here nervous and unsure, but I'm leaving with best friends and skills I never knew I had. This has been the best week of my life!"

## What's Next? 🚀

Plans are already underway for Summer Camp 2025, and we can't wait to make it even more amazing! If you missed out this year, don't worry - there will be plenty more opportunities to join our incredible NTC adventures.

Ready to be part of the magic? Contact your local Training Ship to find out about upcoming camps and activities!`
  },
  {
    id: "2",
    title: "New Training Ships Join Our Fleet!",
    date: "2024-07-28",
    summary: "Three new Training Ships have officially joined the NTC family! Welcome to TS Victory, TS Adventure, and TS Explorer. These units are already making waves with their enthusiastic cadets.",
    category: "news",
    featured: false,
    readTime: "2 min",
    content: "Full content for article 2..."
  }
];

const categories = [
  { id: "events", label: "Epic Events", emoji: "🎉", color: "from-green-500 to-emerald-500" },
  { id: "achievements", label: "Achievements", emoji: "🏆", color: "from-yellow-500 to-orange-500" },
  { id: "training", label: "Training Fun", emoji: "⚓", color: "from-cyan-500 to-blue-500" },
  { id: "community", label: "Community", emoji: "❤️", color: "from-pink-500 to-red-500" },
  { id: "news", label: "General News", emoji: "📰", color: "from-purple-500 to-pink-500" }
];

const getCategoryInfo = (category: string) => {
  const cat = categories.find(c => c.id === category);
  return cat || { id: "news", label: "News", emoji: "📰", color: "from-blue-500 to-purple-500" };
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

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = newsItems.find((n) => n.id === params.id);
  if (!article) return notFound();

  const categoryInfo = getCategoryInfo(article.category);

  // Format content with proper line breaks and styling
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-blue-800 mt-8 mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            {paragraph.replace('## ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-bold text-purple-600 mt-6 mb-3">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      } else if (paragraph.trim() === '') {
        return <div key={index} className="h-4"></div>;
      } else {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4 text-lg">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 relative">
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

      {/* Back Navigation */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/news">
          <Button className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-2 border-blue-200 hover:from-blue-200 hover:to-purple-200 rounded-2xl px-6 py-3 font-bold group transition-all duration-300 hover:scale-105">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            🏠 Back to All Epic Stories!
          </Button>
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.article
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="bg-gradient-to-br from-white to-blue-50 border-4 border-purple-200 rounded-3xl overflow-hidden shadow-2xl mb-8">
          <CardContent className="p-8 md:p-12">
            {/* Category and Featured Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className={`bg-gradient-to-r ${categoryInfo.color} text-white font-bold px-4 py-2 rounded-full text-sm`}>
                <span className="mr-2">{categoryInfo.emoji}</span>
                {categoryInfo.label}
              </Badge>
              {article.featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 font-bold px-4 py-2 rounded-full">
                  ⭐ FEATURED STORY!
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{getTimeAgo(article.date)}</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-medium">{article.readTime} read ⏱️</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 rounded-full px-4 py-2">
                <ThumbsUp className="w-5 h-5 text-green-600" />
                <span className="font-medium">Epic Story! 🌟</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-3 font-bold group">
                <Share2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Share This Epic Story! 🚀
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-6 py-3 font-bold group">
                <Bookmark className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Save for Later! 📚
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {formatContent(article.content)}
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t-2 border-blue-100">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <Anchor className="w-6 h-6 text-blue-600" />
                    Want to Be Part of These Amazing Adventures? 🌟
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Every story in the NTC starts with someone taking that first brave step to join our incredible family! 
                    Ready to create your own epic adventures and amazing memories? ⚓✨
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-3 font-bold hover:scale-105 transition-all duration-300">
                        🚀 Start My Adventure!
                      </Button>
                    </Link>
                    <Link href="/activities">
                      <Button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-3 font-bold hover:scale-105 transition-all duration-300">
                        🎯 See All Activities!
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Stories */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center gap-3">
                <Star className="w-7 h-7 text-yellow-500" />
                More Epic Stories You'll Love! 📖
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {newsItems
                  .filter(item => item.id !== article.id)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`}>
                      <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-2 hover:border-orange-300 rounded-2xl">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${getCategoryInfo(relatedArticle.category).color} flex items-center justify-center`}>
                              <span className="text-lg">{getCategoryInfo(relatedArticle.category).emoji}</span>
                            </div>
                            <Badge variant="outline" className="text-xs font-bold">
                              {getCategoryInfo(relatedArticle.category).label}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-blue-800 mb-2 hover:text-purple-600 transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedArticle.summary}
                          </p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                            <span>{getTimeAgo(relatedArticle.date)}</span>
                            <span>{relatedArticle.readTime} read</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.article>
    </main>
  );
}