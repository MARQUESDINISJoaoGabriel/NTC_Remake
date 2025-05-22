'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
        : 'bg-white shadow-md'
    }`}>
      <div className="w-full px-4 py-4 relative flex items-center">
        {/* Logo & Title - fully left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="NTC Logo"
                width={44}
                height={44}
                priority
                className="group-hover:scale-110 transition-transform duration-300"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-ntcBlue font-extrabold text-xl whitespace-nowrap group-hover:text-blue-600 transition-colors">
                Nautical Training Corps
              </span>
              <div className="text-xs text-slate-500 font-medium">Est. 1944</div>
            </div>
          </Link>
        </div>

        {/* Desktop Menu - perfectly centered */}
        <div className="hidden lg:flex justify-center w-full">
          <div className="flex items-center gap-1 bg-slate-50 rounded-full px-2 py-1 border border-slate-200">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 hover:text-ntcBlue font-medium rounded-full transition-all duration-200 hover:bg-white hover:shadow-sm group"
              >
                {link.label}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-ntcBlue group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2">
          <Link
            href="/join"
            className="bg-gradient-to-r from-ntcBlue to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Button - right side */}
        <div className="ml-auto lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-ntcBlue hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="relative">
              <Menu size={24} className={`transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X size={24} className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu below navbar */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg py-4 px-4 flex flex-col gap-1 border-t border-slate-200">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-ntcBlue hover:bg-slate-50 font-medium py-3 px-4 rounded-lg transition-all duration-200 text-center"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="bg-gradient-to-r from-ntcBlue to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center mt-2 hover:shadow-lg transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}