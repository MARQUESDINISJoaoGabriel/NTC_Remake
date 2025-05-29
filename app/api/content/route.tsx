import { NextResponse } from "next/server";

export async function GET() {
  const fakeContent = [
    {
      _id: "section001",
      key: "home_hero",
      title: "Welcome to the Nautical Training Corps",
      body: "Empowering youth through adventure, leadership and maritime training since 1944."
    },
    {
      _id: "section002",
      key: "about_us_intro",
      title: "Who We Are",
      body: "We are a voluntary youth organisation offering exciting activities inspired by naval traditions."
    },
    {
      _id: "section003",
      key: "mission_statement",
      title: "Our Mission",
      body: "To build confident, disciplined, and capable young citizens through structured experiences on land and at sea."
    }
  ];

  return NextResponse.json(fakeContent);
}
