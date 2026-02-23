import pmGasBlueprint from '@/data/form-blueprints/pm-gas.json';
import tstGasBlueprint from '@/data/form-blueprints/tst-gas.json';
import repairOverhaulingBlueprint from '@/data/form-blueprints/repair-overhauling.json';
import type { CompletedForm } from './formStorage';

// Ensure JSON imports are properly structured
const ensureBlueprint = (blueprint: Record<string, unknown> | unknown[]) => {
  let data: unknown;

  // Handle both default export and direct import safely
  if (
    typeof blueprint === "object" &&
    blueprint !== null &&
    !Array.isArray(blueprint) &&
    "default" in blueprint
  ) {
    data = (blueprint as { default: unknown }).default;
  } else {
    data = blueprint;
  }

  // Debug: Log the structure to understand what we're getting
  if (process.env.NODE_ENV === "development") {
    console.log("ensureBlueprint input:", {
      hasDefault:
        typeof blueprint === "object" &&
        blueprint !== null &&
        !Array.isArray(blueprint) &&
        "default" in blueprint,
      directType: typeof blueprint,
      directKeys:
        blueprint && typeof blueprint === "object"
          ? Object.keys(blueprint)
          : [],
      dataType: typeof data,
      dataKeys:
        data && typeof data === "object"
          ? Object.keys(data as Record<string, unknown>)
          : [],
      hasFields:
        data &&
        typeof data === "object" &&
        "fields" in data,
      fieldsLength:
        data &&
        typeof data === "object" &&
        "fields" in data &&
        Array.isArray((data as any).fields)
          ? (data as any).fields.length
          : 0,
    });
  }

  // Ensure it has the fields structure
  if (
    data &&
    typeof data === "object" &&
    "fields" in data &&
    Array.isArray((data as any).fields)
  ) {
    return { fields: (data as any).fields };
  }

  // If it's already the fields array, wrap it
  if (Array.isArray(data)) {
    return { fields: data };
  }

  // If data is an object but doesn't have fields, return as-is
  if (data && typeof data === "object") {
    return data;
  }

  // Fallback
  console.warn("ensureBlueprint: Unexpected structure, returning empty fields");
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
