// site-vitrine/app/news/page.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type NewsItem = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function NewsListPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/admin/news')
      .then((res) => res.json())
      .then(setNews)
      .catch((err) => console.error('Erreur chargement news', err));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Actualités</h1>
      <ul className="space-y-4">
        {news.map((n) => (
          <li key={n.id} className="border p-4 rounded">
            <Link href={`/news/${n.id}`}>
              <h2 className="text-xl font-semibold">{n.title}</h2>
              <p className="text-gray-500 text-sm">
                {new Date(n.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-2 line-clamp-2">{n.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
