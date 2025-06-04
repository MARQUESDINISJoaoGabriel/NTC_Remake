import { NextResponse } from "next/server";
const newsItems = [
  {
    id: "1",
    title: "Welcome Aboard!",
    date: "2025-05-20T10:00:00Z",
    summary: "We are excited to welcome new cadets to the NTC...",
    content: "We are proud to announce our next event..."
  }
];

export async function GET() {
  return NextResponse.json(newsItems);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newItem = {
    ...body,
    id: Date.now().toString(),
    date: new Date().toISOString()
  };
  newsItems.push(newItem);
  return NextResponse.json(newItem);
}