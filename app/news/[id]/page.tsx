// MAIN WEBSITE - app/news/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Star, Anchor, Share2, Bookmark, Trophy, Users, Heart, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  category: string;
  featured: boolean;
  readTime: string;
}

interface RelatedArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  featured: boolean;
  readTime: string;
}

const categories = [
  { id: "events", label: "Events", icon: Calendar },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "training", label: "Training", icon: Anchor },
  { id: "community", label: "Community", icon: Heart },
  { id: "news", label: "General News", icon: Compass }
];

// CHANGE THIS TO YOUR ADMIN WEBSITE URL
const ADMIN_API_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:3001';

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
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<RelatedArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        
        // Fetch the main article
        const articleResponse = await fetch(`${ADMIN_API_URL}/api/public/news/${params.id}`);
        if (articleResponse.status === 404) {
          notFound();
          return;
        }
        if (!articleResponse.ok) {
          throw new Error('Failed to fetch article');
        }
        
        const articleData = await articleResponse.json();
        setArticle(articleData);
        
        // Fetch related articles (limited to 2)
        const relatedResponse = await fetch(`${ADMIN_API_URL}/api/public/news?limit=4`);
        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();
          // Filter out current article and limit to 2
          const filtered = relatedData
            .filter((item: RelatedArticle) => item.id !== params.id)
            .slice(0, 2);
          setRelatedArticles(filtered);
        }
        
        setError(null);
      } catch (err) {
        setError('Failed to load article');
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [params.id]);

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Error Loading Article</h1>
          <p className="text-gray-600">{error || 'Article not found'}</p>
          <Link href="/news">
            <Button className="mt-4">Back to News</Button>
          </Link>
        </div>
      </main>
    );
  }

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
        {relatedArticles.length > 0 && (
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
                  {relatedArticles.map((relatedArticle) => (
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
        )}
      </motion.article>
    </main>
  );
}