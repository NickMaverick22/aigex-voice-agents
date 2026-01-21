import {
  MicIcon,
  ShieldIcon,
  ClockIcon,
  CalendarIcon,
  MessageIcon,
  FileTextIcon,
} from '@/components/icons';

export function FeaturesSection() {
  const features = [
    {
      icon: <MicIcon />,
      title: 'Natural Voice',
      description:
        "British accents with natural pauses. Callers think they're speaking to a human.",
    },
    {
      icon: <ShieldIcon />,
      title: 'Accurate Responses',
      description:
        "Only says what it's trained to say. No hallucinations or made-up info.",
    },
    {
      icon: <ClockIcon />,
      title: 'Instant Pickup',
      description: 'Answers in under 1 second. No waiting, no hold music.',
    },
    {
      icon: <CalendarIcon className="w-6 h-6" />,
      title: 'Calendar Sync',
      description:
        'Works with Google, Outlook, Calendly. No double bookings.',
    },
    {
      icon: <MessageIcon />,
      title: 'SMS Confirmations',
      description:
        'Automatic texts with appointment details and directions.',
    },
    {
      icon: <FileTextIcon />,
      title: 'Call Transcripts',
      description: 'Every call recorded and transcribed. Review anytime.',
    },
  ];

  return (
    <section className="py-[100px] bg-gray-100 text-navy">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <span className="inline-block text-[0.85rem] font-semibold text-primary uppercase tracking-[2px] mb-4">
            Features
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-4 text-navy">
            Enterprise Tech, SMB Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-5 p-7 bg-white border border-gray-200 rounded-2xl"
            >
              <div className="flex-shrink-0 w-[52px] h-[52px] bg-lavender rounded-xl flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[1.1rem] font-semibold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
