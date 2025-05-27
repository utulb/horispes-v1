'use client';

import { ReactNode } from 'react';

interface PartialSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hasPadding?: boolean;
  isDark?: boolean;
  isCentered?: boolean;
  isImage?: boolean;
}

export default function PartialSection({ 
  children, 
  className = '', 
  id,
  hasPadding = false,
  isDark = true,
  isCentered = true,
  isImage = false
}: PartialSectionProps) {
  return (
    <section 
      id={id}
      className={`
        h-[60vh]
        flex
        ${isCentered ? 'items-center justify-center' : 'items-start justify-start'}
        ${isDark ? 'bg-[#0A0A0A]' : 'bg-transparent'}
        ${hasPadding ? 'py-20' : ''}
        ${isImage ? 'relative' : ''}
        ${className}
      `}
    >
      {children}
    </section>
  );
} 