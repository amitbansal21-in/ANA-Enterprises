import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';

const terms = [
  {
    title: 'Our Role',
    items: [
      'ANA Enterprises provides loan consultancy, documentation guidance, eligibility assistance, and coordination support with banks, NBFCs, and financial institutions.',
      'We are not a bank, NBFC, lender, or credit bureau, and we do not directly sanction, approve, disburse, or guarantee any loan.'
    ]
  },
  {
    title: 'Loan Approval and Third-Party Lenders',
    items: [
      'Loan approval, rejection, interest rate, processing fee, tenure, loan amount, documentation requirements, and disbursement are decided solely by the respective lender.',
      'Any lender offer, sanction letter, loan agreement, repayment schedule, or charge is governed by the lender terms and applicable law.',
      'Website calculators and eligibility tools provide indicative estimates only and should not be treated as a final loan offer or financial advice.'
    ]
  },
  {
    title: 'User Responsibilities',
    items: [
      'You agree to provide accurate, complete, and current information for consultation or application support.',
      'You are responsible for reviewing all lender documents, fees, interest rates, charges, repayment obligations, and terms before accepting any loan.',
      'You must not submit false documents, misleading information, unauthorized third-party information, or any unlawful request.'
    ]
  },
  {
    title: 'Fees and Payments',
    items: [
      'Initial consultation may be offered free of charge unless otherwise communicated.',
      'Any service fee, processing support fee, or consultancy charge will be communicated before collection.',
      'Lender charges such as processing fees, stamp duty, valuation charges, legal charges, insurance, foreclosure charges, and penalties are separate and are controlled by the lender.'
    ]
  },
  {
    title: 'Communication Consent',
    items: [
      'By submitting an enquiry, you authorize ANA Enterprises to contact you by phone, WhatsApp, SMS, email, or similar channels about your loan requirement.',
      'You also authorize us to share relevant information with lenders and service partners for consultation, verification, documentation, and application-support purposes.'
    ]
  },
  {
    title: 'Website Use',
    items: [
      'You may use this website only for lawful personal or business loan enquiry purposes.',
      'You must not misuse the website, attempt unauthorized access, interfere with website operation, copy content for commercial misuse, or upload harmful material.'
    ]
  },
  {
    title: 'No Warranty',
    items: [
      'We try to keep website content accurate and updated, but we do not warrant that all information is complete, current, error-free, or suitable for every user.',
      'Services are provided on an assistance basis and are subject to lender policies, market conditions, eligibility criteria, and regulatory requirements.'
    ]
  },
  {
    title: 'Limitation of Liability',
    items: [
      'To the maximum extent permitted by law, ANA Enterprises will not be liable for lender decisions, delays, rejection, change in rates, third-party actions, indirect losses, or losses caused by inaccurate information submitted by the user.',
      'Nothing in these Terms limits liability that cannot be excluded under applicable law.'
    ]
  },
  {
    title: 'Changes to Terms',
    items: [
      'We may update these Terms of Service from time to time. The latest version will be posted on this page with the updated date.'
    ]
  },
  {
    title: 'Governing Law',
    items: [
      'These Terms are governed by the laws of India. Subject to applicable law, disputes will be handled by courts or forums having jurisdiction over Thane, Maharashtra.'
    ]
  }
];

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - ANA Enterprises</title>
        <meta
          name="description"
          content="Terms of Service for ANA Enterprises loan consultancy services."
        />
      </Helmet>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: June 18, 2026
              </p>
            </div>

            <Card className="border-border shadow-lg">
              <CardContent className="space-y-8 p-6 md:p-10">
                <div className="space-y-4">
                  <p className="leading-relaxed text-muted-foreground">
                    These Terms of Service govern your use of the ANA Enterprises website,
                    enquiry forms, consultation support, and related loan-assistance services.
                    By using our website or submitting an enquiry, you agree to these Terms.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    If you do not agree with these Terms, please do not use our website or services.
                  </p>
                </div>

                {terms.map((section) => (
                  <div key={section.title}>
                    <h2 className="mb-3 text-2xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                      {section.items.map((item) => (
                        <li key={item} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div>
                  <h2 className="mb-3 text-2xl font-semibold text-foreground">Contact Us</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>ANA Enterprises</p>
                    <p>Marogold Building, Kanakiya Road, Mira Road East, Thane, Maharashtra 401107, India</p>
                    <p>
                      Phone/WhatsApp:{' '}
                      <a href="tel:+919664669669" className="text-primary hover:underline">
                        +91 9664 669 669
                      </a>
                    </p>
                    <p>
                      Email:{' '}
                      <a href="mailto:info@anaenterprises.in" className="text-primary hover:underline">
                        info@anaenterprises.in
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsOfService;
