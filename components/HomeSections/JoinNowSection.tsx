"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function JoinNowSection() {
  return (
    <section className="bg-ntcBlue text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your NTC Adventure?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Over 1,000 cadets across the UK have discovered purpose, leadership, and lifelong friendships. Now it’s your turn.
        </p>
        <p className="text-md text-white/90">
          Fill out this quick form to let us know you're interested – our team will be in touch!
        </p>
      </div>

      <Card className="bg-white text-black max-w-2xl mx-auto">
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>

          <div>
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" placeholder="Your age" />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div>
            <Label htmlFor="location">Your Town or Postcode</Label>
            <Input id="location" placeholder="e.g. Portsmouth, PO1" />
          </div>

          <div>
            <Label htmlFor="referral">How did you hear about NTC?</Label>
            <Input id="referral" placeholder="e.g. Friend, School, Online..." />
          </div>

          <div>
            <Label htmlFor="motivation">Why do you want to join?</Label>
            <Textarea id="motivation" placeholder="Share a few words about your interest..." />
          </div>

          <Button className="bg-ntcBlue text-white hover:bg-blue-900 w-full">
            Submit Interest
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
