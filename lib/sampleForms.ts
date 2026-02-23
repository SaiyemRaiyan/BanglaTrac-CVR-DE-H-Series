import pmGasBlueprint from '@/data/form-blueprints/pm-gas.json';
import tstGasBlueprint from '@/data/form-blueprints/tst-gas.json';
import repairOverhaulingBlueprint from '@/data/form-blueprints/repair-overhauling.json';
import type { CompletedForm } from './formStorage';

// Ensure JSON imports are properly structured
const ensureBlueprint = (blueprint: Record<string, unknown> | unknown[]) => {
  // Handle both default export and direct import
  const data = blueprint?.default || blueprint;
  
  // Debug: Log the structure to understand what we're getting
  if (process.env.NODE_ENV === 'development') {
    console.log('ensureBlueprint input:', {
      hasDefault: !!blueprint?.default,
      directType: typeof blueprint,
      directKeys: blueprint && typeof blueprint === 'object' ? Object.keys(blueprint) : [],
      dataType: typeof data,
      dataKeys: data && typeof data === 'object' ? Object.keys(data) : [],
      hasFields: !!(data?.fields),
      fieldsLength: data?.fields?.length
    });
  }

  // Ensure it has the fields structure
  if (data && typeof data === 'object' && data.fields && Array.isArray(data.fields)) {
    return { fields: data.fields };
  }
  // If it's already the fields array, wrap it
  if (Array.isArray(data)) {
    return { fields: data };
  }

  // If data is an object but doesn't have fields, return as-is (might be empty or malformed)
  if (data && typeof data === 'object') {
    return data;
  }

  // Fallback: return empty fields array
  console.warn('ensureBlueprint: Unexpected structure, returning empty fields');
  return { fields: [] };
};

const sampleForms: Omit<CompletedForm, 'id' | 'createdAt'>[] = [
  {
    formType: 'pm-gas',
    formTitle: 'PM Gas',
    visitInfo: {
      dateOfVisit: '2026-01-18',
      mcoNumber: 'MCO-12345',
      workOrderNo: 'WO-67890',
      customerName: 'ABC Industries',
    },
    formData: ensureBlueprint(pmGasBlueprint),
  },
  {
    formType: 'tst-gas',
    formTitle: 'TST Gas',
    visitInfo: {
      dateOfVisit: '2026-01-19',
      mcoNumber: 'MCO-12348',
      workOrderNo: 'WO-67892',
      customerName: 'LMN Energy',
    },
    formData: ensureBlueprint(tstGasBlueprint),
  },
  {
    formType: 'repair-overhauling',
    formTitle: 'WS Overhauling',
    visitInfo: {
      dateOfVisit: '2026-02-10',
      mcoNumber: 'MCO-12349',
      workOrderNo: 'WO-67895',
      customerName: 'WS Overhauling',
    },
    formData: ensureBlueprint(repairOverhaulingBlueprint),
  },
];

export default sampleForms;
