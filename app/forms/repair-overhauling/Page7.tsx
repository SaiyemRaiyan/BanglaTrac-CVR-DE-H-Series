'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page7Props {
  currentSection: number;
}

export default function Page7({ currentSection }: Page7Props) {
  const [inspections, setInspections] = useState({
    pistonCondition: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    linerCondition: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    spacerPlateCondition: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    cylinderHeadTighten: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    lifterCondition: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
  });

  const [details, setDetails] = useState({
    // Piston
    pistonRecommendation: '',
    
    // Liner
    linerPreparedBy: '',
    linerRecommendation: '',
    
    // Spacer Plate
    spacerPlateCheckedBy: '',
    spacerPlateRecommendation: '',
    
    // Cylinder Head
    cylinderHeadApplyTorque: '',
    cylinderHeadTightenBy: '',
    cylinderHeadRecommendation: '',
    
    // Lifter
    lifterAssemCheckedBy: '',
    lifterSpringReplace: '',
    lifterRecommendation: '',
  });


  const handleCheckChange = (array: string, index: number) => {
    setInspections(prev => ({
      ...prev,
      [array]: prev[array as keyof typeof inspections].map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const InspectionGrid = ({
    title,
    items,
    onCheck,
    detailRows = []
  }: {
    title: string;
    items: any[];
    onCheck: (index: number) => void;
    detailRows?: Array<{ label: string; name: string; value: string; colspan?: number }>;
  }) => (
    <FormSection title={title}>
      <div className="mb-4 border rounded-lg overflow-x-auto">
        <table className="w-full text-xs md:text-sm border-collapse">
          <thead>
            <tr className="bg-yellow-200">
              {Array.from({ length: 10 }, (_, i) => (
                <th key={i} className="px-1 md:px-2 py-2 text-center font-semibold border">{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Array.from({ length: 10 }, (_, i) => (
                <td key={i} className="px-1 md:px-2 py-2 text-center border">
                  <input
                    type="checkbox"
                    checked={items[i]?.checked || false}
                    onChange={() => onCheck(i)}
                    className="w-4 h-4"
                  />
                </td>
              ))}
            </tr>
            <tr className="bg-gray-50">
              {Array.from({ length: 10 }, (_, i) => (
                <th key={i} className="px-1 md:px-2 py-2 text-center font-semibold border text-xs">
                  {i + 11}
                </th>
              ))}
            </tr>
            <tr>
              {Array.from({ length: 10 }, (_, i) => (
                <td key={i} className="px-1 md:px-2 py-2 text-center border">
                  <input
                    type="checkbox"
                    checked={items[i + 10]?.checked || false}
                    onChange={() => onCheck(i + 10)}
                    className="w-4 h-4"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {detailRows.length > 0 && (
        <div className="space-y-2">
          {detailRows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-gray-50 rounded">
              <label className="text-xs md:text-sm font-semibold">{row.label}</label>
              <input
                type="text"
                name={row.name}
                value={row.value}
                onChange={handleDetailChange}
                className="md:col-span-2 px-2 py-1 border rounded text-xs"
                placeholder={row.label}
              />
            </div>
          ))}
        </div>
      )}
    </FormSection>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return (
          <InspectionGrid
            title="Piston Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.pistonCondition}
            onCheck={(idx) => handleCheckChange('pistonCondition', idx)}
            detailRows={[
              { label: 'Recommendation:', name: 'pistonRecommendation', value: details.pistonRecommendation },
            ]}
          />
        );

      case 1:
        return (
          <InspectionGrid
            title="Liner Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.linerCondition}
            onCheck={(idx) => handleCheckChange('linerCondition', idx)}
            detailRows={[
              { label: 'Prepared by:', name: 'linerPreparedBy', value: details.linerPreparedBy },
              { label: 'Recommendation:', name: 'linerRecommendation', value: details.linerRecommendation },
            ]}
          />
        );

      case 2:
        return (
          <InspectionGrid
            title="Spacer Plate Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.spacerPlateCondition}
            onCheck={(idx) => handleCheckChange('spacerPlateCondition', idx)}
            detailRows={[
              { label: 'Checked by:', name: 'spacerPlateCheckedBy', value: details.spacerPlateCheckedBy },
              { label: 'Recommendation:', name: 'spacerPlateRecommendation', value: details.spacerPlateRecommendation },
            ]}
          />
        );

      case 3:
        return (
          <InspectionGrid
            title="Cylinder Head Tightening and Mark"
            items={inspections.cylinderHeadTighten}
            onCheck={(idx) => handleCheckChange('cylinderHeadTighten', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'cylinderHeadApplyTorque', value: details.cylinderHeadApplyTorque },
              { label: 'Tighten by:', name: 'cylinderHeadTightenBy', value: details.cylinderHeadTightenBy },
              { label: 'Recommendation:', name: 'cylinderHeadRecommendation', value: details.cylinderHeadRecommendation },
            ]}
          />
        );

      case 4:
        return (
          <InspectionGrid
            title="Lifter Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.lifterCondition}
            onCheck={(idx) => handleCheckChange('lifterCondition', idx)}
            detailRows={[
              { label: 'Lifter assem and position checked by:', name: 'lifterAssemCheckedBy', value: details.lifterAssemCheckedBy },
              { label: 'Lifter spring - replace/re-use:', name: 'lifterSpringReplace', value: details.lifterSpringReplace },
              { label: 'Recommendation:', name: 'lifterRecommendation', value: details.lifterRecommendation },
            ]}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
