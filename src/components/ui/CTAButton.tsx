'use client';

import { cn } from '@/lib/utils';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  className?: string;
  size?: 'default' | 'lg';
}

export function CTAButton({
  children,
  onClick,
  href,
  className,
  size = 'default',
}: CTAButtonProps) {
  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block no-underline">
        <HoverBorderGradient
          containerClassName="rounded-2xl"
          as="div"
          className={cn(
            'bg-gradient-to-br from-primary via-primary-dark to-[#3d4fc9] text-white flex items-center justify-center font-semibold',
            sizes[size],
            className
          )}
        >
          {children}
        </HoverBorderGradient>
      </a>
    );
  }

  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      onClick={onClick}
      className={cn(
        'bg-gradient-to-br from-primary via-primary-dark to-[#3d4fc9] text-white flex items-center justify-center font-semibold',
        sizes[size],
        className
      )}
    >
      {children}
    </HoverBorderGradient>
  );
}
