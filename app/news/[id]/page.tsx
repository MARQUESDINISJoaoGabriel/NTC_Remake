"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Star, Anchor, Share2, Bookmark, Trophy, Users, Heart, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock news data - replace with your actual data import
const newsItems = [
  {
    id: "1",
    title: "Summer Camp 2024 - Outstanding Success",
    date: "2024-08-15",
    summary: "Our cadets achieved exceptional results at this year's summer camp. From advanced sailing techniques to leadership development, participants demonstrated remarkable progress in all areas of training.",
    category: "events",
    featured: true,
    readTime: "3 min",
    content: `The 2024 NTC Summer Camp has concluded with outstanding success, bringing together cadets from across the UK for an intensive week of maritime training and personal development.

## Program Highlights

**Day 1 - Orientation & Team Building**
The week commenced with comprehensive orientation sessions and structured team-building activities. New and returning cadets were integrated through carefully designed exercises that established strong group dynamics from the outset.

**Day 2 - Advanced Sailing Training**
Sailing instruction progressed from foundational techniques to advanced maneuvers. Instructors noted exceptional skill development across all experience levels, with beginners mastering basic sailing principles and experienced cadets advancing to complex navigation techniques.

**Day 3 - Leadership Development**
Cadets participated in challenging leadership scenarios including navigation exercises and team coordination tasks. The activities emphasized problem-solving, communication, and decision-making under pressure.

**Day 4 - Community Service Project**
Environmental stewardship took center stage with a coordinated beach conservation effort. The project collected significant amounts of marine debris while reinforcing the NTC's commitment to environmental responsibility.

**Day 5 - Skills Assessment & Recognition**
The final day featured comprehensive skills demonstrations, allowing cadets to showcase their newly acquired competencies. Recognition ceremonies highlighted individual achievements and team accomplishments.

## Personal Development Outcomes

The camp's structured environment facilitated significant personal growth among participants. Cadets developed increased confidence, enhanced leadership capabilities, and strengthened peer relationships that extend beyond the training period.

One participant reflected: "The experience challenged me to develop skills I didn't know I possessed. The combination of technical training and leadership development has given me confidence that will benefit me in all areas of life."

## Looking Forward

Planning for the 2025 summer camp is already underway, with enhancements based on this year's successful outcomes. The program continues to evolve while maintaining its core focus on maritime excellence and character development.

Interested cadets should contact their local Training Ship for information about future camp opportunities and preparation requirements.`
  },
  {
    id: "2",
    title: "New Training Ships Join Our Fleet",
    date: "2024-07-28",
    summary: "Three new Training Ships have officially joined the NTC network. TS Victory, TS Adventure, and TS Explorer are already operational with dedicated cadets and experienced officers.",
    category: "news",
    featured: false,
    readTime: "2 min",
    content: "Full content for article 2..."
  }
];

const categories = [
  { id: "events", label: "Events", icon: Calendar },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "training", label: "Training", icon: Anchor },
  { id: "community", label: "Community", icon: Heart },
  { id: "news", label: "General News", icon: Compass }
];

const getCategoryInfo = (category: string) => {
  const cat = categories.find(c => c.id === category);
  return cat || { id: "news", label: "News", icon: Compass };
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

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = newsItems.find((n) => n.id === params.id);
  if (!article) return notFound();

  const categoryInfo = getCategoryInfo(article.category);

  // Format content with proper line breaks and styling
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-blue-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-blue-700 mt-6 mb-3">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      } else if (paragraph.trim() === '') {
        return <div key={index} className="h-4"></div>;
      } else {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Back Navigation */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/news">
          <Button className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 rounded-lg px-6 py-3 font-semibold group transition-all duration-300">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to News
          </Button>
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg mb-8">
          <CardContent className="p-8 md:p-12">
            {/* Category and Featured Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                {React.createElement(categoryInfo.icon, { className: "w-4 h-4" })}
                {categoryInfo.label}
              </Badge>
              {article.featured && (
                <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200 font-semibold px-4 py-2 rounded-lg">
                  Featured
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{getTimeAgo(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{article.readTime} read</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-semibold group">
                <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Share Article
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-6 py-2 font-semibold group">
                <Bookmark className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Save for Later
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
          <Card className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {formatContent(article.content)}
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Anchor className="w-6 h-6 text-blue-600" />
                    Interested in Joining the NTC?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover the opportunities available through the NTC. From skill development to leadership training, 
                    we provide structured pathways for personal growth and achievement.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 rounded-lg px-6 py-3 font-bold">
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/activities">
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-6 py-3 font-semibold">
                        View Activities
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
          <Card className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-500" />
                Related Stories
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {newsItems
                  .filter(item => item.id !== article.id)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`}>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white border border-gray-200 rounded-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                              {React.createElement(getCategoryInfo(relatedArticle.category).icon, { 
                                className: "w-4 h-4 text-white" 
                              })}
                            </div>
                            <Badge variant="outline" className="text-xs font-semibold text-blue-700 border-blue-200">
                              {getCategoryInfo(relatedArticle.category).label}
                            </Badge>
                          </div>
                          <h4 className="font-bold text-blue-900 mb-2 hover:text-blue-700 transition-colors">
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