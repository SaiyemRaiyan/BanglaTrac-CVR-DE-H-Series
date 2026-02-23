'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page4Props {
  currentSection: number;
}

interface Parameter {
  unit: string;
  actual: string;
  time: string;
}

export default function Page4({ currentSection }: Page4Props) {
  const [formData, setFormData] = useState({
    engineSN: '',
    startingTime: '',
    endTime: '',
    
    // Parameters
    engineSpeed: { unit: 'RPM', actual: '', time: '' } as Parameter,
    engineSMU: { unit: 'Hrs', actual: '', time: '' } as Parameter,
    oilPressure: { unit: 'Psi', actual: '', time: '' } as Parameter,
    load: { unit: 'KW', actual: '', time: '' } as Parameter,
    manifoldTemp: { unit: 'C/F', actual: '', time: '' } as Parameter,
    manifoldPressure: { unit: 'Kpa', actual: '', time: '' } as Parameter,
    jwTemp: { unit: 'C/F', actual: '', time: '' } as Parameter,
    
    // Cylinder temperatures
    cylinders: Array(20).fill(null).map(() => ({ unit: '°C', actual: '', time: '' })),
    
    leftBankExitTemp: { unit: 'C/F', actual: '', time: '' } as Parameter,
    detonationLevel: { unit: 'BAR', actual: '', time: '' } as Parameter,
    acTempIn: { unit: 'C/F', actual: '', time: '' } as Parameter,
    acTempOut: { unit: 'C/F', actual: '', time: '' } as Parameter,
    jwTempIn: { unit: 'C/F', actual: '', time: '' } as Parameter,
    jwTempOut: { unit: 'C/F', actual: '', time: '' } as Parameter,
    gasPressurePRV: { unit: 'PSI', actual: '', time: '' } as Parameter,
  });

  const handleHeaderChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleParameterChange = (
    paramKey: string,
    subKey: 'unit' | 'actual' | 'time',
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [paramKey]: {
        ...((prev as any)[paramKey] || {}),
        [subKey]: value
      }
    }));
  };

  const handleCylinderChange = (index: number, subKey: 'actual' | 'time', value: string) => {
    setFormData(prev => ({
      ...prev,
      cylinders: prev.cylinders.map((cyl, i) =>
        i === index ? { ...cyl, [subKey]: value } : cyl
      )
    }));
  };

  const ParameterRow = ({
    label,
    paramKey,
  }: {
    label: string;
    paramKey: string;
  }) => {
    const param = (formData as any)[paramKey];
    return (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-2 border-b">
        <div className="font-medium text-sm">{label}</div>
        <div>
          <input
            type="text"
            value={param.unit}
            onChange={(e) => handleParameterChange(paramKey, 'unit', e.target.value)}
            className="w-full px-2 py-1 border rounded text-sm"
            placeholder="Unit"
          />
        </div>
        <div>
          <input
            type="text"
            value={param.actual}
            onChange={(e) => handleParameterChange(paramKey, 'actual', e.target.value)}
            className="w-full px-2 py-1 border rounded text-sm"
            placeholder="Actual"
          />
        </div>
        <div>
          <input
            type="time"
            value={param.time}
            onChange={(e) => handleParameterChange(paramKey, 'time', e.target.value)}
            className="w-full px-2 py-1 border rounded text-sm"
            placeholder="Time"
          />
        </div>
        <div></div>
      </div>
    );
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Basic Parameters
        return (
          <FormSection title="Parameters Actual Reading - Basic Parameters">
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Engine S/L No.</label>
                  <input
                    type="text"
                    value={formData.engineSN}
                    onChange={(e) => handleHeaderChange('engineSN', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Enter serial number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Starting Time</label>
                  <input
                    type="time"
                    value={formData.startingTime}
                    onChange={(e) => handleHeaderChange('startingTime', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">End Time</label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => handleHeaderChange('endTime', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-3 bg-blue-100 font-semibold text-sm border-b">
                <div>Particulars</div>
                <div>Unit</div>
                <div>Actual</div>
                <div>Time</div>
                <div></div>
              </div>

              <ParameterRow label="1. Engine Speed" paramKey="engineSpeed" />
              <ParameterRow label="2. Engine SMU" paramKey="engineSMU" />
              <ParameterRow label="3. Oil Pressure" paramKey="oilPressure" />
              <ParameterRow label="4. Load" paramKey="load" />
              <ParameterRow label="5. Manifold Temp" paramKey="manifoldTemp" />
              <ParameterRow label="6. Manifold Pressure" paramKey="manifoldPressure" />
              <ParameterRow label="7. J/W Temp" paramKey="jwTemp" />
              <ParameterRow label="28. Left Bank Exit Temp" paramKey="leftBankExitTemp" />
              <ParameterRow label="29. Detonation Level" paramKey="detonationLevel" />
            </div>
          </FormSection>
        );

      case 1: // Cylinder Temperatures
        return (
          <FormSection title="Cylinder Temperature Readings">
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-3 bg-blue-100 font-semibold text-sm border-b">
                <div>Cylinder #</div>
                <div>Unit</div>
                <div>Actual</div>
                <div>Time</div>
              </div>

              {formData.cylinders.map((cyl, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2 border-b">
                  <div className="font-medium text-sm">Cylinder - {index + 1}</div>
                  <div className="text-sm text-gray-600">°C</div>
                  <div>
                    <input
                      type="text"
                      value={cyl.actual}
                      onChange={(e) => handleCylinderChange(index, 'actual', e.target.value)}
                      className="w-full px-2 py-1 border rounded text-sm"
                      placeholder="Temperature"
                    />
                  </div>
                  <div>
                    <input
                      type="time"
                      value={cyl.time}
                      onChange={(e) => handleCylinderChange(index, 'time', e.target.value)}
                      className="w-full px-2 py-1 border rounded text-sm"
                      placeholder="Time"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FormSection>
        );

      case 2: // Electrical Parameters
        return (
          <FormSection title="Electrical Parameters">
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-3 bg-blue-100 font-semibold text-sm border-b">
                <div>Parameter</div>
                <div>Unit</div>
                <div>Actual</div>
                <div>Time</div>
                <div></div>
              </div>

              <ParameterRow label="30. A/C Temp In" paramKey="acTempIn" />
              <ParameterRow label="31. A/C Temp Out" paramKey="acTempOut" />
              <ParameterRow label="32. J/W Temp In" paramKey="jwTempIn" />
              <ParameterRow label="33. J/W Temp Out" paramKey="jwTempOut" />
              <ParameterRow label="34. Gas Pressure After PRV" paramKey="gasPressurePRV" />
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> All temperature readings should be recorded at specific intervals during the test. Record time for each reading to ensure accurate documentation.
              </p>
            </div>
          </FormSection>
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
