import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const articles = [
  {
    category: 'Generative AI',
    title: '5 Practical Gen AI Use Cases for Enterprise in 2024',
    excerpt: 'Discover the most impactful applications of generative AI that are delivering real ROI for enterprises across Australia and APAC.',
    date: 'December 10, 2024',
    readTime: '8 min read',
    author: 'ZBS Team',
  },
  {
    category: 'Data Strategy',
    title: 'Building a Modern Data Platform: A Step-by-Step Guide',
    excerpt: 'Learn how to architect and implement a cloud-native data platform that scales with your business and enables advanced analytics.',
    date: 'December 5, 2024',
    readTime: '12 min read',
    author: 'ZBS Team',
  },
  {
    category: 'AI Implementation',
    title: 'Measuring ROI on AI Projects: Metrics That Matter',
    excerpt: 'Move beyond vanity metrics and learn how to measure the true business impact of your AI and machine learning investments.',
    date: 'November 28, 2024',
    readTime: '10 min read',
    author: 'ZBS Team',
  },
  {
    category: 'Industry Insights',
    title: 'AI Adoption in Australian Manufacturing: Trends and Opportunities',
    excerpt: 'An in-depth look at how Australian manufacturers are leveraging AI for predictive maintenance, quality control, and operational efficiency.',
    date: 'November 20, 2024',
    readTime: '15 min read',
    author: 'ZBS Team',
  },
  {
    category: 'Gen AI',
    title: 'Enterprise LLM Deployment: Security and Compliance Considerations',
    excerpt: 'Navigate the complexities of deploying large language models in regulated enterprise environments.',
    date: 'November 15, 2024',
    readTime: '11 min read',
    author: 'ZBS Team',
  },
  {
    category: 'Data Governance',
    title: 'Data Quality: The Foundation of Successful AI Projects',
    excerpt: 'Why data quality makes or breaks AI initiatives, and practical strategies to improve data quality at scale.',
    date: 'November 8, 2024',
    readTime: '9 min read',
    author: 'ZBS Team',
  },
];

const topics = [
  'Generative AI',
  'Data Strategy',
  'Machine Learning',
  'Cloud Platforms',
  'Industry Insights',
  'Best Practices',
];

const Insights = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="max-w-4xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Insights & Resources
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
                Thought Leadership in Data & AI
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay ahead with expert insights, practical guides, and industry analysis 
                from our team of data and AI specialists.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Topics */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {topics.map((topic) => (
                <button 
                  key={topic}
                  className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary text-sm font-medium transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <AnimatedSection key={article.title} animation="fadeUp" delay={index * 0.1}>
                  <article className="bg-card rounded-2xl overflow-hidden h-full flex flex-col border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span className="text-4xl opacity-50">📊</span>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-sm font-medium text-primary mb-3">{article.category}</span>
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-12">
              <Button variant="heroOutline" size="lg">
                Load More Articles
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-gradient-dark text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection animation="scale" className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Informed
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                Subscribe to receive the latest insights on Data, AI, and Gen AI 
                directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary"
                />
                <Button variant="hero" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <AnimatedSection animation="scale">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Have a Question for Our Experts?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a consultation to discuss your specific challenges and 
                explore how we can help.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Contact Our Team
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

export default Insights;
