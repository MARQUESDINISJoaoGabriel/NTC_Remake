import { newsItems } from "@/data/news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-10">
      <h1 className="text-4xl font-bold text-ntcBlue text-center mb-10">News & Events</h1>

      {newsItems.map((item) => (
        <article key={item.id} className="border-b pb-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{new Date(item.date).toDateString()}</p>
          <p className="text-gray-700 mb-2">{item.summary}</p>
          <Link href={`/news/${item.id}`} className="text-ntcBlue hover:underline">Read full story</Link>
        </article>
      ))}
    </main>
  );
}
