import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, MessageSquare, FileSearch, Wand2, Bot, Workflow,
  Building2, GraduationCap, HeadphonesIcon, FileText, ArrowRight
} from 'lucide-react';

const genAIServices = [
  {
    icon: Bot,
    title: 'LLM Integration',
    description: 'Integrate large language models into your enterprise systems for intelligent automation.',
  },
  {
    icon: MessageSquare,
    title: 'Enterprise Chatbots',
    description: 'Deploy conversational AI assistants for customer service and internal support.',
  },
  {
    icon: FileSearch,
    title: 'Knowledge Copilots',
    description: 'Build intelligent search and retrieval systems for your enterprise knowledge base.',
  },
  {
    icon: Workflow,
    title: 'AI Automation',
    description: 'Automate complex workflows with generative AI-powered decision making.',
  },
  {
    icon: FileText,
    title: 'Document Intelligence',
    description: 'Extract insights and automate processing of unstructured documents.',
  },
  {
    icon: Wand2,
    title: 'Content Generation',
    description: 'Generate marketing copy, reports, and documentation at scale.',
  },
];

const useCases = [
  {
    icon: HeadphonesIcon,
    title: 'Customer Service AI',
    description: 'Reduce response times by 80% with intelligent virtual agents that understand context and provide accurate solutions.',
    metric: '80% faster response',
  },
  {
    icon: GraduationCap,
    title: 'Training & Onboarding',
    description: 'Create personalized learning experiences with AI tutors that adapt to individual learning styles.',
    metric: '3x faster onboarding',
  },
  {
    icon: Building2,
    title: 'Enterprise Knowledge',
    description: 'Enable employees to find and synthesize information across your organization in seconds.',
    metric: '60% productivity gain',
  },
  {
    icon: FileText,
    title: 'Document Processing',
    description: 'Automate invoice processing, contract analysis, and compliance document review.',
    metric: '90% automation rate',
  },
];

const GenAI = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-float" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <AnimatedSection className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles size={16} />
                Generative AI Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Transform Your Enterprise with <span className="text-gradient">Generative AI</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Harness the power of Large Language Models, intelligent automation, and 
                AI-powered copilots to revolutionize how your organization operates and innovates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Request a Gen AI POC
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/clients">
                  <Button variant="heroOutline" size="xl">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                Enterprise Gen AI Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                We deliver production-ready generative AI solutions tailored to your 
                enterprise needs, with a focus on security, scalability, and measurable ROI.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {genAIServices.map((service, index) => (
                <AnimatedSection key={service.title} animation="fadeUp" delay={index * 0.1}>
                  <div className="bg-muted/30 rounded-2xl p-8 h-full border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Real-World Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
                Gen AI in Action
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover how leading enterprises are using generative AI to transform 
                operations and drive measurable business outcomes.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <AnimatedSection key={useCase.title} animation="fadeUp" delay={index * 0.1}>
                  <div className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <useCase.icon className="text-primary" size={28} />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                          {useCase.metric}
                        </span>
                        <h3 className="text-xl font-bold mb-2 text-foreground">{useCase.title}</h3>
                        <p className="text-muted-foreground">{useCase.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-24 bg-gradient-dark text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-teal-glow font-semibold text-sm uppercase tracking-wider">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Enterprise-Ready Gen AI Deployment
              </h2>
              <p className="text-primary-foreground/70 text-lg">
                Our structured approach ensures successful Gen AI adoption with minimal 
                risk and maximum business impact.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', description: 'Identify high-impact use cases aligned with business objectives' },
                { step: '02', title: 'Proof of Concept', description: 'Rapid prototyping to validate feasibility and value' },
                { step: '03', title: 'Production', description: 'Enterprise-grade deployment with security and scalability' },
                { step: '04', title: 'Optimize', description: 'Continuous improvement and expansion of AI capabilities' },
              ].map((phase, index) => (
                <AnimatedSection key={phase.step} animation="fadeUp" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-teal-glow/30 mb-4">{phase.step}</div>
                    <h3 className="font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-primary-foreground/60">{phase.description}</p>
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
                Ready to Explore Gen AI for Your Enterprise?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Request a complimentary Proof of Concept to see how generative AI 
                can transform your specific business challenges.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Gen AI POC
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

export default GenAI;
