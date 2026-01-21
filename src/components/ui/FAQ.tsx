'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/components/icons';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[800px] mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden',
            activeIndex === index && 'active'
          )}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 bg-transparent border-none text-left cursor-pointer flex justify-between items-center font-heading text-[1.05rem] font-semibold text-navy"
          >
            {item.question}
            <ChevronDownIcon
              className={cn(
                'flex-shrink-0 transition-transform duration-300 text-primary',
                activeIndex === index && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-[max-height] duration-300',
              activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
            )}
          >
            <div className="px-6 pb-6 text-[0.95rem] text-gray-500 leading-[1.7]">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
