"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function VideoSection() {
  return (
    <section id="video" className="bg-blue-100 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-ntcBlue mb-4">See Us in Action</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Take a look at what NTC life is really like — hands-on, high-energy, and packed with adventure.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardContent className="p-4">
          <Label className="block text-lg font-medium text-gray-800 mb-2">NTC Promotional Video</Label>
          <video
            controls
            className="rounded-xl w-full h-auto max-h-[600px] shadow"
          >
            <source src="/videos/ntc-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </Card>
    </section>
  );
}
