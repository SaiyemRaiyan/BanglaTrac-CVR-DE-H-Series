'use client';

import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import BackButton from '@/components/BackButton';
import { formStorage, CompletedForm } from '@/lib/formStorage';
import { makeFormReadOnly, populateFormWithData } from '@/lib/formDataPopulator';

const MAX_POPULATE_ATTEMPTS = 20;
const POPULATE_DELAY_MS = 800;

const createErrorComponent = (title: string, message: string) => {
  const Component = () => (
    <div className="min-h-[220px] flex flex-col items-center justify-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
      <i className="fas fa-exclamation-triangle text-3xl text-red-600"></i>
      <h3 className="text-lg font-semibold text-red-700">{title}</h3>
      <p className="text-sm text-red-600 max-w-xs">{message}</p>
    </div>
  );
  Component.displayName = `${title.replace(/\W+/g, '')}Fallback`;
  return Component;
};

const loadingPlaceholder = (message: string) => (
  <div className="min-h-[220px] flex flex-col items-center justify-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-sm text-gray-600">
    <i className="fas fa-spinner fa-spin text-3xl text-[#005288]"></i>
    <span>{message}</span>
  </div>
);

const PMGasForm = dynamic(
  () =>
    import('@/app/forms/pm-gas/page').catch((err) => {
      console.error('Failed to load PM Gas form:', err);
      return {
        default: createErrorComponent(
          'Unable to load PM Gas Form',
          err instanceof Error ? err.message : 'Unknown error'
        ),
      };
    }),
  {
    ssr: false,
    loading: () => loadingPlaceholder('Loading PM Gas Form...'),
  }
);

const TSTGasForm = dynamic(
  () =>
    import('@/app/forms/tst-gas/page').catch((err) => {
      console.error('Failed to load TST Gas form:', err);
      return {
        default: createErrorComponent(
          'Unable to load TST Gas Form',
          err instanceof Error ? err.message : 'Unknown error'
        ),
      };
    }),
  {
    ssr: false,
    loading: () => loadingPlaceholder('Loading TST Gas Form...'),
  }
);

const RepairOverhaulingForm = dynamic(
  () =>
    import('@/app/forms/repair-overhauling/page').catch((err) => {
      console.error('Failed to load Repair & Overhauling form:', err);
      return {
        default: createErrorComponent(
          'Unable to load Repair & Overhauling Form',
          err instanceof Error ? err.message : 'Unknown error'
        ),
      };
    }),
  {
    ssr: false,
    loading: () => loadingPlaceholder('Loading Repair & Overhauling Form...'),
  }
);

export default function FormViewer() {
  const router = useRouter();
  const params = useParams();
  const formId = params?.formId as string | undefined;
  const [form, setForm] = useState<CompletedForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const populatedRef = useRef(false);
  const attemptRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const formRenderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;
    const timer = setTimeout(() => {
      if (!active) return;

      setLoading(true);
      setError(null);
      setForm(null);

      if (!formId) {
        setError('Form ID is missing');
        setLoading(false);
        return;
      }

      const loadedForm = formStorage.getForm(formId);
      if (!loadedForm) {
        setError('Form not found');
        setLoading(false);
        return;
      }

      if (active) {
        setForm(loadedForm);
        setLoading(false);
      }
    }, 0);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [formId]);

  useEffect(() => {
    if (!form) return;
    populatedRef.current = false;
    attemptRef.current = 0;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const tryPopulate = () => {
      if (populatedRef.current) return;
      const container = formRenderRef.current;
      if (!container) {
        attemptRef.current += 1;
        if (attemptRef.current < MAX_POPULATE_ATTEMPTS) {
          timerRef.current = setTimeout(() => {
            window.requestAnimationFrame(tryPopulate);
          }, POPULATE_DELAY_MS);
        }
        return;
      }

      // Check if form has enough inputs rendered (at least 30 for TST form with all sections)
      const inputCount = container.querySelectorAll('input, textarea, select').length;
      
      // Check if page tabs are present (look for buttons with spans containing "1" or "2")
      const allButtons = Array.from(container.querySelectorAll('button')) as HTMLButtonElement[];
      const pageButtons = allButtons.filter(btn => {
        const span = btn.querySelector('span');
        return span && (span.textContent?.trim() === '1' || span.textContent?.trim() === '2');
      });
      const hasPageTabs = pageButtons.length >= 2;
      
      if ((inputCount < 30 || !hasPageTabs) && attemptRef.current < MAX_POPULATE_ATTEMPTS) {
        attemptRef.current += 1;
        timerRef.current = setTimeout(() => {
          window.requestAnimationFrame(tryPopulate);
        }, POPULATE_DELAY_MS);
        return;
      }

      // Ensure form is on first page and first section for better visibility
      // Find page 1 button by looking for button with span containing "1"
      const page1Button = pageButtons.find(btn => {
        const span = btn.querySelector('span');
        return span && span.textContent?.trim() === '1';
      });
      
      // Check which page is active by looking at button classes
      const isPage1Active = page1Button?.classList.contains('bg-white') || 
                           (page1Button && getComputedStyle(page1Button).backgroundColor !== 'transparent');
      
      // Populate data regardless of page state
      console.log('=== VIEW PAGE DEBUG ===');
      console.log('Form ready check:', { 
        inputCount, 
        hasPageTabs, 
        attemptNumber: attemptRef.current,
        formId: form.id,
        formType: form.formType
      });
      console.log('Form data structure:', {
        hasFormData: !!form.formData,
        formDataType: Array.isArray(form.formData) ? 'array' : typeof form.formData,
        hasFields: !!(form.formData as any)?.fields,
        fieldsLength: (form.formData as any)?.fields?.length || (Array.isArray(form.formData) ? form.formData.length : 0),
        sampleField: (form.formData as any)?.fields?.[0] || (Array.isArray(form.formData) ? form.formData[0] : null)
      });
      
      populateFormWithData(form, container);
      makeFormReadOnly(container);
      populatedRef.current = true;
      console.log('=== VIEW PAGE DEBUG END ===\n');
      
      // If not on page 1, click it after a short delay
      if (!isPage1Active && page1Button) {
        setTimeout(() => {
          page1Button.click();
        }, 100);
      }
    };

    window.requestAnimationFrame(tryPopulate);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [form]);

  const handleDelete = () => {
    if (!form) return;
    if (confirm('Delete this stored form? This cannot be undone.')) {
      formStorage.deleteForm(form.id);
      router.push('/');
    }
  };

  const renderLoading = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-8">
      <BackButton />
      <div className="w-full max-w-xl mx-auto mt-6 bg-white p-6 shadow-lg rounded-3xl text-center flex flex-col items-center gap-3">
        <i className="fas fa-spinner fa-spin text-4xl text-[#005288]"></i>
        <p className="text-lg font-semibold text-gray-700">Loading form...</p>
        <p className="text-sm text-gray-500">Retrieving saved data</p>
      </div>
    </div>
  );

  const renderError = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-8">
      <BackButton />
      <div className="w-full max-w-xl mx-auto mt-6 bg-white p-6 shadow-lg rounded-3xl text-center space-y-3">
        <i className="fas fa-exclamation-triangle text-4xl text-red-600"></i>
        <h2 className="text-2xl font-bold text-gray-900">{error || 'Form Not Found'}</h2>
        <p className="text-sm text-gray-600">Unable to load the requested form.</p>
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-[#005288] text-white rounded-full text-xs font-semibold transition hover:bg-[#1a5f9e]"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );

  if (loading) {
    return renderLoading();
  }

  if (error || !form) {
    return renderError();
  }

  const headerTypeLabel = form.formType === 'pm-gas'
    ? 'PM Gas Checklist'
    : form.formType === 'tst-gas'
    ? 'TST Gas Checklist'
    : 'Repair & Overhauling Checklist';
  const createdAtLabel = new Date(form.createdAt).toLocaleDateString();
  const renderDynamicForm = () => {
    if (form.formType === 'pm-gas') {
      return (
        <div key={`pm-gas-${form.id}`}>
          <PMGasForm />
        </div>
      );
    }
    if (form.formType === 'tst-gas') {
      return (
        <div key={`tst-gas-${form.id}`}>
          <TSTGasForm />
        </div>
      );
    }
    if (form.formType === 'repair-overhauling') {
      return (
        <div key={`repair-overhauling-${form.id}`}>
          <RepairOverhaulingForm />
        </div>
      );
    }
    return (
      <div className="py-12 text-center text-sm text-red-600">
        Unknown form type: {form.formType}
      </div>
    );
  };

  /* Same theme wrapper as form type so view matches edit design */
  const viewWrapperClass =
    form.formType === 'pm-gas'
      ? 'form-wrapper-pm form-page-bg-pm'
      : form.formType === 'tst-gas'
      ? 'form-wrapper-tst form-page-bg-tst'
      : 'form-wrapper-overhaul form-page-bg-overhaul';

  return (
    <div className={`min-h-screen ${viewWrapperClass} text-gray-900`}>
      {/* Form container - same full-width layout as when filling the form */}
      <div
        id="form-render"
        ref={formRenderRef}
        className="relative w-full min-h-screen overflow-visible"
        style={{ paddingBottom: '80px' }}
      >
        {renderDynamicForm()}
      </div>

      {/* Fixed footer at bottom - same responsive style as form bottom bars */}
      <div className="fixed bottom-0 left-0 right-0 z-[1001] px-4 sm:px-6 py-3 border-t-2 border-[#005288] bg-gradient-to-r from-white via-[#f8fafc] to-[#e8f4fc] flex flex-col sm:flex-row justify-between items-center gap-3 shadow-lg">
        <div className="text-xs sm:text-sm text-[#4a5568]">
          View mode: <span className="font-semibold text-[#005288]">{headerTypeLabel}</span>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={() => router.push('/')}
            className="px-4 py-2.5 bg-[#005288] text-white rounded-xl text-xs sm:text-sm font-semibold transition hover:bg-[#004269] touch-manipulation"
          >
            Dashboard
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2.5 bg-red-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition hover:bg-red-600 touch-manipulation"
          >
            Delete record
          </button>
        </div>
      </div>

      <style jsx global>{`
        input[readonly],
        textarea[readonly],
        select[readonly] {
          background-color: #f1f5f9 !important;
          cursor: default !important;
          color: #334155;
        }
        button[type='submit'],
        button[type='reset'] {
          display: none !important;
        }
        #form-render > div {
          width: 100% !important;
          max-width: 100% !important;
        }
        #form-render .sticky {
          position: sticky !important;
          z-index: 998 !important;
        }
        #form-render .overflow-hidden {
          overflow: visible !important;
        }
        #form-render .flex {
          display: flex !important;
        }
      `}</style>
    </div>
  );
}

