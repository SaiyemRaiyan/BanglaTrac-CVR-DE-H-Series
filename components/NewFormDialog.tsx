'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface NewFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const formTypes = [
  {
    id: 'pm-gas',
    title: 'PM Gas',
    description: 'PM Gas Form - Service Copy',
    icon: 'fa-tools',
    pages: 6,
  },
  {
    id: 'tst-gas',
    title: 'TST Gas',
    description: 'TST Gas Form - Customer Visit Record Sheet',
    icon: 'fa-cogs',
    pages: 2,
  },
  {
    id: 'repair-overhauling',
    title: 'Repair & Overhauling',
    description: 'Repair & Overhauling Form - Service Copy',
    icon: 'fa-wrench',
    pages: 11,
  },
];

export default function NewFormDialog({ isOpen, onClose }: NewFormDialogProps) {
  const router = useRouter();
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFormSelect = (formId: string) => {
    router.push(`/forms/${formId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#005288] to-[#1a5f9e] text-white px-4 py-3 border-b-4 border-[#ffcd00]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Create New Form</h2>
              <p className="text-xs text-white/90 mt-0.5">Select a form type to begin</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-[#ffcd00] transition-colors p-1.5 rounded-full hover:bg-white/10"
              aria-label="Close dialog"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>
        </div>

        {/* Form Options - Compact List Layout */}
        <div className="p-3">
          <div className="space-y-2">
            {formTypes.map((form) => (
              <button
                key={form.id}
                onClick={() => handleFormSelect(form.id)}
                onMouseEnter={() => setSelectedForm(form.id)}
                onMouseLeave={() => setSelectedForm(null)}
                className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedForm === form.id
                    ? 'border-[#005288] bg-gradient-to-r from-[#e8f4fc] to-[#f0f8ff] shadow-md'
                    : 'border-gray-200 bg-white hover:border-[#005288]/50 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-sm flex-shrink-0 ${
                    selectedForm === form.id
                      ? 'bg-gradient-to-br from-[#005288] to-[#1a5f9e]'
                      : 'bg-gradient-to-br from-gray-400 to-gray-500'
                  }`}>
                    <i className={`fas ${form.icon} text-base`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-900">{form.title}</h3>
                        <p className="text-xs text-gray-600 mt-0.5 truncate">{form.description}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                          {form.pages} {form.pages === 1 ? 'Page' : 'Pages'}
                        </span>
                        <span className="text-[#005288] text-xs font-semibold flex items-center gap-1">
                          Start <i className="fas fa-arrow-right text-xs"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-4 py-2 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full px-4 py-1.5 text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

