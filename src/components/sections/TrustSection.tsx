import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from '@/components/AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  'Enterprise Corp', 'TechFlow Industries', 'Global Logistics Co',
  'Retail Masters', 'Telco Networks', 'Manufacturing Pro'
];

const partners = [
  { name: 'AWS', logo: '☁️' },
  { name: 'Azure', logo: '⚡' },
  { name: 'Google Cloud', logo: '🔷' },
  { name: 'Databricks', logo: '🔶' },
  { name: 'Snowflake', logo: '❄️' },
  { name: 'Tableau', logo: '📊' },
];

const TrustSection = () => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (logosRef.current) {
        gsap.fromTo(
          logosRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: logosRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Client Logos */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted By Leading Enterprises
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-foreground">
            Partnering with Industry Leaders Across APAC
          </h2>
        </AnimatedSection>

        <div 
          ref={logosRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
        >
          {clients.map((client) => (
            <div 
              key={client}
              className="flex items-center justify-center p-6 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
            >
              <span className="text-foreground/60 font-medium text-sm text-center">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Technology Partners */}
        <AnimatedSection className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Technology & Cloud Partners
          </h3>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" className="flex flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="flex items-center gap-3 px-6 py-4 bg-muted/30 rounded-full hover:bg-muted/50 transition-colors"
            >
              <span className="text-2xl">{partner.logo}</span>
              <span className="font-medium text-foreground/80">{partner.name}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustSection;
