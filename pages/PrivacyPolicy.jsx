import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';

const sections = [
  {
    title: 'Information We Collect',
    items: [
      'Personal details such as name, mobile number, email address, city, age, occupation, and income details.',
      'Loan-related information such as loan requirement, existing EMI, eligibility inputs, and preferred loan products.',
      'Communication details shared through phone, WhatsApp, email, website forms, or in-person consultation.',
      'Technical information such as browser type, device information, approximate location, and website usage data when available.'
    ]
  },
  {
    title: 'How We Use Your Information',
    items: [
      'To contact you about your enquiry and provide loan consultation services.',
      'To assess basic loan eligibility and suggest suitable loan options.',
      'To coordinate documentation, application support, and status updates with banks, NBFCs, and lending partners.',
      'To improve our website, customer support, internal records, and service quality.',
      'To comply with applicable legal, regulatory, audit, and dispute-resolution requirements.'
    ]
  },
  {
    title: 'Sharing of Information',
    items: [
      'We may share relevant information with banks, NBFCs, financial institutions, verification agencies, service providers, and professional advisors only for loan consultation, application support, verification, or compliance purposes.',
      'We do not sell your personal information.',
      'Final loan processing, approval, interest rate, charges, and disbursement are handled by the respective lender under its own policies.'
    ]
  },
  {
    title: 'Consent and Your Choices',
    items: [
      'By submitting an enquiry or contacting us, you consent to ANA Enterprises contacting you by phone, WhatsApp, SMS, email, or similar channels for your loan requirement.',
      'You may request correction, update, or deletion of your personal information, subject to legal and business record requirements.',
      'You may opt out of promotional communication, but we may still contact you for active service requests or required updates.'
    ]
  },
  {
    title: 'Data Security and Retention',
    items: [
      'We use reasonable administrative, technical, and operational safeguards to protect information from unauthorized access, misuse, loss, or disclosure.',
      'No website, communication channel, or electronic storage method is completely secure, so we cannot guarantee absolute security.',
      'We retain information only as long as needed for consultation, application support, legal compliance, dispute handling, and business records.'
    ]
  },
  {
    title: 'Cookies and Local Storage',
    items: [
      'Our website may use browser storage or similar technologies to support forms, improve functionality, and understand website usage.',
      'You can control cookies and browser storage through your browser settings, but some website features may not work properly if disabled.'
    ]
  },
  {
    title: 'Children',
    items: [
      'Our services are intended for adults seeking financial consultation. We do not knowingly collect information from children.'
    ]
  },
  {
    title: 'Updates to This Policy',
    items: [
      'We may update this Privacy Policy from time to time. The latest version will be posted on this page with the updated date.'
    ]
  }
];

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ANA Enterprises</title>
        <meta
          name="description"
          content="Privacy Policy for ANA Enterprises loan consultancy services."
        />
      </Helmet>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: June 18, 2026
              </p>
            </div>

            <Card className="border-border shadow-lg">
              <CardContent className="space-y-8 p-6 md:p-10">
                <div className="space-y-4">
                  <p className="leading-relaxed text-muted-foreground">
                    ANA Enterprises is a loan consultancy service based in Mira Road East, Thane,
                    Maharashtra. This Privacy Policy explains how we collect, use, share, and protect
                    information when you use our website, submit an enquiry, or contact us for loan
                    assistance.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    We assist customers with loan consultation and coordination with banks and NBFCs.
                    We do not directly provide loans.
                  </p>
                </div>

                {sections.map((section) => (
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

export default PrivacyPolicy;
