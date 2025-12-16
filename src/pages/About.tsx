import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Target, Eye, Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

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
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="max-w-4xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Zoom Business Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
                Empowering Enterprises Through Data & AI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a leading technology consultancy specializing in Data Strategy, 
                Artificial Intelligence, and Generative AI solutions for enterprises 
                across Australia and the APAC region.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation="slideRight">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                  Building the Future of Enterprise Technology
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to bridge the gap between cutting-edge technology 
                  and practical business outcomes, Zoom Business Solutions has grown to 
                  become a trusted partner for enterprises seeking digital transformation.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team of data scientists, AI engineers, and strategic consultants 
                  brings together decades of combined experience across diverse industries, 
                  enabling us to understand unique challenges and deliver tailored solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we help organizations across Australia and APAC harness the power 
                  of data platforms, machine learning, and generative AI to gain competitive 
                  advantage and drive sustainable growth.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slideLeft">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-muted rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">Enterprise Clients</div>
                  </div>
                  <div className="bg-muted rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-muted rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="bg-muted rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-primary mb-2">APAC</div>
                    <div className="text-muted-foreground">Regional Reach</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="fadeUp">
                <div className="bg-card rounded-2xl p-10 h-full border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower enterprises with transformative data and AI solutions that 
                    deliver measurable business outcomes, foster innovation, and create 
                    lasting competitive advantages in an increasingly digital world.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={0.15}>
                <div className="bg-card rounded-2xl p-10 h-full border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and impactful technology partner for enterprises 
                    in APAC, known for delivering transformative AI solutions that redefine 
                    industries and unlock unprecedented value.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                What Drives Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Our core values guide every engagement, ensuring we deliver exceptional 
                results while maintaining the highest standards of integrity.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection 
                  key={value.title} 
                  animation="fadeUp" 
                  delay={index * 0.1}
                >
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                Expert Team, Exceptional Results
              </h2>
              <p className="text-muted-foreground text-lg">
                Our leadership team brings together decades of experience in enterprise 
                technology, data science, and business transformation.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { role: 'Chief Executive Officer', expertise: 'Enterprise Strategy & Digital Transformation' },
                { role: 'Chief Technology Officer', expertise: 'AI/ML Architecture & Cloud Platforms' },
                { role: 'Head of Data Science', expertise: 'Advanced Analytics & Gen AI Solutions' },
              ].map((leader, index) => (
                <div key={leader.role} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Users className="text-muted-foreground" size={40} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{leader.role}</h4>
                  <p className="text-sm text-muted-foreground">{leader.expertise}</p>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
