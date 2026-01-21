'use client';

import { cn } from '@/lib/utils';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'email';
  size?: 'default' | 'lg';
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'default',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2.5
    rounded-lg font-semibold text-white
    transition-all duration-200 ease-out
    cursor-pointer border-none
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gradient-to-br from-primary via-primary-dark to-[#3d4fc9]
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_0_20px_rgba(104,120,214,0.3)]
      hover:translate-y-[-2px]
      hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),0_0_30px_rgba(104,120,214,0.4)]
    `,
    secondary: `
      bg-transparent
      border border-white/20
      hover:bg-white/5
      hover:border-white/30
    `,
    whatsapp: `
      bg-[#25D366]
      hover:bg-[#20bd5a]
      hover:translate-y-[-2px]
      hover:shadow-[0_10px_15px_-3px_rgba(37,211,102,0.3)]
    `,
    email: `
      bg-gradient-to-br from-primary via-primary-dark to-[#3d4fc9]
    `,
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'email';
  size?: 'default' | 'lg';
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
}

export function ButtonLink({
  variant = 'primary',
  size = 'default',
  children,
  className,
  href,
  onClick,
  target,
  rel,
}: ButtonLinkProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2.5
    rounded-lg font-semibold text-white
    transition-all duration-200 ease-out
    cursor-pointer no-underline
  `;

  const variants = {
    primary: `
      bg-gradient-to-br from-primary via-primary-dark to-[#3d4fc9]
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_0_20px_rgba(104,120,214,0.3)]
      hover:translate-y-[-2px]
      hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),0_0_30px_rgba(104,120,214,0.4)]
    `,
    secondary: `
      bg-transparent
      border border-white/20
      hover:bg-white/5
      hover:border-white/30
    `,
    whatsapp: `
      bg-[#25D366]
      hover:bg-[#20bd5a]
      hover:translate-y-[-2px]
      hover:shadow-[0_10px_15px_-3px_rgba(37,211,102,0.3)]
    `,
    email: `
      bg-gradient-to-br from-primary via-primary-dark to-[#3d4fc9]
    `,
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  );
}
