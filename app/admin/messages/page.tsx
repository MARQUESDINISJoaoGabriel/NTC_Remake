"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader, Mail, User, CalendarDays } from "lucide-react";
import { format } from "date-fns";

export default function AdminMessages() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin-auth");
    if (!isAuthenticated) {
      router.push("/admin/login");
      return;
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/messages");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error("Error fetching messages", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 flex flex-col min-h-screen">
        <Loader className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 flex flex-col min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Contact Messages</h1>
      <div className="space-y-6">
        {messages.length === 0 ? (
          <p className="text-slate-500">No messages received yet.</p>
        ) : (
          messages.map((msg) => (
            <Card key={msg.id}>
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {msg.firstName} {msg.lastName}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-700">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" /> {msg.email}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-slate-500" />
                  {format(new Date(msg.date), "dd MMM yyyy, HH:mm")}
                </p>
                <div className="mt-2 border-t pt-4 text-slate-600">
                  {msg.message}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </main>
  );
}
