// site-vitrine/app/news/[id]/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type NewsItem = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function NewsDetailPage() {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/api/admin/news/${id}`)
      .then((res) => res.json())
      .then(setNews)
      .catch((err) => console.error('Erreur chargement détail', err));
  }, [id]);

  if (!news) return <div>Chargement...</div>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{news.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        {new Date(news.createdAt).toLocaleDateString()}
      </p>
      <p>{news.content}</p>
    </main>
  );
}
