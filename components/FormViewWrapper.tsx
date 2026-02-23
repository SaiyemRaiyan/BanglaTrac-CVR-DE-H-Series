'use client';

import { ReactNode } from 'react';
import { CompletedForm } from '@/lib/formStorage';

interface FormViewWrapperProps {
  form: CompletedForm;
  children: ReactNode;
}

export default function FormViewWrapper({ form, children }: FormViewWrapperProps) {
  return (
    <>
      {/* Header Banner - View Mode */}
      <div className="sticky top-0 z-[9999] bg-gradient-to-r from-[#ffcd00] to-[#ffd700] px-4 py-2 border-b-2 border-[#005288] flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-eye text-[#005288]"></i>
            <span className="text-sm font-bold text-[#005288]">VIEW MODE - READ ONLY</span>
          </div>
          <div className="text-xs text-[#005288] font-semibold">
            Form ID: {form.id.substring(0, 20)}...
          </div>
        </div>
      </div>

      {/* Form Content - Pass through without wrapper to preserve form layout */}
      {children}
    </>
  );
}

