"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/activities", label: "Activities" },
    { href: "/find-ship", label: "Find a Ship" },
    { href: "/contact", label: "Contact" },
    { href: "/parents", label: "Parents" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-ntcBlue font-extrabold text-xl">
          Nautical Training Corps
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ntcBlue"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`md:flex gap-6 ${isOpen ? "block mt-4" : "hidden"} md:mt-0`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-ntcBlue font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
