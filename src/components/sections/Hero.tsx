'use client';

import { ButtonLink } from '@/components/ui/Button';
import { CTAButton } from '@/components/ui/CTAButton';
import { PhoneIcon } from '@/components/icons';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center py-[120px] pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(104,120,214,0.15)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <div className="lg:text-left text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[0.85rem] text-primary-light mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-[pulse_2s_infinite]" />
              AI Voice Technology for 🇬🇧 SMBs
            </div>

            <h1 className="text-[2.25rem] md:text-[3.5rem] font-bold leading-[1.3] mb-6 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
              Never Miss a Call Again
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-[500px] lg:mx-0 mx-auto">
              While you&apos;re on a job, your phone rings. Another potential customer
              gone. Another £500+ job lost to a competitor who picked up.
            </p>

            <p className="text-base text-success mb-8">
              What if every call was answered, every lead captured, every
              appointment booked — automatically?
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
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
              <ButtonLink href="#problem" variant="secondary" size="lg">
                See What You&apos;re Losing
              </ButtonLink>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 justify-center lg:justify-start">
              <div className="text-left">
                <div className="font-heading text-[2rem] font-bold text-white">
                  24/7
                </div>
                <div className="text-[0.85rem] text-gray-500">Availability</div>
              </div>
              <div className="text-left">
                <div className="font-heading text-[2rem] font-bold text-white">
                  &lt;1s
                </div>
                <div className="text-[0.85rem] text-gray-500">Response time</div>
              </div>
              <div className="text-left">
                <div className="font-heading text-[2rem] font-bold text-white">
                  100x
                </div>
                <div className="text-[0.85rem] text-gray-500">
                  Cheaper than hiring
                </div>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <div className="gradient-dark border border-primary/20 rounded-2xl p-8 w-full max-w-[420px] shadow-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-base font-semibold">AIGEX Voice Agent</div>
                  <div className="text-[0.85rem] text-gray-500">
                    Handling incoming call
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* Call status */}
                <div className="flex items-center gap-3 p-4 bg-success/10 border border-success/20 rounded-xl">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center text-success animate-[ring_1.5s_ease-in-out_infinite]">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-success">
                      Call in progress
                    </div>
                    <div className="text-[0.8rem] text-gray-500">
                      Duration: 1:23
                    </div>
                  </div>
                </div>

                {/* Transcript */}
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <TranscriptLine speaker="Caller" isCustomer>
                    &quot;Hi, I need to book an emergency plumber for tomorrow&quot;
                  </TranscriptLine>
                  <TranscriptLine speaker="AI">
                    &quot;Of course, I can help with that. I have availability tomorrow
                    at 9am, 11am, or 2pm. Which works best for you?&quot;
                  </TranscriptLine>
                  <TranscriptLine speaker="Caller" isCustomer>
                    &quot;9am would be perfect&quot;
                  </TranscriptLine>
                  <TranscriptLine speaker="AI" isLast>
                    &quot;Brilliant, I&apos;ve booked you in for 9am tomorrow. You&apos;ll
                    receive a confirmation text shortly.&quot;
                  </TranscriptLine>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TranscriptLine({
  speaker,
  children,
  isCustomer = false,
  isLast = false,
}: {
  speaker: string;
  children: React.ReactNode;
  isCustomer?: boolean;
  isLast?: boolean;
}) {
  return (
    <div
      className={`flex gap-3 py-2 ${!isLast ? 'border-b border-white/5' : ''}`}
    >
      <span
        className={`text-[0.75rem] font-semibold uppercase min-w-[50px] ${
          isCustomer ? 'text-gray-500' : 'text-primary-light'
        }`}
      >
        {speaker}
      </span>
      <span className="text-[0.85rem] text-gray-300">{children}</span>
    </div>
  );
}
