import {
  CalendarIcon,
  QuestionIcon,
  CheckCircleIcon,
  UserCheckIcon,
  BellIcon,
  MonitorIcon,
} from '@/components/icons';

export function UseCasesSection() {
  const useCases = [
    {
      icon: <CalendarIcon />,
      title: 'Book Appointments',
      description:
        'Checks availability, books slots, sends confirmations. Syncs with your calendar.',
    },
    {
      icon: <QuestionIcon />,
      title: 'Answer FAQs',
      description:
        'Trained on your business. Handles pricing, hours, services, and directions.',
    },
    {
      icon: <CheckCircleIcon />,
      title: 'Qualify Leads',
      description:
        'Asks the right questions. Captures details. Routes hot leads to you instantly.',
    },
    {
      icon: <UserCheckIcon />,
      title: 'Route Calls',
      description:
        'Handles routine calls. Transfers urgent ones to the right person.',
    },
    {
      icon: <BellIcon />,
      title: 'Send Reminders',
      description:
        'Confirms appointments automatically. Reduces no-shows significantly.',
    },
    {
      icon: <MonitorIcon />,
      title: 'Cover After Hours',
      description:
        'Captures leads and books appointments around the clock, every day.',
    },
  ];

  return (
    <section className="py-[100px] bg-gray-100 text-navy" id="use-cases">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-lavender rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary">
                {useCase.icon}
              </div>
              <h3 className="text-[1.15rem] font-semibold text-navy mb-3">
                {useCase.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
