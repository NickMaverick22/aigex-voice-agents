import { cn } from '@/lib/utils';
import {
  IconMicrophone,
  IconShield,
  IconClock,
  IconCalendar,
  IconMessage,
  IconFileText,
  IconHeadset,
  IconChartBar,
} from '@tabler/icons-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <IconMicrophone />,
      title: 'Natural Voice',
      description:
        "British accents with natural pauses. Callers think they're speaking to a human.",
    },
    {
      icon: <IconShield />,
      title: 'Accurate Responses',
      description:
        "Only says what it's trained to say. No hallucinations or made-up info.",
    },
    {
      icon: <IconClock />,
      title: 'Instant Pickup',
      description: 'Answers in under 1 second. No waiting, no hold music.',
    },
    {
      icon: <IconCalendar />,
      title: 'Calendar Sync',
      description:
        'Works with Google, Outlook, Calendly. No double bookings.',
    },
    {
      icon: <IconMessage />,
      title: 'SMS Confirmations',
      description:
        'Automatic texts with appointment details and directions.',
    },
    {
      icon: <IconFileText />,
      title: 'Call Transcripts',
      description: 'Every call recorded and transcribed. Review anytime.',
    },
    {
      icon: <IconHeadset />,
      title: '24/7 Availability',
      description:
        'Never miss a call again. Your AI receptionist works around the clock.',
    },
    {
      icon: <IconChartBar />,
      title: 'Analytics Dashboard',
      description:
        'Track call volume, booking rates, and customer insights in real-time.',
    },
  ];

  return (
    <section className="py-[100px] bg-gray-100 text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-[60px]">
          <span className="inline-block text-[0.85rem] font-semibold text-primary uppercase tracking-[2px] mb-4">
            Features
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-4 text-navy">
            Enterprise Tech, SMB Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature border-neutral-300',
        (index === 0 || index === 4) && 'lg:border-l border-neutral-300',
        index < 4 && 'lg:border-b border-neutral-300'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-200 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-200 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-navy">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
