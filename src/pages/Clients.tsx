import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Factory, Radio, ShoppingCart, Truck, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    icon: Factory,
    industry: 'Manufacturing',
    title: 'Predictive Maintenance Transformation',
    challenge: 'A leading Australian manufacturer faced frequent unplanned equipment downtime, resulting in significant production losses and maintenance costs.',
    solution: 'We implemented an ML-powered predictive maintenance system that analyzes sensor data in real-time to predict equipment failures before they occur.',
    outcomes: [
      { label: 'Downtime Reduction', value: '35%' },
      { label: 'Maintenance Cost Savings', value: '20%' },
      { label: 'ROI Achieved In', value: '6 months' },
    ],
    quote: 'ZBS transformed our maintenance operations. We now prevent issues before they impact production.',
  },
  {
    icon: Radio,
    industry: 'Telecommunications',
    title: 'AI-Driven Customer Retention',
    challenge: 'A major telecom provider struggled with high customer churn rates, lacking visibility into at-risk customers and effective retention strategies.',
    solution: 'We developed a comprehensive churn prediction model and automated intervention system that identifies at-risk customers and triggers personalized retention offers.',
    outcomes: [
      { label: 'Churn Reduction', value: '18%' },
      { label: 'Customer Lifetime Value', value: '+25%' },
      { label: 'Campaign Efficiency', value: '3x' },
    ],
    quote: 'The predictive insights have revolutionized how we approach customer retention.',
  },
  {
    icon: ShoppingCart,
    industry: 'Retail',
    title: 'Demand Forecasting Excellence',
    challenge: 'A national retail chain faced persistent inventory challenges—stockouts on popular items and excess inventory on slow-movers.',
    solution: 'We built an advanced demand forecasting system using ML models that consider seasonality, promotions, external factors, and historical patterns.',
    outcomes: [
      { label: 'Forecast Accuracy', value: '+12%' },
      { label: 'Inventory Costs', value: '-15%' },
      { label: 'Stockout Rate', value: '-45%' },
    ],
    quote: 'Our inventory optimization has never been better. The ML models capture patterns we never knew existed.',
  },
  {
    icon: Truck,
    industry: 'Logistics',
    title: 'Intelligent Route Optimization',
    challenge: 'A logistics company with a large fleet was losing margin to inefficient routing and fuel costs.',
    solution: 'We implemented an AI-powered route optimization system that considers real-time traffic, delivery windows, vehicle capacity, and driver schedules.',
    outcomes: [
      { label: 'Fuel Cost Reduction', value: '22%' },
      { label: 'Deliveries Per Day', value: '+18%' },
      { label: 'On-Time Delivery', value: '96%' },
    ],
    quote: 'The AI routing system has transformed our fleet efficiency and customer satisfaction.',
  },
];

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="max-w-4xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Client Success Stories
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
                Proven Results, <span className="text-gradient">Measurable Impact</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how leading enterprises across Australia and APAC have transformed 
                their operations and achieved significant ROI through our Data and AI solutions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: DollarSign, value: '200%+', label: 'Average ROI' },
                { icon: TrendingUp, value: '35%', label: 'Efficiency Gains' },
                { icon: Clock, value: '<12 mo', label: 'Time to Value' },
                { icon: Factory, value: '50+', label: 'Enterprise Clients' },
              ].map((metric) => (
                <div key={metric.label} className="text-center">
                  <metric.icon className="mx-auto text-primary mb-2" size={28} />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Featured Case Studies
              </h2>
              <p className="text-muted-foreground text-lg">
                Each engagement follows our proven methodology: understand the challenge, 
                design the solution, and deliver measurable outcomes.
              </p>
            </AnimatedSection>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <AnimatedSection key={study.title} animation="fadeUp" delay={0.1}>
                  <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50">
                    <div className="grid lg:grid-cols-2">
                      {/* Content */}
                      <div className="p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <study.icon className="text-primary" size={24} />
                          </div>
                          <span className="text-sm font-medium text-primary">{study.industry}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{study.title}</h3>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                            <p className="text-muted-foreground text-sm">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                            <p className="text-muted-foreground text-sm">{study.solution}</p>
                          </div>
                        </div>

                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6">
                          "{study.quote}"
                        </blockquote>
                      </div>

                      {/* Outcomes */}
                      <div className="bg-gradient-dark text-primary-foreground p-8 md:p-12 flex flex-col justify-center">
                        <h4 className="text-sm font-semibold text-teal-glow uppercase tracking-wider mb-6">
                          Business Outcomes
                        </h4>
                        <div className="space-y-6">
                          {study.outcomes.map((outcome) => (
                            <div key={outcome.label}>
                              <div className="text-4xl font-bold text-teal-glow mb-1">{outcome.value}</div>
                              <div className="text-primary-foreground/70">{outcome.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <AnimatedSection animation="scale">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the enterprises across APAC that have transformed their operations 
                with our Data and AI solutions.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Schedule a Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
