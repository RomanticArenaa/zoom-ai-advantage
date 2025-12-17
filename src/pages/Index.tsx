import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TrustSection from '@/components/sections/TrustSection';
import ImpactSection from '@/components/sections/ImpactSection';
import CTASection from '@/components/sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior
    const lenis = {
      raf: (time: number) => {
        ScrollTrigger.update();
        requestAnimationFrame(lenis.raf);
      }
    };
    requestAnimationFrame(lenis.raf);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
