import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Award,
  Home,
  Briefcase,
  Building2,
  Landmark,
  Wallet,
  Factory,
  ArrowRightLeft,
  FileText,
  Lightbulb,
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LeadForm from '@/components/LeadForm.jsx';
import HowItWorks from '@/components/HowItWorks.jsx';

function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    clients: 0,
    loans: 0,
    partners: 0,
    experience: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        clients: 5247,
        loans: 103,
        partners: 22,
        experience: 12
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setStats({
          clients: Math.floor(targets.clients * progress),
          loans: Math.floor(targets.loans * progress),
          partners: Math.floor(targets.partners * progress),
          experience: Math.floor(targets.experience * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const heroFeatures = [
    'Quick Approval Assistance',
    'Multiple Bank Comparison',
    'Expert Financial Guidance',
    'Transparent Process',
    'Fast Documentation Support'
  ];

  const trustCards = [
    {
      icon: Award,
      title: '100% Professional Assistance',
      description: 'Expert guidance throughout your loan journey'
    },
    {
      icon: Zap,
      title: 'Fast Loan Processing',
      description: 'Quick turnaround time for loan approvals'
    },
    {
      icon: Building2,
      title: 'Multiple Banking Partners',
      description: 'Access to 20+ leading banks and NBFCs'
    },
    {
      icon: Shield,
      title: 'Transparent Consultation',
      description: 'No hidden charges, complete clarity'
    },
    {
      icon: Users,
      title: 'Personalized Solutions',
      description: 'Tailored loan options for your needs'
    },
    {
      icon: TrendingUp,
      title: 'End-to-End Support',
      description: 'From application to disbursement'
    }
  ];

  const services = [
    {
      icon: Home,
      title: 'Home Loan',
      description: 'Finance your dream home with competitive interest rates and flexible repayment options from top banks.',
      featured: true
    },
    {
      icon: Briefcase,
      title: 'Personal Loan',
      description: 'Quick personal loans for any purpose with minimal documentation and fast approval.'
    },
    {
      icon: Building2,
      title: 'Business Loan',
      description: 'Fuel your business growth with customized business loan solutions.'
    },
    {
      icon: Landmark,
      title: 'Loan Against Property',
      description: 'Unlock the value of your property with attractive interest rates and high loan amounts.'
    },
    {
      icon: Wallet,
      title: 'Working Capital Finance',
      description: 'Maintain smooth business operations with working capital loans.'
    },
    {
      icon: Factory,
      title: 'MSME Loan',
      description: 'Special loan schemes for micro, small, and medium enterprises.'
    },
    {
      icon: ArrowRightLeft,
      title: 'Balance Transfer',
      description: 'Transfer your existing loan to get better interest rates and save money.'
    },
    {
      icon: FileText,
      title: 'Mortgage Loan',
      description: 'Secure loans against your property with flexible terms.'
    },
    {
      icon: Lightbulb,
      title: 'Project Finance',
      description: 'Comprehensive financing solutions for your project requirements.'
    },
    {
      icon: GraduationCap,
      title: 'Professional Loan',
      description: 'Specialized loans for doctors, CAs, and other professionals.'
    }
  ];

  const bankLogos = [
    {
      name: 'HDFC Bank',
      logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/HDFC_Bank_Logo.svg'
    },
    {
      name: 'ICICI Bank',
      logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/ICICI_Bank_Logo.svg'
    },
    {
      name: 'SBI',
      logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/SBI-logo.svg'
    },
    {
      name: 'Axis Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/AXISBank_Logo.svg/250px-AXISBank_Logo.svg.png'
    },
    {
      name: 'Kotak Mahindra',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Kotak_Mahindra_Bank_logo.svg/250px-Kotak_Mahindra_Bank_logo.svg.png'
    },
    {
      name: 'Bank of Baroda',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/BankOfBarodaLogo.svg/250px-BankOfBarodaLogo.svg.png'
    }
  ];

  const testimonials = [
    {
      name: 'Raj Patel',
      image: 'https://images.unsplash.com/photo-1599856413870-40540dd410e0?w=400&h=400&fit=crop',
      loanType: 'Home Loan',
      review: 'ANA Enterprises made my home loan process incredibly smooth. They compared multiple banks and got me the best interest rate. Highly professional service.'
    },
    {
      name: 'Priya Sharma',
      image: 'https://images.unsplash.com/photo-1694157263770-1a844cb0f6e0?w=400&h=400&fit=crop',
      loanType: 'Business Loan',
      review: 'I needed urgent funds for my business expansion. The team at ANA helped me get approval within 3 days. Their expertise saved me time and money.'
    },
    {
      name: 'Amit Kumar',
      image: 'https://images.unsplash.com/photo-1603991414220-51b87b89a371?w=400&h=400&fit=crop',
      loanType: 'Personal Loan',
      review: 'Quick, transparent, and hassle-free. Got my personal loan approved with minimal documentation. Thank you ANA Enterprises for the excellent support.'
    },
    {
      name: 'Neha Desai',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      loanType: 'LAP',
      review: 'The team guided me through every step of the loan against property process. Professional, knowledgeable, and always available to answer questions.'
    },
    {
      name: 'Vikram Singh',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      loanType: 'Working Capital',
      review: 'ANA Enterprises understood my business needs perfectly and arranged working capital finance at competitive rates. Truly reliable partners.'
    },
    {
      name: 'Anjali Mehta',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      loanType: 'Balance Transfer',
      review: 'Saved lakhs in interest by transferring my home loan through ANA. They handled everything professionally and made the process stress-free.'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I get a loan?',
      answer: 'The approval timeline varies by loan type and lender. Personal loans can be approved within 24-48 hours, while home loans typically take 7-15 days. We work to expedite the process and keep you informed at every step.'
    },
    {
      question: 'What documents are required?',
      answer: 'Basic documents include identity proof (Aadhaar, PAN), address proof, income proof (salary slips/ITR), and bank statements. Specific requirements vary by loan type. Our team will provide a detailed checklist based on your loan requirement.'
    },
    {
      question: 'Which banks do you work with?',
      answer: 'We partner with 20+ leading banks and NBFCs including HDFC Bank, ICICI Bank, SBI, Axis Bank, Kotak Mahindra, Bank of Baroda, IDFC First Bank, PNB Housing, Tata Capital, Bajaj Finserv, and many more.'
    },
    {
      question: 'Can self-employed individuals apply?',
      answer: 'Yes, we assist both salaried and self-employed individuals. Self-employed applicants need to provide ITR, business proof, and bank statements. We have specialized loan products for business owners and professionals.'
    },
    {
      question: 'What is the eligibility criteria?',
      answer: 'Eligibility depends on factors like age (21-65 years), income, credit score, employment type, and existing obligations. Use our Eligibility Checker tool for a quick assessment, or contact us for personalized guidance.'
    },
    {
      question: 'Do you charge consultation fees?',
      answer: 'Our initial consultation is completely free. We only charge a nominal processing fee after your loan is successfully approved and disbursed. No hidden charges, complete transparency.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>ANA Enterprises - Smart Loan Solutions For Every Financial Need</title>
        <meta name="description" content="Expert loan assistance for Home Loans, Personal Loans, Business Loans, LAP, Mortgage Loans, and Working Capital Finance from leading banks and NBFCs. Quick approval, transparent process." />
      </Helmet>

      <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Smart Loan Solutions For Every Financial Need
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Expert assistance for Home Loans, Personal Loans, Business Loans, Mortgage Loans, LAP, and Working Capital Finance from leading banks and NBFCs. Get the best rates with our professional guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent" asChild>
                  <a href="#lead-form">Apply Now</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-primary-foreground border-primary-foreground/30 hover:bg-white/20" asChild>
                  <a href="https://wa.me/919664669669" target="_blank" rel="noopener noreferrer">
                    WhatsApp Consultation
                  </a>
                </Button>
              </div>

              <div className="space-y-3">
                {heroFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-luxury">
                <img
                  src="https://images.unsplash.com/photo-1687042277317-7f0738d801bd"
                  alt="Professional financial consultation for loans"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why choose ANA Enterprises?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for all loan requirements with professional expertise and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {trustCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Happy Clients', value: stats.clients, suffix: '+' },
              { label: 'Loans Assisted', value: stats.loans, prefix: '₹', suffix: '+ Crore' },
              { label: 'Banking Partners', value: stats.partners, suffix: '+' },
              { label: 'Years Experience', value: stats.experience, suffix: '+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our loan services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive loan solutions tailored to your financial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={service.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border group">
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our banking partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with leading banks and NBFCs to get you the best loan deals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {bankLogos.map((bank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex min-h-[82px] items-center justify-center p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="h-12 max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              What our clients say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="h-24 w-24 rounded-xl object-cover"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg leading-relaxed mb-4 italic">
                        "{testimonials[currentTestimonial].review}"
                      </p>
                      <div>
                        <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].loanType}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'w-8 bg-primary' : 'w-2 bg-muted'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our loan services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="lead-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Apply for a loan today
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will contact you within 24 hours
              </p>
            </div>

            <Card className="border-border shadow-luxury">
              <CardContent className="p-8">
                <LeadForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Get in touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to us for any queries or assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Marogold Building, Kanakiya Road, Mira Road East, Thane, Maharashtra 401107
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call or WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <a href="tel:+919664669669" className="hover:text-primary transition-colors">
                    +91 9664 669 669
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:info@anaenterprises.in" className="hover:text-primary transition-colors">
                    info@anaenterprises.in
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Quick Tools</h3>
                <div className="space-y-2">
                  <Link to="/emi-calculator" className="block text-sm text-primary hover:underline">
                    EMI Calculator
                  </Link>
                  <Link to="/eligibility-checker" className="block text-sm text-primary hover:underline">
                    Eligibility Checker
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
