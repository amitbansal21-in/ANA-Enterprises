import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import anaLogo from '@/assets/ana-enterprises-logo.png';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'EMI Calculator', path: '/emi-calculator' },
    { name: 'Eligibility Checker', path: '/eligibility-checker' },
    { name: 'Contact', path: '/#contact' }
  ];

  const services = [
    'Home Loan',
    'Personal Loan',
    'Business Loan',
    'LAP',
    'Mortgage Loan',
    'Working Capital Finance'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={anaLogo}
                alt="ANA Enterprises"
                className="h-12 w-12 rounded-lg object-cover shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">ANA Enterprises</span>
                <span className="text-xs opacity-80">Loan Consultants</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Your trusted partner for all loan requirements. We provide expert assistance for Home Loans, Personal Loans, Business Loans, and more from leading banks and NBFCs.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Our Services</span>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-90">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-90" />
                <span className="text-sm opacity-90 leading-relaxed">
                  Marogold Building, Kanakiya Road, Mira Road East, Thane, Maharashtra 401107, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0 opacity-90" />
                <a href="tel:+919664669669" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200">
                  +91 9664 669 669
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 flex-shrink-0 opacity-90" />
                <a href="https://wa.me/919664669669" target="_blank" rel="noopener noreferrer" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200">
                  +91 9664 669 669
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-90" />
                <a href="mailto:info@anaenterprises.in" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200">
                  info@anaenterprises.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <p className="text-xs opacity-80 leading-relaxed mb-4">
            <span className="font-semibold">Disclaimer:</span> ANA Enterprises is a loan consultancy service. We assist clients in obtaining loans from various banks and NBFCs. We do not directly provide loans. Final loan approval is subject to the lending institution's terms and conditions. Interest rates, processing fees, and other charges are determined by the respective banks/NBFCs.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} ANA Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
