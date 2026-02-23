'use client';

import CheckboxGroup from '@/components/CheckboxGroup';

interface Page3Props {
  currentSection: number;
}

const TOTAL_SECTIONS = 6;

export default function Page3({ currentSection }: Page3Props) {
  return (
    <>
      {/* Section 1: Work Performed Items 38-41 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-tasks"></i>
            <span>DETAILS WORK PERFORMED (√) - ITEMS 38-41</span>
          </div>
          <div className="space-y-3">
            {[
              { num: 38, title: 'Cooling System SCA', action: '', options: ['Change: Yes', 'Change: No', 'Leakage: Repair / Change'] },
              { num: 39, title: 'Turbocharger', action: 'Inspect', options: ['Ok', 'No'] },
              { num: 40, title: 'Water Temp. Regulator', action: 'Replace', options: ['Yes', 'No'] },
              { num: 41, title: 'Previous Maintenance Done By', action: '', options: ['Bangla CAT', 'Customer'] },
            ].map((item) => (
              <div key={item.num} className="mb-3 pb-2 border-b border-gray-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#005288]">{item.num}.</span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-[#1a202c]">{item.title}</span>
                  {item.action && <span className="text-[10px] sm:text-[11px] text-gray-600">{item.action}</span>}
                </div>
                <div className="pl-4">
                  <CheckboxGroup
                    options={item.options.map((opt) => ({ id: `item${item.num}-${opt.toLowerCase().replace(/\s+/g, '-')}`, label: opt }))}
                    type="checkbox"
                    name={`item${item.num}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Spare Parts */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-tools"></i>
            <span>SPARE PARTS USED</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {[1, 2].map((col) => (
              <div key={col} className="relative">
                <div className="sm:hidden flex items-center justify-end mb-1.5">
                  <div className="flex items-center gap-1 text-[9px] text-[#005288] bg-[#e8f4fc] px-2 py-0.5 rounded-full">
                    <i className="fas fa-arrows-alt-h"></i>
                    <span>Scroll →</span>
                  </div>
                </div>
                {/* Mobile View - Card Layout */}
                <div className="sm:hidden space-y-2">
                  {Array.from({ length: 3 }, (_, i) => (col - 1) * 3 + i + 1).map((num) => (
                    <div key={num} className="bg-white border border-gray-200 rounded p-2">
                      <div className="text-[10px] font-semibold mb-1 text-gray-600">Sl. No. {num}</div>
                      <div className="space-y-2">
                        <div>
                          <label className="block text-[10px] font-semibold mb-1 text-gray-600">Part No</label>
                          <input
                            type="text"
                            className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-9 touch-manipulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold mb-1 text-gray-600">Parts Description</label>
                          <input
                            type="text"
                            className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-9 touch-manipulation"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-semibold mb-1 text-gray-600">Qty.</label>
                          <input
                            type="number"
                            className="w-full p-1.5 border border-gray-300 rounded text-[11px] h-9 text-center touch-manipulation"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Desktop View - Table */}
                <div className="hidden sm:block relative overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
                  <table className="w-full border-collapse text-[11px] sm:text-[12px] min-w-[300px]">
                    <thead>
                      <tr>
                        <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">Sl. No.</th>
                        <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">Part No</th>
                        <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">Parts Description</th>
                        <th className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">Qty.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 3 }, (_, i) => (col - 1) * 3 + i + 1).map((num) => (
                        <tr key={num}>
                          <td className="p-1.5 border border-gray-200 text-center">{num}</td>
                          <td className="p-1.5 border border-gray-200">
                            <input
                              type="text"
                              className="w-full p-1.5 border border-gray-300 rounded text-[12px] sm:text-[13px] h-11 touch-manipulation"
                            />
                          </td>
                          <td className="p-1.5 border border-gray-200">
                            <input
                              type="text"
                              className="w-full p-1.5 border border-gray-300 rounded text-[12px] sm:text-[13px] h-11 touch-manipulation"
                            />
                          </td>
                          <td className="p-1.5 border border-gray-200">
                            <input
                              type="number"
                              className="w-full p-1.5 border border-gray-300 rounded text-[12px] sm:text-[13px] h-11 text-center touch-manipulation"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Future Work */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-lightbulb"></i>
            <span>FUTURE WORK / PARTS RECOMMENDATION</span>
          </div>
          <div className="space-y-1 mb-2">
            <div className="flex items-start gap-2.5">
              <span className="text-[10px] sm:text-[11px]">1.</span>
              <span className="text-[10px] sm:text-[11px]">To arrange spark plug gasket for every maintenance.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-[10px] sm:text-[11px]">2.</span>
              <span className="text-[10px] sm:text-[11px]">To arrange Cat grease.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-[10px] sm:text-[11px]">3.</span>
              <span className="text-[10px] sm:text-[11px]">To arrange Cat Coolant (If Necessary).</span>
            </div>
          </div>
          <textarea
            className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[80px] resize-none"
            placeholder="Additional recommendations..."
          />
        </div>
      </div>

      {/* Section 4: Cylinder Temperature */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-thermometer-half"></i>
            <span>CYLINDER TEMPERATURE DATA</span>
          </div>
          <div className="relative">
            <div className="sm:hidden flex items-center justify-end mb-1.5">
              <div className="flex items-center gap-1 text-[9px] text-[#005288] bg-[#e8f4fc] px-2 py-0.5 rounded-full">
                <i className="fas fa-arrows-alt-h"></i>
                <span>Scroll →</span>
              </div>
            </div>
            {/* Mobile View - Card Layout */}
            <div className="sm:hidden space-y-3">
              <div className="bg-white border border-gray-200 rounded p-2">
                <div className="text-[11px] font-bold mb-2 text-[#005288]">Before Work @ Temp. (°C)</div>
                <div className="grid grid-cols-5 gap-1.5">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <div key={num} className="flex flex-col">
                      <div className="bg-[#005288] text-white p-1 text-center font-extrabold text-[9px] rounded-t border border-gray-200">
                        {num}
                      </div>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded-b text-[11px] h-9 text-center touch-manipulation"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded p-2">
                <div className="text-[11px] font-bold mb-2 text-[#005288]">After Work @ Temp. (°C)</div>
                <div className="grid grid-cols-5 gap-1.5">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <div key={num} className="flex flex-col">
                      <div className="bg-[#005288] text-white p-1 text-center font-extrabold text-[9px] rounded-t border border-gray-200">
                        {num}
                      </div>
                      <input
                        type="text"
                        className="w-full p-1 border border-gray-300 rounded-b text-[11px] h-9 text-center touch-manipulation"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop View - Table */}
            <div className="hidden sm:block relative overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
              <table className="w-full border-collapse text-[11px] sm:text-[12px] min-w-[600px]">
                <thead>
                  <tr>
                    <th className="bg-[#005288] text-white p-1.5 border border-gray-200" colSpan={10}>
                      Cylinder Number 1-10
                    </th>
                    <th className="bg-[#005288] text-white p-1.5 border border-gray-200" colSpan={10}>
                      Cylinder Number 11-20
                    </th>
                  </tr>
                  <tr>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <th key={num} className="bg-[#005288] text-white p-1.5 border border-gray-200 whitespace-nowrap">
                        {num}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={20} className="p-1.5 border border-gray-200 bg-gray-50 font-semibold text-center">
                      Before Work @ Temp. (°C)
                    </td>
                  </tr>
                  <tr>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <td key={num} className="p-1.5 border border-gray-200">
                        <input
                          type="text"
                          className="w-full p-1.5 border border-gray-300 rounded text-[12px] sm:text-[13px] h-11 text-center touch-manipulation"
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td colSpan={20} className="p-1.5 border border-gray-200 bg-gray-50 font-semibold text-center">
                      After Work @ Temp. (°C)
                    </td>
                  </tr>
                  <tr>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <td key={num} className="p-1.5 border border-gray-200">
                        <input
                          type="text"
                          className="w-full p-1.5 border border-gray-300 rounded text-[12px] sm:text-[13px] h-11 text-center touch-manipulation"
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Remarks & Comments */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-comment-alt"></i>
              <span>REMARKS (By Team Leader)</span>
            </div>
            <div>
              <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Condition Of Gen. Set:</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[100px] resize-none"
                placeholder="Remarks..."
              />
            </div>
          </div>

          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-comments"></i>
              <span>CUSTOMER COMMENTS</span>
            </div>
            <CheckboxGroup
              options={[
                { id: 'customer-satisfied', label: 'Satisfied' },
                { id: 'customer-unsatisfied', label: 'Unsatisfied' },
              ]}
              type="radio"
              name="customer-comments"
            />
            <textarea
              className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[80px] resize-none mt-2"
              placeholder="Customer comments..."
            />
            <div className="mt-3">
              <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">
                Wheather the Engineer Spent Night in Your Resthouse / Dormitory
              </label>
              <CheckboxGroup
                options={[
                  { id: 'engineer-stay-yes', label: 'Yes' },
                  { id: 'engineer-stay-no', label: 'No' },
                ]}
                type="radio"
                name="engineer-stay"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Signatures & Billing */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="space-y-3">
          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-file-invoice-dollar"></i>
              <span>BILLING INFORMATION</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Bill Amount</label>
                <input
                  type="number"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 touch-manipulation"
                  placeholder="Amount"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Invoice Nomber</label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 touch-manipulation"
                  placeholder="Invoice No"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Money Receipt No.</label>
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-[13px] sm:text-[14px] font-medium h-11 sm:h-10 touch-manipulation"
                  placeholder="MR No"
                />
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-signature"></i>
              <span>SIGNATURES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">SIGNATURE OF SERVICE ENGINEER</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-2 min-h-[70px] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-gray-500">Signature Area</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">SIGNATURE OF MANAGER (O & M)</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-2 min-h-[70px] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-gray-500">Signature Area</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">SIGNATURE OF MANAGER SERVICE ADMIN</label>
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
