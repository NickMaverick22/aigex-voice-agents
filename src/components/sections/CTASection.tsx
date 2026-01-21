'use client';

import { CTAButton } from '@/components/ui/CTAButton';

interface CTASectionProps {
  onOpenModal: () => void;
}

export function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="py-[100px] gradient-dark border-t border-primary/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(104,120,214,0.2)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold mb-4">
            What Would 10 Extra Jobs a Month Mean for Your Business?
          </h2>
          <p className="text-[1.1rem] text-gray-300 mb-8">
            Every missed call is money walking out the door. Let&apos;s fix that.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton
              href="#"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                onOpenModal();
              }}
            >
              Book Your Free Consultation
            </CTAButton>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            15-minute call. No obligation. We&apos;ll show you exactly what you&apos;re
            missing.
          </p>
        </div>
      </div>
    </section>
  );
}
