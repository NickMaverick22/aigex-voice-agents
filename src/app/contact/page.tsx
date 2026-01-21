import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppIcon, EmailIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Contact Us - AIGEX',
  description:
    "Have questions about AIGEX? We're here to help. Reach out through WhatsApp for instant responses or send us an email.",
};

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="text-[1.1rem] text-gray-300 max-w-[600px] mx-auto">
              Have questions about AIGEX? We&apos;re here to help. Reach out
              through WhatsApp for instant responses or send us an email.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
              {/* WhatsApp Card */}
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-[20px] p-12 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-[20px] flex items-center justify-center mx-auto mb-6 text-primary-light">
                  <WhatsAppIcon className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">WhatsApp</h2>
                <p className="text-gray-300 mb-6 leading-[1.7]">
                  Get instant responses on WhatsApp. We typically respond within
                  minutes during business hours.
                </p>
                <div className="text-[1.1rem] font-medium mb-6">
                  <a
                    href="https://wa.me/21629707770"
                    className="text-primary-light no-underline hover:underline"
                  >
                    +216 29 707 770
                  </a>
                </div>
                <ButtonLink
                  href="https://wa.me/21629707770"
                  variant="whatsapp"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Chat on WhatsApp
                </ButtonLink>
              </div>

              {/* Email Card */}
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-[20px] p-12 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-[20px] flex items-center justify-center mx-auto mb-6 text-primary-light">
                  <EmailIcon className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-semibold mb-3">Email</h2>
                <p className="text-gray-300 mb-6 leading-[1.7]">
                  For detailed inquiries, partnerships, or support requests,
                  send us an email and we&apos;ll get back to you.
                </p>
                <div className="text-[1.1rem] font-medium mb-6">
                  <a
                    href="mailto:salimsoussi@mvrk22.com"
                    className="text-primary-light no-underline hover:underline"
                  >
                    salimsoussi@mvrk22.com
                  </a>
                </div>
                <ButtonLink
                  href="mailto:salimsoussi@mvrk22.com"
                  variant="email"
                  size="lg"
                >
                  <EmailIcon className="w-5 h-5" />
                  Send an Email
                </ButtonLink>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-20 text-center">
              <h2 className="text-[2rem] font-semibold mb-4">What to Expect</h2>
              <p className="text-gray-300 max-w-[600px] mx-auto mb-10">
                When you reach out, here&apos;s what happens next:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
                <InfoCard
                  icon={<ChatIcon />}
                  title="Quick Response"
                  description="We respond within minutes on WhatsApp, and within 24 hours via email."
                />
                <InfoCard
                  icon={<ClipboardIcon />}
                  title="Free Consultation"
                  description="We'll discuss your needs and show you exactly how AIGEX can help."
                />
                <InfoCard
                  icon={<ZapIcon />}
                  title="Fast Setup"
                  description="If you decide to proceed, we can have you live within days."
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 text-center">
      <div className="w-[52px] h-[52px] bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-light">
        {icon}
      </div>
      <h3 className="text-[1.1rem] font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
