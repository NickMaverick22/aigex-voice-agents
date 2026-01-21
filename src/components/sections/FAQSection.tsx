'use client';

import { FAQ } from '@/components/ui/FAQ';

export function FAQSection() {
  const faqItems = [
    {
      question: "Will callers know they're speaking to an AI?",
      answer:
        "Most callers genuinely believe they're speaking to a human receptionist. Our AI uses natural British accents, appropriate pauses, and emotional intelligence to sound completely authentic. We can disclose it's an AI if required for your industry—the choice is yours.",
    },
    {
      question: "What happens if the AI can't handle a call?",
      answer:
        "The AI is trained to recognise when a call needs human attention—emergencies, complaints, or complex requests. It smoothly transfers these calls to your team with full context, so the caller never has to repeat themselves.",
    },
    {
      question: 'Can I use my existing phone number?',
      answer:
        "Yes! AIGEX works with your existing phone number—no need to change anything. We can set it up to answer all calls, overflow calls only, or after-hours calls only. Completely flexible to your needs.",
    },
    {
      question: 'How quickly can I get started?',
      answer:
        "Most businesses are live within 3-5 days. We handle all the setup, training, and integration. You just need to provide information about your business, services, and how you'd like the AI to handle different call types.",
    },
    {
      question: 'What calendar systems do you integrate with?',
      answer:
        "We integrate with Google Calendar, Microsoft Outlook, Calendly, Acuity, SimplyBook, and most industry-specific booking systems. If you use a system we don't yet support, we can often build a custom integration.",
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely. We use enterprise-grade encryption, are fully GDPR compliant, and never sell or share your data. Call recordings are stored securely and you control retention periods. We can also sign BAAs for healthcare clients.',
    },
    {
      question: 'How much revenue am I actually losing to missed calls?',
      answer:
        "The average trade job is worth £500-£2,000. If you're missing just 5 calls a week, that's potentially £10,000+ per month walking straight to your competitors. We'll help you calculate your exact numbers on our consultation call.",
    },
    {
      question: 'Can I try before I commit?',
      answer:
        "Yes! Book a demo and we'll show you exactly how your AI receptionist would handle your specific call types. You can test it yourself, ask it questions, and see firsthand how natural it sounds before making any commitment.",
    },
  ];

  return (
    <section className="py-[100px]" id="faq">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <span className="inline-block text-[0.85rem] font-semibold text-primary uppercase tracking-[2px] mb-4">
            FAQ
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[1.1rem] text-gray-500 max-w-[600px] mx-auto">
            Everything you need to know about AIGEX Voice Agents
          </p>
        </div>

        <FAQ items={faqItems} />
      </div>
    </section>
  );
}
