import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - AIGEX',
  description: 'Please read these terms carefully before using our services.',
};

export default function TermsPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] py-4 bg-charcoal/95 backdrop-blur-[20px] border-b border-primary/10">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Image
              src="/aigex-logo.png"
              alt="AIGEX"
              width={70}
              height={70}
              className="h-[70px] w-auto object-contain"
            />
          </Link>

          <ul className="hidden md:flex gap-8 list-none">
            <li>
              <Link
                href="/#problem"
                className="text-gray-300 no-underline text-sm font-medium transition-colors hover:text-white"
              >
                Why AIGEX
              </Link>
            </li>
            <li>
              <Link
                href="/#how-it-works"
                className="text-gray-300 no-underline text-sm font-medium transition-colors hover:text-white"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className="text-gray-300 no-underline text-sm font-medium transition-colors hover:text-white"
              >
                FAQ
              </Link>
            </li>
          </ul>

          <div className="flex gap-3">
            <ButtonLink href="/#pricing" variant="secondary">
              View Pricing
            </ButtonLink>
            <ButtonLink href="/" variant="primary">
              Start Free Trial
            </ButtonLink>
          </div>
        </div>
      </nav>

      <main>
        {/* Page Header */}
        <section className="pt-[160px] pb-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(104,120,214,0.15)_0%,transparent_50%)] pointer-events-none" />
          <div className="max-w-[1200px] mx-auto px-6 relative">
            <h1 className="text-[2.25rem] md:text-[3rem] font-semibold mb-4">
              Terms of Service
            </h1>
            <p className="text-[1.1rem] text-gray-300">
              Please read these terms carefully before using our services
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[800px] mx-auto bg-white/[0.02] border border-white/[0.08] rounded-[20px] p-8 md:p-12">
              <ContentSection title="1. Acceptance of Terms">
                <p>
                  By accessing or using AIGEX services (&quot;Services&quot;),
                  you agree to be bound by these Terms of Service
                  (&quot;Terms&quot;). If you are using the Services on behalf
                  of an organization, you represent that you have the authority
                  to bind that organization to these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, you may not access or use
                  the Services.
                </p>
              </ContentSection>

              <ContentSection title="2. Description of Services">
                <p>
                  AIGEX provides AI-powered customer experience automation
                  services, including:
                </p>
                <ul>
                  <li>
                    Automated messaging across multiple platforms (WhatsApp,
                    Instagram, Facebook, webchat)
                  </li>
                  <li>AI-powered voice call handling</li>
                  <li>Integration with business systems (inventory, CRM)</li>
                  <li>Multi-language customer support automation</li>
                  <li>Analytics and reporting dashboards</li>
                </ul>
              </ContentSection>

              <ContentSection title="3. Account Registration">
                <ContentSubsection title="3.1 Account Creation">
                  <p>
                    To use our Services, you must create an account by providing
                    accurate and complete information. You are responsible for
                    maintaining the confidentiality of your account credentials.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="3.2 Account Requirements">
                  <ul>
                    <li>You must be at least 18 years old</li>
                    <li>You must provide a valid email address</li>
                    <li>
                      You must have the legal authority to enter into this
                      agreement
                    </li>
                    <li>
                      One person or entity may not maintain more than one
                      account
                    </li>
                  </ul>
                </ContentSubsection>

                <ContentSubsection title="3.3 Account Security">
                  <p>
                    You are responsible for all activities that occur under your
                    account. Notify us immediately if you suspect any
                    unauthorized use of your account.
                  </p>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="4. Subscription Plans and Payment">
                <ContentSubsection title="4.1 Pricing">
                  <p>
                    Our Services are offered on a subscription basis with the
                    following plans:
                  </p>
                  <ul>
                    <li>
                      <strong>Launch:</strong> Starting at €59/month
                    </li>
                    <li>
                      <strong>Growth:</strong> Starting at €149/month
                    </li>
                    <li>
                      <strong>Scale:</strong> Starting at €399/month
                    </li>
                  </ul>
                  <p>
                    Prices are subject to change with 30 days notice to existing
                    subscribers.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="4.2 Free Trial">
                  <p>
                    New accounts receive a 14-day free trial. No credit card is
                    required to start the trial. At the end of the trial, you
                    must select a paid plan to continue using the Services.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="4.3 Billing">
                  <ul>
                    <li>
                      Subscriptions are billed in advance on a monthly,
                      quarterly, semi-annual, or annual basis
                    </li>
                    <li>All fees are exclusive of applicable taxes</li>
                    <li>
                      Overage charges are billed at the end of each billing
                      period
                    </li>
                  </ul>
                </ContentSubsection>

                <ContentSubsection title="4.4 Overage Rates">
                  <p>
                    If you exceed your plan&apos;s message or call limits:
                  </p>
                  <ul>
                    <li>
                      <strong>Launch:</strong> €0.03/message, €0.15/call minute
                    </li>
                    <li>
                      <strong>Growth:</strong> €0.02/message, €0.10/call minute
                    </li>
                    <li>
                      <strong>Scale:</strong> €0.015/message, €0.08/call minute
                    </li>
                  </ul>
                </ContentSubsection>

                <ContentSubsection title="4.5 Refunds">
                  <p>
                    Subscription fees are non-refundable except as required by
                    law. You may cancel your subscription at any time, and you
                    will retain access until the end of your current billing
                    period.
                  </p>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="5. Acceptable Use">
                <ContentSubsection title="5.1 Permitted Uses">
                  <p>
                    You may use the Services only for lawful purposes and in
                    accordance with these Terms. You agree to use the Services
                    to:
                  </p>
                  <ul>
                    <li>Provide customer support and information</li>
                    <li>Process legitimate business inquiries</li>
                    <li>Automate routine customer communications</li>
                  </ul>
                </ContentSubsection>

                <ContentSubsection title="5.2 Prohibited Uses">
                  <p>You agree NOT to use the Services to:</p>
                  <ul>
                    <li>
                      Send spam, unsolicited messages, or bulk communications
                    </li>
                    <li>Harass, abuse, or harm another person</li>
                    <li>Impersonate any person or entity</li>
                    <li>Distribute malware or harmful content</li>
                    <li>Violate any applicable law or regulation</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Collect personal data without proper consent</li>
                    <li>Engage in fraudulent activities</li>
                    <li>Circumvent security measures</li>
                  </ul>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="6. Intellectual Property">
                <ContentSubsection title="6.1 Our Property">
                  <p>
                    The Services, including all software, algorithms, designs,
                    and content, are owned by AIGEX and protected by
                    intellectual property laws. We grant you a limited,
                    non-exclusive, non-transferable license to use the Services
                    during your subscription.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="6.2 Your Content">
                  <p>
                    You retain ownership of all content you provide to the
                    Services (&quot;Your Content&quot;). You grant us a license
                    to use, process, and store Your Content solely to provide
                    the Services.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="6.3 Feedback">
                  <p>
                    Any feedback, suggestions, or ideas you provide about the
                    Services may be used by us without any obligation to you.
                  </p>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="7. Data Processing">
                <ContentSubsection title="7.1 Data Controller">
                  <p>
                    You are the data controller for personal data processed
                    through the Services. We act as a data processor on your
                    behalf.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="7.2 Your Responsibilities">
                  <ul>
                    <li>Obtain necessary consents from your customers</li>
                    <li>Comply with applicable data protection laws</li>
                    <li>Respond to data subject requests</li>
                    <li>Maintain appropriate privacy notices</li>
                  </ul>
                </ContentSubsection>

                <ContentSubsection title="7.3 Our Responsibilities">
                  <ul>
                    <li>Process data only as instructed by you</li>
                    <li>Implement appropriate security measures</li>
                    <li>Assist with data subject requests upon request</li>
                    <li>Delete data upon termination as requested</li>
                  </ul>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="8. Service Level">
                <ContentSubsection title="8.1 Availability">
                  <p>
                    We strive to maintain 99.9% uptime for our Services.
                    Scheduled maintenance will be announced in advance when
                    possible.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="8.2 Support">
                  <ul>
                    <li>
                      <strong>Launch/Growth:</strong> Email support during
                      business hours
                    </li>
                    <li>
                      <strong>Scale:</strong> Priority support with faster
                      response times
                    </li>
                  </ul>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="9. Limitation of Liability">
                <ContentSubsection title="9.1 Disclaimer">
                  <p>
                    THE SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT
                    WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT
                    WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE,
                    OR SECURE.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="9.2 Limitation">
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIGEX&apos;S TOTAL
                    LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THE
                    SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE 12
                    MONTHS PRECEDING THE CLAIM.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="9.3 Exclusions">
                  <p>
                    IN NO EVENT SHALL AIGEX BE LIABLE FOR INDIRECT, INCIDENTAL,
                    SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS
                    OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
                  </p>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="10. Indemnification">
                <p>
                  You agree to indemnify and hold harmless AIGEX and its
                  officers, directors, employees, and agents from any claims,
                  damages, or expenses arising from:
                </p>
                <ul>
                  <li>Your use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Content you provide through the Services</li>
                </ul>
              </ContentSection>

              <ContentSection title="11. Termination">
                <ContentSubsection title="11.1 By You">
                  <p>
                    You may cancel your subscription at any time through your
                    account settings. Cancellation takes effect at the end of
                    the current billing period.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="11.2 By Us">
                  <p>
                    We may suspend or terminate your access to the Services if:
                  </p>
                  <ul>
                    <li>You violate these Terms</li>
                    <li>Your payment method fails</li>
                    <li>We are required to do so by law</li>
                    <li>Your use poses a security risk</li>
                  </ul>
                </ContentSubsection>

                <ContentSubsection title="11.3 Effect of Termination">
                  <p>
                    Upon termination, your right to use the Services ceases
                    immediately. We will delete your data within 30 days unless
                    legally required to retain it.
                  </p>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="12. Changes to Terms">
                <p>
                  We may modify these Terms at any time. We will provide notice
                  of material changes via email or through the Services. Your
                  continued use of the Services after changes take effect
                  constitutes acceptance of the revised Terms.
                </p>
              </ContentSection>

              <ContentSection title="13. Governing Law">
                <p>
                  These Terms are governed by the laws of Tunisia. Any disputes
                  shall be resolved in the courts of Tunisia, unless otherwise
                  required by applicable consumer protection laws.
                </p>
              </ContentSection>

              <ContentSection title="14. Miscellaneous">
                <ContentSubsection title="14.1 Entire Agreement">
                  <p>
                    These Terms, together with our Privacy Policy, constitute
                    the entire agreement between you and AIGEX regarding the
                    Services.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="14.2 Severability">
                  <p>
                    If any provision of these Terms is found invalid, the
                    remaining provisions will continue in effect.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="14.3 No Waiver">
                  <p>
                    Our failure to enforce any right or provision does not
                    constitute a waiver of that right or provision.
                  </p>
                </ContentSubsection>

                <ContentSubsection title="14.4 Assignment">
                  <p>
                    You may not assign your rights under these Terms without our
                    consent. We may assign our rights without restriction.
                  </p>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="15. Contact Information">
                <p>
                  For questions about these Terms, please contact us:
                </p>
                <ul>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:salimsoussi@mvrk22.com"
                      className="text-primary-light no-underline hover:underline"
                    >
                      salimsoussi@mvrk22.com
                    </a>
                  </li>
                  <li>
                    <strong>WhatsApp:</strong>{' '}
                    <a
                      href="https://wa.me/21629707770"
                      className="text-primary-light no-underline hover:underline"
                    >
                      +216 29 707 770
                    </a>
                  </li>
                </ul>
              </ContentSection>

              <p className="text-sm text-gray-500 border-t border-white/10 pt-6 mt-10">
                Last Updated: January 16, 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 first:mt-0">
      <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
      <div className="text-gray-300 leading-[1.8] [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:ml-6 [&>ul>li]:mb-2">
        {children}
      </div>
    </div>
  );
}

function ContentSubsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 first:mt-0">
      <h3 className="text-[1.15rem] font-semibold text-primary-light mb-3">
        {title}
      </h3>
      <div className="text-gray-300 leading-[1.8] [&>p]:mb-4 [&>ul]:ml-6 [&>ul>li]:mb-2">
        {children}
      </div>
    </div>
  );
}
