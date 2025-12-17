import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import zoomLogo from '@/assets/zoom-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <img 
              src={zoomLogo} 
              alt="Zoom Business Solutions" 
              className="h-14 w-auto brightness-200"
            />
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Transforming enterprise data into decisive business advantage through AI, 
              Machine Learning, and Generative AI solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:bg-primary-foreground/20 transition-all">
                <Linkedin size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:bg-primary-foreground/20 transition-all">
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xl mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services/data-ai" className="text-primary-foreground/70 hover:text-primary text-lg transition-colors">
                  Data Strategy & Platforms
                </Link>
              </li>
              <li>
                <Link to="/services/data-ai" className="text-primary-foreground/70 hover:text-primary text-lg transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services/gen-ai" className="text-primary-foreground/70 hover:text-primary text-lg transition-colors">
                  Generative AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-primary-foreground/70 hover:text-primary text-lg transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-xl mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary text-lg transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-primary-foreground/70 hover:text-primary text-lg transition-colors">
                  Insights & Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary text-lg transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-6">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-lg text-primary-foreground/70">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                contact@zoombusinesssolutions.com
              </li>
              <li className="flex items-center gap-4 text-lg text-primary-foreground/70">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                +64 9 999 0000
              </li>
              <li className="flex items-start gap-4 text-lg text-primary-foreground/70">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <span>Auckland, New Zealand<br />APAC Region</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-lg text-primary-foreground/50">
            © {new Date().getFullYear()} Zoom Business Solutions Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-lg text-primary-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-lg text-primary-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
