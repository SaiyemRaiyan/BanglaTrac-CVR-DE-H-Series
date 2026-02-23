'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page8Props {
  currentSection: number;
}

export default function Page8({ currentSection }: Page8Props) {
  const [inspections, setInspections] = useState({
    camCover: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    exhaustManifold: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    intakeElbow: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    channel: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    exhaustByPass: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
  });

  const [details, setDetails] = useState({
    camCoverTorque: '',
    camCoverTightenBy: '',
    camCoverRecommendation: '',
    
    exhaustManifoldTorque: '',
    exhaustManifoldTightenBy: '',
    exhaustManifoldGasket: '',
    exhaustManifoldRecommendation: '',
    
    intakeTorque: '',
    intakeTightenBy: '',
    intakeGasket: '',
    intakeRecommendation: '',
    
    channelTorque: '',
    channelTightenBy: '',
    channelGasket: '',
    channelRecommendation: '',
    
    exhaustByPassTorque: '',
    exhaustByPassTightenBy: '',
    exhaustByPassGasket: '',
    exhaustByPassRecommendation: '',
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
            title="Cam Cover Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.camCover}
            onCheck={(idx) => handleCheckChange('camCover', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'camCoverTorque', value: details.camCoverTorque },
              { label: 'Tighten by:', name: 'camCoverTightenBy', value: details.camCoverTightenBy },
              { label: 'Recommendation:', name: 'camCoverRecommendation', value: details.camCoverRecommendation },
            ]}
          />
        );

      case 1:
        return (
          <InspectionGrid
            title="Exhaust Manifold (if re-use put tick mark or replace put cross mark)"
            items={inspections.exhaustManifold}
            onCheck={(idx) => handleCheckChange('exhaustManifold', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'exhaustManifoldTorque', value: details.exhaustManifoldTorque },
              { label: 'Tighten by:', name: 'exhaustManifoldTightenBy', value: details.exhaustManifoldTightenBy },
              { label: 'Change all gasket with new gasket:', name: 'exhaustManifoldGasket', value: details.exhaustManifoldGasket },
              { label: 'Recommendation:', name: 'exhaustManifoldRecommendation', value: details.exhaustManifoldRecommendation },
            ]}
          />
        );

      case 2:
        return (
          <InspectionGrid
            title="Intake El-bow and Stainer Condition"
            items={inspections.intakeElbow}
            onCheck={(idx) => handleCheckChange('intakeElbow', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'intakeTorque', value: details.intakeTorque },
              { label: 'Tighten by:', name: 'intakeTightenBy', value: details.intakeTightenBy },
              { label: 'Change all gasket with new gasket:', name: 'intakeGasket', value: details.intakeGasket },
              { label: 'Recommendation:', name: 'intakeRecommendation', value: details.intakeRecommendation },
            ]}
          />
        );

      case 3:
        return (
          <InspectionGrid
            title="Channel Condition"
            items={inspections.channel}
            onCheck={(idx) => handleCheckChange('channel', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'channelTorque', value: details.channelTorque },
              { label: 'Tighten by:', name: 'channelTightenBy', value: details.channelTightenBy },
              { label: 'Gasket re-use/ replace:', name: 'channelGasket', value: details.channelGasket },
              { label: 'Recommendation:', name: 'channelRecommendation', value: details.channelRecommendation },
            ]}
          />
        );

      case 4:
        return (
          <InspectionGrid
            title="Exhaust By-Pass Condition"
            items={inspections.exhaustByPass}
            onCheck={(idx) => handleCheckChange('exhaustByPass', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'exhaustByPassTorque', value: details.exhaustByPassTorque },
              { label: 'Tighten by:', name: 'exhaustByPassTightenBy', value: details.exhaustByPassTightenBy },
              { label: 'Gasket re-use/ replace:', name: 'exhaustByPassGasket', value: details.exhaustByPassGasket },
              { label: 'Recommendation:', name: 'exhaustByPassRecommendation', value: details.exhaustByPassRecommendation },
            ]}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
