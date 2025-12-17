import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import VectorBackground from '@/components/VectorBackground';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 bg-gradient-hero relative overflow-hidden">
          <VectorBackground variant="hero" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <TextReveal as="span" className="text-primary font-bold text-sm uppercase tracking-[0.2em] block mb-6">
                Get in Touch
              </TextReveal>
              <TextReveal as="h1" className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 text-foreground leading-tight" delay={0.1}>
                Request a
                <br />
                <span className="text-gradient">Consultation</span>
              </TextReveal>
              <TextReveal as="p" className="text-xl md:text-2xl text-muted-foreground leading-relaxed" delay={0.2}>
                Ready to explore how Data, AI, and Gen AI can transform your business? 
                Let's start a conversation.
              </TextReveal>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
              {/* Form */}
              <div className="bg-muted/30 rounded-3xl p-10 lg:p-14 border border-border/50">
                <h2 className="text-3xl font-bold mb-8 text-foreground">
                  Schedule a Strategy Session
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-primary" size={48} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Thank You!</h3>
                    <p className="text-xl text-muted-foreground">
                      We've received your request and will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-base font-semibold text-foreground mb-3">
                          First Name *
                        </label>
                        <input 
                          required 
                          placeholder="John"
                          className="w-full px-6 py-4 rounded-xl bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-foreground mb-3">
                          Last Name *
                        </label>
                        <input 
                          required 
                          placeholder="Smith"
                          className="w-full px-6 py-4 rounded-xl bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-base font-semibold text-foreground mb-3">
                        Work Email *
                      </label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john.smith@company.com"
                        className="w-full px-6 py-4 rounded-xl bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-base font-semibold text-foreground mb-3">
                        Company *
                      </label>
                      <input 
                        required 
                        placeholder="Your Company Name"
                        className="w-full px-6 py-4 rounded-xl bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-base font-semibold text-foreground mb-3">
                        Job Title
                      </label>
                      <input 
                        placeholder="e.g., CTO, Head of Data, Digital Lead"
                        className="w-full px-6 py-4 rounded-xl bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-base font-semibold text-foreground mb-3">
                        How can we help? *
                      </label>
                      <textarea 
                        required 
                        rows={4}
                        placeholder="Tell us about your data or AI challenges..."
                        className="w-full px-6 py-4 rounded-xl bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      />
                    </div>
                    
                    <MagneticButton 
                      className={`w-full py-5 px-8 rounded-full bg-foreground text-background text-xl font-semibold hover:bg-primary transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                      onClick={() => {}}
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          Submit Request
                          <Send size={22} />
                        </>
                      )}
                    </MagneticButton>
                    
                    <p className="text-base text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from 
                      Zoom Business Solutions.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Why Partner with ZBS?
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    With 15+ years of enterprise experience across New Zealand and APAC, 
                    we bring a unique blend of technical expertise and business acumen 
                    to every engagement. Our focus on measurable ROI ensures that your 
                    investment in Data and AI delivers real business value.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                      <p className="text-lg text-muted-foreground">contact@zoombusinesssolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                      <p className="text-lg text-muted-foreground">+64 9 999 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                      <p className="text-lg text-muted-foreground">Auckland, New Zealand</p>
                      <p className="text-lg text-muted-foreground">Serving APAC Region</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-dark text-primary-foreground rounded-3xl p-10">
                  <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                  <ul className="space-y-4 text-primary-foreground/80 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      Response within 24 business hours
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      Complimentary 30-minute discovery call
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      Tailored recommendations for your needs
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      No obligation consultation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
