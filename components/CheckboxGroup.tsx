'use client';

import React from 'react';

interface CheckboxOption {
  id: string;
  label: string | React.ReactNode;
  value?: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  name?: string;
  type?: 'checkbox' | 'radio';
  exclusive?: boolean;
  className?: string;
}

export default function CheckboxGroup({
  options,
  name,
  type = 'checkbox',
  exclusive = false,
  className = '',
}: CheckboxGroupProps) {
      return (
        <div className={`flex flex-wrap gap-2 sm:gap-3 mb-2 ${className}`}>
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center bg-gradient-to-r from-[#e8f4fc] to-[#f0f8ff] px-3 py-2.5 sm:px-4 sm:py-2 rounded-lg border-2 border-[#005288]/30 transition-all duration-200 active:from-[#d0e8f8] active:to-[#e8f4fc] hover:from-[#d0e8f8] hover:to-[#e8f4fc] hover:shadow-md hover:border-[#005288]/50 cursor-pointer touch-manipulation min-h-[44px] group shadow-sm"
            >
              <input
                type={type}
                id={option.id}
                name={name || option.id}
                value={option.value || option.id}
                className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 accent-[#005288] cursor-pointer transition-all flex-shrink-0"
              />
              <span className="text-xs sm:text-sm text-[#005288] font-bold cursor-pointer group-hover:text-[#004269] transition-all">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      );
}

