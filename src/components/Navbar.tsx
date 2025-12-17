import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import zoomLogo from '@/assets/zoom-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About ZBS', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { name: 'Data & AI', path: '/services/data-ai' },
      { name: 'Gen AI', path: '/services/gen-ai' },
    ]
  },
  { name: 'Clients & Results', path: '/clients' },
  { name: 'Insights', path: '/insights' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Navbar entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-card/90 backdrop-blur-xl shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={zoomLogo} 
              alt="Zoom Business Solutions" 
              className="h-12 w-auto transition-transform duration-500 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`text-base font-medium transition-all duration-300 relative group ${
                    location.pathname === link.path 
                      ? 'text-primary' 
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
                
                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-4 animate-fade-in">
                    <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden min-w-[200px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-6 py-4 text-base text-foreground/80 hover:bg-muted hover:text-primary transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <MagneticButton className="px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-primary transition-all duration-300">
                Schedule a Strategy Session
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-foreground rounded-full hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-4 px-4 text-xl font-medium rounded-xl transition-all ${
                      location.pathname === link.path 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground/80 hover:text-primary hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-6 mt-2 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="py-3 px-4 text-lg text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-all"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="mt-6">
                <button className="w-full py-4 px-8 rounded-full bg-foreground text-background font-semibold hover:bg-primary transition-all">
                  Schedule a Strategy Session
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
