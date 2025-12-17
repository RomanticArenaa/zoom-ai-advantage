import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import VectorBackground from '@/components/VectorBackground';
import { TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    icon: DollarSign,
    value: '20%',
    label: 'Cost Reduction',
    description: 'Through AI-driven optimization',
  },
  {
    icon: TrendingUp,
    value: '45%',
    label: 'Efficiency Boost',
    description: 'With intelligent automation',
  },
  {
    icon: Clock,
    value: '12%',
    label: 'Forecast Accuracy',
    description: 'Using advanced ML models',
  },
];

const ImpactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background color change on scroll
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          toggleClass: { targets: 'body', className: 'dark-section' },
        },
      });

      // Animate metrics
      counterRefs.current.forEach((counter, index) => {
        if (!counter) return;
        
        const value = metrics[index].value;
        const numericValue = parseInt(value);
        
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: numericValue,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            onUpdate: function() {
              counter.innerHTML = Math.round(Number(counter.innerText)) + (value.includes('%') ? '%' : '+');
            },
          }
        );
      });

      // Metrics cards animation
      if (metricsRef.current) {
        gsap.fromTo(
          metricsRef.current.children,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      <VectorBackground variant="dark" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <TextReveal as="span" className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-6">
            Proven Results
          </TextReveal>
          <TextReveal as="h2" className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" delay={0.1}>
            Measurable
            <br />
            <span className="text-primary">Business Impact</span>
          </TextReveal>
          <TextReveal as="p" className="text-xl md:text-2xl text-primary-foreground/70 font-light" delay={0.2}>
            Tangible improvements across efficiency, cost savings, and competitive positioning.
          </TextReveal>
        </div>

        {/* Metrics */}
        <div ref={metricsRef} className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center p-12 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-500 hover:scale-105 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <metric.icon className="text-primary" size={40} />
              </div>
              <div 
                ref={el => counterRefs.current[index] = el}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-4"
              >
                0
              </div>
              <div className="text-2xl font-semibold mb-3">{metric.label}</div>
              <p className="text-lg text-primary-foreground/60">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light italic mb-10 text-primary-foreground/90 leading-relaxed">
            "ZBS transformed our data infrastructure and delivered measurable ROI within the first quarter."
          </blockquote>
          <div className="text-primary-foreground/70 text-xl">
            <span className="font-semibold">Chief Digital Officer</span>
            <span className="mx-3">|</span>
            <span>Leading New Zealand Manufacturer</span>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/clients">
            <MagneticButton className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground text-lg font-semibold hover:bg-primary-foreground/10 transition-all">
              View All Case Studies <ArrowRight size={20} />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
