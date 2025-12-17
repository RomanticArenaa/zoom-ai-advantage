import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import VectorBackground from '@/components/VectorBackground';
import { Factory, Radio, ShoppingCart, Truck, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    icon: Factory,
    industry: 'Manufacturing',
    title: 'Predictive Maintenance Transformation',
    challenge: 'A leading New Zealand manufacturer faced frequent unplanned equipment downtime, resulting in significant production losses.',
    solution: 'We implemented an ML-powered predictive maintenance system that analyzes sensor data in real-time.',
    outcomes: [
      { label: 'Downtime Reduction', value: '35%' },
      { label: 'Cost Savings', value: '20%' },
      { label: 'ROI Achieved', value: '6mo' },
    ],
    quote: 'ZBS transformed our maintenance operations. We now prevent issues before they impact production.',
  },
  {
    icon: Radio,
    industry: 'Telecommunications',
    title: 'AI-Driven Customer Retention',
    challenge: 'A major telecom provider struggled with high customer churn rates, lacking visibility into at-risk customers.',
    solution: 'We developed a comprehensive churn prediction model and automated intervention system.',
    outcomes: [
      { label: 'Churn Reduction', value: '18%' },
      { label: 'Customer LTV', value: '+25%' },
      { label: 'Campaign ROI', value: '3x' },
    ],
    quote: 'The predictive insights have revolutionized how we approach customer retention.',
  },
  {
    icon: ShoppingCart,
    industry: 'Retail',
    title: 'Demand Forecasting Excellence',
    challenge: 'A national retail chain faced persistent inventory challenges—stockouts and excess inventory.',
    solution: 'We built an advanced demand forecasting system using ML models with seasonality awareness.',
    outcomes: [
      { label: 'Forecast Accuracy', value: '+12%' },
      { label: 'Inventory Costs', value: '-15%' },
      { label: 'Stockouts', value: '-45%' },
    ],
    quote: 'Our inventory optimization has never been better. The ML models capture patterns we never knew existed.',
  },
  {
    icon: Truck,
    industry: 'Logistics',
    title: 'Intelligent Route Optimization',
    challenge: 'A logistics company with a large fleet was losing margin to inefficient routing and fuel costs.',
    solution: 'We implemented an AI-powered route optimization system with real-time traffic consideration.',
    outcomes: [
      { label: 'Fuel Savings', value: '22%' },
      { label: 'Daily Deliveries', value: '+18%' },
      { label: 'On-Time Rate', value: '96%' },
    ],
    quote: 'The AI routing system has transformed our fleet efficiency and customer satisfaction.',
  },
];

const Clients = () => {
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
                Client Success Stories
              </TextReveal>
              <TextReveal as="h1" className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 text-foreground leading-tight" delay={0.1}>
                Proven Results,
                <br />
                <span className="text-gradient">Measurable Impact</span>
              </TextReveal>
              <TextReveal as="p" className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl" delay={0.2}>
                Discover how leading enterprises across New Zealand and APAC have transformed 
                their operations through our Data and AI solutions.
              </TextReveal>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { icon: DollarSign, value: '200%+', label: 'Average ROI' },
                { icon: TrendingUp, value: '35%', label: 'Efficiency Gains' },
                { icon: Clock, value: '<12mo', label: 'Time to Value' },
                { icon: Factory, value: '50+', label: 'Enterprise Clients' },
              ].map((metric) => (
                <div key={metric.label} className="text-center group">
                  <metric.icon className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={36} />
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{metric.value}</div>
                  <div className="text-lg text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
                Featured <span className="text-gradient">Case Studies</span>
              </TextReveal>
              <TextReveal as="p" className="text-xl text-muted-foreground" delay={0.1}>
                Each engagement follows our proven methodology: understand the challenge, 
                design the solution, and deliver measurable outcomes.
              </TextReveal>
            </div>

            <div className="space-y-20">
              {caseStudies.map((study) => (
                <div 
                  key={study.title}
                  className="bg-card rounded-[2rem] overflow-hidden shadow-xl border border-border/50 hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Content */}
                    <div className="p-10 lg:p-16">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <study.icon className="text-primary" size={32} />
                        </div>
                        <span className="text-base font-bold text-primary uppercase tracking-wider">{study.industry}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{study.title}</h3>
                      
                      <div className="space-y-6 mb-8">
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-2">Challenge</h4>
                          <p className="text-lg text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-2">Solution</h4>
                          <p className="text-lg text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-muted-foreground">
                        "{study.quote}"
                      </blockquote>
                    </div>

                    {/* Outcomes */}
                    <div className="bg-gradient-dark text-primary-foreground p-10 lg:p-16 flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-10">
                        Business Outcomes
                      </h4>
                      <div className="space-y-10">
                        {study.outcomes.map((outcome) => (
                          <div key={outcome.label}>
                            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{outcome.value}</div>
                            <div className="text-xl text-primary-foreground/70">{outcome.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <TextReveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">
              Ready to Write Your
              <br />
              <span className="text-gradient">Success Story?</span>
            </TextReveal>
            <TextReveal as="p" className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" delay={0.1}>
              Join the enterprises across APAC that have transformed their operations 
              with our Data and AI solutions.
            </TextReveal>
            <Link to="/contact">
              <MagneticButton className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-foreground text-background text-xl font-semibold hover:bg-primary transition-all">
                Schedule a Consultation
                <ArrowRight size={24} />
              </MagneticButton>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
