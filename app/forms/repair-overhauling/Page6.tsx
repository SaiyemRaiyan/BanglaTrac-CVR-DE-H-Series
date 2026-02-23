'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page6Props {
  currentSection: number;
}

interface InspectionItem {
  number: number;
  checked: boolean;
}

export default function Page6({ currentSection }: Page6Props) {
  const [inspections, setInspections] = useState({
    crankshaftInspection: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    oilJet: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    connectingRodBolt: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    connectingRodBearing: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    camLube: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
  });

  const [details, setDetails] = useState({
    crankshaftSeal: '',
    crankshaftRecommendation: '',
    
    oilJetAlignment: '',
    oilJetTightened: '',
    oilJetRecommendation: '',
    
    connectingRodTorque: '',
    connectingRodReplaceReuse: '',
    connectingRodRecommendation: '',
    
    bearingCheck: '',
    bearingRecommendation: '',
    
    camLubeCheck: '',
    camLubeCondition: '',
    camLubeRecommendation: '',
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
    showExtras = false,
    extraFields = []
  }: {
    title: string;
    items: InspectionItem[];
    onCheck: (index: number) => void;
    showExtras?: boolean;
    extraFields?: Array<{ label: string; name: string; value: string }>;
  }) => (
    <FormSection title={title}>
      <div className="mb-4 border rounded-lg overflow-x-auto">
        <div className="inline-block min-w-full">
          <table className="w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-yellow-200">
                {Array.from({ length: 10 }, (_, i) => (
                  <th key={i} className="px-1 md:px-2 py-2 text-center font-semibold border-r">{i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Array.from({ length: 10 }, (_, i) => (
                  <td key={i} className="px-1 md:px-2 py-2 text-center border-r">
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
                  <th key={i} className="px-1 md:px-2 py-2 text-center font-semibold border-r text-xs">11-20</th>
                ))}
              </tr>
              <tr>
                {Array.from({ length: 10 }, (_, i) => (
                  <td key={i} className="px-1 md:px-2 py-2 text-center border-r">
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
      </div>

      {showExtras && (
        <div className="space-y-3">
          {extraFields.map((field, idx) => (
            <div key={idx}>
              <label className="block text-xs md:text-sm font-semibold mb-2">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={field.value}
                onChange={handleDetailChange}
                className="w-full px-3 py-2 border rounded-lg text-sm"
                placeholder={field.label}
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
          <>
            <InspectionGrid
              title="Crankshaft Inspection Cover (if replace put tick, if re-use cross mark)"
              items={inspections.crankshaftInspection}
              onCheck={(idx) => handleCheckChange('crankshaftInspection', idx)}
              showExtras={true}
              extraFields={[
                { label: 'Seal: re-use/replace', name: 'crankshaftSeal', value: details.crankshaftSeal },
                { label: 'Recommendation:', name: 'crankshaftRecommendation', value: details.crankshaftRecommendation },
              ]}
            />
          </>
        );

      case 1:
        return (
          <>
            <InspectionGrid
              title="Oil Jet (if replace put tick, re-use put cross mark)"
              items={inspections.oilJet}
              onCheck={(idx) => handleCheckChange('oilJet', idx)}
              showExtras={true}
              extraFields={[
                { label: 'Alignment checked & Tightened by:', name: 'oilJetAlignment', value: details.oilJetAlignment },
                { label: 'Recommendation:', name: 'oilJetRecommendation', value: details.oilJetRecommendation },
              ]}
            />
          </>
        );

      case 2:
        return (
          <>
            <InspectionGrid
              title="Connecting Rod Bolt Tightening with checking pair number and put tick mark by:"
              items={inspections.connectingRodBolt}
              onCheck={(idx) => handleCheckChange('connectingRodBolt', idx)}
              showExtras={true}
              extraFields={[
                { label: 'Apply torque:', name: 'connectingRodTorque', value: details.connectingRodTorque },
                { label: 'Replace/Re-use:', name: 'connectingRodReplaceReuse', value: details.connectingRodReplaceReuse },
                { label: 'Recommendation:', name: 'connectingRodRecommendation', value: details.connectingRodRecommendation },
              ]}
            />
          </>
        );

      case 3:
        return (
          <>
            <InspectionGrid
              title="Connecting Rod Bearing (if replace put tick, re-use put cross mark)"
              items={inspections.connectingRodBearing}
              onCheck={(idx) => handleCheckChange('connectingRodBearing', idx)}
              showExtras={true}
              extraFields={[
                { label: 'Checked part number and found old/new:', name: 'bearingCheck', value: details.bearingCheck },
                { label: 'Recommendation:', name: 'bearingRecommendation', value: details.bearingRecommendation },
              ]}
            />
          </>
        );

      case 4:
        return (
          <>
            <InspectionGrid
              title="Cam Lube and Cam Condition (if good put tick mark,if bad put cross mark)"
              items={inspections.camLube}
              onCheck={(idx) => handleCheckChange('camLube', idx)}
              showExtras={true}
              extraFields={[
                { label: 'Checked by:', name: 'camLubeCheck', value: details.camLubeCheck },
                { label: 'Replace/Re-use:', name: 'camLubeCondition', value: details.camLubeCondition },
                { label: 'Recommendation:', name: 'camLubeRecommendation', value: details.camLubeRecommendation },
              ]}
            />
          </>
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
