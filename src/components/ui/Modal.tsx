'use client';

import { useState, useEffect, FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  const [userName, setUserName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [numCalls, setNumCalls] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hey! I'm ${userName}, I run a ${businessType.toLowerCase()} business. We get around ${numCalls} calls a week and I'd love to chat about how AI voice agents could help. When works for a quick call?`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/21629707770?text=${encoded}`, '_blank');
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const businessTypes = [
    'Plumber',
    'Electrician',
    'HVAC / Heating',
    'Locksmith',
    'Builder / Contractor',
    'Roofer',
    'Landscaper',
    'Mechanic / Garage',
    'Dental Practice',
    'Medical Practice',
    'Estate Agent',
    'Accountant',
    'Salon / Spa',
    'Other',
  ];

  const callRanges = ['1-10 calls', '10-25 calls', '25-50 calls', '50+ calls'];

  return (
    <div
      className={cn(
        'fixed inset-0 z-[2000] items-center justify-center',
        'bg-black/70 backdrop-blur-[4px]',
        isOpen ? 'flex' : 'hidden'
      )}
      onClick={handleOverlayClick}
    >
      <div className="bg-charcoal border border-primary/30 rounded-[20px] p-10 max-w-[420px] w-[90%] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-transparent border-none text-gray-500 cursor-pointer p-2 hover:text-white"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h3 className="font-heading text-2xl font-semibold mb-2">
          Book Your Free Consultation
        </h3>
        <p className="text-gray-500 text-sm mb-6">
          Tell us a bit about your business
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[0.85rem] font-medium text-gray-300 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="John Smith"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-[0.95rem] font-inherit focus:outline-none focus:border-primary placeholder:text-gray-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[0.85rem] font-medium text-gray-300 mb-1.5">
              Business Type
            </label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-[0.95rem] font-inherit focus:outline-none focus:border-primary [&>option]:bg-charcoal [&>option]:text-white"
            >
              <option value="">Select your industry</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-[0.85rem] font-medium text-gray-300 mb-1.5">
              Number of Calls per Week
            </label>
            <select
              value={numCalls}
              onChange={(e) => setNumCalls(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-[0.95rem] font-inherit focus:outline-none focus:border-primary [&>option]:bg-charcoal [&>option]:text-white"
            >
              <option value="">Select range</option>
              {callRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <Button type="submit" variant="primary" className="w-full mt-2">
            <WhatsAppIcon className="w-5 h-5" />
            Chat on WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
}
