"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

interface ContentSection {
  _id: string;
  key: string;
  title: string;
  body: string;
}

export default function AdminContentPage() {
  const router = useRouter();
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin-auth");
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }
    fetchSections();
  }, [router]);

  const fetchSections = async () => {
    try {
      const res = await fetch("/api/content");
      const data = await res.json();
      setSections(data);
    } catch (error) {
      console.error("Error loading content", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (section: ContentSection) => {
    const res = await fetch(`/api/content/${section._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: section.title, body: section.body })
    });
    if (res.ok) fetchSections();
  };

  const handleChange = (id: string, field: "title" | "body", value: string) => {
    setSections(prev =>
      prev.map(section =>
        section._id === id ? { ...section, [field]: value } : section
      )
    );
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Edit Site Content</h1>
      {loading ? (
        <p>Loading content...</p>
      ) : sections.length === 0 ? (
        <p className="text-slate-500">No content found.</p>
      ) : (
        <div className="space-y-6">
          {sections.map(section => (
            <Card key={section._id}>
              <CardHeader>
                <CardTitle>Edit: {section.key}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={section.title}
                  onChange={(e) => handleChange(section._id, "title", e.target.value)}
                  placeholder="Section Title"
                />
                <Textarea
                  value={section.body}
                  onChange={(e) => handleChange(section._id, "body", e.target.value)}
                  rows={5}
                  placeholder="Section Body"
                />
                <Button onClick={() => handleSave(section)} className="flex gap-2">
                  <Save className="w-4 h-4" /> Save Changes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
