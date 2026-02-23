'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page2Props {
  currentSection: number;
}

export default function Page2({ currentSection }: Page2Props) {
  const [formData, setFormData] = useState({
    // Visit Info
    dateOfVisit: new Date().toISOString().split('T')[0],
    workOrderNo: '',
    
    // Service Engineer Names
    engineerName1: '',
    engineerName2: '',
    engineerName3: '',
    engineerName4: '',
    
    // Customer Visit
    customerName: '',
    location: '',
    pssdName: '',
    
    // Engine Data
    engineModel: '',
    engineSN: '',
    arrangementNo: '',
    smu: '',
    rpm: '',
    detonationLevel: '',
    
    // Operating Parameters
    voltage: '',
    load: '',
    frequency: '',
    jwTemp: '',
    acTemp: '',
    oilPressure: '',
    
    // Overhauling Type
    topEnd: false,
    inFrame: false,
    majorOverhauling: false,
    
    // Engine History
    engineHistory: '',
    
    // Signatures
    customerRepName: '',
    designation: '',
    signatureDate: new Date().toISOString().split('T')[0],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Visit Info
        return (
          <FormSection title="Visit Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Date of Visit</label>
                <input
                  type="date"
                  name="dateOfVisit"
                  value={formData.dateOfVisit}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Work Order No.</label>
                <input
                  type="text"
                  name="workOrderNo"
                  value={formData.workOrderNo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter work order number"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-4">Name of Service Engineer</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <input
                    key={num}
                    type="text"
                    name={`engineerName${num}`}
                    value={
  (formData[`engineerName${num}` as keyof typeof formData] as string) ?? ""
}
                    onChange={handleInputChange}
                    className="px-4 py-2 border rounded-lg"
                    placeholder={`Engineer ${num}`}
                  />
                ))}
              </div>
            </div>
          </FormSection>
        );

      case 1: // Customer Visit
        return (
          <FormSection title="Customer Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter location"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Name of PSSD</label>
              <input
                type="text"
                name="pssdName"
                value={formData.pssdName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter PSSD name"
              />
            </div>
          </FormSection>
        );

      case 2: // Engine Data
        return (
          <FormSection title="Engine Data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Engine Model</label>
                <input
                  type="text"
                  name="engineModel"
                  value={formData.engineModel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter engine model"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Engine S/L No.</label>
                <input
                  type="text"
                  name="engineSN"
                  value={formData.engineSN}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter serial number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Arrangement No.</label>
                <input
                  type="text"
                  name="arrangementNo"
                  value={formData.arrangementNo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter arrangement number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">SMU</label>
                <input
                  type="number"
                  name="smu"
                  value={formData.smu}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Service Machine Units"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">RPM</label>
                <input
                  type="number"
                  name="rpm"
                  value={formData.rpm}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Revolutions per minute"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Detonation Level</label>
                <input
                  type="text"
                  name="detonationLevel"
                  value={formData.detonationLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter detonation level"
                />
              </div>
            </div>
          </FormSection>
        );

      case 3: // Overhauling Type & Engine History
        return (
          <FormSection title="Overhauling Type & Engine History">
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-4">Type of Overhauling</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="topEnd"
                    checked={formData.topEnd}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm">TOP-END OVERHAULING</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="inFrame"
                    checked={formData.inFrame}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm">IN-FRAME OVERHAULING</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="majorOverhauling"
                    checked={formData.majorOverhauling}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm">MAJOR OVERHAULING</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Engine History</label>
              <textarea
                name="engineHistory"
                value={formData.engineHistory}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg h-40"
                placeholder="Enter engine history and any relevant information"
              />
            </div>

            <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Customer Representative Name</label>
                <input
                  type="text"
                  name="customerRepName"
                  value={formData.customerRepName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter designation"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Signature & Date</label>
                <input
                  type="date"
                  name="signatureDate"
                  value={formData.signatureDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </FormSection>
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
