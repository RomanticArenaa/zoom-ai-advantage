import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  Database, Brain, BarChart3, Cloud, Shield, Zap,
  TrendingUp, Factory, ShoppingCart, Radio, Truck, ArrowRight
} from 'lucide-react';

const dataServices = [
  {
    icon: Database,
    title: 'Data Governance',
    description: 'Establish robust data policies, quality standards, and compliance frameworks.',
  },
  {
    icon: Cloud,
    title: 'Cloud Data Warehousing',
    description: 'Build scalable, cloud-native data platforms on AWS, Azure, or GCP.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Deploy interactive dashboards and self-service analytics solutions.',
  },
  {
    icon: Zap,
    title: 'Data Migration',
    description: 'Seamlessly migrate legacy systems to modern cloud infrastructure.',
  },
];

const aiServices = [
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends, demand, and outcomes with ML-powered models.',
  },
  {
    icon: Brain,
    title: 'Custom ML Solutions',
    description: 'Develop bespoke machine learning models for your unique challenges.',
  },
  {
    icon: Shield,
    title: 'Anomaly Detection',
    description: 'Identify fraud, defects, and operational issues in real-time.',
  },
  {
    icon: Zap,
    title: 'Process Optimization',
    description: 'Streamline operations with AI-driven automation and insights.',
  },
];

const useCases = [
  {
    icon: Factory,
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    description: 'Reduce downtime by 30% with ML-powered equipment failure prediction.',
  },
  {
    icon: Radio,
    industry: 'Telecom',
    title: 'Churn Prediction',
    description: 'Identify at-risk customers and implement targeted retention strategies.',
  },
  {
    icon: ShoppingCart,
    industry: 'Retail',
    title: 'Demand Forecasting',
    description: 'Optimize inventory with accurate demand prediction models.',
  },
  {
    icon: Truck,
    industry: 'Logistics',
    title: 'Route Optimization',
    description: 'Reduce costs and delivery times with intelligent routing.',
  },
];

const DataAI = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Database size={16} />
                Data & AI Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Data Strategy & <span className="text-gradient">AI Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Build a unified data foundation and harness the power of AI and Machine Learning 
                to drive smarter decisions, optimize operations, and gain competitive advantage.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Discuss Your Data Strategy
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                From Assessment to Impact
              </h2>
              <p className="text-muted-foreground text-lg">
                Our proven methodology ensures successful delivery at every stage of your 
                data and AI transformation journey.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Assess', description: 'Evaluate your current data landscape, identify gaps, and define strategic objectives.' },
                { step: '02', title: 'Design', description: 'Architect scalable solutions aligned with your business goals and technical requirements.' },
                { step: '03', title: 'Implement', description: 'Deploy solutions with rigorous testing, training, and ongoing optimization.' },
              ].map((phase, index) => (
                <AnimatedSection key={phase.step} animation="fadeUp" delay={index * 0.15}>
                  <div className="relative p-8 bg-muted/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-6xl font-bold text-primary/10">{phase.step}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Data Services */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Data Strategy & Platform Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Create a robust data foundation that enables analytics, AI, and 
                data-driven decision making across your organization.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataServices.map((service, index) => (
                <AnimatedSection key={service.title} animation="fadeUp" delay={index * 0.1}>
                  <div className="bg-card rounded-xl p-6 h-full border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                AI & Machine Learning Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Leverage predictive analytics and custom ML models to automate decisions, 
                optimize operations, and discover hidden insights.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <AnimatedSection key={service.title} animation="fadeUp" delay={index * 0.1}>
                  <div className="bg-muted/50 rounded-xl p-6 h-full border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-gradient-dark text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-teal-glow font-semibold text-sm uppercase tracking-wider">
                Industry Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Real-World AI Use Cases
              </h2>
              <p className="text-primary-foreground/70 text-lg">
                See how enterprises across industries are leveraging our AI solutions 
                to drive measurable business outcomes.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <AnimatedSection key={useCase.title} animation="fadeUp" delay={index * 0.1}>
                  <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 h-full border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <useCase.icon className="text-teal-glow" size={20} />
                      <span className="text-sm text-teal-glow font-medium">{useCase.industry}</span>
                    </div>
                    <h3 className="font-bold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{useCase.description}</p>
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
                Ready to Unlock Your Data Potential?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a consultation to discuss how our Data and AI solutions can 
                drive measurable outcomes for your enterprise.
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

export default DataAI;
