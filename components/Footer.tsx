import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Section 1 - Branding */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-2">
            <Image
              src="/images/logo.png"
              alt="NTC Logo"
              width={36}
              height={36}
            />
            <h3 className="text-lg font-bold text-ntcBlue">Nautical Training Corps</h3>
          </Link>
          <p>
            Empowering young people through adventure, teamwork, and leadership since 1944.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-ntcBlue">Home</Link></li>
            <li><Link href="/#about" className="hover:text-ntcBlue">About</Link></li>
            <li><Link href="/#activities" className="hover:text-ntcBlue">Activities</Link></li>
            <li><Link href="/contact" className="hover:text-ntcBlue">Contact</Link></li>
            <li><Link href="/parents" className="hover:text-ntcBlue">Parents</Link></li>
          </ul>
        </div>

        {/* Section 3 - Legal / Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="mb-2">
            Email: <a href="mailto:info@ntc.org.uk" className="text-ntcBlue">info@ntc.org.uk</a>
          </p>
          <p>Registered Charity No: 306084</p>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Nautical Training Corps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
