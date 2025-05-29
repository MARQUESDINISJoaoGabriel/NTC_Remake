"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Trash } from "lucide-react";

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function AdminNewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin-auth");
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }
    fetchNews();
  }, [router]);

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error("Failed to fetch news", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!title || !content) return;
    const res = await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content })
    });
    if (res.ok) {
      setTitle("");
      setContent("");
      fetchNews();
    }
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchNews();
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 flex flex-col min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Manage News</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="News Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            rows={4}
            placeholder="News Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button onClick={handleAdd} className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5" /> Add News
          </Button>
        </CardContent>
      </Card>

      {loading ? (
        <p>Loading news...</p>
      ) : news.length === 0 ? (
        <p className="text-slate-500">No news available.</p>
      ) : (
        <div className="space-y-4">
          {news.map((item) => (
            <Card key={item._id}>
              <CardHeader className="flex justify-between items-start">
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="text-xs text-slate-500 mt-1">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(item._id)}
                  className="text-red-500 hover:bg-red-50"
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="text-slate-700">
                {item.content}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
