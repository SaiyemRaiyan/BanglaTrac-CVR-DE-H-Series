'use client';

import CheckboxGroup from '@/components/CheckboxGroup';

interface Page6Props {
  currentSection: number;
}

const TOTAL_SECTIONS = 4;

export default function Page6({ currentSection }: Page6Props) {
  return (
    <>
      {/* Section 1: General Information */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="space-y-3">
          {/* Header */}
          <div className="flex justify-between items-center mb-3 pb-2 border-b-2 border-[#ffcd00]">
            <div className="font-extrabold text-[#005288] text-sm sm:text-base flex items-center gap-2.5">
              <span>PM ADDITIONAL CHECK LIST</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-[12px] font-bold text-[#1a202c]">SL No.:</span>
              <input
                type="text"
                className="w-20 sm:w-24 p-1.5 sm:p-1 border border-[#cbd5e0] rounded text-[11px] sm:text-[12px] font-medium h-11 sm:h-9 touch-manipulation"
                placeholder="22577"
              />
            </div>
          </div>

          {/* General Information */}
          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-info-circle"></i>
              <span>GENERAL INFORMATION</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  Serial
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-11 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="NWH-01245"
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  SMU
                </label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-11 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="27523"
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-[11px] sm:text-[12px] uppercase tracking-wide">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-11 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Items 1-7 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-tasks"></i>
              <span>ADDITIONAL CHECKLIST ITEMS - ITEMS 1-7</span>
            </div>
            {/* Mobile View - Card Layout */}
            <div className="sm:hidden space-y-2">
              {[
                { sl: 1, particulars: 'Alternator Cable Check', hasOptions: true, options: ['OK', 'Not OK'] },
                { sl: 2, particulars: 'Rectifre Group Check', hasOptions: true, options: ['OK', 'Not OK'] },
                { sl: 3, particulars: 'Litmus Test of Coolant', hasOptions: true, options: ['OK', 'Not OK'], subOptions: ['NGEC/SCA', 'HAVOLINE'] },
                { sl: 4, particulars: 'Every 500/250 Hours Coolant S.W.S Test', hasOptions: true, options: ['Yes', 'No'] },
                { sl: 5, particulars: 'Jacket Water Pressure', hasOptions: true, options: ['PSI', 'KPA'] },
                { sl: 6, particulars: 'Pressure CAP', hasOptions: true, options: ['14 PSI', '7 PSI'] },
                { sl: 7, particulars: 'Rubber Coupler Check', hasOptions: true, options: ['OK', 'Not OK'] },
              ].map((row) => (
                <div key={row.sl} className="bg-white border border-gray-200 rounded p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#005288] text-white px-2 py-1 rounded text-[10px] font-bold">{row.sl}</span>
                    <span className="text-[11px] font-semibold flex-1">{row.particulars}</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">Action Items</label>
                      {row.hasOptions && (
                        <div className="flex flex-wrap gap-1.5">
                          {row.options?.map((opt) => (
                            <label key={opt} className="flex items-center text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-200">
                              <input
                                type={row.options?.length === 2 ? 'radio' : 'checkbox'}
                                name={`item${row.sl}`}
                                className="mr-1 w-3 h-3"
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      )}
                      {'subOptions' in row && (row as any).subOptions && (
                        <div className="w-full mt-1.5 pl-2 space-y-1">
                          {(row as any).subOptions.map((subOpt: string) => (
                            <label key={subOpt} className="flex items-center text-[10px]">
                              <input
                                type="checkbox"
                                name={`item${row.sl}-sub`}
                                className="mr-1 w-3 h-3"
                              />
                              <span>{subOpt}</span>
                            </label>
                          ))}
                        </div>
                      )}
                      {'hasSubItems' in row && (row as any).hasSubItems && 'subItems' in row && (row as any).subItems && (
                        <div className="w-full mt-1.5 space-y-1.5">
                          {(row as any).subItems.map((subItem: string) => (
                            <div key={subItem} className="pl-2">
                              <div className="text-[10px] font-semibold mb-1">{subItem}:</div>
                              <div className="flex gap-1.5">
                                <label className="flex items-center text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-200">
                                  <input type="radio" name={`item${row.sl}-${subItem}`} className="mr-1 w-3 h-3" />
                                  <span>OK</span>
                                </label>
                                <label className="flex items-center text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-200">
                                  <input type="radio" name={`item${row.sl}-${subItem}`} className="mr-1 w-3 h-3" />
                                  <span>Not OK</span>
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {'unit' in row && (row as any).unit && (
                        <div className="mt-1.5">
                          <input
                            type="text"
                            className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-9"
                            placeholder={(row as any).unit}
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-[9px] font-semibold mb-1 text-gray-600">What we did?</label>
                      <textarea
                        className="w-full p-1.5 border border-gray-300 rounded text-[11px] min-h-[60px] resize-none"
                        placeholder="Comment..."
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
                    <th className="bg-[#005288] text-white p-1.5 border border-gray-200 sticky left-0 z-20 whitespace-nowrap">SL</th>
                    <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">Particulars</th>
                    <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">Action Items</th>
                    <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">What we did?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sl: 1, particulars: 'Alternator Cable Check', hasOptions: true, options: ['OK', 'Not OK'] },
                    { sl: 2, particulars: 'Rectifre Group Check', hasOptions: true, options: ['OK', 'Not OK'] },
                    { sl: 3, particulars: 'Litmus Test of Coolant', hasOptions: true, options: ['OK', 'Not OK'], subOptions: ['NGEC/SCA', 'HAVOLINE'] },
                    { sl: 4, particulars: 'Every 500/250 Hours Coolant S.W.S Test', hasOptions: true, options: ['Yes', 'No'] },
                    { sl: 5, particulars: 'Jacket Water Pressure', hasOptions: true, options: ['PSI', 'KPA'] },
                    { sl: 6, particulars: 'Pressure CAP', hasOptions: true, options: ['14 PSI', '7 PSI'] },
                    { sl: 7, particulars: 'Rubber Coupler Check', hasOptions: true, options: ['OK', 'Not OK'] },
                  ].map((row) => (
                    <tr key={row.sl}>
                      <td className="p-1.5 border border-gray-200 text-center font-bold bg-white sticky left-0 z-10">{row.sl}</td>
                      <td className="p-1.5 border border-gray-200">{row.particulars}</td>
                      <td className="p-1.5 border border-gray-200">
                        {row.hasOptions && (
                          <div className="flex flex-wrap gap-1">
                            {row.options?.map((opt) => (
                              <label key={opt} className="flex items-center text-[11px]">
                                <input
                                  type={row.options?.length === 2 ? 'radio' : 'checkbox'}
                                  name={`item${row.sl}`}
                                  className="mr-1 w-3 h-3"
                                />
                                <span>{opt}</span>
                              </label>
                            ))}
                            {'subOptions' in row && (row as any).subOptions && (
                              <div className="w-full mt-1 pl-4">
                                {(row as any).subOptions.map((subOpt: string) => (
                                  <label key={subOpt} className="flex items-center text-[11px] mb-1.5">
                                    <input
                                      type="checkbox"
                                      name={`item${row.sl}-sub`}
                                      className="mr-1 w-3 h-3"
                                    />
                                    <span>{subOpt}</span>
                                  </label>
                                ))}
                              </div>
                            )}
                            {'hasSubItems' in row && (row as any).hasSubItems && 'subItems' in row && (row as any).subItems && (
                              <div className="w-full mt-1 space-y-1">
                                {(row as any).subItems.map((subItem: string) => (
                                  <div key={subItem} className="pl-2">
                                    <div className="text-[11px] font-semibold mb-1.5">{subItem}:</div>
                                    <div className="flex gap-1">
                                      <label className="flex items-center text-[11px]">
                                        <input type="radio" name={`item${row.sl}-${subItem}`} className="mr-1 w-3 h-3" />
                                        <span>OK</span>
                                      </label>
                                      <label className="flex items-center text-[11px]">
                                        <input type="radio" name={`item${row.sl}-${subItem}`} className="mr-1 w-3 h-3" />
                                        <span>Not OK</span>
                                      </label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        {'unit' in row && (row as any).unit && (
                          <div className="flex items-center gap-1">
                            <input
                              type="text"
                              className="w-16 p-1.5 border border-gray-300 rounded text-[11px] h-11"
                              placeholder={(row as any).unit}
                            />
                          </div>
                        )}
                      </td>
                      <td className="p-1.5 border border-gray-200">
                        <textarea
                          className="w-full p-1.5 border border-gray-300 rounded text-[11px] min-h-[60px] resize-none"
                          placeholder="Comment..."
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>

      {/* Section 3: Items 8-14 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-tasks"></i>
            <span>ADDITIONAL CHECKLIST ITEMS - ITEMS 8-14</span>
          </div>
          {/* Mobile View - Card Layout */}
          <div className="sm:hidden space-y-2">
            {[
              { sl: 8, particulars: 'Grounding Check', hasOptions: true, options: ['OK', 'Not OK'] },
              { sl: 9, particulars: 'Alternator Base Plate Check', hasSubItems: true, subItems: ['Left Side', 'Right Side'] },
              { sl: 10, particulars: 'Spark Plug proper Torque Given', hasOptions: true, options: ['OK', 'Not OK'] },
              { sl: 11, particulars: 'Spark Plug seat cleaned Properly', hasOptions: true, options: ['OK', 'Not OK'] },
              { sl: 12, particulars: 'Spark Plug Metal Gasket Change or, Replace', hasOptions: true, options: ['Yes', 'No'] },
              { sl: 13, particulars: 'Nox Level Check', hasOptions: true, options: ['OK', 'Not OK'] },
              { sl: 14, particulars: 'Damper Temp', hasOptions: false, unit: '°C' },
            ].map((row) => (
              <div key={row.sl} className="bg-white border border-gray-200 rounded p-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#005288] text-white px-2 py-1 rounded text-[10px] font-bold">{row.sl}</span>
                  <span className="text-[11px] font-semibold flex-1">{row.particulars}</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="block text-[9px] font-semibold mb-1 text-gray-600">Action Items</label>
                    {row.hasOptions && (
                      <div className="flex flex-wrap gap-1.5">
                        {row.options?.map((opt) => (
                          <label key={opt} className="flex items-center text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-200">
                            <input
                              type={row.options?.length === 2 ? 'radio' : 'checkbox'}
                              name={`item${row.sl}`}
                              className="mr-1 w-3 h-3"
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    {'hasSubItems' in row && (row as any).hasSubItems && 'subItems' in row && (row as any).subItems && (
                      <div className="w-full mt-1.5 space-y-1.5">
                        {(row as any).subItems.map((subItem: string) => (
                          <div key={subItem} className="pl-2">
                            <div className="text-[10px] font-semibold mb-1">{subItem}:</div>
                            <div className="flex gap-1.5">
                              <label className="flex items-center text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-200">
                                <input type="radio" name={`item${row.sl}-${subItem}`} className="mr-1 w-3 h-3" />
                                <span>OK</span>
                              </label>
                              <label className="flex items-center text-[10px] bg-gray-50 px-2 py-1 rounded border border-gray-200">
                                <input type="radio" name={`item${row.sl}-${subItem}`} className="mr-1 w-3 h-3" />
                                <span>Not OK</span>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {'unit' in row && (row as any).unit && (
                      <div className="mt-1.5">
                        <input
                          type="text"
                          className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-9"
                          placeholder={(row as any).unit}
                        />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-[9px] font-semibold mb-1 text-gray-600">What we did?</label>
                    <textarea
                      className="w-full p-1.5 border border-gray-300 rounded text-[11px] min-h-[60px] resize-none"
                      placeholder="Comment..."
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
                  <th className="bg-[#005288] text-white p-1.5 border border-gray-200 sticky left-0 z-20 whitespace-nowrap">SL</th>
                  <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">Particulars</th>
                  <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">Action Items</th>
                  <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">What we did?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sl: 8, particulars: 'Grounding Check', hasOptions: true, options: ['OK', 'Not OK'] },
                  { sl: 9, particulars: 'Alternator Base Plate Check', hasSubItems: true, subItems: ['Left Side', 'Right Side'] },
                  { sl: 10, particulars: 'Spark Plug proper Torque Given', hasOptions: true, options: ['OK', 'Not OK'] },
                  { sl: 11, particulars: 'Spark Plug seat cleaned Properly', hasOptions: true, options: ['OK', 'Not OK'] },
                  { sl: 12, particulars: 'Spark Plug Metal Gasket Change or, Replace', hasOptions: true, options: ['Yes', 'No'] },
                  { sl: 13, particulars: 'Nox Level Check', hasOptions: true, options: ['OK', 'Not OK'] },
                  { sl: 14, particulars: 'Damper Temp', hasOptions: false, unit: '°C' },
                ].map((row) => (
                  <tr key={row.sl}>
                    <td className="p-1.5 border border-gray-200 text-center font-bold bg-white sticky left-0 z-10">{row.sl}</td>
                    <td className="p-1.5 border border-gray-200">{row.particulars}</td>
                    <td className="p-1.5 border border-gray-200">
                      {row.hasOptions && (
                        <div className="flex flex-wrap gap-1">
                          {row.options?.map((opt) => (
                            <label key={opt} className="flex items-center text-[11px]">
                              <input
                                type={row.options?.length === 2 ? 'radio' : 'checkbox'}
                                name={`item${row.sl}`}
                                className="mr-1 w-3 h-3"
                              />
                              <span>{opt}</span>
                            </label>
                          ))}
                          {'subOptions' in row && (row as any).subOptions && (
                            <div className="w-full mt-1 pl-4">
                              {(row as any).subOptions.map((subOpt: string) => (
                                <label key={subOpt} className="flex items-center text-[11px] mb-1.5">
                                  <input
                                    type="checkbox"
                                    name={`item${row.sl}-sub`}
                                    className="mr-1 w-3 h-3"
                                  />
                                  <span>{subOpt}</span>
                                </label>
                              ))}
                            </div>
                          )}
                          {'hasSubItems' in row && (row as any).hasSubItems && 'subItems' in row && (row as any).subItems && (
                            <div className="w-full mt-1 space-y-1">
                              {(row as any).subItems.map((subItem: string) => (
                                <div key={subItem} className="pl-2">
                                  <div className="text-[11px] font-semibold mb-1.5">{subItem}:</div>
                                  <div className="flex gap-1">
                                    <label className="flex items-center text-[11px]">
                                      <input type="radio" name={`item${row.sl}-${subItem}`} className="mr-1 w-3 h-3" />
                                      <span>OK</span>
                                    </label>
                                    <label className="flex items-center text-[11px]">
                                      <input type="radio" name={`item${row.sl}-${subItem}`} className="mr-1 w-3 h-3" />
                                      <span>Not OK</span>
                                    </label>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      {'unit' in row && (row as any).unit && (
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            className="w-16 p-1.5 border border-gray-300 rounded text-[11px] h-11"
                            placeholder={(row as any).unit}
                          />
                        </div>
                      )}
                    </td>
                    <td className="p-1.5 border border-gray-200">
                      <textarea
                        className="w-full p-1.5 border border-gray-300 rounded text-[11px] min-h-[60px] resize-none"
                        placeholder="Comment..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 4: Signatures */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-signature"></i>
              <span>SIGNATURES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Signature & Date of Service Engineer</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-2 min-h-[70px] flex flex-col items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-gray-500 mb-2">Signature Area</span>
                  <input
                    type="date"
                    className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-11"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Signature & Date of Customer Engineer</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-2 min-h-[70px] flex flex-col items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-gray-500 mb-2">Signature Area</span>
                  <input
                    type="date"
                    className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-11"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

