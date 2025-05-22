'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/activities", label: "Activities" },
    { href: "/news", label: "News" },
    { href: "/find-ship", label: "Find a Ship" },
    { href: "/parents", label: "Parents" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full px-4 py-4 relative flex items-center">
        {/* Logo & Title - fully left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="NTC Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-ntcBlue font-extrabold text-xl whitespace-nowrap">
              Nautical Training Corps
            </span>
          </Link>
        </div>

        {/* Desktop Menu - perfectly centered */}
        <div className="hidden md:flex justify-center w-full gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-ntcBlue font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button - right side */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ntcBlue"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu below navbar */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4 flex flex-col gap-3 text-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-ntcBlue font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
