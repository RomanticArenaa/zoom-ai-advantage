import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VectorBackground from '@/components/VectorBackground';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        y: 200,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Title animation with split text effect
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      
      tl.fromTo(
        titleRef.current,
        { y: 150, opacity: 0, rotationX: -45 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.4 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        ctaRef.current?.children || [],
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2 },
        '-=0.6'
      )
      .fromTo(
        statsRef.current?.children || [],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Animated Background */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero" />
        <VectorBackground variant="hero" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 text-primary text-base font-semibold mb-10 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Enterprise Data & AI Consulting
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-10 text-foreground tracking-tight"
          >
            Transforming
            <br />
            <span className="text-gradient">Data</span> into
            <br />
            <span className="text-gradient">Decisive</span>
            <br />
            Advantage
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mb-14 leading-relaxed font-light"
          >
            Partnering with enterprises across New Zealand and APAC to unlock the power of 
            Data Strategy, AI, and Generative AI.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 mb-20">
            <Link to="/contact">
              <MagneticButton className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background text-lg font-semibold transition-all hover:bg-primary">
                Schedule a Strategy Session
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </MagneticButton>
            </Link>
            <Link to="/clients">
              <MagneticButton className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 border-foreground/20 text-foreground text-lg font-semibold hover:border-primary hover:text-primary transition-all">
                View Our Results
              </MagneticButton>
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '50+', label: 'Enterprise Clients' },
              { value: '200%', label: 'Average ROI' },
              { value: '15+', label: 'Years Experience' },
              { value: 'APAC', label: 'Regional Coverage' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left group cursor-default">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-sm text-muted-foreground font-medium">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
