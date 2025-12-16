import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Submitted",
      description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">
                Request a Consultation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Ready to explore how Data, AI, and Gen AI can transform your business? 
                Let's start a conversation about your goals and challenges.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <AnimatedSection animation="slideRight">
                <div className="bg-muted/30 rounded-2xl p-8 md:p-10 border border-border/50">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Schedule a Strategy Session
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="text-primary" size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Thank You!</h3>
                      <p className="text-muted-foreground">
                        We've received your request and will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            First Name *
                          </label>
                          <Input 
                            required 
                            placeholder="John"
                            className="bg-card"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Last Name *
                          </label>
                          <Input 
                            required 
                            placeholder="Smith"
                            className="bg-card"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Work Email *
                        </label>
                        <Input 
                          type="email" 
                          required 
                          placeholder="john.smith@company.com"
                          className="bg-card"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company *
                        </label>
                        <Input 
                          required 
                          placeholder="Your Company Name"
                          className="bg-card"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Job Title
                        </label>
                        <Input 
                          placeholder="e.g., CTO, Head of Data, Digital Lead"
                          className="bg-card"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          How can we help? *
                        </label>
                        <Textarea 
                          required 
                          rows={4}
                          placeholder="Tell us about your data or AI challenges, goals, or questions..."
                          className="bg-card resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="xl" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Submitting...'
                        ) : (
                          <>
                            Submit Request
                            <Send className="ml-2" size={18} />
                          </>
                        )}
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to receive communications from 
                        Zoom Business Solutions. We respect your privacy.
                      </p>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection animation="slideLeft">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                      Why Partner with ZBS?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      With 15+ years of enterprise experience across Australia and APAC, 
                      we bring a unique blend of technical expertise and business acumen 
                      to every engagement. Our focus on measurable ROI ensures that your 
                      investment in Data and AI delivers real business value.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                        <p className="text-muted-foreground">contact@zoombusinesssolutions.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                        <p className="text-muted-foreground">+61 2 9999 0000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">Sydney, Australia</p>
                        <p className="text-muted-foreground">Serving APAC Region</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-dark text-primary-foreground rounded-2xl p-8 mt-8">
                    <h3 className="font-bold text-lg mb-2">What to Expect</h3>
                    <ul className="space-y-3 text-primary-foreground/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-glow mt-1">✓</span>
                        Response within 24 business hours
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-glow mt-1">✓</span>
                        Complimentary 30-minute discovery call
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-glow mt-1">✓</span>
                        Tailored recommendations for your needs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-glow mt-1">✓</span>
                        No obligation consultation
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
