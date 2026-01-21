'use client';

import { CTAButton } from '@/components/ui/CTAButton';
import { CheckIcon, MicIcon } from '@/components/icons';

interface SolutionSectionProps {
  onOpenModal: () => void;
}

export function SolutionSection({ onOpenModal }: SolutionSectionProps) {
  const features = [
    'Answers in under 1 second',
    'Natural British accents',
    'Books into your calendar',
    'Handles peak hour overflow',
    'Transfers urgent calls to you',
  ];

  return (
    <section className="py-[100px]" id="solution">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <div>
            <span className="inline-block text-[0.85rem] font-semibold text-primary uppercase tracking-[2px] mb-4">
              The Solution
            </span>
            <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-6">
              Your AI Receptionist That Never Sleeps
            </h2>
            <p className="text-[1.1rem] text-gray-300 mb-8">
              Answer every call instantly, book appointments, qualify leads, and
              handle FAQs. All while you focus on running your business.
            </p>

            <ul className="list-none mb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 py-3 text-base text-gray-300"
                >
                  <CheckIcon className="flex-shrink-0 text-success" />
                  {feature}
                </li>
              ))}
            </ul>

            <CTAButton
              href="#"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                onOpenModal();
              }}
            >
              Book a Free Consultation
            </CTAButton>
          </div>

          {/* ROI Card */}
          <div className="gradient-dark border border-primary/20 rounded-2xl p-8">
            <div className="text-center py-5">
              <MicIcon className="w-20 h-20 text-primary-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                The Maths is Simple
              </h3>
              <p className="text-gray-500 text-[0.95rem]">
                5 missed calls per week at £500 average job value
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-around text-center">
                  <div>
                    <div className="text-2xl font-bold text-danger">
                      £10,000+
                    </div>
                    <div className="text-[0.8rem] text-gray-500">
                      Lost per month
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-danger">
                      £120,000+
                    </div>
                    <div className="text-[0.8rem] text-gray-500">
                      Lost per year
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
