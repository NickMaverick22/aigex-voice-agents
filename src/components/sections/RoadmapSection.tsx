import { PhoneIcon, FileTextIcon, SettingsIcon, CheckCircleIcon, RefreshIcon } from '@/components/icons';

export function RoadmapSection() {
  const steps = [
    {
      icon: <PhoneIcon className="w-7 h-7" />,
      title: 'Book a Call',
      description: 'Quick chat to understand your business and current pain points',
      highlight: false,
    },
    {
      icon: <FileTextIcon className="w-7 h-7" />,
      title: 'Share Your Details',
      description: 'You provide your services, pricing, FAQs, and how you want calls handled',
      highlight: false,
    },
    {
      icon: <SettingsIcon className="w-7 h-7" />,
      title: 'We Build Your Agent',
      description: 'Custom AI trained specifically for your business, voice, and workflows',
      highlight: false,
    },
    {
      icon: <CheckCircleIcon className="w-7 h-7" />,
      title: 'Never Miss a Call Again',
      description: 'Your AI answers 24/7, books jobs, and you focus on the work',
      highlight: true,
    },
    {
      icon: <RefreshIcon className="w-7 h-7" />,
      title: 'Ongoing Optimisation',
      description: 'We continuously improve your agent based on real call data',
      highlight: false,
    },
  ];

  return (
    <section className="py-[100px] bg-gray-100 text-navy" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
          <span className="inline-block text-[0.85rem] font-semibold text-primary uppercase tracking-[2px] mb-4">
            Your Journey
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-4 text-navy">
            From Missed Calls to Full Calendar
          </h2>
          <p className="text-[1.1rem] text-gray-500 max-w-[600px] mx-auto">
            Here&apos;s exactly how we get you there
          </p>
        </div>

        <div className="relative py-10">
          {/* Connection line - hidden on mobile */}
          {/* Gradient: primary (steps 1-3), then green/success (steps 3-5) */}
          <div
            className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[3px] rounded"
            style={{
              background: 'linear-gradient(to right, #6878d6 0%, #6878d6 40%, #22c55e 50%, #22c55e 100%)'
            }}
          />

          <div className="flex flex-col lg:flex-row justify-between relative z-[1] gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center flex-1 max-w-[300px] lg:max-w-[180px] mx-auto ${
                  step.highlight ? 'highlight' : ''
                }`}
              >
                <div
                  className={`w-14 h-14 bg-white border-[3px] rounded-full flex items-center justify-center relative z-[2] mb-4 shrink-0 ${
                    step.highlight
                      ? 'border-success text-success'
                      : 'border-primary text-primary'
                  }`}
                >
                  {step.icon}
                </div>
                <div
                  className={`${
                    step.highlight
                      ? 'bg-success/[0.08] rounded-xl p-4'
                      : ''
                  }`}
                >
                  <div
                    className={`inline-block w-6 h-6 rounded-full text-white text-[0.8rem] font-bold leading-6 mb-2 ${
                      step.highlight ? 'bg-success' : 'bg-primary'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[0.85rem] text-gray-500 leading-[1.5]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
