import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import TextReveal from '@/components/TextReveal';
import VectorBackground from '@/components/VectorBackground';
import { Target, Eye, Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: 'Client-Centric Focus',
    description: 'Every solution is tailored to deliver measurable business outcomes aligned with your strategic goals.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Excellence',
    description: 'We stay at the forefront of Data, AI, and Gen AI technologies to bring cutting-edge solutions.',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    description: '15+ years of enterprise experience across manufacturing, retail, telecom, and logistics.',
  },
  {
    icon: TrendingUp,
    title: 'ROI-Driven Approach',
    description: 'We measure success by the tangible business impact and return on investment we deliver.',
  },
];

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 bg-gradient-hero relative overflow-hidden">
          <VectorBackground variant="hero" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl">
              <TextReveal as="span" className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-6">
                About Zoom Business Solutions
              </TextReveal>
              <TextReveal as="h1" className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 text-foreground leading-tight" delay={0.1}>
                Empowering
                <br />
                Enterprises Through
                <br />
                <span className="text-gradient">Data & AI</span>
              </TextReveal>
              <TextReveal as="p" className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl" delay={0.2}>
                Leading technology consultancy specializing in Data Strategy, 
                Artificial Intelligence, and Generative AI solutions for enterprises 
                across New Zealand and the APAC region.
              </TextReveal>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <TextReveal as="span" className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-6">
                  Our Story
                </TextReveal>
                <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-foreground" delay={0.1}>
                  Building the Future of
                  <br />
                  <span className="text-gradient">Enterprise Technology</span>
                </TextReveal>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <TextReveal as="p" delay={0.2}>
                    Founded with a vision to bridge the gap between cutting-edge technology 
                    and practical business outcomes, Zoom Business Solutions has grown to 
                    become a trusted partner for enterprises seeking digital transformation.
                  </TextReveal>
                  <TextReveal as="p" delay={0.3}>
                    Our team of data scientists, AI engineers, and strategic consultants 
                    brings together decades of combined experience across diverse industries.
                  </TextReveal>
                  <TextReveal as="p" delay={0.4}>
                    Today, we help organizations across New Zealand and APAC harness the power 
                    of data platforms, machine learning, and generative AI to gain competitive 
                    advantage and drive sustainable growth.
                  </TextReveal>
                </div>
              </div>

              <div ref={statsRef} className="grid grid-cols-2 gap-8">
                {[
                  { value: '50+', label: 'Enterprise Clients' },
                  { value: '15+', label: 'Years Experience' },
                  { value: '200+', label: 'Projects Delivered' },
                  { value: 'APAC', label: 'Regional Reach' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted rounded-3xl p-10 text-center hover:scale-105 transition-transform">
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{stat.value}</div>
                    <div className="text-lg text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card rounded-3xl p-12 lg:p-16 border border-border/50 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <Target className="text-primary" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To empower enterprises with transformative data and AI solutions that 
                  deliver measurable business outcomes, foster innovation, and create 
                  lasting competitive advantages in an increasingly digital world.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-12 lg:p-16 border border-border/50 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <Eye className="text-primary" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To be the most trusted and impactful technology partner for enterprises 
                  in APAC, known for delivering transformative AI solutions that redefine 
                  industries and unlock unprecedented value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <TextReveal as="span" className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-6">
                Our Values
              </TextReveal>
              <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground" delay={0.1}>
                What <span className="text-gradient">Drives</span> Us
              </TextReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="text-center p-8 group hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <value.icon className="text-primary" size={44} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-lg text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <TextReveal as="span" className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-6">
                Leadership
              </TextReveal>
              <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground" delay={0.1}>
                Expert Team,
                <br />
                <span className="text-gradient">Exceptional Results</span>
              </TextReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { role: 'Chief Executive Officer', expertise: 'Enterprise Strategy & Digital Transformation' },
                { role: 'Chief Technology Officer', expertise: 'AI/ML Architecture & Cloud Platforms' },
                { role: 'Head of Data Science', expertise: 'Advanced Analytics & Gen AI Solutions' },
              ].map((leader) => (
                <div key={leader.role} className="text-center group">
                  <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Users className="text-muted-foreground" size={56} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{leader.role}</h4>
                  <p className="text-lg text-muted-foreground">{leader.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
