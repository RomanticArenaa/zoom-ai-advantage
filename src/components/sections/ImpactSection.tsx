import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

const metrics = [
  {
    icon: DollarSign,
    value: '20%',
    label: 'Operational Cost Reduction',
    description: 'Average savings achieved through AI-driven process optimization',
  },
  {
    icon: TrendingUp,
    value: '45%',
    label: 'Efficiency Improvement',
    description: 'Reduction in manual processing time with intelligent automation',
  },
  {
    icon: Clock,
    value: '12%',
    label: 'Forecast Accuracy',
    description: 'Improvement in demand forecasting using ML models',
  },
];

const testimonial = {
  quote: "Zoom Business Solutions transformed our data infrastructure and delivered measurable ROI within the first quarter. Their expertise in AI and Gen AI has given us a true competitive advantage.",
  author: "Chief Digital Officer",
  company: "Leading Australian Manufacturer",
};

const ImpactSection = () => {
  return (
    <section className="py-24 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-glow font-semibold text-sm uppercase tracking-wider">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Measurable Business Impact
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Our clients see tangible improvements in efficiency, cost savings, 
            and competitive positioning through our data and AI solutions.
          </p>
        </AnimatedSection>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <AnimatedSection 
              key={metric.label} 
              animation="fadeUp" 
              delay={index * 0.15}
            >
              <div className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="text-teal-glow" size={28} />
                </div>
                <div className="text-5xl font-bold text-teal-glow mb-2">{metric.value}</div>
                <div className="font-semibold mb-2">{metric.label}</div>
                <p className="text-sm text-primary-foreground/60">{metric.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonial */}
        <AnimatedSection animation="fadeIn" className="max-w-4xl mx-auto">
          <div className="text-center">
            <blockquote className="text-xl md:text-2xl font-light italic mb-6 text-primary-foreground/90">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-primary-foreground/70">
              <span className="font-semibold">{testimonial.author}</span>
              <span className="mx-2">|</span>
              <span>{testimonial.company}</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-12">
          <Link to="/clients">
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View All Case Studies <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ImpactSection;
