'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page11Props {
  currentSection: number;
}

export default function Page11({ currentSection }: Page11Props) {
  const [inspections, setInspections] = useState({
    turbocharger: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    lubeOilPump: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    sparkPlug: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    transformer: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
    waterFillUp: Array(20).fill(null).map((_, i) => ({ number: i + 1, checked: false })),
  });

  const [details, setDetails] = useState({
    // Customer / Job info for FINAL CHECK header
    customerName: '',
    location: '',
    deliveryChallanNo: '',
    jobDate: '',
    mcoWono: '',
    engineSerialNo: '',
    engineModel: '',
    turbochargerLeft: '',
    turbochargerRight: '',
    turbochargerChecked: '',
    
    lubeOilTorque: '',
    lubeOilTightenBy: '',
    lubeOilSeal: '',
    lubeOilRecommendation: '',
    
    sparkPlugReplace: '',
    sparkPlugGap: '',
    sparkPlugRecommendation: '',
    
    transformerAssemble: '',
    transformerConnect: '',
    transformerReplace: '',
    transformerRecommendation: '',
    
    waterFillNo: '',
    waterFillLeakage: '',
    waterFillRecommendation: '',
    
    oilFillStartPrelu: '',
    oilFillLeakage: '',
    oilFillRecommendation: '',
    
    alternatorLeftTop: '',
    alternatorLeftBottom: '',
    alternatorRightTop: '',
    alternatorRightBottom: '',
    alternatorCheckedBy: '',
    alternatorRecommendation: '',
    
    ovhTeamLeaderComments: '',
    customerComments: '',
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
            title="Turbocharger Condition"
            items={inspections.turbocharger}
            onCheck={(idx) => handleCheckChange('turbocharger', idx)}
            detailRows={[
              { label: 'Left side: replace/re-use/rebuild', name: 'turbochargerLeft', value: details.turbochargerLeft },
              { label: 'Right side: rebuild/replace/ rebuild', name: 'turbochargerRight', value: details.turbochargerRight },
              { label: 'Checked by:', name: 'turbochargerChecked', value: details.turbochargerChecked },
            ]}
          />
        );

      case 1:
        return (
          <InspectionGrid
            title="Lube Oil Pump Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.lubeOilPump}
            onCheck={(idx) => handleCheckChange('lubeOilPump', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'lubeOilTorque', value: details.lubeOilTorque },
              { label: 'Tighten by:', name: 'lubeOilTightenBy', value: details.lubeOilTightenBy },
              { label: 'Seal o ring: re-use/ replace', name: 'lubeOilSeal', value: details.lubeOilSeal },
              { label: 'Recommendation:', name: 'lubeOilRecommendation', value: details.lubeOilRecommendation },
            ]}
          />
        );

      case 2:
        return (
          <InspectionGrid
            title="Spark Plug Condition"
            items={inspections.sparkPlug}
            onCheck={(idx) => handleCheckChange('sparkPlug', idx)}
            detailRows={[
              { label: 'Apply torque:', name: 'lubeOilTorque', value: details.lubeOilTorque },
              { label: 'Tighten by:', name: 'lubeOilTightenBy', value: details.lubeOilTightenBy },
              { label: 'Replace/Re-use:', name: 'sparkPlugReplace', value: details.sparkPlugReplace },
              { label: 'Gap adjusted:', name: 'sparkPlugGap', value: details.sparkPlugGap },
              { label: 'Recommendation:', name: 'sparkPlugRecommendation', value: details.sparkPlugRecommendation },
            ]}
          />
        );

      case 3:
        return (
          <InspectionGrid
            title="Transformer Condition (if re-use put tick mark or replace put cross mark)"
            items={inspections.transformer}
            onCheck={(idx) => handleCheckChange('transformer', idx)}
            detailRows={[
              { label: 'Assemble by:', name: 'transformerAssemble', value: details.transformerAssemble },
              { label: 'Connector: re-place/ re-use:', name: 'transformerConnect', value: details.transformerConnect },
              { label: 'Replace/Re-use:', name: 'transformerReplace', value: details.transformerReplace },
              { label: 'Recommendation:', name: 'transformerRecommendation', value: details.transformerRecommendation },
            ]}
          />
        );

      case 4:
        return (
          <div className="space-y-6">

                <FormSection title="Customer & Job Info">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Customer Name</label>
                      <input name="customerName" value={details.customerName} onChange={handleDetailChange} className="w-full px-2 py-1 border rounded text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Location</label>
                      <input name="location" value={details.location} onChange={handleDetailChange} className="w-full px-2 py-1 border rounded text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Delivery Challan No.</label>
                      <input name="deliveryChallanNo" value={details.deliveryChallanNo} onChange={handleDetailChange} className="w-full px-2 py-1 border rounded text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Date</label>
                      <input type="date" name="jobDate" value={details.jobDate} onChange={handleDetailChange} className="w-full px-2 py-1 border rounded text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">MCO & W/O</label>
                      <input name="mcoWono" value={details.mcoWono} onChange={handleDetailChange} className="w-full px-2 py-1 border rounded text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Engine Serial No.</label>
                      <input name="engineSerialNo" value={details.engineSerialNo} onChange={handleDetailChange} className="w-full px-2 py-1 border rounded text-sm" />
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block text-xs font-semibold mb-1">Engine Model</label>
                      <input name="engineModel" value={details.engineModel} onChange={handleDetailChange} className="w-full px-2 py-1 border rounded text-sm" />
                    </div>
                  </div>
                </FormSection>
            <InspectionGrid
              title="Water Fill Up and Check Leakage"
              items={inspections.waterFillUp}
              onCheck={(idx) => handleCheckChange('waterFillUp', idx)}
              detailRows={[
                { label: 'No leakage found:', name: 'waterFillNo', value: details.waterFillNo },
                { label: 'Leakage found:', name: 'waterFillLeakage', value: details.waterFillLeakage },
                { label: 'Recommendation:', name: 'waterFillRecommendation', value: details.waterFillRecommendation },
              ]}
            />

            <FormSection title="Oil Fill Up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Start Prelub Pump and Pressurize the System Yes/No</label>
                  <input
                    type="text"
                    name="oilFillStartPrelu"
                    value={details.oilFillStartPrelu}
                    onChange={handleDetailChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Yes/No"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">No Leakage Found</label>
                  <input
                    type="text"
                    name="oilFillLeakage"
                    value={details.oilFillLeakage}
                    onChange={handleDetailChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Leakage status"
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Alternator Gap">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Left Top</label>
                  <input
                    type="text"
                    name="alternatorLeftTop"
                    value={details.alternatorLeftTop}
                    onChange={handleDetailChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Gap value"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Left Bottom</label>
                  <input
                    type="text"
                    name="alternatorLeftBottom"
                    value={details.alternatorLeftBottom}
                    onChange={handleDetailChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Gap value"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Right Top</label>
                  <input
                    type="text"
                    name="alternatorRightTop"
                    value={details.alternatorRightTop}
                    onChange={handleDetailChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Gap value"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Right Bottom</label>
                  <input
                    type="text"
                    name="alternatorRightBottom"
                    value={details.alternatorRightBottom}
                    onChange={handleDetailChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Gap value"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Checked by</label>
                <input
                  type="text"
                  name="alternatorCheckedBy"
                  value={details.alternatorCheckedBy}
                  onChange={handleDetailChange}
                  className="w-full px-3 py-2 border rounded-lg text-sm mb-4"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Recommendation</label>
                <textarea
                  name="alternatorRecommendation"
                  value={details.alternatorRecommendation}
                  onChange={handleDetailChange}
                  className="w-full px-3 py-2 border rounded-lg text-sm h-20"
                  placeholder="Recommendation"
                />
              </div>
            </FormSection>

            <FormSection title="Team Leader & Customer Comments">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">OVH Team Leader Comments & Remarks</label>
                  <textarea
                    name="ovhTeamLeaderComments"
                    value={details.ovhTeamLeaderComments}
                    onChange={handleDetailChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm h-24"
                    placeholder="Team leader comments"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Customer Comments & Remarks</label>
                  <textarea
                    name="customerComments"
                    value={details.customerComments}
                    onChange={handleDetailChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm h-24"
                    placeholder="Customer comments"
                  />
                </div>
              </div>
            </FormSection>

            <FormSection title="Signatures">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 border-t">
                <div className="text-center">
                  <div className="h-24 border-b border-dashed mb-2"></div>
                  <p className="text-sm font-semibold">BanglaCAT Engineer Signature</p>
                </div>
                <div className="text-center">
                  <div className="h-24 border-b border-dashed mb-2"></div>
                  <p className="text-sm font-semibold">Customer Signature</p>
                </div>
              </div>
            </FormSection>

            <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 mt-4">
              <p className="text-center font-semibold text-sm">Quality is always better then quantity, Customer Satisfaction is our Commitment</p>
            </div>           
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
