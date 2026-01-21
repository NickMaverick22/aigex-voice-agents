'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CTAButton } from '@/components/ui/CTAButton';

interface NavbarProps {
  onOpenModal?: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] py-4',
        'backdrop-blur-[20px]',
        'border-b border-primary/10',
        'transition-[background] duration-300',
        scrolled ? 'bg-charcoal/95' : 'bg-charcoal/85'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/aigex-logo.png"
            alt="AIGEX"
            width={70}
            height={70}
            className="h-[70px] w-auto object-contain"
          />
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              href="#problem"
              className="text-gray-300 no-underline text-sm font-medium transition-colors hover:text-white"
            >
              The Problem
            </Link>
          </li>
          <li>
            <Link
              href="#solution"
              className="text-gray-300 no-underline text-sm font-medium transition-colors hover:text-white"
            >
              The Solution
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className="text-gray-300 no-underline text-sm font-medium transition-colors hover:text-white"
            >
              How It Works
            </Link>
          </li>
        </ul>

        <div className="flex gap-3">
          <CTAButton
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal?.();
            }}
          >
            Book a Call
          </CTAButton>
        </div>
      </div>
    </nav>
  );
}
