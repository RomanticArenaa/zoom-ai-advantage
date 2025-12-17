import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import VectorBackground from '@/components/VectorBackground';
import { Database, Brain, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Database,
    title: 'Data Strategy',
    subtitle: '& Platforms',
    description: 'Enterprise-grade data governance and cloud warehousing.',
    features: ['Data Governance', 'Cloud Warehousing', 'BI & Analytics'],
    link: '/services/data-ai',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Brain,
    title: 'AI & Machine',
    subtitle: 'Learning',
    description: 'Predictive analytics and custom ML solutions.',
    features: ['Predictive Analytics', 'ML Models', 'Process Optimization'],
    link: '/services/data-ai',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Sparkles,
    title: 'Generative',
    subtitle: 'AI Solutions',
    description: 'LLM integration and enterprise chatbots.',
    features: ['LLM Integration', 'Enterprise Chatbots', 'AI Automation'],
    link: '/services/gen-ai',
    gradient: 'from-teal-500/20 to-emerald-500/20',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      
      if (cards) {
        gsap.fromTo(
          cards,
          { 
            y: 150, 
            opacity: 0,
            rotationY: -15,
          },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-muted/30 relative overflow-hidden">
      <VectorBackground variant="services" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <TextReveal as="span" className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-6">
            Our Expertise
          </TextReveal>
          <TextReveal as="h2" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight" delay={0.1}>
            Enterprise-Grade
            <br />
            <span className="text-gradient">Solutions</span>
          </TextReveal>
          <TextReveal as="p" className="text-xl md:text-2xl text-muted-foreground font-light" delay={0.2}>
            End-to-end transformation for how enterprises operate and compete.
          </TextReveal>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              to={service.link}
              className="group block"
            >
              <div className={`h-full bg-card rounded-3xl p-10 lg:p-12 border border-border/50 relative overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <service.icon className="text-primary" size={40} />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-foreground leading-tight">
                    {service.title}
                    <br />
                    <span className="text-primary">{service.subtitle}</span>
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-8">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground/80">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="inline-flex items-center gap-3 text-primary font-semibold text-lg group-hover:gap-5 transition-all">
                    Explore <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <MagneticButton className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-foreground text-background text-lg font-semibold hover:bg-primary transition-all">
              Discuss Your Requirements
              <ArrowRight size={20} />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
