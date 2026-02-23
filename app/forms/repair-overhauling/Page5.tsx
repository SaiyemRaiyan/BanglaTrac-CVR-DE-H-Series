'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page5Props {
  currentSection: number;
}

interface ConnectingRod {
  number: string;
  connectingRod: string;
  cap: string;
  remarks: string;
}

export default function Page5({ currentSection }: Page5Props) {
  const [formData, setFormData] = useState({
    // EMCP Volts
    emcpVoltsL1: '',
    emcpVoltsL2: '',
    emcpVoltsL3: '',
    
    // EMCP Amps
    emcpAmpsL1: '',
    emcpAmpsL2: '',
    emcpAmpsL3: '',
    
    // EMCP PF
    emcpPF: '',
    
    // Connecting Rod & Cap Part Numbers
    connectingRods: Array(20).fill(null).map((_, i) => ({
      number: (i + 1).toString(),
      connectingRod: '',
      cap: '',
      remarks: ''
    })) as ConnectingRod[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConnectingRodChange = (
    index: number,
    field: keyof ConnectingRod,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      connectingRods: prev.connectingRods.map((rod, i) =>
        i === index ? { ...rod, [field]: value } : rod
      )
    }));
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Electrical Data
        return (
          <FormSection title="Electrical Data">
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">B. ELECTRICAL</h3>
              
              <div className="mb-8 border rounded-lg overflow-hidden">
                <div className="bg-blue-100 p-3 font-semibold text-sm border-b">EMCP Volts</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">L1 (KV)</label>
                    <input
                      type="text"
                      name="emcpVoltsL1"
                      value={formData.emcpVoltsL1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Enter voltage L1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">L2 (KV)</label>
                    <input
                      type="text"
                      name="emcpVoltsL2"
                      value={formData.emcpVoltsL2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Enter voltage L2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">L3 (KV)</label>
                    <input
                      type="text"
                      name="emcpVoltsL3"
                      value={formData.emcpVoltsL3}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Enter voltage L3"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8 border rounded-lg overflow-hidden">
                <div className="bg-blue-100 p-3 font-semibold text-sm border-b">EMCP Amps</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">L1 (Amp)</label>
                    <input
                      type="text"
                      name="emcpAmpsL1"
                      value={formData.emcpAmpsL1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Enter amperage L1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">L2 (Amp)</label>
                    <input
                      type="text"
                      name="emcpAmpsL2"
                      value={formData.emcpAmpsL2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Enter amperage L2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">L3 (Amp)</label>
                    <input
                      type="text"
                      name="emcpAmpsL3"
                      value={formData.emcpAmpsL3}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Enter amperage L3"
                    />
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-blue-100 p-3 font-semibold text-sm border-b">EMCP PF</div>
                <div className="p-4">
                  <input
                    type="text"
                    name="emcpPF"
                    value={formData.emcpPF}
                    onChange={handleInputChange}
                    className="w-full md:w-1/3 px-4 py-2 border rounded-lg"
                    placeholder="Enter power factor"
                  />
                </div>
              </div>
            </div>
          </FormSection>
        );

      case 1: // Connecting Rod & Cap
        return (
          <FormSection title="Connecting Rod & Cap Part Number">
            <div className="border rounded-lg overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-100 border-b">
                    <th className="px-3 py-2 text-left font-semibold">Number</th>
                    <th className="px-3 py-2 text-left font-semibold">Connecting Rod</th>
                    <th className="px-3 py-2 text-left font-semibold">Cap</th>
                    <th className="px-3 py-2 text-left font-semibold">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.connectingRods.map((rod, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2 text-center font-medium">{rod.number}</td>
                      <td className="px-3 py-2">
                        <input
                          type="text"
                          value={rod.connectingRod}
                          onChange={(e) => handleConnectingRodChange(index, 'connectingRod', e.target.value)}
                          className="w-full px-2 py-1 border rounded text-sm"
                          placeholder="Part number"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="text"
                          value={rod.cap}
                          onChange={(e) => handleConnectingRodChange(index, 'cap', e.target.value)}
                          className="w-full px-2 py-1 border rounded text-sm"
                          placeholder="Part number"
                        />
                      </td>
                      <td className="px-3 py-2">
                        <input
                          type="text"
                          value={rod.remarks}
                          onChange={(e) => handleConnectingRodChange(index, 'remarks', e.target.value)}
                          className="w-full px-2 py-1 border rounded text-sm"
                          placeholder="Remarks"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FormSection>
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
