"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin-auth");
    if (!isAuthenticated) {
      router.push("/admin/login");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  };

  return (
    <main className="max-w-4xl mx-auto py-20 px-4 flex flex-col min-h-screen">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Admin Dashboard</CardTitle>
          <Button variant="outline" onClick={logout}>Logout</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <Button className="w-full" onClick={() => router.push("/admin/news")}>Manage News</Button>
            <Button className="w-full" onClick={() => router.push("/admin/content")}>Edit Site Content</Button>
            <Button className="w-full" onClick={() => router.push("/admin/messages")}>View Contact Messages</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}