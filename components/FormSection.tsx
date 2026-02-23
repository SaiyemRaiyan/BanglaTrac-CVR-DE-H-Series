'use client';

import { ReactNode } from 'react';

interface FormSectionProps {
  number?: number;
  title: string;
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
  icon?: string;
}

export default function FormSection({
  number,
  title,
  children,
  fullWidth = false,
  className = '',
  icon = 'fa-circle-dot',
}: FormSectionProps) {
  return (
    <div
      className={`
        form-card
        relative min-h-[180px] transition-all duration-300
        hover:shadow-[0_12px_28px_rgba(0,82,136,0.12),0_4px_12px_rgba(0,0,0,0.06)]
        ${fullWidth ? 'col-span-full' : ''}
        ${className}
      `}
    >
      {number != null && (
        <div className="absolute -top-3 left-5 bg-gradient-to-br from-[#0c4a6e] via-[#075985] to-[#0369a1] text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shadow-lg z-10 border-2 border-white">
          {number}
        </div>
      )}
      <div className="form-section-title mb-4">
        <i className={`fas ${icon}`} />
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

