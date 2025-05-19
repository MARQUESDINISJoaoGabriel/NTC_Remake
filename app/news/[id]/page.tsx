import { newsItems } from "@/data/news";
import { notFound } from "next/navigation";

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = newsItems.find((n) => n.id === params.id);
  if (!article) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(article.date).toDateString()}</p>
      <div className="prose max-w-none">
        <p>{article.content}</p>
      </div>
    </main>
  );
}
