import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Brain, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        '-=0.4'
      )
      .fromTo(
        statsRef.current?.children || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Sparkles size={16} />
            Enterprise Data & AI Consulting
          </div>

          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground"
          >
            Transforming Data into{' '}
            <span className="text-gradient">Decisive Business</span>{' '}
            Advantage
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            We partner with enterprises across Australia and APAC to unlock the power of 
            Data Strategy, Artificial Intelligence, and Generative AI—delivering measurable 
            ROI and competitive edge.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Schedule a Strategy Session
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/clients">
              <Button variant="heroOutline" size="xl">
                View Our Results
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Enterprise Clients' },
              { value: '200%', label: 'Average ROI' },
              { value: '15+', label: 'Years Experience' },
              { value: 'APAC', label: 'Regional Coverage' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Service Icons */}
      <div className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2 space-y-8">
        {[
          { icon: Database, label: 'Data Strategy' },
          { icon: Brain, label: 'AI & ML' },
          { icon: Sparkles, label: 'Gen AI' },
        ].map((item, index) => (
          <div 
            key={item.label}
            className="w-20 h-20 rounded-2xl bg-card shadow-lg flex items-center justify-center hover-lift cursor-pointer animate-float"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <item.icon className="text-primary" size={32} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
