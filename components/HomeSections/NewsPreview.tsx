"use client"

import { newsItems } from "@/data/news";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function NewsPreview() {
  const latest = newsItems.slice(0, 2);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-ntcBlue mb-8 text-center">Latest News</h2>
        <div className="space-y-6">
          {latest.map((item) => (
            <Card key={item.id} className="border-b pb-4">
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{new Date(item.date).toDateString()}</p>
                <p className="text-gray-700">{item.summary}</p>
                <Link
                  href={`/news/${item.id}`}
                  className="text-ntcBlue font-medium inline-block mt-2 hover:underline"
                >
                  Read more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/news">More News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}