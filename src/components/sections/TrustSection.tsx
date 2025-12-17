import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  'Enterprise Corp', 'TechFlow Industries', 'Global Logistics',
  'Retail Masters', 'Telco Networks', 'Manufacturing Pro'
];

const partners = [
  { name: 'AWS', emoji: '☁️' },
  { name: 'Azure', emoji: '⚡' },
  { name: 'Google Cloud', emoji: '🔷' },
  { name: 'Databricks', emoji: '🔶' },
  { name: 'Snowflake', emoji: '❄️' },
];

const TrustSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite marquee animation
      const marquee = marqueeRef.current;
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }

      // Logos reveal
      if (logosRef.current) {
        gsap.fromTo(
          logosRef.current.children,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: logosRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="text-center">
          <TextReveal as="span" className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-6">
            Trusted By Leaders
          </TextReveal>
          <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" delay={0.1}>
            Partnering with Industry
            <br />
            <span className="text-gradient">Leaders Across APAC</span>
          </TextReveal>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative py-10 bg-muted/50 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={`${client}-${index}`}
              className="flex items-center justify-center px-16"
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/10 hover:text-foreground/30 transition-colors cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Partners */}
      <div className="container mx-auto px-4 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <TextReveal as="h3" className="text-xl font-semibold text-muted-foreground">
            Technology & Cloud Partners
          </TextReveal>
        </div>

        <div ref={logosRef} className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="flex items-center gap-4 px-8 py-5 bg-muted/30 rounded-2xl hover:bg-muted/60 transition-all duration-300 hover:scale-105 cursor-default"
            >
              <span className="text-4xl">{partner.emoji}</span>
              <span className="font-semibold text-xl text-foreground/80">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
