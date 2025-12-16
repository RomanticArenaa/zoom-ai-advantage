import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Database, Brain, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Strategy & Platforms',
    description: 'Build a unified data foundation with enterprise-grade governance, cloud data warehousing, and advanced BI solutions.',
    link: '/services/data-ai',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Harness predictive analytics and custom ML models to optimize operations and gain competitive advantage.',
    link: '/services/data-ai',
  },
  {
    icon: Sparkles,
    title: 'Generative AI Solutions',
    description: 'Transform your enterprise with LLM integration, intelligent chatbots, and AI-powered automation.',
    link: '/services/gen-ai',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
                Enterprise-Grade <span className="text-gradient">Data & AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From data strategy to cutting-edge AI implementation, we deliver end-to-end 
                solutions that transform how enterprises operate and compete.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.title}
                  className="bg-muted/30 rounded-2xl p-8 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how our solutions can 
              drive measurable outcomes for your enterprise.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Schedule a Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
