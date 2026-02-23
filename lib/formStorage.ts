// Form storage utility using localStorage
export interface CompletedForm {
  id: string;
  formType: "pm-gas" | "tst-gas" | "repair-overhauling";
  formTitle: string;
  visitInfo: {
    dateOfVisit: string;
    mcoNumber: string;
    workOrderNo: string;
    customerName?: string;
    location?: string;
  };
  createdAt: string;
  formData: Record<string, unknown>;
}

const STORAGE_KEY = "bangla_cat_completed_forms";

export const formStorage = {
  // Get all completed forms
  getAllForms(): CompletedForm[] {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  // Get a specific form by ID
  getForm(id: string): CompletedForm | null {
    const forms = this.getAllForms();
    return forms.find(form => form.id === id) || null;
  },

  // Save a completed form
  saveForm(form: Omit<CompletedForm, "id" | "createdAt">): string {
    const forms = this.getAllForms();
    
    // Ensure formData is properly structured before saving
    const formData = form.formData;
    if (!formData || typeof formData !== "object" || Object.keys(formData).length === 0) {
      console.warn("Warning: formData is empty or invalid for form:", form.formTitle);
    }
    
    // Deep clone to ensure we're saving a fresh copy
    const newForm: CompletedForm = {
      ...form,
      formData: JSON.parse(JSON.stringify(formData)), // Ensure it's serializable
      id: `form-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    
    forms.push(newForm);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(forms));
    return newForm.id;
  },

  // Delete a form
  deleteForm(id: string): boolean {
    const forms = this.getAllForms();
    const filtered = forms.filter(form => form.id !== id);
    if (filtered.length === forms.length) return false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },

  // Get forms by type
  getFormsByType(type: "pm-gas" | "tst-gas" | "repair-overhauling"): CompletedForm[] {
    return this.getAllForms().filter(form => form.formType === type);
  },
};
