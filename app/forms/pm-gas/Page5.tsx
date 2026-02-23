'use client';

import CheckboxGroup from '@/components/CheckboxGroup';

interface Page5Props {
  currentSection: number;
}

const TOTAL_SECTIONS = 4;

export default function Page5({ currentSection }: Page5Props) {
  return (
    <>
      {/* Section 1: Items 1-4 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="space-y-3">
          {/* Header */}
          <div className="flex justify-between items-center mb-3 pb-2 border-b-2 border-[#ffcd00]">
            <div className="font-extrabold text-[#005288] text-sm sm:text-base flex items-center gap-2.5">
              <span>BANGLA CAT CHECK LIST</span>
            </div>
          </div>

          {/* Checklist Items 1-4 */}
          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-list"></i>
              <span>EQUIPMENT INSPECTION CHECKLIST - ITEMS 1-4</span>
            </div>
            <div className="space-y-4">
              {/* Item 1: Cooling type */}
              <div className="border-b border-gray-200 pb-3">
                <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">1. Cooling type (J/W And A/C)</div>
                <CheckboxGroup
                  options={[
                    { id: 'cooling-radiator', label: 'Radiator' },
                    { id: 'cooling-heat-exchanger', label: 'Heat Exchanger' },
                    { id: 'cooling-tube', label: 'Tube' },
                  ]}
                  type="checkbox"
                  name="cooling-type" />
                <div className="mt-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Last Clean Date:</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded text-[13px] h-10" />
                </div>
                <div className="mt-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                    placeholder="Comments..." />
                </div>
              </div>

              {/* Item 2: Fuel Filter Condition */}
              <div className="border-b border-gray-200 pb-3">
                <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">2. Fuel Filter Condition</div>
                <CheckboxGroup
                  options={[
                    { id: 'fuel-cat-filter', label: 'CAT Filter' },
                    { id: 'fuel-strainer', label: 'Strainer' },
                    { id: 'fuel-non-cat', label: 'Non CAT Filter' },
                  ]}
                  type="checkbox"
                  name="fuel-filter" />
                <div className="mt-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Last Clean/Change Date:</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded text-[13px] h-10" />
                </div>
                <div className="mt-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                    placeholder="Comments..." />
                </div>
              </div>

              {/* Item 3: Air Filter Condition */}
              <div className="border-b border-gray-200 pb-3">
                <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">3. Air Filter Condition</div>
                <CheckboxGroup
                  options={[
                    { id: 'air-cat-filter', label: 'CAT Filter' },
                    { id: 'air-non-cat', label: 'Non CAT Filter' },
                  ]}
                  type="checkbox"
                  name="air-filter" />
                <div className="mt-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Last Clean/Change Date:</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded text-[13px] h-10" />
                </div>
                <div className="mt-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                    placeholder="Comments..." />
                </div>
              </div>

              {/* Item 4: Leakage */}
              <div className="border-b border-gray-200 pb-3">
                <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">4. Any Leakage of (Lube Oil or Coolant or exhaust)</div>
                <CheckboxGroup
                  options={[
                    { id: 'leakage-yes', label: 'Yes' },
                    { id: 'leakage-no', label: 'No' },
                  ]}
                  type="radio"
                  name="leakage" />
                <div className="mt-2">
                  <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                    placeholder="Comments..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Items 5-8 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-list"></i>
            <span>EQUIPMENT INSPECTION CHECKLIST - ITEMS 5-8</span>
          </div>
          <div className="space-y-4">
            {/* Item 5: Battery Condition */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">5. Battery Condition</div>
              <CheckboxGroup
                options={[
                  { id: 'battery-good', label: 'Good' },
                  { id: 'battery-normal', label: 'Normal' },
                ]}
                type="checkbox"
                name="battery" />
              <div className="mt-2">
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Last Change Date:</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded text-[13px] h-10" />
              </div>
              <div className="mt-2">
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                  placeholder="Comments..." />
              </div>
            </div>

            {/* Item 6: Genset Log Maintained */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">6. Genset Log Maintained</div>
              <CheckboxGroup
                options={[
                  { id: 'log-yes', label: 'Yes' },
                  { id: 'log-no', label: 'No' },
                  { id: 'log-incomplete', label: 'Incomplete sheet' },
                ]}
                type="checkbox"
                name="genset-log" />
              <div className="mt-2">
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                  placeholder="Comments..." />
              </div>
            </div>

            {/* Item 7: Service Report File Available */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">7. Service Report File Available</div>
              <CheckboxGroup
                options={[
                  { id: 'report-yes', label: 'Yes' },
                  { id: 'report-no', label: 'No' },
                ]}
                type="radio"
                name="service-report"
              />
              <div className="mt-2">
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                  placeholder="Comments..." />
              </div>
            </div>

            {/* Item 8: Service Recommendation Followed */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">8. Service Recommendation Followed</div>
              <CheckboxGroup
                options={[
                  { id: 'recommendation-yes', label: 'Yes' },
                  { id: 'recommendation-no', label: 'No' },
                ]}
                type="radio"
                name="recommendation"
              />
              <div className="mt-2">
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                  placeholder="Comments..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Items 9-13 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-list"></i>
            <span>EQUIPMENT INSPECTION CHECKLIST - ITEMS 9-13</span>
          </div>
          <div className="space-y-4">
            {/* Item 9: Pressure Cap */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">9. Pressure Cap</div>
              <CheckboxGroup
                options={[
                  { id: 'cap-cat', label: 'CAT Brand' },
                  { id: 'cap-non-cat', label: 'Non CAT Brand' },
                  { id: 'cap-ok', label: 'OK' },
                  { id: 'cap-defective', label: 'Defective' },
                ]}
                type="checkbox"
                name="pressure-cap"
              />
              <div className="mt-2">
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Comment:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                  placeholder="Comments..."
                />
              </div>
            </div>

            {/* Item 10: Cat Lube Oil S.O.S Test */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">10. Cat Lube Oil S.O.S Test</div>
              <CheckboxGroup
                options={[
                  { id: 'sos-yes', label: 'Yes' },
                  { id: 'sos-no', label: 'No' },
                ]}
                type="radio"
                name="sos-test"
              />
            </div>

            {/* Item 11: Every 500/250 Hours Lube Oil S.O.S Test */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">11. Every 500/250 Hours Lube Oil S.O.S Test</div>
              <CheckboxGroup
                options={[
                  { id: 'sos-regularly', label: 'Regularly' },
                  { id: 'sos-irregularly', label: 'Irregularly' },
                  { id: 'sos-no', label: 'No' },
                ]}
                type="checkbox"
                name="sos-frequency"
              />
            </div>

            {/* Item 12: Suggest for Every 500/250 Hours Lube Oil S.O.S Test */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">12. Suggest for Every 500/250 Hours Lube Oil S.O.S Test</div>
              <CheckboxGroup
                options={[
                  { id: 'suggest-yes', label: 'Yes' },
                  { id: 'suggest-no', label: 'No' },
                ]}
                type="radio"
                name="sos-suggest" />
            </div>

            {/* Item 13: Site Information */}
            <div className="border-b border-gray-200 pb-3">
              <div className="font-bold text-[#005288] mb-2 text-[11px] sm:text-[12px]">13. Site Information by</div>
              <CheckboxGroup
                options={[
                  { id: 'site-plant', label: 'Plant In charge' },
                  { id: 'site-operator', label: 'Operator' },
                  { id: 'site-engineer', label: 'Engineer' },
                ]}
                type="checkbox"
                name="site-info" />
              <div className="mt-3 space-y-3">
                <div>
                  <div className="font-semibold text-[10px] sm:text-[11px] mb-1.5">a) Any Abnormality</div>
                  <CheckboxGroup
                    options={[
                      { id: 'abnormality-yes', label: 'Yes' },
                      { id: 'abnormality-no', label: 'No' },
                    ]}
                    type="radio"
                    name="abnormality" />
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none mt-2"
                    placeholder="Comment..." />
                </div>
                <div>
                  <div className="font-semibold text-[10px] sm:text-[11px] mb-1.5">b) Load Pat Capacity</div>
                  <div className="grid grid-cols-2 gap-2.5 mb-2">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] mb-1.5">Minimum Load (Kw)</label>
                      <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded text-[13px] h-10" />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-[11px] mb-1.5">Maximum Load (Kw)</label>
                      <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded text-[13px] h-10" />
                    </div>
                  </div>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none"
                    placeholder="Comment..." />
                </div>
                <div>
                  <div className="font-semibold text-[10px] sm:text-[11px] mb-1.5">c) Cogenaration</div>
                  <CheckboxGroup
                    options={[
                      { id: 'cogen-yes', label: 'Yes' },
                      { id: 'cogen-no', label: 'No' },
                    ]}
                    type="radio"
                    name="cogenaration"
                  />
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none mt-2"
                    placeholder="Comment..."
                  />
                </div>
                <div>
                  <div className="font-semibold text-[10px] sm:text-[11px] mb-1.5">d) Engine Room Condition</div>
                  <CheckboxGroup
                    options={[
                      { id: 'room-good', label: 'Good' },
                      { id: 'room-normal', label: 'Normal' },
                      { id: 'room-not-good', label: 'Not Good' },
                    ]}
                    type="checkbox"
                    name="room-condition" />
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded text-[13px] min-h-[70px] resize-none mt-2"
                    placeholder="Comment..." />
                </div>
                <div>
                  <div className="font-semibold text-[10px] sm:text-[11px] mb-1.5">e) Alternator Bearing Temperature</div>
                  <CheckboxGroup
                    options={[
                      { id: 'bearing-nde', label: 'N.D.E' },
                      { id: 'bearing-de', label: 'D.E' },
                      { id: 'bearing-na', label: 'N/A' },
                    ]}
                    type="checkbox"
                    name="bearing-temp"
                  />
                </div>
              </div>
            </div>
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
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Signature of Service Engineer</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-2 min-h-[70px] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-gray-500">Signature Area</span>
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold mb-1.5">Signature of Customer Representative</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-2 min-h-[70px] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-gray-500">Signature Area</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
