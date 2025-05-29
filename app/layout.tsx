import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nautical Training Corps",
  description: "Adventure. Discipline. Teamwork. Join the NTC today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className + " bg-white text-gray-900 dark:bg-slate-900 dark:text-slate-100"}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
