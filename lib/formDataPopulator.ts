import { CompletedForm } from './formStorage';

interface BlueprintField {
  query: string;
  value: string;
}

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const matchField =
  (text: string | null) =>
  (field: BlueprintField) =>
    !!text &&
    normalize(text).includes(normalize(field.query));

// Helper to find label text for an input element
function findLabelText(element: HTMLElement): string {
  // Check previous sibling label
  const prevSibling = element.previousElementSibling;
  if (prevSibling && prevSibling.tagName === 'LABEL') {
    return prevSibling.textContent || '';
  }

  // Check parent's previous sibling label
  const parent = element.parentElement;
  if (parent) {
    const parentPrevSibling = parent.previousElementSibling;
    if (parentPrevSibling && parentPrevSibling.tagName === 'LABEL') {
      return parentPrevSibling.textContent || '';
    }

    // Check for label inside parent (closest label)
    const labelInParent = parent.querySelector('label');
    if (labelInParent) {
      return labelInParent.textContent || '';
    }

    // Check parent's parent for label
    const grandParent = parent.parentElement;
    if (grandParent) {
      const labelInGrandParent = grandParent.querySelector('label');
      if (labelInGrandParent) {
        return labelInGrandParent.textContent || '';
      }
      
      // Check great-grandparent for label
      const greatGrandParent = grandParent.parentElement;
      if (greatGrandParent) {
        const labelInGreatGrandParent = greatGrandParent.querySelector('label');
        if (labelInGreatGrandParent) {
          return labelInGreatGrandParent.textContent || '';
        }
      }
    }
  }

  // Check for associated label via 'for' attribute
  if (element.id) {
    const associatedLabel = document.querySelector(`label[for="${element.id}"]`);
    if (associatedLabel) {
      return associatedLabel.textContent || '';
    }
  }

  // Check all ancestor elements for label text
  let current: HTMLElement | null = element.parentElement;
  while (current) {
    const labels = current.querySelectorAll('label');
    if (labels.length > 0) {
      // Return the label that's closest to the input (usually the first one)
      return labels[0].textContent || '';
    }
    current = current.parentElement;
  }

  return '';
}

// Helper to check if a field matches a query
function fieldMatches(element: HTMLElement, query: string): boolean {
  const normalizedQuery = normalize(query);
  
  // Check placeholder
  const placeholder = (element as HTMLInputElement).placeholder || '';
  if (placeholder && normalize(placeholder).includes(normalizedQuery)) {
    return true;
  }

  // Check label text
  const labelText = findLabelText(element);
  if (labelText && normalize(labelText).includes(normalizedQuery)) {
    return true;
  }

  // Check name attribute
  const name = (element as HTMLInputElement).name || '';
  if (name && normalize(name).includes(normalizedQuery)) {
    return true;
  }

  // Check id attribute
  const id = element.id || '';
  if (id && normalize(id).includes(normalizedQuery)) {
    return true;
  }

  // Check value attribute (for hidden fields)
  const value = (element as HTMLInputElement).value || '';
  if (value && normalize(value).includes(normalizedQuery)) {
    return true;
  }

  return false;
}

export function populateFormWithData(form: CompletedForm, container?: Element) {
  if (typeof window === 'undefined') return;

  console.log('=== POPULATE FORM DEBUG START ===');
  console.log('Raw form.formData:', form.formData);
  console.log('form.formData type:', typeof form.formData);
  console.log('Is array?', Array.isArray(form.formData));
  console.log('Has fields property?', !!(form.formData as any)?.fields);
  console.log('fields value:', (form.formData as any)?.fields);
  
  // Try multiple ways to extract fields
  let blueprint: BlueprintField[] | undefined;
  
  // Method 1: Check if formData has a fields property
  if ((form.formData as any)?.fields) {
    blueprint = (form.formData as { fields: BlueprintField[] }).fields;
    console.log('Extracted via .fields property');
  }
  // Method 2: Check if formData is directly an array
  else if (Array.isArray(form.formData)) {
    blueprint = form.formData as BlueprintField[];
    console.log('Extracted as direct array');
  }
  // Method 3: Check if formData is an object with nested structure
  else if (form.formData && typeof form.formData === 'object') {
    // Try to find fields in nested structure
    const keys = Object.keys(form.formData);
    console.log('FormData keys:', keys);
    
    // Check if any key contains 'field' or if the object itself is the fields array
    for (const key of keys) {
      if (key.toLowerCase().includes('field')) {
        const value = (form.formData as any)[key];
        if (Array.isArray(value)) {
          blueprint = value;
          console.log(`Extracted via key "${key}"`);
          break;
        }
      }
    }
    
    // Last resort: check if the object itself looks like a field array structure
    if (!blueprint && keys.length > 0) {
      const firstValue = (form.formData as any)[keys[0]];
      if (Array.isArray(firstValue) && firstValue.length > 0 && firstValue[0].query) {
        blueprint = firstValue;
        console.log(`Extracted via first key "${keys[0]}"`);
      }
    }
  }

  const fields = Array.isArray(blueprint) ? blueprint : [];
  
  console.log('Fields extracted:', fields.length);
  if (fields.length > 0) {
    console.log('First field sample:', fields[0]);
  } else {
    console.log('NO FIELDS FOUND! FormData structure:', JSON.stringify(form.formData, null, 2));
  }

  // Get all form elements - query within container if provided, otherwise query entire document
  const queryRoot = container || document;
  
  // Force all sections to be visible by removing any transform that hides them
  // This ensures we can populate fields in all sections, not just the visible one
  const sectionContainers = queryRoot.querySelectorAll('[style*="transform"]');
  console.log('Section containers found:', sectionContainers.length);
  sectionContainers.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const currentTransform = htmlEl.style.transform;
    // Don't override if it's already showing the first section (translateX(0))
    if (currentTransform && !currentTransform.includes('translateX(0%)')) {
      // Temporarily show all sections for population
      htmlEl.style.transform = 'translateX(0%)';
    }
  });
  
  const allInputs = Array.from(
    queryRoot.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      'input, textarea, select'
    )
  ).filter(input => {
    // Include all inputs, even if they're in hidden sections (they're still in DOM)
    return true;
  });
  
  console.log('Total inputs found:', allInputs.length);
  
  // Debug: Log first 10 inputs with their labels
  console.log('Sample inputs with labels:');
  allInputs.slice(0, 10).forEach((input, idx) => {
    const labelText = findLabelText(input);
    const placeholder = (input as HTMLInputElement).placeholder || '';
    console.log(`  Input ${idx + 1}:`, {
      type: input.type,
      label: labelText,
      placeholder: placeholder,
      name: (input as HTMLInputElement).name,
      id: input.id,
      value: input.value
    });
  });

  // Fill visit info fields first (these are common fields)
  if (form.visitInfo?.dateOfVisit) {
    const dateInputs = allInputs.filter((input) => input.type === 'date') as HTMLInputElement[];
    for (const dateInput of dateInputs) {
      const labelText = findLabelText(dateInput);
      if (normalize(labelText).includes('date') && normalize(labelText).includes('visit')) {
        dateInput.value = form.visitInfo.dateOfVisit;
        dateInput.dispatchEvent(new Event('input', { bubbles: true }));
        dateInput.dispatchEvent(new Event('change', { bubbles: true }));
        break;
      }
    }
  }

  if (form.visitInfo?.mcoNumber) {
    const mcoInput = allInputs.find((input) => {
      const labelText = findLabelText(input);
      const placeholder = (input as HTMLInputElement).placeholder || '';
      return (
        normalize(labelText).includes('mco') ||
        normalize(placeholder).includes('mco')
      );
    }) as HTMLInputElement | undefined;
    if (mcoInput) {
      mcoInput.value = form.visitInfo.mcoNumber;
      mcoInput.dispatchEvent(new Event('input', { bubbles: true }));
      mcoInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  if (form.visitInfo?.workOrderNo) {
    const woInput = allInputs.find((input) => {
      const labelText = findLabelText(input);
      const placeholder = (input as HTMLInputElement).placeholder || '';
      return (
        (normalize(labelText).includes('work') && normalize(labelText).includes('order')) ||
        normalize(placeholder).includes('wo')
      );
    }) as HTMLInputElement | undefined;
    if (woInput) {
      woInput.value = form.visitInfo.workOrderNo;
      woInput.dispatchEvent(new Event('input', { bubbles: true }));
      woInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  console.log(`Populating form: Found ${fields.length} fields, ${allInputs.length} inputs`);
  
  // Populate all blueprint fields
  let populatedCount = 0;
  const unmatchedFields: string[] = [];
  
  fields.forEach((field) => {
    const query = field.query.toLowerCase();
    const value = field.value;
    const normalizedQuery = normalize(query);

    // Skip if value is empty
    if (!value || value.trim() === '') {
      console.log(`Skipping empty field: "${field.query}"`);
      return;
    }
    
    console.log(`\nTrying to match: "${field.query}" (normalized: "${normalizedQuery}") with value: "${value}"`);

    // Find matching input - try multiple strategies
    let candidate: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined;

    // Strategy 1: Exact match on label text
    candidate = allInputs.find((input) => {
      const labelText = findLabelText(input);
      return labelText && normalize(labelText) === normalizedQuery;
    }) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined;

    // Strategy 2: Label contains query (most common case)
    if (!candidate) {
      candidate = allInputs.find((input) => {
        const labelText = findLabelText(input);
        if (!labelText) return false;
        const normalizedLabel = normalize(labelText);
        // Check if label contains query or query contains key parts of label
        return normalizedLabel.includes(normalizedQuery) || normalizedQuery.includes(normalizedLabel);
      }) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined;
    }

    // Strategy 3: Query contains key words from label (improved matching)
    if (!candidate) {
      const queryWords = normalizedQuery.split(' ').filter(w => w.length > 2);
      if (queryWords.length > 0) {
        candidate = allInputs.find((input) => {
          const labelText = findLabelText(input);
          if (!labelText) return false;
          const normalizedLabel = normalize(labelText);
          // Check if at least 2 key words match (for better accuracy)
          const matchingWords = queryWords.filter(word => normalizedLabel.includes(word));
          return matchingWords.length >= Math.min(2, queryWords.length);
        }) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined;
      }
    }

    // Strategy 4: Placeholder contains query
    if (!candidate) {
      candidate = allInputs.find((input) => {
        const placeholder = (input as HTMLInputElement).placeholder || '';
        return placeholder && normalize(placeholder).includes(normalizedQuery);
      }) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined;
    }

    // Strategy 5: Name or ID contains query
    if (!candidate) {
      candidate = allInputs.find((input) => {
        const name = (input as HTMLInputElement).name || '';
        const id = input.id || '';
        return (
          (name && normalize(name).includes(normalizedQuery)) ||
          (id && normalize(id).includes(normalizedQuery))
        );
      }) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined;
    }

    // Strategy 6: Check for partial matches in label (for fields like "1ST ARRIVAL/DEPARTURE TIME")
    if (!candidate) {
      const queryParts = normalizedQuery.split(' ').filter(w => w.length > 1);
      candidate = allInputs.find((input) => {
        const labelText = findLabelText(input);
        if (!labelText) return false;
        const normalizedLabel = normalize(labelText);
        // Check if all significant parts of query appear in label
        return queryParts.every(part => normalizedLabel.includes(part));
      }) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined;
    }

    if (candidate) {
      const candidateLabel = findLabelText(candidate);
      console.log(`  ✓ MATCHED! Found input with label: "${candidateLabel}"`);
      populateField(candidate, value);
      populatedCount++;
    } else {
      // Debug: Log unmatched fields with details
      console.warn(`  ✗ NO MATCH for query: "${field.query}"`);
      unmatchedFields.push(field.query);
      
      // Try to find similar labels for debugging
      const similarLabels = allInputs.map(input => {
        const label = findLabelText(input);
        const normalizedLabel = normalize(label);
        return { label, normalizedLabel, input };
      }).filter(item => {
        const queryWords = normalizedQuery.split(' ').filter(w => w.length > 2);
        return queryWords.some(word => item.normalizedLabel.includes(word));
      });
      
      if (similarLabels.length > 0) {
        console.log(`  Similar labels found:`, similarLabels.slice(0, 3).map(s => s.label));
      }
    }
  });
  
  console.log(`\n=== POPULATION SUMMARY ===`);
  console.log(`Populated: ${populatedCount} out of ${fields.length} fields`);
  console.log(`Unmatched fields (${unmatchedFields.length}):`, unmatchedFields);
  console.log('=== POPULATE FORM DEBUG END ===\n');
  
  // Special handling for date fields that might have been missed
  // Check for date inputs that haven't been populated
  const dateInputs = allInputs.filter(input => input.type === 'date' && !input.value) as HTMLInputElement[];
  dateInputs.forEach(dateInput => {
    const labelText = findLabelText(dateInput);
    const normalizedLabel = normalize(labelText);
    
    // Try to find a matching field in blueprint
    const matchingField = fields.find(field => {
      const normalizedQuery = normalize(field.query);
      // Check if field query contains date-related keywords and label matches
      if ((normalizedQuery.includes('arrival') || normalizedQuery.includes('departure') || normalizedQuery.includes('date')) &&
          (normalizedLabel.includes('arrival') || normalizedLabel.includes('departure') || normalizedLabel.includes('date'))) {
        // Check if value looks like a date
        const datePattern = /^\d{4}-\d{2}-\d{2}/;
        return datePattern.test(field.value);
      }
      return false;
    });
    
    if (matchingField && matchingField.value) {
      dateInput.value = matchingField.value;
      dateInput.dispatchEvent(new Event('input', { bubbles: true }));
      dateInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
}

// Helper to populate a field with a value
function populateField(
  element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string
) {
  if (element instanceof HTMLSelectElement) {
    element.value = value;
    element.dispatchEvent(new Event('change', { bubbles: true }));
  } else if (element.type === 'checkbox' || element.type === 'radio') {
    // For checkboxes/radios, check if value matches
    const normalizedValue = normalize(value);
    const normalizedElementValue = normalize(element.value || '');
    const normalizedId = normalize(element.id || '');
    
    if (
      normalizedValue === 'yes' ||
      normalizedValue === 'true' ||
      normalizedValue === '1' ||
      normalizedValue === 'on' ||
      normalizedId.includes(normalizedValue) ||
      normalizedElementValue.includes(normalizedValue)
    ) {
      // Type guard: element must be HTMLInputElement for checkbox/radio
      if (element instanceof HTMLInputElement) {
        element.checked = true;
        element.dispatchEvent(new Event('change', { bubbles: true }));
        element.dispatchEvent(new Event('click', { bubbles: true }));
      }
    }
  } else {
    element.value = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

export function makeFormReadOnly(container: Element) {
  const allFields = container.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    'input, textarea, select'
  );
  allFields.forEach((field) => {
    // readOnly only exists on input and textarea, not select
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.readOnly = true;
    }
    field.disabled = false;
    field.classList.add('bg-gray-50', 'cursor-not-allowed');
  });

  const buttons = container.querySelectorAll<HTMLButtonElement>('button');
  buttons.forEach((button) => {
    const label = button.textContent?.toLowerCase() || '';
    const title = button.getAttribute('title')?.toLowerCase() || '';
    
    // Check if button is in a navigation container (sticky top navigation bars)
    const parent = button.parentElement;
    const isInNavContainer = parent?.classList.contains('sticky') || 
                             parent?.parentElement?.classList.contains('sticky') ||
                             parent?.closest('.sticky') !== null;
    
    // Check if this is a navigation button
    const isNavigationButton =
      // PAGE tabs
      label.includes('page') ||
      // Section tabs
      label.includes('visit info') ||
      label.includes('job details') ||
      label.includes('equipment') ||
      label.includes('cylinder temp') ||
      label.includes('compression') ||
      label.includes('measurements') ||
      label.includes('work performed') ||
      label.includes('spare parts') ||
      label.includes('results') ||
      label.includes('customer comments') ||
      label.includes('engineer section') ||
      // Floating prev/next buttons
      button.classList.contains('fixed') ||
      title.includes('section') ||
      title.includes('previous') ||
      title.includes('next') ||
      // Buttons in navigation containers
      isInNavContainer ||
      // Buttons with navigation-related onClick (check if onClick exists and isn't form submission)
      (button.onclick !== null && button.type !== 'submit' && button.type !== 'reset');
    
    // Hide submit/reset buttons
    if (
      label.includes('submit') ||
      label.includes('reset') ||
      button.type === 'submit' ||
      button.type === 'reset'
    ) {
      button.style.display = 'none';
    } 
    // Keep navigation buttons enabled
    else if (isNavigationButton) {
      // Navigation buttons stay enabled and functional
      button.disabled = false;
      button.classList.remove('opacity-50', 'cursor-not-allowed');
    } 
    // Disable all other buttons
    else {
      button.disabled = true;
      button.classList.add('opacity-50', 'cursor-not-allowed');
    }
  });
}

