# Bangla CAT Forms Application

A Next.js application for managing Bangla CAT forms with a dashboard interface and form pages following the CheckList.html design structure.

## Features

- **Dashboard**: List of available forms (TST Gas and PM Gas)
- **Form Pages**: Individual form pages matching the CheckList.html design
- **Reusable Components**: Modular components for form sections, checkboxes, buttons, etc.
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes

## Project Structure

```
forms-app/
├── app/
│   ├── page.tsx              # Dashboard page
│   ├── forms/
│   │   ├── tst-gas/
│   │   │   └── page.tsx      # TST Gas form page
│   │   └── pm-gas/
│   │       └── page.tsx      # PM Gas form page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── FormLayout.tsx        # Main form container with header
│   ├── FormSection.tsx       # Form section component
│   ├── CheckboxGroup.tsx     # Checkbox/radio group component
│   ├── FormButtons.tsx       # Submit/Reset buttons
│   ├── SignatureSection.tsx # Signature boxes
│   └── BackButton.tsx        # Navigation back button
└── README.md
```

## Design Structure

The application follows the design structure from `CheckList.html`:

- **Header**: Blue gradient background (#1a5f9e to #2a7bc2) with yellow border (#ffcc00)
- **Form Sections**: White cards with numbered badges, borders, and hover effects
- **Grid Layout**: 3-column grid on desktop, responsive on mobile
- **Color Scheme**: 
  - Primary Blue: #1a5f9e / #2a7bc2
  - Accent Yellow: #ffcc00
  - Borders: #e2e8f0

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Form Content

The form pages (`tst-gas/page.tsx` and `pm-gas/page.tsx`) are currently set up with the design structure. To add form content:

1. Use the `FormSection` component for each section
2. Use `CheckboxGroup` for checkbox/radio options
3. Add custom input fields as needed
4. The design will automatically match the CheckList.html style

## Components Usage

### FormLayout
```tsx
<FormLayout title="Form Title" subtitle="Subtitle">
  {/* Form content */}
</FormLayout>
```

### FormSection
```tsx
<FormSection number={1} title="Section Title">
  {/* Section content */}
</FormSection>
```

### CheckboxGroup
```tsx
<CheckboxGroup
  options={[
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' }
  ]}
  type="radio"
  name="group-name"
/>
```

## Next Steps

- Add form content to TST Gas and PM Gas pages
- Implement form validation
- Add form submission logic
- Connect to backend API (if needed)
