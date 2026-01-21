'use client';

import { CTAButton } from '@/components/ui/CTAButton';

interface ProblemSectionProps {
  onOpenModal: () => void;
}

export function ProblemSection({ onOpenModal }: ProblemSectionProps) {
  return (
    <section className="py-[100px] bg-gray-100 text-navy" id="problem">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <span className="inline-block text-[0.85rem] font-semibold text-primary uppercase tracking-[2px] mb-4">
            The Problem
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-4 text-navy">
            Every Missed Call Costs You £500+
          </h2>
          <p className="text-[1.1rem] text-gray-500 max-w-[600px] mx-auto">
            That emergency plumber call at 6pm? It went to your competitor. That
            boiler repair? Gone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <ProblemCard
            icon={<PhoneStrikeIcon />}
            title="No Second Chances"
            description="Most callers who can't reach you won't try again. They simply move on."
          />
          <ProblemCard
            icon={<UsersIcon />}
            title="Competitors Win"
            description="Your marketing brought them in. A missed call sends them to whoever answers first."
            fadeAnimation
          />
          <ProblemCard
            icon={<ClockIcon />}
            title="After Hours Gap"
            description="Customers call evenings and weekends. Your team isn't there to answer."
            pulseAnimation
          />
          <ProblemCard
            icon={<ActivityIcon />}
            title="Staff Overload"
            description="Busy periods mean rushed calls and missed opportunities. Quality suffers."
            warningAnimation
          />
        </div>

        <div className="text-center mt-12">
          <CTAButton
            href="#"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal();
            }}
          >
            Stop the Bleeding
          </CTAButton>
          <p className="text-[0.85rem] text-gray-500 mt-3">
            See how much you&apos;re really losing
          </p>
        </div>
      </div>
    </section>
  );
}

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  fadeAnimation?: boolean;
  pulseAnimation?: boolean;
  warningAnimation?: boolean;
}

function ProblemCard({
  icon,
  title,
  description,
  fadeAnimation,
  pulseAnimation,
  warningAnimation,
}: ProblemCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="relative h-[180px] bg-gradient-to-b from-lavender to-lavender/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(104,120,214,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(104,120,214,0.08)_0%,transparent_50%)]" />
        <div
          className={`relative z-[2] text-primary flex items-center justify-center ${
            fadeAnimation ? 'animate-[fadeOut_2.5s_ease-in-out_infinite]' : ''
          }`}
        >
          {icon}
          {!fadeAnimation && !pulseAnimation && !warningAnimation && (
            <div className="absolute w-20 h-[3px] bg-danger rotate-[-45deg] rounded animate-[strikeThrough_2s_ease-in-out_infinite]" />
          )}
          {pulseAnimation && (
            <div className="absolute w-20 h-20 border-2 border-primary rounded-full animate-[pulse_2s_ease-out_infinite]" />
          )}
          {warningAnimation && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-danger text-white rounded-full flex items-center justify-center font-bold text-base animate-[warningBlink_1s_ease-in-out_infinite]">
              !
            </div>
          )}
        </div>
      </div>
      <h3 className="font-heading text-[1.15rem] font-semibold text-navy px-6 pt-6 pb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed px-6 pb-7">
        {description}
      </p>
    </div>
  );
}

function PhoneStrikeIcon() {
  return (
    <svg
      width="56"
      height="56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="56"
      height="56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="56"
      height="56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg
      width="56"
      height="56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
