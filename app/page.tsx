// app/page.tsx
import HeroSection from "@/components/HomeSections/HeroSection";
import WhyJoinSection from "@/components/HomeSections/WhyJoinSection";
import FindShipSection from "@/components/HomeSections/FindShipSection";
import TestimonialCarousel from "@/components/HomeSections/TestimonialCarousel";
import UpcomingEvents from "@/components/HomeSections/UpcomingEvents";        
import AboutSection from "@/components/HomeSections/AboutSection";
import CadetPathSection from "@/components/HomeSections/CadetPathSection";
import ActivitiesSection from "@/components/HomeSections/ActivitiesSection";
import JoinNowSection from "@/components/HomeSections/JoinNowSection";
import NewsPreview from "@/components/HomeSections/NewsPreview";
import Quizz from "@/components/HomeSections/Quizz";


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
      <Quizz/>
      <JoinNowSection />
    </>
  );
}
