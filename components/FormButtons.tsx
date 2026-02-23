'use client';

interface FormButtonsProps {
  onReset?: () => void;
  onSubmit?: () => void;
  resetLabel?: string;
  submitLabel?: string;
}

export default function FormButtons({
  onReset,
  onSubmit,
  resetLabel = 'Reset Form',
  submitLabel = 'Submit Checklist',
}: FormButtonsProps) {
    return (
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={onReset}
          className="px-4 py-3 sm:px-8 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 min-w-[110px] sm:min-w-[140px] bg-gradient-to-r from-slate-100 to-slate-300 text-slate-700 border-2 border-slate-300/80 shadow-md hover:from-slate-200 hover:to-slate-400 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] touch-manipulation uppercase tracking-wide"
        >
          <i className="fas fa-redo text-xs sm:text-sm"></i>
          <span>{resetLabel}</span>
        </button>
        <button
          type="submit"
          onClick={onSubmit}
          className="px-4 py-3 sm:px-8 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 min-w-[110px] sm:min-w-[140px] bg-gradient-to-r from-[#004269] via-[#005288] to-[#1a5f9e] text-white border-2 border-[#ffcd00] shadow-lg hover:from-[#003d66] hover:via-[#004269] hover:to-[#154a7a] hover:-translate-y-0.5 hover:shadow-xl hover:border-[#ffd700] active:scale-[0.98] touch-manipulation uppercase tracking-wide"
        >
          <i className="fas fa-check-circle text-xs sm:text-sm"></i>
          <span>{submitLabel}</span>
        </button>
      </div>
    );
}

