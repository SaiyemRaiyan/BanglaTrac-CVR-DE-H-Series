'use client';

import { ReactNode } from 'react';

interface FormCardProps {
  children: ReactNode;
  className?: string;
}

/** Use inside a form wrapper (.form-wrapper-pm, .form-wrapper-tst, .form-wrapper-overhaul) for themed cards */
export default function FormCard({ children, className = '' }: FormCardProps) {
  return <div className={`form-card ${className}`.trim()}>{children}</div>;
}
