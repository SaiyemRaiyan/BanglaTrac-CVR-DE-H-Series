'use client';

import { useState } from 'react';
import CheckboxGroup from '@/components/CheckboxGroup';

interface Page2Props {
  currentSection: number;
}

const TOTAL_SECTIONS = 3;

export default function Page2({ currentSection }: Page2Props) {
  const [selectedCylinders, setSelectedCylinders] = useState<{ [key: string]: Set<number> }>({});

  // Helper function to create cylinder table
  const CylinderTable = ({ label, cylinders = 20 }: { label: string; cylinders?: number }) => {
    const cylinderNumbers = Array.from({ length: cylinders }, (_, i) => i + 1);
    const cylinderKey = label.replace(/[^a-z0-9]/gi, '');
    const selected = selectedCylinders[cylinderKey] || new Set<number>();
    const allSelected = selected.size === cylinders && cylinders > 0;
    
    const handleCylinderToggle = (num: number) => {
      const newSelected = new Set(selected);
      if (newSelected.has(num)) {
        newSelected.delete(num);
      } else {
        newSelected.add(num);
      }
      setSelectedCylinders((prev) => ({
        ...prev,
        [cylinderKey]: newSelected
      }));
    };
    
    return (
      <div className="my-2 relative">
        <div className="mb-1.5 flex items-center gap-2 justify-between">
          <div className="text-sm font-bold text-[#005288]">{label}</div>
          {allSelected && (
            <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">
              <i className="fas fa-check-circle"></i>
              DONE
            </div>
          )}
        </div>
        
        {/* Mobile View - Card Grid - 2 columns per row to avoid horizontal scroll */}
        <div className="sm:hidden w-full max-w-full overflow-x-hidden">
          <div className="grid grid-cols-2 gap-1.5 w-full">
            {cylinderNumbers.map((num) => (
              <div key={num} className="flex flex-col w-full min-w-0">
                <button
                  onClick={() => handleCylinderToggle(num)}
                  className={`px-1 py-0.5 text-center font-extrabold text-xs rounded-t border transition-all ${
                    selected.has(num)
                      ? 'bg-green-500 text-white border-green-600'
                      : 'bg-[#005288] text-white border-gray-200'
                  } min-h-[20px] flex items-center justify-center`}
                >
                  {num}
                </button>
                <input
                  type="text"
                  className={`w-full px-1 py-1.5 border-l border-r border-b rounded-b text-xs h-8 text-center touch-manipulation min-w-0 ${
                    selected.has(num) ? 'border-green-500 bg-green-50' : 'border-gray-300'
                  }`}
                  placeholder=""
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop View - Table */}
        <div className="hidden sm:block relative overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
          <table className="w-full border-collapse text-sm min-w-[600px]">
            <thead>
              <tr>
                {cylinderNumbers.map((num) => (
                  <th
                    key={num}
                    onClick={() => handleCylinderToggle(num)}
                    className={`p-1.5 text-center font-extrabold border cursor-pointer transition-all whitespace-nowrap ${
                      selected.has(num)
                        ? 'bg-green-500 text-white border-green-600'
                        : 'bg-[#005288] text-white border-gray-200 hover:bg-[#1a5f9e]'
                    }`}
                  >
                    {num}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {cylinderNumbers.map((num) => (
                  <td key={num} className={`p-1.5 border text-center h-11 transition-all ${
                    selected.has(num) ? 'bg-green-50 border-green-500' : 'bg-white border-gray-200'
                  }`}>
                    <input
                      type="text"
                      className={`w-full p-1.5 border rounded text-sm sm:text-base h-11 text-center touch-manipulation transition-all ${
                        selected.has(num) ? 'border-green-500 text-green-700 font-semibold' : 'border-gray-300'
                      }`}
                      placeholder=""
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Section 1: Work Performed Items 17-24 */}
      <div className="w-full p-2.5 overflow-y-auto h-full overflow-x-hidden" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card max-w-full overflow-x-hidden">
          <div className="form-section-title">
            <i className="fas fa-tasks"></i>
            <span>DETAILS WORK PERFORMED (√) - ITEMS 17-24</span>
          </div>
          <div className="space-y-3">
            {/* Item 17: Engine Valve Lash */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">17.</span>
                <span className="text-sm font-bold text-[#1a202c]">Engine Valve Lash</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Adjust</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'valve-lash-yes', label: 'Yes' },
                    { id: 'valve-lash-no', label: 'No' },
                    { id: 'valve-lash-all', label: 'All' },
                  ]}
                  type="radio"
                  name="valve-lash"
                />
                <div className="mt-2">
                  <CylinderTable label="INLET" />
                  <CylinderTable label="EXHAUST" />
                </div>
              </div>
            </div>

            {/* Item 18: Bridge */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">18.</span>
                <span className="text-sm font-bold text-[#1a202c]">Bridge</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Adjust</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'bridge-yes', label: 'Yes' },
                    { id: 'bridge-no', label: 'No' },
                    { id: 'bridge-all', label: 'All' },
                  ]}
                  type="radio"
                  name="bridge"
                />
                <div className="mt-2">
                  <CylinderTable label="INLET" />
                  <CylinderTable label="EXHAUST" />
                </div>
              </div>
            </div>

            {/* Item 19: Ignition System Transformer Assy. */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">19.</span>
                <span className="text-sm font-bold text-[#1a202c]">Ignition System Transformer Assy.</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Check</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'ignition-cleaned', label: 'Cleaned' },
                    { id: 'ignition-ohm', label: 'Ω Checked' },
                    { id: 'ignition-replace', label: 'Replace' },
                  ]}
                  type="radio"
                  name="ignition-transformer"
                />
              </div>
            </div>

            {/* Item 20: Ignition Spark Plugs */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">20.</span>
                <span className="text-sm font-bold text-[#1a202c]">Ignition Spark Plugs</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Check</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'spark-cleaned', label: 'Cleaned' },
                    { id: 'spark-adjusted', label: 'Adjusted' },
                    { id: 'spark-replace', label: 'Replace' },
                  ]}
                  type="radio"
                  name="ignition-spark"
                />
              </div>
            </div>

            {/* Item 21: Ignition Spark Plugs (G3500 B & C) */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">21.</span>
                <span className="text-sm font-bold text-[#1a202c]">Ignition Spark Plugs (G3500 B & C)</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Replace</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'spark-g3500-yes', label: 'Yes' },
                    { id: 'spark-g3500-no', label: 'No' },
                  ]}
                  type="radio"
                  name="spark-g3500"
                />
                <div className="mt-2">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[11px] h-20"
                    placeholder="Comments:"
                  />
                </div>
              </div>
            </div>

            {/* Item 22: Ignition System Timing */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">22.</span>
                <span className="text-sm font-bold text-[#1a202c]">Ignition System Timing</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Check</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { 
                      id: 'timing-ok', 
                      label: (
                        <span>
                          Ok ( <input type="text" className="w-10 border-b border-gray-300 text-center text-xs" placeholder="°" /> )
                        </span>
                      ) 
                    },
                    { 
                      id: 'timing-adjusted', 
                      label: (
                        <span>
                          Adjusted ( <input type="text" className="w-10 border-b border-gray-300 text-center text-xs" placeholder="°" /> / <input type="text" className="w-10 border-b border-gray-300 text-center text-xs" placeholder="°" /> )
                        </span>
                      ) 
                    }
                  ]}
                  type="radio"
                  name="timing"
                />
              </div>
            </div>

            {/* Item 23: Detonation Level */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">23.</span>
                <span className="text-sm font-bold text-[#1a202c]">Detonation Level</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Check</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { 
                      id: 'detonation-found', 
                      label: (
                        <span>
                          Found <input type="text" className="w-8 border-b border-gray-300 text-center text-xs" placeholder="bar" /> @ <input type="text" className="w-8 border-b border-gray-300 text-center text-xs" placeholder="KW" /> load.
                        </span>
                      ) 
                    }
                  ]}
                  type="radio"
                  name="detonation"
                />
                <div className="mt-2">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[11px] h-16"
                    placeholder="Comments:"
                  />
                </div>
              </div>
            </div>

            {/* Item 24: Gas Pressure Regulator */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">24.</span>
                <span className="text-sm font-bold text-[#1a202c]">Gas Pressure Regulator</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Check</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'gas-ok', label: 'Ok' },
                    { 
                      id: 'gas-adjusted', 
                      label: (
                        <span>
                          Adjusted (In psi: <input type="text" className="w-10 border-b border-gray-300 text-center text-xs" /> / Adj. psi: <input type="text" className="w-10 border-b border-gray-300 text-center text-xs" />)
                        </span>
                      ) 
                    }
                  ]}
                  type="radio"
                  name="gas-pressure"
                />
                <div className="mt-2">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[11px] h-16"
                    placeholder="Comments:"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Work Performed Items 25-32 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-tasks"></i>
            <span>DETAILS WORK PERFORMED (√) - ITEMS 25-32</span>
          </div>
          <div className="space-y-3">
            {/* Item 25: Starting Motor Connection */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">25.</span>
                <span className="text-sm font-bold text-[#1a202c]">Starting Motor Connection</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Checked</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'motor-ok', label: 'Ok' },
                    { id: 'motor-tightened', label: 'Tightened' },
                  ]}
                  type="radio"
                  name="starting-motor"
                />
              </div>
            </div>

            {/* Item 26: Generator Set Vibration */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">26.</span>
                <span className="text-sm font-bold text-[#1a202c]">Generator Set Vibration</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Observed</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'vibration-ok', label: 'Ok' },
                    { id: 'vibration-vibrating', label: 'Vibrating' },
                  ]}
                  type="radio"
                  name="generator-vibration"
                />
              </div>
            </div>

            {/* Item 27: Actuator Linkage / Throttle Bearing */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">27.</span>
                <span className="text-sm font-bold text-[#1a202c]">Actuator Linkage / Throttle Bearing</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Checked</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'actuator-ok', label: 'Ok' },
                    { id: 'actuator-lubricate', label: 'Lubricate' },
                    { id: 'actuator-replace', label: 'Replace' },
                  ]}
                  type="radio"
                  name="actuator-linkage"
                />
              </div>
            </div>

            {/* Item 28: Speed / Timing Sensor */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">28.</span>
                <span className="text-sm font-bold text-[#1a202c]">Speed / Timing Sensor</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Checked</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'sensor-ok', label: 'Ok' },
                    { id: 'sensor-cleaned', label: 'Cleaned' },
                    { id: 'sensor-replace', label: 'Replace' },
                  ]}
                  type="radio"
                  name="speed-sensor"
                />
              </div>
            </div>

            {/* Item 29: Bearing (Alternator & Radiator fan) */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">29.</span>
                <span className="text-sm font-bold text-[#1a202c]">Bearing (Alternator & Radiator fan)</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Lubricate</span>
              </div>
              <div className="pl-4">
                {/* Main options - converted to CheckboxGroup */}
                <CheckboxGroup
                  options={[
                    { id: 'bearing-lubricate1', label: 'Lubricate' },
                    { id: 'bearing-not-lubricate', label: 'Not Lubricate Due to Lack Of Grease.' }
                  ]}
                  type="radio"
                  name="item29"
                />
                
                {/* Sub-questions table - kept original structure as it's different from simple radio group */}
                <div className="space-y-1 mt-4">
                  {[
                    "Out Let Nipple Open and Hole Clear By Soft Metal",
                    "Rotor & Stator Backside Grease Clear",
                    "Engine Turn During greasing",
                    "Grease Are Coming Out From Outlet Hole",
                    "Grease Are Coming Out From Bearing & Rotor Backside",
                    "After Complete Greasing Nipple Close",
                    "Apply Not More Than 125 gm grease"
                  ].map((text, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded border border-gray-200">
                      <span className="text-xs text-gray-700 flex-1">{text}</span>
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-1">
                          <input type="radio" name={`bearing-sub${index}`} className="h-3.5 w-3.5" />
                          <span className="text-xs">Yes</span>
                        </label>
                        <label className="flex items-center gap-1">
                          <input type="radio" name={`bearing-sub${index}`} className="h-3.5 w-3.5" />
                          <span className="text-xs">No</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Item 30: Valve Stem Projection */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">30.</span>
                <span className="text-sm font-bold text-[#1a202c]">Valve Stem Projection</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Measure / Record</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'valve-yes', label: 'Yes' },
                    { id: 'valve-no', label: 'No' },
                  ]}
                  type="radio"
                  name="valve-stem"
                />
                
                <div className="mt-4">
                  <div className="text-[11px] font-bold mb-2">INLET VALVES (mm)</div>
                  
                  {/* Mobile View - Simplified Table - Stack FORWARD/AFTER vertically to avoid horizontal scroll */}
                  <div className="sm:hidden space-y-1.5 mb-4">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((cyl) => (
                      <div key={cyl} className="bg-white border border-gray-200 rounded p-1.5 w-full max-w-full overflow-x-hidden">
                        <div className="font-bold text-xs mb-1 text-[#005288] bg-gray-50 px-1 py-0.5 rounded">Cyl {cyl}</div>
                        <div className="space-y-1">
                          <div>
                            <div className="text-[8px] font-semibold mb-0.5 text-gray-600">FORWARD</div>
                            <div className="grid grid-cols-3 gap-0.5">
                              <input type="text" className="w-full px-0.5 py-0.5 border border-gray-300 rounded text-xs h-6 text-center" placeholder="R" />
                              <input type="text" className="w-full px-0.5 py-0.5 border border-gray-300 rounded text-xs h-6 text-center" placeholder="P" />
                              <input type="text" className="w-full px-0.5 py-0.5 border border-gray-300 rounded text-xs h-6 text-center" placeholder="R" />
                            </div>
                          </div>
                          <div>
                            <div className="text-[8px] font-semibold mb-0.5 text-gray-600">AFTER</div>
                            <div className="grid grid-cols-3 gap-0.5">
                              <input type="text" className="w-full px-0.5 py-0.5 border border-gray-300 rounded text-xs h-6 text-center" placeholder="R" />
                              <input type="text" className="w-full px-0.5 py-0.5 border border-gray-300 rounded text-xs h-6 text-center" placeholder="P" />
                              <input type="text" className="w-full px-0.5 py-0.5 border border-gray-300 rounded text-xs h-6 text-center" placeholder="R" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Desktop View - Full Table */}
                  <div className="hidden sm:block relative overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide mb-4">
                    <table className="w-full border-collapse text-xs min-w-[800px]">
                      <thead>
                        <tr>
                          <th className="bg-[#005288] text-white p-2 border border-gray-200">Cyl. No.</th>
                          <th colSpan={3} className="bg-[#005288] text-white p-2 border border-gray-200">FORWARD</th>
                          <th colSpan={3} className="bg-[#005288] text-white p-2 border border-gray-200">AFTER</th>
                        </tr>
                        <tr>
                          <th className="bg-gray-100 p-1 border border-gray-200"></th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Ref. Reading</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Projection</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Recession</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Ref. Reading</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Projection</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Recession</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((cyl) => (
                          <tr key={cyl}>
                            <td className="p-2 border border-gray-200 text-center font-bold">{cyl}</td>
                            {Array.from({ length: 6 }).map((_, idx) => (
                              <td key={idx} className="p-1 border border-gray-200">
                                <input type="text" className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-9 text-center" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-[11px] font-bold mb-2">EXHAUST VALVES (mm)</div>
                  
                  {/* Mobile View - Simplified Table */}
                  <div className="sm:hidden space-y-2">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((cyl) => (
                      <div key={cyl} className="bg-white border border-gray-200 rounded p-2">
                        <div className="font-bold text-xs mb-2 text-[#005288]">Cylinder {cyl}</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <div className="text-xs font-semibold mb-1 text-gray-600">FORWARD</div>
                            <div className="grid grid-cols-3 gap-1">
                              <input type="text" className="w-full p-1 border border-gray-300 rounded text-xs h-7 text-center" placeholder="Ref" />
                              <input type="text" className="w-full p-1 border border-gray-300 rounded text-xs h-7 text-center" placeholder="Proj" />
                              <input type="text" className="w-full p-1 border border-gray-300 rounded text-xs h-7 text-center" placeholder="Rec" />
                            </div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold mb-1 text-gray-600">AFTER</div>
                            <div className="grid grid-cols-3 gap-1">
                              <input type="text" className="w-full p-1 border border-gray-300 rounded text-xs h-7 text-center" placeholder="Ref" />
                              <input type="text" className="w-full p-1 border border-gray-300 rounded text-xs h-7 text-center" placeholder="Proj" />
                              <input type="text" className="w-full p-1 border border-gray-300 rounded text-xs h-7 text-center" placeholder="Rec" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Desktop View - Full Table */}
                  <div className="hidden sm:block relative overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
                    <table className="w-full border-collapse text-xs min-w-[800px]">
                      <thead>
                        <tr>
                          <th className="bg-[#005288] text-white p-2 border border-gray-200">Cyl. No.</th>
                          <th colSpan={3} className="bg-[#005288] text-white p-2 border border-gray-200">FORWARD</th>
                          <th colSpan={3} className="bg-[#005288] text-white p-2 border border-gray-200">AFTER</th>
                        </tr>
                        <tr>
                          <th className="bg-gray-100 p-1 border border-gray-200"></th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Ref. Reading</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Projection</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Recession</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Ref. Reading</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Projection</th>
                          <th className="bg-gray-100 p-1 border border-gray-200 text-xs">Recession</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((cyl) => (
                          <tr key={cyl}>
                            <td className="p-2 border border-gray-200 text-center font-bold">{cyl}</td>
                            {Array.from({ length: 6 }).map((_, idx) => (
                              <td key={idx} className="p-1 border border-gray-200">
                                <input type="text" className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-9 text-center" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 31: Exhaust By Pass */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">31.</span>
                <span className="text-sm font-bold text-[#1a202c]">Exhaust By Pass</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Inspect</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'exhaust-ok', label: 'Ok' },
                    { id: 'exhaust-notok', label: 'Not Ok' },
                  ]}
                  type="radio"
                  name="exhaust-bypass"
                />
              </div>
            </div>

            {/* Item 32: Water Pump (J/W & Aux) */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">32.</span>
                <span className="text-sm font-bold text-[#1a202c]">Water Pump (J/W & Aux)</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Inspect</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'pump-ok', label: 'Ok' },
                    { id: 'pump-leakage', label: 'Leakage Repair' },
                    { id: 'pump-replace', label: 'Replace' },
                  ]}
                  type="radio"
                  name="water-pump"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Work Performed Items 33-37 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-tasks"></i>
            <span>DETAILS WORK PERFORMED (√) - ITEMS 33-37</span>
          </div>
          <div className="space-y-3">
            {/* Item 33: Pre Lube Pump (Hand / Electric) */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">33.</span>
                <span className="text-sm font-bold text-[#1a202c]">Pre Lube Pump (Hand / Electric)</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Inspect</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'prelube-ok', label: 'Ok' },
                    { id: 'prelube-notok', label: 'Not Ok' },
                  ]}
                  type="radio"
                  name="prelube-pump"
                />
              </div>
            </div>

            {/* Item 34: Alternator */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">34.</span>
                <span className="text-sm font-bold text-[#1a202c]">Alternator</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Inspect</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'alternator-cleaned', label: 'Cleaned' },
                    { id: 'alternator-tightened', label: 'Connection Tightened' },
                  ]}
                  type="radio"
                  name="alternator"
                />
              </div>
            </div>

            {/* Item 35: Crankcase Blow By */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">35.</span>
                <span className="text-sm font-bold text-[#1a202c]">Crankcase Blow By</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Measure</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[

                    { 
                      id: 'blowby-yes', 
                      label: (
                        <span>
                          Yes (<input type="text" className="w-8 border-b border-gray-300 text-center text-xs" placeholder="L/min" /> On Left Side & <input type="text" className="w-8 border-b border-gray-300 text-center text-xs" placeholder="L/min" /> on Right Side)
                        </span>
                      ) 
                    }
                  ]}
                  type="radio"
                  name="crankcase"
                />
              </div>
            </div>

            {/* Item 36: Cylinder Pressure */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">36.</span>
                <span className="text-sm font-bold text-[#1a202c]">Cylinder Pressure</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Measure</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'cylinder-yes', label: 'Yes' },
                    { id: 'cylinder-no', label: 'No' },
                  ]}
                  type="radio"
                  name="cylinder-pressure"
                />
                
                <div className="mt-4">
                  <div className="text-[11px] font-bold mb-2">Cylinder Pressure (PSI)</div>
                  
                  {/* Mobile View - Simplified Grid */}
                  <div className="sm:hidden w-full max-w-full overflow-x-hidden">
                    <div className="grid grid-cols-2 gap-1.5 w-full">
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((cyl) => (
                        <div key={cyl} className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded p-1 w-full min-w-0">
                          <div className="w-6 text-xs font-bold text-[#005288] flex-shrink-0">{cyl}</div>
                          <input type="text" className="flex-1 px-1 py-1 border border-gray-300 rounded text-xs h-7 min-w-0" placeholder="psi" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Desktop View - Table */}
                  <div className="hidden sm:block relative overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
                    <table className="w-full border-collapse text-[11px] min-w-[400px]">
                      <thead>
                        <tr>
                          <th className="bg-[#005288] text-white p-2 border border-gray-200">Cylinder Number</th>
                          <th className="bg-[#005288] text-white p-2 border border-gray-200">Cylinder Pressure (PSI)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((cyl) => (
                          <tr key={cyl}>
                            <td className="p-2 border border-gray-200 text-center font-bold">{cyl}</td>
                            <td className="p-2 border border-gray-200">
                              <input type="text" className="w-full p-1.5 border border-gray-300 rounded text-[12px] h-9 text-center" placeholder="psi" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-3">
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded text-[11px] h-20"
                      placeholder="Comments:"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Item 37: Water Heater & Space Heater */}
            <div className="mb-3 pb-2 border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-sm font-bold text-[#005288]">37.</span>
                <span className="text-sm font-bold text-[#1a202c]">Water Heater & Space Heater</span>
                <span className="text-xs sm:text-[11px] text-gray-600">Inspect</span>
              </div>
              <div className="pl-4">
                <CheckboxGroup
                  options={[
                    { id: 'heater-ok', label: 'Ok' },
                    { id: 'heater-notok', label: 'Not Ok' },
                  ]}
                  type="radio"
                  name="heater"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
