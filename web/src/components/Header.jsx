import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import anaLogo from '@/assets/ana-enterprises-logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'EMI Calculator', path: '/emi-calculator' },
    { name: 'Eligibility Checker', path: '/eligibility-checker' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' }
  ];

  const isActive = (path) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={anaLogo}
              alt="ANA Enterprises"
              className="h-12 w-12 rounded-lg object-cover shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none text-primary">ANA Enterprises</span>
              <span className="text-xs text-muted-foreground">Loan Consultants</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+919664669669">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href="https://wa.me/919664669669" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <img
                    src={anaLogo}
                    alt="ANA Enterprises"
                    className="h-12 w-12 rounded-lg object-cover shadow-sm"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold leading-none text-primary">ANA Enterprises</span>
                    <span className="text-xs text-muted-foreground">Loan Consultants</span>
                  </div>
                </Link>
                
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`px-4 py-3 text-sm font-medium transition-all duration-200 rounded-md ${
                        isActive(link.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button variant="outline" asChild>
                    <a href="tel:+919664669669">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <a href="https://wa.me/919664669669" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Consultation
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
