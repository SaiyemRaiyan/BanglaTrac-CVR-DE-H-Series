'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page9Props {
  currentSection: number;
}

export default function Page9({ currentSection }: Page9Props) {
  const [inspections, setInspections] = useState({
    throttle: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    rokerArmSuppLeft: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    rokerArmSuppRight: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    bridge: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    valveLash: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
  });

  const [details, setDetails] = useState({
    throttleTorque: '',
    throttleTightenBy: '',
    throttleRecommendation: '',
    
    rokerArmSuppLeftTorque: '',
    rokerArmSuppLeftTightenBy: '',
    rokerArmSuppLeftRecommendation: '',
    
    rokerArmSuppRightTorque: '',
    rokerArmSuppRightTightenBy: '',
    rokerArmSuppRightRecommendation: '',
    
    bridgeTorque: '',
    bridgeTightenBy: '',
    bridgeGasket: '',
    bridgeRecommendation: '',
    
    valveLashTorque: '',
    valveLashTightenBy: '',
    valveLashRecommendation: '',
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
    detailRows?: Array<{ label: string; name: string; value: string }>;
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
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 bg-[#e8f4fc] rounded border-l-4 border-[#005288]">
              <label className="text-xs md:text-sm font-semibold text-[#005288]">{row.label}</label>
              <input
                type="text"
                name={row.name}
                value={row.value}
                onChange={handleDetailChange}
                className="md:col-span-2 px-2 py-1 border border-[#005288] rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#005288]"
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
            title="Throttle Condition"
            items={inspections.throttle}
            onCheck={(idx) => handleCheckChange('throttle', idx)}
            detailRows={[
              { label: 'Recommendation:', name: 'throttleRecommendation', value: details.throttleRecommendation },
            ]}
          />
        );

      case 1:
        return (
          <InspectionGrid
            title="Roker Arm Support Left (Top-end Condition) (if re-use put tick mark or replace put cross mark)"
            items={inspections.rokerArmSuppLeft}
            onCheck={(idx) => handleCheckChange('rokerArmSuppLeft', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'rokerArmSuppLeftTorque', value: details.rokerArmSuppLeftTorque },
              { label: 'Tighten by:', name: 'rokerArmSuppLeftTightenBy', value: details.rokerArmSuppLeftTightenBy },
              { label: 'Recommendation:', name: 'rokerArmSuppLeftRecommendation', value: details.rokerArmSuppLeftRecommendation },
            ]}
          />
        );

      case 2:
        return (
          <InspectionGrid
            title="Roker Arm Support Right (Top-end Condition) (if re-use put tick mark or replace put cross mark)"
            items={inspections.rokerArmSuppRight}
            onCheck={(idx) => handleCheckChange('rokerArmSuppRight', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'rokerArmSuppRightTorque', value: details.rokerArmSuppRightTorque },
              { label: 'Tighten by:', name: 'rokerArmSuppRightTightenBy', value: details.rokerArmSuppRightTightenBy },
              { label: 'Recommendation:', name: 'rokerArmSuppRightRecommendation', value: details.rokerArmSuppRightRecommendation },
            ]}
          />
        );

      case 3:
        return (
          <InspectionGrid
            title="Bridge Condition"
            items={inspections.bridge}
            onCheck={(idx) => handleCheckChange('bridge', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'bridgeTorque', value: details.bridgeTorque },
              { label: 'Tighten by:', name: 'bridgeTightenBy', value: details.bridgeTightenBy },
              { label: 'Gasket re-use/ replace:', name: 'bridgeGasket', value: details.bridgeGasket },
              { label: 'Recommendation:', name: 'bridgeRecommendation', value: details.bridgeRecommendation },
            ]}
          />
        );

      case 4:
        return (
          <InspectionGrid
            title="Valve Lash Condition"
            items={inspections.valveLash}
            onCheck={(idx) => handleCheckChange('valveLash', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'valveLashTorque', value: details.valveLashTorque },
              { label: 'Tighten by:', name: 'valveLashTightenBy', value: details.valveLashTightenBy },
              { label: 'Recommendation:', name: 'valveLashRecommendation', value: details.valveLashRecommendation },
            ]}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
