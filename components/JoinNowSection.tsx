"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JoinNowSection() {
  return (
    <section className="bg-ntcBlue text-white py-20 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your NTC Adventure?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join over 1,000 young people across the UK learning new skills, meeting friends, and
          building confidence.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link href="#find-ship">
            <Button className="bg-white text-ntcBlue hover:bg-gray-100 font-semibold text-lg px-6 py-3 rounded-xl">
              Find a Training Ship
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold text-lg px-6 py-3 rounded-xl">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
