import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - AIGEX',
  description: 'How we collect, use, and protect your information at AIGEX.',
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-[1.1rem] text-gray-300">
              How we collect, use, and protect your information
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[800px] mx-auto bg-white/[0.02] border border-white/[0.08] rounded-[20px] p-8 md:p-12">
              <ContentSection title="1. Introduction">
                <p>
                  AIGEX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you use our AI-powered customer experience automation
                  services.
                </p>
                <p>
                  By using AIGEX services, you consent to the data practices
                  described in this policy. If you do not agree with the terms
                  of this Privacy Policy, please do not access or use our
                  services.
                </p>
              </ContentSection>

              <ContentSection title="2. Information We Collect">
                <ContentSubsection title="2.1 Information You Provide">
                  <ul>
                    <li>
                      <strong>Account Information:</strong> Name, email address,
                      company name, phone number, and billing information when
                      you create an account.
                    </li>
                    <li>
                      <strong>Business Data:</strong> Product inventory, pricing
                      information, and other business data you integrate with
                      our platform.
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Sample messages and
                      communication styles you provide to train your AI
                      assistant.
                    </li>
                  </ul>
                </ContentSubsection>

                <ContentSubsection title="2.2 Information Collected Automatically">
                  <ul>
                    <li>
                      <strong>Usage Data:</strong> Information about how you
                      interact with our services, including message volumes,
                      response times, and feature usage.
                    </li>
                    <li>
                      <strong>Device Information:</strong> IP address, browser
                      type, operating system, and device identifiers.
                    </li>
                    <li>
                      <strong>Conversation Data:</strong> Messages exchanged
                      between your AI assistant and your customers (processed to
                      provide and improve our services).
                    </li>
                  </ul>
                </ContentSubsection>

                <ContentSubsection title="2.3 Information from Third Parties">
                  <ul>
                    <li>
                      Data from integrated platforms (WhatsApp Business API,
                      Facebook, Instagram) as authorized by you.
                    </li>
                    <li>
                      Payment processing information from our payment providers.
                    </li>
                  </ul>
                </ContentSubsection>
              </ContentSection>

              <ContentSection title="3. How We Use Your Information">
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ul>
                  <li>
                    To provide, operate, and maintain our AI automation services
                  </li>
                  <li>
                    To train and improve AI models specific to your business
                  </li>
                  <li>
                    To process transactions and send related information
                  </li>
                  <li>
                    To send administrative information, updates, and security
                    alerts
                  </li>
                  <li>To respond to inquiries and provide customer support</li>
                  <li>To analyze usage patterns and improve our services</li>
                  <li>
                    To detect, prevent, and address technical issues and fraud
                  </li>
                  <li>To comply with legal obligations</li>
                </ul>
              </ContentSection>

              <ContentSection title="4. Data Sharing and Disclosure">
                <p>
                  We do not sell your personal information. We may share your
                  information in the following circumstances:
                </p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> With third-party vendors
                    who assist in providing our services (hosting, analytics,
                    payment processing).
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or
                    to protect our rights, privacy, safety, or property.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you have given us
                    explicit permission to share your information.
                  </li>
                </ul>
              </ContentSection>

              <ContentSection title="5. Data Security">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your data:
                </p>
                <ul>
                  <li>
                    Encryption of data in transit (TLS/SSL) and at rest
                    (AES-256)
                  </li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
                <p>
                  While we strive to protect your information, no method of
                  transmission over the Internet is 100% secure. We cannot
                  guarantee absolute security.
                </p>
              </ContentSection>

              <ContentSection title="6. Data Retention">
                <p>
                  We retain your information for as long as necessary to provide
                  our services and fulfill the purposes outlined in this policy.
                  Specifically:
                </p>
                <ul>
                  <li>
                    <strong>Account Data:</strong> Retained while your account
                    is active and for 30 days after deletion request.
                  </li>
                  <li>
                    <strong>Conversation Data:</strong> Retained for 12 months
                    by default, configurable per your preferences.
                  </li>
                  <li>
                    <strong>Billing Records:</strong> Retained for 7 years as
                    required by tax regulations.
                  </li>
                </ul>
              </ContentSection>

              <ContentSection title="7. Your Rights (GDPR)">
                <p>
                  If you are located in the European Economic Area (EEA), you
                  have the following rights:
                </p>
                <ul>
                  <li>
                    <strong>Access:</strong> Request a copy of the personal data
                    we hold about you.
                  </li>
                  <li>
                    <strong>Rectification:</strong> Request correction of
                    inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong>Erasure:</strong> Request deletion of your personal
                    data (&quot;right to be forgotten&quot;).
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing of your data.
                  </li>
                  <li>
                    <strong>Portability:</strong> Receive your data in a
                    structured, machine-readable format.
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing based on
                    legitimate interests.
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent at any
                    time where processing is based on consent.
                  </li>
                </ul>
                <p>
                  To exercise these rights, contact us at{' '}
                  <a
                    href="mailto:salimsoussi@mvrk22.com"
                    className="text-primary-light no-underline hover:underline"
                  >
                    salimsoussi@mvrk22.com
                  </a>
                  .
                </p>
              </ContentSection>

              <ContentSection title="8. International Data Transfers">
                <p>
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure
                  appropriate safeguards are in place, including:
                </p>
                <ul>
                  <li>
                    Standard Contractual Clauses approved by the European
                    Commission
                  </li>
                  <li>
                    Data processing agreements with all third-party processors
                  </li>
                </ul>
              </ContentSection>

              <ContentSection title="9. Cookies and Tracking">
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how our services are used</li>
                  <li>Provide personalized content</li>
                </ul>
                <p>
                  You can control cookies through your browser settings.
                  Disabling certain cookies may affect the functionality of our
                  services.
                </p>
              </ContentSection>

              <ContentSection title="10. Children's Privacy">
                <p>
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal information from
                  children. If we become aware that we have collected data from
                  a child, we will take steps to delete such information.
                </p>
              </ContentSection>

              <ContentSection title="11. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the &quot;Last Updated&quot; date.
                  Material changes will be communicated via email or prominent
                  notice on our website.
                </p>
              </ContentSection>

              <ContentSection title="12. Contact Us">
                <p>
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us:
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
      <div className="text-gray-300 leading-[1.8] [&>ul]:ml-6 [&>ul>li]:mb-2">
        {children}
      </div>
    </div>
  );
}
