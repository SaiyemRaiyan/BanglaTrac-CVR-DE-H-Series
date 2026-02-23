'use client';

import { ReactNode } from 'react';

interface FormLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function FormLayout({ title, subtitle, children }: FormLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-4">
      <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#1a5f9e] to-[#2a7bc2] text-white py-5 px-8 text-center border-b-[5px] border-[#ffcc00] overflow-hidden">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 shine-animation"></div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 relative z-10 drop-shadow-md">
            {title}
          </h1>
          {subtitle && (
            <div className="text-sm md:text-base opacity-90 relative z-10">
              {subtitle}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <div className="max-w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

