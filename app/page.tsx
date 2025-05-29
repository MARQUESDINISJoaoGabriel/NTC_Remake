// app/page.tsx
import HeroSection from "@/components/HomeSections/HeroSection";
import AboutSection from "@/components/HomeSections/AboutSection";
import WhyJoinSection from "@/components/HomeSections/WhyJoinSection";
import FindShipSection from "@/components/HomeSections/FindShipSection";
import { TestimonialCarousel } from '@/components/HomeSections/TestimonialCarousel';
import NewsPreview from "@/components/HomeSections/NewsPreview";
import UpcomingEvents from "@/components/HomeSections/UpcomingEvents";
import CadetPathSection from "@/components/HomeSections/CadetPathSection";
import ActivitiesSection from "@/components/HomeSections/ActivitiesSection";
import Quizz from "@/components/HomeSections/quizz";
import JoinNowSection from "@/components/HomeSections/JoinNowSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <FindShipSection />
      <TestimonialCarousel />
      <NewsPreview />
      <UpcomingEvents />
      <CadetPathSection />
      <ActivitiesSection />
      <Quizz />
      <JoinNowSection />
    </>
  );
}
