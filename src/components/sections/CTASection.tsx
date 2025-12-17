import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { 
          y: 100, 
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8">
        <div ref={cardRef} className="max-w-5xl mx-auto">
          <div className="bg-card rounded-[3rem] p-12 md:p-20 lg:p-24 border border-border/50 relative overflow-hidden shadow-2xl">
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 text-foreground leading-tight">
                Ready to Transform
                <br />
                Your Business with
                <br />
                <span className="text-gradient">AI?</span>
              </TextReveal>
              
              <TextReveal as="p" className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto font-light" delay={0.1}>
                Schedule a complimentary strategy session with our experts to discover 
                how Data, AI, and Gen AI can drive measurable outcomes.
              </TextReveal>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <MagneticButton className="group inline-flex items-center gap-3 px-12 py-6 rounded-full bg-foreground text-background text-xl font-semibold hover:bg-primary transition-all">
                    Schedule a Strategy Session
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                  </MagneticButton>
                </Link>
                <Link to="/services/gen-ai">
                  <MagneticButton className="inline-flex items-center gap-3 px-12 py-6 rounded-full border-2 border-foreground/20 text-foreground text-xl font-semibold hover:border-primary hover:text-primary transition-all">
                    Explore Gen AI Solutions
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
