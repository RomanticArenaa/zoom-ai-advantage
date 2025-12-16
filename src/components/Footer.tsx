import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import zoomLogo from '@/assets/zoom-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={zoomLogo} 
              alt="Zoom Business Solutions" 
              className="h-12 w-auto brightness-200"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Transforming enterprise data into decisive business advantage through AI, 
              Machine Learning, and Generative AI solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/data-ai" className="text-primary-foreground/70 hover:text-primary text-sm transition-colors">
                  Data Strategy & Platforms
                </Link>
              </li>
              <li>
                <Link to="/services/data-ai" className="text-primary-foreground/70 hover:text-primary text-sm transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/services/gen-ai" className="text-primary-foreground/70 hover:text-primary text-sm transition-colors">
                  Generative AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-primary-foreground/70 hover:text-primary text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-primary-foreground/70 hover:text-primary text-sm transition-colors">
                  Insights & Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="text-primary" />
                contact@zoombusinesssolutions.com
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={16} className="text-primary" />
                +61 2 9999 0000
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-primary mt-0.5" />
                Sydney, Australia<br />APAC Region
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Zoom Business Solutions Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
