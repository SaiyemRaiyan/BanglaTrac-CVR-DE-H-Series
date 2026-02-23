'use client';

import CheckboxGroup from '@/components/CheckboxGroup';

interface Page4Props {
  currentSection: number;
}

const TOTAL_SECTIONS = 4;

export default function Page4({ currentSection }: Page4Props) {
  return (
    <>
      {/* Section 1: General Information */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="space-y-3">
          {/* Header */}
          <div className="flex justify-between items-center mb-3 pb-2 border-b-2 border-[#ffcd00]">
            <div className="font-extrabold text-[#005288] text-sm sm:text-base flex items-center gap-2.5">
              <span>BANGLA CAT INSPECTION LOG SHEET DURING OBSERVATION TIME</span>
            </div>
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#4a5568] mb-3">
            Following Data Will Take After Started The Engine
          </div>

          {/* General Information */}
          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-info-circle"></i>
              <span>GENERAL INFORMATION</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  Total Observation Time
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  defaultValue="Two Hours"
                  readOnly
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  From: AM/PM
                </label>
                <div className="flex gap-1">
                  <input
                    type="text"
                    className="flex-1 p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                    placeholder="Time"
                  />
                  <select className="w-16 p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  To: AM/PM
                </label>
                <div className="flex gap-1">
                  <input
                    type="text"
                    className="flex-1 p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                    placeholder="Time"
                  />
                  <select className="w-16 p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="Customer Name"
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  Engine Serial No
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="Serial No"
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  Engine Model
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="Model"
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  Engine SMU
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="SMU"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Mechanical */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-cogs"></i>
              <span>A. MECHANICAL</span>
            </div>
            {/* Mobile View - Card Layout */}
            <div className="sm:hidden space-y-2">
                  {[
                    { sl: 1, particulars: 'Manifold Air temperature', unit: '°C' },
                    { sl: 2, particulars: 'Air inlet pressure', unit: 'Kpa/PSI' },
                    { sl: 3, particulars: 'J/W Coolant temperature', unit: '°F' },
                    { sl: 4, particulars: 'Lube oil pressure', unit: 'Kpa/PSI' },
                    { sl: 5, particulars: 'Lube oil temperature', unit: '°C' },
                    { sl: 6, particulars: 'Engine speed', unit: 'RPM' },
                    { sl: 7, particulars: 'Engine load', unit: 'KW' },
                  ].map((row) => (
                    <div key={row.sl} className="bg-white border border-gray-200 rounded p-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#005288] text-white px-2 py-1 rounded text-[10px] font-bold">{row.sl}</span>
                        <span className="text-[11px] font-semibold flex-1">{row.particulars}</span>
                        <span className="text-[10px] text-gray-600">{row.unit}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[9px] font-semibold mb-1 text-gray-600">Half an Hour</label>
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-semibold mb-1 text-gray-600">One Hour</label>
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-semibold mb-1 text-gray-600">Two Hours</label>
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-semibold mb-1 text-gray-600">Remarks</label>
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              
              {/* Cylinder Temperature Section - Mobile */}
              <div className="bg-white border-2 border-[#005288] rounded p-2">
                <div className="text-[11px] font-bold mb-2 text-[#005288]">8. Cylinder Temperature (SMU)</div>
                {Array.from({ length: 20 }, (_, i) => {
                  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
                  return (
                    <div key={i} className="mb-2 pb-2 border-b border-gray-200 last:border-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-semibold">{letters[i]}) Cylinder-{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-[10px] text-gray-600">°C</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[9px] font-semibold mb-1 text-gray-600">Half an Hour</label>
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-semibold mb-1 text-gray-600">One Hour</label>
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-semibold mb-1 text-gray-600">Two Hours</label>
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-semibold mb-1 text-gray-600">Remarks</label>
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Remaining rows - Mobile */}
              {[
                { sl: 9, particulars: 'AC/OC in temperature', unit: '°C' },
                { sl: 10, particulars: 'AC/OC out temperature', unit: '°C' },
                { sl: 11, particulars: 'J/W in temperature', unit: '°C' },
                { sl: 12, particulars: 'J/W out temperature', unit: '°C' },
                { sl: 13, particulars: 'Ambient temperature', unit: '°C' },
                { sl: 14, particulars: 'Detonation Lavel', unit: 'Bar' },
              ].map((row) => (
                <div key={row.sl} className="bg-white border border-gray-200 rounded p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#005288] text-white px-2 py-1 rounded text-[10px] font-bold">{row.sl}</span>
                    <span className="text-[11px] font-semibold flex-1">{row.particulars}</span>
                    <span className="text-[10px] text-gray-600">{row.unit}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">Half an Hour</label>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">One Hour</label>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">Two Hours</label>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">Remarks</label>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop View - Table */}
            <div className="hidden sm:block relative overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
              <table className="w-full border-collapse text-[11px] sm:text-[12px] min-w-[1000px]">
                <thead>
                  <tr>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 sticky left-0 z-20 whitespace-nowrap">Sl.No.</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Particulars</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Unit</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Half an Hour</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">One Hour</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Two Hours</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sl: 1, particulars: 'Manifold Air temperature', unit: '°C' },
                    { sl: 2, particulars: 'Air inlet pressure', unit: 'Kpa/PSI' },
                    { sl: 3, particulars: 'J/W Coolant temperature', unit: '°F' },
                    { sl: 4, particulars: 'Lube oil pressure', unit: 'Kpa/PSI' },
                    { sl: 5, particulars: 'Lube oil temperature', unit: '°C' },
                    { sl: 6, particulars: 'Engine speed', unit: 'RPM' },
                    { sl: 7, particulars: 'Engine load', unit: 'KW' },
                  ].map((row) => (
                    <tr key={row.sl}>
                      <td className="p-1 border border-gray-200 text-center font-bold bg-white sticky left-0 z-10">{row.sl}</td>
                      <td className="p-1 border border-gray-200">{row.particulars}</td>
                      <td className="p-1 border border-gray-200 text-center">{row.unit}</td>
                      {Array.from({ length: 4 }).map((_, colIdx) => (
                        <td key={colIdx} className="p-1 border border-gray-200">
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] sm:text-[12px] h-8 text-center touch-manipulation"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Cylinder Temperature Header */}
                  <tr>
                    <td className="p-1 border border-gray-200 text-center font-bold bg-white sticky left-0 z-10" rowSpan={21}>8</td>
                    <td className="p-1 border border-gray-200 font-bold" colSpan={2}>Cylinder Temperature (SMU)</td>
                    <td className="p-1 border border-gray-200"></td>
                    <td className="p-1 border border-gray-200"></td>
                    <td className="p-1 border border-gray-200"></td>
                    <td className="p-1 border border-gray-200"></td>
                  </tr>
                  {/* Cylinder rows */}
                  {Array.from({ length: 20 }, (_, i) => {
                    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
                    return (
                      <tr key={i}>
                        <td className="p-1 border border-gray-200 bg-white sticky left-0 z-10">{letters[i]}) Cylinder-{String(i + 1).padStart(2, '0')}</td>
                        <td className="p-1 border border-gray-200 text-center">°C</td>
                        {Array.from({ length: 4 }).map((_, colIdx) => (
                          <td key={colIdx} className="p-1 border border-gray-200">
                            <input
                              type="text"
                              className="w-full p-1 border border-gray-300 rounded text-[11px] sm:text-[12px] h-8 text-center touch-manipulation"
                            />
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                  {/* Remaining rows */}
                  {[
                    { sl: 9, particulars: 'AC/OC in temperature', unit: '°C' },
                    { sl: 10, particulars: 'AC/OC out temperature', unit: '°C' },
                    { sl: 11, particulars: 'J/W in temperature', unit: '°C' },
                    { sl: 12, particulars: 'J/W out temperature', unit: '°C' },
                    { sl: 13, particulars: 'Ambient temperature', unit: '°C' },
                    { sl: 14, particulars: 'Detonation Lavel', unit: 'Bar' },
                  ].map((row) => (
                    <tr key={row.sl}>
                      <td className="p-1 border border-gray-200 text-center font-bold bg-white sticky left-0 z-10">{row.sl}</td>
                      <td className="p-1 border border-gray-200">{row.particulars}</td>
                      <td className="p-1 border border-gray-200 text-center">{row.unit}</td>
                      {Array.from({ length: 4 }).map((_, colIdx) => (
                        <td key={colIdx} className="p-1 border border-gray-200">
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] sm:text-[12px] h-8 text-center touch-manipulation"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>

      {/* Section 3: Electrical */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-bolt"></i>
              <span>B. ELECTRICAL (MWH)</span>
            </div>
            {/* Mobile View - Card Layout */}
            <div className="sm:hidden space-y-2">
              {[
                { sl: 1, particulars: 'Genset Voltage', unit: 'Vol.' },
                { sl: 2, particulars: 'Genset Current', unit: 'Amp.' },
                { sl: 3, particulars: 'Genset Frequency', unit: 'Hz' },
              ].map((row) => (
                <div key={row.sl} className="bg-white border border-gray-200 rounded p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#005288] text-white px-2 py-1 rounded text-[10px] font-bold">{row.sl}</span>
                    <span className="text-[11px] font-semibold flex-1">{row.particulars}</span>
                    <span className="text-[10px] text-gray-600">{row.unit}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">Half an Hour</label>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">One Hour</label>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">Two Hours</label>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">Remarks</label>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded text-[11px] h-8 text-center touch-manipulation"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop View - Table */}
            <div className="hidden sm:block relative overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
              <table className="w-full border-collapse text-[11px] sm:text-[12px] min-w-[800px]">
                <thead>
                  <tr>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 sticky left-0 z-20 whitespace-nowrap">Sl.No.</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Particulars</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Unit</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Half an Hour</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">One Hour</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Two Hours</th>
                    <th className="bg-[#005288] text-white p-1 border border-gray-200 whitespace-nowrap">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sl: 1, particulars: 'Genset Voltage', unit: 'Vol.' },
                    { sl: 2, particulars: 'Genset Current', unit: 'Amp.' },
                    { sl: 3, particulars: 'Genset Frequency', unit: 'Hz' },
                  ].map((row) => (
                    <tr key={row.sl}>
                      <td className="p-1 border border-gray-200 text-center font-bold bg-white sticky left-0 z-10">{row.sl}</td>
                      <td className="p-1 border border-gray-200">{row.particulars}</td>
                      <td className="p-1 border border-gray-200 text-center">{row.unit}</td>
                      {Array.from({ length: 4 }).map((_, colIdx) => (
                        <td key={colIdx} className="p-1 border border-gray-200">
                          <input
                            type="text"
                            className="w-full p-1 border border-gray-300 rounded text-[11px] sm:text-[12px] h-8 text-center touch-manipulation"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>

      {/* Section 4: Comments & Signatures */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="space-y-3">
          {/* Engineer's Comment */}
          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-comment"></i>
              <span>ENGINEER&apos;S COMMENT</span>
            </div>
            <textarea
              className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium min-h-[150px] resize-none transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
              placeholder="Enter engineer's comments..."
            />
          </div>

          {/* Signatures */}
          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-signature"></i>
              <span>SIGNATURES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">ENGINEER&apos;S NAME</label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 touch-manipulation"
                />
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5 mt-2">SIGNATURE</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-2 min-h-[70px] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-gray-500">Signature Area</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">CUSTOMER&apos;S REPRESENTATIVE NAME</label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 touch-manipulation"
                />
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5 mt-2">SIGNATURE</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-2 min-h-[70px] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-gray-500">Signature Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
