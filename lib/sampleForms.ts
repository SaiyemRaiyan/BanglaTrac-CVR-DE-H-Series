import pmGasBlueprint from '@/data/form-blueprints/pm-gas.json';
import tstGasBlueprint from '@/data/form-blueprints/tst-gas.json';
import repairOverhaulingBlueprint from '@/data/form-blueprints/repair-overhauling.json';
import type { CompletedForm } from './formStorage';

/**
 * Ensures imported JSON blueprints always return
 * a valid Record<string, unknown> structure
 */
const ensureBlueprint = (
  blueprint: unknown
): Record<string, unknown> => {
  let data: unknown;

  // Handle both default export and direct JSON import
  if (
    typeof blueprint === 'object' &&
    blueprint !== null &&
    !Array.isArray(blueprint) &&
    'default' in blueprint
  ) {
    data = (blueprint as { default: unknown }).default;
  } else {
    data = blueprint;
  }

  // If structure contains fields array
  if (
    typeof data === 'object' &&
    data !== null &&
    !Array.isArray(data) &&
    'fields' in data &&
    Array.isArray((data as { fields: unknown }).fields)
  ) {
    return {
      fields: (data as { fields: unknown[] }).fields,
    };
  }

  // If JSON itself is an array → wrap it
  if (Array.isArray(data)) {
    return { fields: data };
  }

  // If it's already a plain object
  if (typeof data === 'object' && data !== null) {
    return data as Record<string, unknown>;
  }

  // Final fallback
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
