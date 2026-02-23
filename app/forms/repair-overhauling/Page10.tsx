'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page10Props {
  currentSection: number;
}

export default function Page10({ currentSection }: Page10Props) {
  const [inspections, setInspections] = useState({
    aftercooler: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    jacketTemp: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    waterManifold: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    jacketWaterPump: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    auxiliaryWaterPump: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
  });

  const [details, setDetails] = useState({
    aftercoolerTorque: '',
    aftercoolerTightenBy: '',
    aftercoolerGasket: '',
    aftercoolerRecommendation: '',
    
    jacketTempRecommendation: '',
    
    waterManifoldTorque: '',
    waterManifoldTightenBy: '',
    waterManifoldGasket: '',
    waterManifoldRecommendation: '',
    
    jacketWaterTorque: '',
    jacketWaterTightenBy: '',
    jacketWaterSeal: '',
    jacketWaterRecommendation: '',
    
    auxiliaryWaterTorque: '',
    auxiliaryWaterTightenBy: '',
    auxiliaryWaterSeal: '',
    auxiliaryWaterRecommendation: '',
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
            title="Aftercooler Condition"
            items={inspections.aftercooler}
            onCheck={(idx) => handleCheckChange('aftercooler', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'aftercoolerTorque', value: details.aftercoolerTorque },
              { label: 'Tighten by:', name: 'aftercoolerTightenBy', value: details.aftercoolerTightenBy },
              { label: 'Gasket re-use/ replace:', name: 'aftercoolerGasket', value: details.aftercoolerGasket },
              { label: 'Recommendation:', name: 'aftercoolerRecommendation', value: details.aftercoolerRecommendation },
            ]}
          />
        );

      case 1:
        return (
          <InspectionGrid
            title="Jacket Temperature Condition"
            items={inspections.jacketTemp}
            onCheck={(idx) => handleCheckChange('jacketTemp', idx)}
            detailRows={[
              { label: 'Recommendation:', name: 'jacketTempRecommendation', value: details.jacketTempRecommendation },
            ]}
          />
        );

      case 2:
        return (
          <InspectionGrid
            title="Water Manifold Condition"
            items={inspections.waterManifold}
            onCheck={(idx) => handleCheckChange('waterManifold', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'waterManifoldTorque', value: details.waterManifoldTorque },
              { label: 'Tighten by:', name: 'waterManifoldTightenBy', value: details.waterManifoldTightenBy },
              { label: 'Gasket re-use/ replace:', name: 'waterManifoldGasket', value: details.waterManifoldGasket },
              { label: 'Recommendation:', name: 'waterManifoldRecommendation', value: details.waterManifoldRecommendation },
            ]}
          />
        );

      case 3:
        return (
          <InspectionGrid
            title="Jacket Water Pump Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.jacketWaterPump}
            onCheck={(idx) => handleCheckChange('jacketWaterPump', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'jacketWaterTorque', value: details.jacketWaterTorque },
              { label: 'Tighten by:', name: 'jacketWaterTightenBy', value: details.jacketWaterTightenBy },
              { label: 'Seal re-use/replace:', name: 'jacketWaterSeal', value: details.jacketWaterSeal },
              { label: 'Recommendation:', name: 'jacketWaterRecommendation', value: details.jacketWaterRecommendation },
            ]}
          />
        );

      case 4:
        return (
          <InspectionGrid
            title="Auxiliary Water Pump Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.auxiliaryWaterPump}
            onCheck={(idx) => handleCheckChange('auxiliaryWaterPump', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'auxiliaryWaterTorque', value: details.auxiliaryWaterTorque },
              { label: 'Tighten by:', name: 'auxiliaryWaterTightenBy', value: details.auxiliaryWaterTightenBy },
              { label: 'Seal re-use/replace:', name: 'auxiliaryWaterSeal', value: details.auxiliaryWaterSeal },
              { label: 'Recommendation:', name: 'auxiliaryWaterRecommendation', value: details.auxiliaryWaterRecommendation },
            ]}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
