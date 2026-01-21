import {
  IconCalendar,
  IconQuestionMark,
  IconCircleCheck,
  IconUserCheck,
  IconBell,
  IconDeviceDesktop,
} from '@tabler/icons-react';

export function UseCasesSection() {
  const useCases = [
    {
      icon: <IconCalendar className="w-7 h-7" />,
      title: 'Book Appointments',
      description:
        'Checks availability, books slots, sends confirmations. Syncs with your calendar automatically.',
    },
    {
      icon: <IconQuestionMark className="w-7 h-7" />,
      title: 'Answer FAQs',
      description:
        'Trained on your business. Handles pricing, hours, services, and directions with accuracy.',
    },
    {
      icon: <IconCircleCheck className="w-7 h-7" />,
      title: 'Qualify Leads',
      description:
        'Asks the right questions. Captures details. Routes hot leads to you instantly.',
    },
    {
      icon: <IconUserCheck className="w-7 h-7" />,
      title: 'Route Calls',
      description:
        'Handles routine calls intelligently. Transfers urgent ones to the right person.',
    },
    {
      icon: <IconBell className="w-7 h-7" />,
      title: 'Send Reminders',
      description:
        'Confirms appointments automatically. Reduces no-shows significantly for your business.',
    },
    {
      icon: <IconDeviceDesktop className="w-7 h-7" />,
      title: 'Cover After Hours',
      description:
        'Captures leads and books appointments around the clock, every single day.',
    },
  ];

  return (
    <section className="py-[100px] bg-white" id="use-cases">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[0.85rem] font-semibold text-primary uppercase tracking-[2px] mb-4">
            Capabilities
          </span>
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-4 text-navy">
            What Your AI Does
          </h2>
          <p className="text-[1.1rem] text-gray-500 max-w-[600px] mx-auto">
            Everything a great receptionist does, without the salary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-5 text-primary">
                {useCase.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">
                {useCase.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
