'use client';

import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/"
      className="fixed top-[6px] right-2 sm:top-2 sm:right-4 z-[1002] px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-white text-[#005288] border-2 border-[#005288] flex items-center justify-center shadow-lg active:bg-[#005288] active:text-white hover:bg-[#005288] hover:text-white transition-all active:scale-95 hover:scale-110 touch-manipulation"
      title="Exit to Dashboard"
    >
      <span className="text-[10px] sm:text-xs font-bold uppercase">EXIT</span>
    </Link>
  );
}

