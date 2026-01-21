'use client';

import { cn } from '@/lib/utils';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'motion/react';

interface ButtonWithNoiseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  children: ReactNode;
  className?: string;
}

export function ButtonWithNoise({
  variant = 'primary',
  size = 'default',
  children,
  className,
  ...props
}: ButtonWithNoiseProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2.5
    rounded-lg font-semibold text-white
    transition-all duration-200 ease-out
    cursor-pointer border-none overflow-hidden
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gradient-to-br from-primary via-primary-dark to-[#3d4fc9]
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_0_20px_rgba(104,120,214,0.3)]
      hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),0_0_30px_rgba(104,120,214,0.4)]
    `,
    secondary: `
      bg-transparent
      border border-white/20
      hover:bg-white/5
      hover:border-white/30
    `,
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Animated gradient shine */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </motion.button>
  );
}

interface ButtonWithNoiseLinkProps {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
}

export function ButtonWithNoiseLink({
  variant = 'primary',
  size = 'default',
  children,
  className,
  href,
  onClick,
  target,
  rel,
}: ButtonWithNoiseLinkProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2.5
    rounded-lg font-semibold text-white
    transition-all duration-200 ease-out
    cursor-pointer no-underline overflow-hidden
  `;

  const variants = {
    primary: `
      bg-gradient-to-br from-primary via-primary-dark to-[#3d4fc9]
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_0_20px_rgba(104,120,214,0.3)]
      hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),0_0_30px_rgba(104,120,214,0.4)]
    `,
    secondary: `
      bg-transparent
      border border-white/20
      hover:bg-white/5
      hover:border-white/30
    `,
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Animated gradient shine */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </motion.a>
  );
}
