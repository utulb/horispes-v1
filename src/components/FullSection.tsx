'use client';

import { ReactNode } from 'react';

interface FullSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hasPadding?: boolean;
  isDark?: boolean;
  isCentered?: boolean;
}

export default function FullSection({ 
  children, 
  className = '', 
  id,
  hasPadding = false,
  isDark = true,
  isCentered = true
}: FullSectionProps) {
  return (
    <section 
      id={id}
      className={`
        h-screen 
        flex 
        ${isCentered ? 'items-center justify-center' : 'items-start justify-start'}
        ${isDark ? 'bg-[#0A0A0A]' : 'bg-transparent'}
        ${hasPadding ? 'py-20' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
} 