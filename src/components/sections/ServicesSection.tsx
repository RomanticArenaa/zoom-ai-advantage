import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { Database, Brain, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Strategy & Platforms',
    description: 'Build a unified data foundation with enterprise-grade governance, cloud data warehousing, and advanced BI solutions that drive faster, smarter decisions.',
    features: ['Data Governance', 'Cloud Warehousing', 'BI & Analytics', 'Data Migration'],
    link: '/services/data-ai',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Harness predictive analytics and custom ML models to forecast demand, optimize operations, and gain competitive advantages in your industry.',
    features: ['Predictive Analytics', 'Forecasting Models', 'ML Solutions', 'Process Optimization'],
    link: '/services/data-ai',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Generative AI Solutions',
    description: 'Transform your enterprise with LLM integration, intelligent chatbots, and AI-powered automation that accelerate productivity and innovation.',
    features: ['LLM Integration', 'Enterprise Chatbots', 'Knowledge Copilots', 'AI Automation'],
    link: '/services/gen-ai',
    color: 'from-teal-500 to-emerald-500',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-foreground">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From data strategy to cutting-edge AI implementation, we deliver end-to-end 
            solutions that transform how enterprises operate and compete.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fadeUp" 
              delay={index * 0.1}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-primary-foreground" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Discuss Your Requirements
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
