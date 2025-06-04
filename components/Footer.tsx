import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Mail, MapPin} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="NTC Logo"
                  width={48}
                  height={48}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Nautical Training Corps
                </h3>
                <p className="text-slate-400 text-sm">Est. 1944</p>
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed max-w-md mb-6">
              Empowering young people through adventure, teamwork, and leadership.
              Building character and confidence for over 80 years.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a 
                  href="mailto:info@ntc.org.uk" 
                  className="hover:text-blue-400 transition-colors"
                >
                  info@ntc.org.uk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Registered Charity No: 306084</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/activities", label: "Activities" },
                { href: "/news", label: "News" },
                { href: "/find-ship", label: "Find a Ship" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              {[
                { href: "/parents", label: "Parents" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "admin/login", label: "Admin"},
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Nautical Training Corps. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-slate-400 text-sm">Follow us:</span>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/TheNauticalTrainingCorps/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://x.com/1ntc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}