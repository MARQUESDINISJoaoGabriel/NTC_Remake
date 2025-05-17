// app/page.tsx
import HeroSection from "@/components/HeroSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import FindShipSection from "@/components/FindShipSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import UpcomingEvents from "@/components/UpcomingEvents";        
import AboutSection from "@/components/AboutSection";
import CadetPathSection from "@/components/CadetPathSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import JoinNowSection from "@/components/JoinNowSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <FindShipSection />
      <TestimonialCarousel />
      <UpcomingEvents />
      <CadetPathSection />
      <ActivitiesSection />
      <JoinNowSection />
    
      
    </>

    
  );
}
