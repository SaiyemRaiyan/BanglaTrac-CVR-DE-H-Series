'use client';

import { useState } from 'react';
import TimeTable from '@/components/TimeTable';
import CheckboxGroup from '@/components/CheckboxGroup';

interface Page1Props {
  currentSection: number;
}

const TOTAL_SECTIONS = 6;

export default function Page1({ currentSection }: Page1Props) {
  const [timeRows, setTimeRows] = useState([
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
  ]);
  
  const [workItemStatus, setWorkItemStatus] = useState<{ [key: number]: { status: 'ok' | 'notok' | null; comment: string } }>({});

  const handleTimeRowChange = (index: number, field: string, value: string) => {
    const newRows = [...timeRows];
    newRows[index] = { ...newRows[index], [field]: value };
    setTimeRows(newRows);
  };
  
  const handleWorkItemStatusChange = (itemId: number, status: 'ok' | 'notok' | null) => {
    setWorkItemStatus((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId] || { comment: '' }, status }
    }));
  };
  
  const handleWorkItemCommentChange = (itemId: number, comment: string) => {
    setWorkItemStatus((prev) => ({
      ...prev,
      [itemId]: { ...prev[itemId] || { status: null }, comment }
    }));
  };

  // Define types for options
  type OptionType = {
    id: string;
    label: string;
    checked?: boolean;
    hasInput?: boolean;
    inputPlaceholder?: string;
    hasDoubleInput?: boolean;
    inputPlaceholder1?: string;
    inputPlaceholder2?: string;
  };

  type SubSectionType = {
    title: string;
    options: OptionType[];
  };

  type WorkItemType = {
    id: number;
    title: string;
    options: OptionType[];
    subSections?: SubSectionType[];
    hasComments?: boolean;
  };

  // Define work items data for items 1-16
  const workItems: WorkItemType[] = [
    {
      id: 1,
      title: "Battery Electrolyte Level",
      options: [
        { id: "item1-check", label: "Check", checked: true },
        { id: "item1-ok", label: "Ok" },
        { id: "item1-add", label: "Add", hasInput: true, inputPlaceholder: "Ltr" }
      ]
    },
    {
      id: 2,
      title: "Engine Oil Level",
      options: [
        { id: "item2-check", label: "Check", checked: true },
        { id: "item2-ok", label: "Ok" },
        { id: "item2-add", label: "Add", hasInput: true, inputPlaceholder: "Ltr" }
      ]
    },
    {
      id: 3,
      title: "Water Quality",
      options: [
        { id: "item3-distilled", label: "Distilled / De min.", checked: true },
        { id: "item3-treated", label: "Treated" },
        { id: "item3-raw", label: "Raw" }
      ],
      subSections: [
        {
          title: "Cooling System: Coolant Level",
          options: [
            { id: "item3-coolant-check", label: "Check", checked: true },
            { id: "item3-coolant-ok", label: "Ok" },
            { id: "item3-coolant-add", label: "Add", hasInput: true, inputPlaceholder: "Ltr" }
          ]
        },
        {
          title: "SCA Test (J/W)",
          options: [
            { id: "item3-scajw-ppm", label: "PPM:", hasInput: true, inputPlaceholder: "PPM" },
            { id: "item3-scajw-ok", label: "Ok", checked: true },
            { id: "item3-scajw-notok", label: "Not Ok" },
            { id: "item3-scajw-add", label: "Add", hasInput: true, inputPlaceholder: "Ltr" }
          ]
        },
        {
          title: "SCA Test (A/C)",
          options: [
            { id: "item3-scaac-ppm", label: "PPM:", hasInput: true, inputPlaceholder: "PPM" },
            { id: "item3-scaac-ok", label: "Ok", checked: true },
            { id: "item3-scaac-notok", label: "Not Ok" },
            { id: "item3-scaac-add", label: "Add", hasInput: true, inputPlaceholder: "Ltr" }
          ]
        }
      ],
      hasComments: true
    },
    {
      id: 4,
      title: "Air/Fuel Ratio (O2 Level)",
      options: [
        { id: "item4-check", label: "Check/Adjust", checked: true },
        { id: "item4-ok", label: "Ok", hasInput: true, inputPlaceholder: "%" },
        { id: "item4-adjusted", label: "Adjusted", hasDoubleInput: true, inputPlaceholder1: "%", inputPlaceholder2: "%" }
      ]
    },
    {
      id: 5,
      title: "After Cooler Condensation",
      options: [
        { id: "item5-drain", label: "Drain", checked: true },
        { id: "item5-water", label: "Water Found" },
        { id: "item5-nowater", label: "Water Not Found" }
      ]
    },
    {
      id: 6,
      title: "Control Panel",
      options: [
        { id: "item6-inspect", label: "Inspect", checked: true },
        { id: "item6-cleaned", label: "Cleaned" },
        { id: "item6-checked", label: "Connection Checked" },
        { id: "item6-tightened", label: "Tightened" }
      ],
      hasComments: true
    },
    {
      id: 7,
      title: "Inlet Air System (Air Filter)",
      options: [
        { id: "item7-inspect", label: "Inspect", checked: true },
        { id: "item7-ok", label: "Ok" },
        { id: "item7-cleaned", label: "Cleaned" },
        { id: "item7-changed", label: "Changed" }
      ]
    },
    {
      id: 8,
      title: "Air Cleaner Service Indicator",
      options: [
        { id: "item8-inspect", label: "Inspect", checked: true },
        { id: "item8-checked", label: "Checked" },
        { id: "item8-reset", label: "Reset" },
        { id: "item8-changed", label: "Changed" }
      ]
    },
    {
      id: 9,
      title: "Charging Alternator & Wall Charger",
      options: [
        { id: "item9-inspect", label: "Inspect", checked: true },
        { id: "item9-worked", label: "Worked Properly" },
        { id: "item9-notworked", label: "Not Worked Properly" },
        { id: "item9-changed", label: "Changed" }
      ]
    },
    {
      id: 10,
      title: "Charging Alternator Belt",
      options: [
        { id: "item10-inspect", label: "Inspect / Adjust / Repl.", checked: true },
        { id: "item10-ok", label: "Ok" },
        { id: "item10-tightened", label: "Tightened" },
        { id: "item10-changed", label: "Changed" }
      ]
    },
    {
      id: 11,
      title: "Crankshaft Vibration Damper",
      options: [
        { id: "item11-inspect", label: "Inspect/Replace", checked: true },
        { id: "item11-ok", label: "Ok" },
        { id: "item11-leakage", label: "Leakage Repair" },
        { id: "item11-replace", label: "Replace" }
      ]
    },
    {
      id: 12,
      title: "Exhaust Pipining",
      options: [
        { id: "item12-inspect", label: "Inspect", checked: true },
        { id: "item12-ok", label: "Ok" },
        { id: "item12-notok", label: "Not Ok" }
      ],
      hasComments: true
    },
    {
      id: 13,
      title: "Engine",
      options: [
        { id: "item13-clean", label: "Clean", checked: true },
        { id: "item13-yes", label: "Yes" },
        { id: "item13-no", label: "No" }
      ],
      hasComments: true
    },
    {
      id: 14,
      title: "Engine Crankcase Breather",
      options: [
        { id: "item14-clean", label: "Clean", checked: true },
        { id: "item14-yes", label: "Yes" },
        { id: "item14-no", label: "No" }
      ],
      hasComments: true
    },
    {
      id: 15,
      title: "Engine Oil & Oil Filter",
      options: [
        { id: "item15-change", label: "Change", checked: true },
        { id: "item15-yes", label: "Yes" },
        { id: "item15-no", label: "No" }
      ],
      hasComments: true
    },
    {
      id: 16,
      title: "Hydraulic Oil & Oil Filter (G-3516B)",
      options: [
        { id: "item16-change", label: "Change", checked: true },
        { id: "item16-yes", label: "Yes" },
        { id: "item16-no", label: "No" }
      ],
      hasComments: true
    }
  ];

  // Render a work item component
  const renderWorkItem = (item: typeof workItems[0]) => {
    const status = workItemStatus[item.id];
    
    return (
    <div key={item.id} className="work-item bg-white border border-[#cbd5e0] rounded p-2 mb-3 transition-all hover:border-[#005288] hover:shadow-sm min-h-[140px] flex flex-col">
      <div className="work-item-header flex items-center gap-1.5 mb-1.5 pb-1 border-b border-[#cbd5e0]">
        <div className="work-item-number bg-gradient-to-br from-[#005288] to-[#1a7fba] text-white w-5 h-5 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0">
          {item.id}
        </div>
        <div className="work-item-title font-bold text-[#1a202c] text-xs flex-1 leading-tight">
          {item.title}
        </div>
      </div>
      
      {/* Ok/Not Ok Toggle */}
      <div className="mb-2 flex gap-1.5 bg-[#f0f8ff] p-1.5 rounded border border-[#005288]/20">
        <button
          onClick={() => handleWorkItemStatusChange(item.id, 'ok')}
          className={`flex-1 px-2 py-1 rounded text-xs font-bold transition-all ${
            status?.status === 'ok'
              ? 'bg-green-500 text-white'
              : 'bg-white text-green-600 border border-green-300 hover:bg-green-50'
          }`}
        >
          OK
        </button>
        <button
          onClick={() => handleWorkItemStatusChange(item.id, 'notok')}
          className={`flex-1 px-2 py-1 rounded text-xs font-bold transition-all ${
            status?.status === 'notok'
              ? 'bg-red-500 text-white'
              : 'bg-white text-red-600 border border-red-300 hover:bg-red-50'
          }`}
        >
          NOT OK
        </button>
      </div>
      
      {/* Show Add section when Not Ok is selected */}
      {status?.status === 'notok' && (
        <div className="mb-2 bg-[#fff5f5] border border-red-300 rounded p-1.5">
          <label className="block text-xs font-bold text-red-600 mb-1">ADD DETAILS:</label>
          <input
            type="text"
            placeholder="Add remarks/items..."
            className="w-full p-1 border border-red-300 rounded text-xs focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-300"
            value={status?.comment || ''}
            onChange={(e) => handleWorkItemCommentChange(item.id, e.target.value)}
          />
        </div>
      )}
      
      <div className="work-item-options grid grid-cols-2 sm:grid-cols-4 gap-1 mt-1.5 flex-1">
        {item.options.map((option) => (
          <div key={option.id} className="work-option flex items-center gap-1 p-1 bg-[#f8fafc] rounded text-xs font-semibold text-[#1a202c] min-h-6 hover:border hover:border-[#005288] hover:bg-[#e8f4fc] cursor-pointer">
            <input
              type="checkbox"
              id={option.id}
              defaultChecked={option.checked && option.label !== 'Check'}
              className="w-3 h-3 accent-[#005288] cursor-pointer flex-shrink-0"
            />
            <label htmlFor={option.id} className="cursor-pointer flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-xs">
              {option.label}
              {option.hasInput && (
                <input
                  type="text"
                  style={{
                    width: '40px',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    marginLeft: '2px',
                    fontSize: '9px'
                  }}
                  placeholder={option.inputPlaceholder}
                  className="inline-block bg-transparent focus:outline-none"
                />
              )}
              {option.hasDoubleInput === true && (
                <>
                  (<input
                    type="text"
                    style={{
                      width: '30px',
                      border: 'none',
                      borderBottom: '1px solid #ccc',
                      fontSize: '9px'
                    }}
                    placeholder={option.inputPlaceholder1}
                    className="inline-block bg-transparent focus:outline-none"
                  />
                  /
                  <input
                    type="text"
                    style={{
                      width: '30px',
                      border: 'none',
                      borderBottom: '1px solid #ccc',
                      fontSize: '9px'
                    }}
                    placeholder={option.inputPlaceholder2}
                    className="inline-block bg-transparent focus:outline-none"
                  />)
                </>
              )}
            </label>
          </div>
        ))}
      </div>
      
      {item.subSections && item.subSections.map((subSection, index) => (
        <div key={index} className="mt-2">
          <div className="work-item-title text-xs mb-1 font-semibold">
            {subSection.title}
          </div>
          <div className="work-item-options grid grid-cols-2 sm:grid-cols-4 gap-1">
            {subSection.options.map((option) => (
              <div key={option.id} className="work-option flex items-center gap-1 p-1 bg-[#f8fafc] rounded text-xs font-semibold text-[#1a202c] min-h-6 hover:border hover:border-[#005288] hover:bg-[#e8f4fc] cursor-pointer">
                {option.hasInput === true ? (
                  <>
                    <label className="cursor-pointer flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-xs">
                      {option.label}
                      <input
                        type="text"
                        style={{
                          width: '40px',
                          border: 'none',
                          borderBottom: '1px solid #ccc',
                          marginLeft: '2px',
                          fontSize: '9px'
                        }}
                        placeholder={option.inputPlaceholder}
                        className="inline-block bg-transparent focus:outline-none"
                      />
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      id={option.id}
                      defaultChecked={option.checked && option.label !== 'Check'}
                      className="w-3 h-3 accent-[#005288] cursor-pointer flex-shrink-0"
                    />
                    <label htmlFor={option.id} className="cursor-pointer flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-xs">
                      {option.label}
                    </label>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {item.hasComments && (
        <div className="comments-box mt-1.5 p-1 bg-[#f8fafc] rounded border border-[#cbd5e0]">
          <textarea
            placeholder="Comments:"
            className="w-full border-none bg-transparent text-xs p-0.5 resize-vertical min-h-[40px] max-h-[80px] font-inherit focus:outline-none"
            rows={2}
          />
        </div>
      )}
    </div>
  );
  };

  return (
    <>
      {/* Section 1: Visit Information */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="flex justify-between items-center mb-3 pb-2 border-b-2 border-[#ffcd00]">
          <div className="font-extrabold text-[#005288] text-base sm:text-lg flex items-center gap-2.5">
            <span>SERVICE COPY</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-bold text-[#1a202c]">SL No.:</span>
            <input
              type="text"
              className="w-20 sm:w-24 p-2 border border-[#cbd5e0] rounded text-sm sm:text-base font-medium h-10 sm:h-10 touch-manipulation"
              placeholder="16751"
            />
          </div>
        </div>

        <div className="form-card">
          <div className="form-section-title">
            <i className="fas fa-calendar-alt"></i>
            <span>VISIT INFORMATION</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <div>
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                DATE OF VISIT
              </label>
              <input
                type="date"
                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                MCO NUMBER
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                placeholder="MCO-XXXXX"
              />
            </div>
            <div>
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                WORK ORDER NO
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                placeholder="WO-XXXXX"
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                O&M ENGINEER&apos;S NAME
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="Engineer 1"
                />
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="Engineer 2"
                />
                <input
                  type="text"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="Engineer 3"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                TOTAL PERSON(S)
              </label>
              <input
                type="number"
                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                defaultValue="1"
                min="1"
              />
            </div>
            <div>
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                CONCERN PSSE
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                placeholder="Concern details"
              />
            </div>
            <div>
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                CUSTOMER&apos;S NAME
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                placeholder="Customer Name"
              />
            </div>
            <div>
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                LOCATION
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                placeholder="Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Revenue Type & Job Details */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="space-y-3">
          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-file-invoice-dollar"></i>
              <span>REVENUE TYPE: (√)</span>
            </div>
            <CheckboxGroup
              options={[
                { id: 'revenue-sales-contract', label: 'SALES CONTRACT' },
                { id: 'revenue-free-maintenance', label: 'FREE MAINTENANCE' },
                { id: 'revenue-policy-allowance', label: 'POLICY ALLOWANCE' },
                { id: 'revenue-sales-promotion', label: 'SALES PROMOTION' },
              ]}
              type="checkbox"
              name="revenue-type"
            />
            <div className="mt-2">
              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                BILL TO:
              </label>
              <CheckboxGroup
                options={[
                  { id: 'bill-customer', label: 'Customer' },
                ]}
                type="checkbox"
                name="bill-to"
              />
            </div>
          </div>

          <div className="form-card">
            <div className="form-section-title">
              <i className="fas fa-clipboard-list"></i>
              <span>JOB DETAILS</span>
            </div>
            <TimeTable rows={timeRows} onRowChange={handleTimeRowChange} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2">
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                  TRAVEL TIME [Hrs]
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="0.0"
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                  WORKING TIME [Hrs]
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="0.0"
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                  TOTAL KM
                </label>
                <input
                  type="number"
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                  TOTAL TIME [Hrs]
                </label>
                <input
                  type="number"
                  step="0.1"
                  readOnly
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 bg-[#f8fafc] transition-all touch-manipulation"
                  placeholder="0.0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Customer Complain */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card h-full">
<div className="form-section-title">
            <i className="fas fa-exclamation-circle"></i>
            <span>CUSTOMER COMPLAIN:</span>
            </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2.5">
              <span className="text-sm font-bold text-[#1a202c]">1)</span>
              <input
                type="text"
                className="flex-1 p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                placeholder="Scheduled Maintenance."
                defaultValue="Scheduled Maintenance."
              />
            </div>
            <div className="text-xs sm:text-sm text-[#4a5568] space-y-1 pl-4">
              <p>* Distilled or deminaralized water along with 4.5% SCA must to use in closed circuit of J/W & A/C.</p>
              <p>*S.O.S Test should be performed at every 500 hrs. for the better performance & longibity of Engine component.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Unit Operation Data */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card">
<div className="form-section-title">
            <i className="fas fa-cogs"></i>
            <span>UNIT OPERATION DATA</span>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              { label: 'ENGINE MODEL', type: 'text', placeholder: 'Model' },
              { label: 'SERIAL NO.', type: 'text', placeholder: 'Serial No' },
              { label: 'ARR. NO.', type: 'text', placeholder: 'ARR No' },
              { label: 'OIL BRAND', type: 'text', placeholder: 'Oil Brand' },
              { label: 'SMU', type: 'text', placeholder: 'SMU' },
              { label: 'LOAD (KW)', type: 'number', placeholder: 'KW' },
              { label: 'MANIFOLD TEMP.', type: 'text', placeholder: 'Temp' },
              { label: 'J/W TEMP.', type: 'text', placeholder: 'Temp' },
              { label: 'RPM', type: 'number', placeholder: 'RPM' },
              { label: 'FREQ.', type: 'text', placeholder: 'Freq' },
              { label: 'VOLTAGE', type: 'text', placeholder: 'Voltage' },
              { label: 'OIL PRESSURE', type: 'text', placeholder: 'Pressure' },
            ].map((field) => (
              <div key={field.label}>
                <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                  {field.label}
                </label>
                <input
                  type={field.type as 'text' | 'number'}
                  className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Work Performed Items 1-8 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card h-full">
<div className="form-section-title">
            <i className="fas fa-tasks"></i>
            <span>DETAILS WORK PERFORMED (✓) - ITEMS 1-8</span>
            </div>
          <div className="work-items-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
            {workItems.slice(0, 8).map(renderWorkItem)}
          </div>
        </div>
      </div>

      {/* Section 6: Work Performed Items 9-16 */}
      <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / TOTAL_SECTIONS}%` }}>
        <div className="form-card h-full">
<div className="form-section-title">
            <i className="fas fa-tasks"></i>
            <span>DETAILS WORK PERFORMED (✓) - ITEMS 9-16</span>
            </div>
          <div className="work-items-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
            {workItems.slice(8, 16).map(renderWorkItem)}
          </div>
        </div>
      </div>
    </>
  );
}
