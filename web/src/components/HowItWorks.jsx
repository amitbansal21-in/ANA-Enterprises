import React from 'react';
import { FileText, MessageSquare, FileCheck, Building2, CheckCircle2, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';

function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Enquiry',
      description: 'Fill out our simple online form or call us directly to share your loan requirements.'
    },
    {
      icon: MessageSquare,
      title: 'Free Consultation',
      description: 'Our expert consultants will analyze your needs and recommend the best loan options.'
    },
    {
      icon: FileCheck,
      title: 'Document Verification',
      description: 'We help you prepare and verify all necessary documents for a smooth application process.'
    },
    {
      icon: Building2,
      title: 'Bank Processing',
      description: 'We submit your application to our partner banks and NBFCs for processing.'
    },
    {
      icon: CheckCircle2,
      title: 'Loan Approval',
      description: 'Track your application status and receive approval confirmation from the lender.'
    },
    {
      icon: Banknote,
      title: 'Disbursement',
      description: 'Once approved, the loan amount is disbursed directly to your account.'
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes getting a loan simple and hassle-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>
                
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 mt-2">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;