'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';
import DataTable from '@/components/DataTable';
import TimeTable from '@/components/TimeTable';
import CylinderGrid from '@/components/CylinderGrid';
import CheckboxGroup from '@/components/CheckboxGroup';
import FormButtons from '@/components/FormButtons';

export default function TSTGasForm() {
  // Top-level page navigation (Page 1 vs Page 2)
  const [currentPage, setCurrentPage] = useState(0);
  
  // Section navigation within Page 1
  const [currentSectionPage1, setCurrentSectionPage1] = useState(0);
  const page1Sections = [
    { id: 'visit-info', label: 'VISIT INFO', icon: 'fa-calendar-alt' },
    { id: 'job-details', label: 'JOB DETAILS', icon: 'fa-clipboard-list' },
    { id: 'equipment', label: 'EQUIPMENT', icon: 'fa-cogs' },
    { id: 'cylinder-temp', label: 'CYLINDER TEMP', icon: 'fa-thermometer-half' },
    { id: 'compression', label: 'COMPRESSION', icon: 'fa-compress' },
    { id: 'measurements', label: 'MEASUREMENTS', icon: 'fa-tasks' },
  ];
  
  // Section navigation within Page 2
  const [currentSectionPage2, setCurrentSectionPage2] = useState(0);
  const page2Sections = [
    { id: 'work-performed', label: 'WORK PERFORMED', icon: 'fa-file-alt' },
    { id: 'spare-parts', label: 'SPARE PARTS', icon: 'fa-tools' },
    { id: 'results', label: 'RESULTS', icon: 'fa-check-circle' },
    { id: 'customer-comments', label: 'CUSTOMER COMMENTS', icon: 'fa-comments' },
    { id: 'engineer-section', label: 'ENGINEER SECTION', icon: 'fa-user-tie' },
  ];

  const [timeRows, setTimeRows] = useState([
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
    { timeStart: '', date: new Date().toISOString().split('T')[0], description: '', timeStop: '', hours: '', engineer: '' },
  ]);

  const handleTimeRowChange = (index: number, field: string, value: string) => {
    const newRows = [...timeRows];
    newRows[index] = { ...newRows[index], [field]: value };
    setTimeRows(newRows);
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < 2) {
      setCurrentPage(pageIndex);
      // Reset section when switching pages
      if (pageIndex === 0) {
        setCurrentSectionPage1(0);
      } else {
        setCurrentSectionPage2(0);
      }
    }
  };

  const goToSectionPage1 = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < page1Sections.length) {
      setCurrentSectionPage1(sectionIndex);
    }
  };

  const goToSectionPage2 = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < page2Sections.length) {
      setCurrentSectionPage2(sectionIndex);
    }
  };

  const handlePrevSection = () => {
    if (currentPage === 0) {
      goToSectionPage1(currentSectionPage1 - 1);
    } else {
      goToSectionPage2(currentSectionPage2 - 1);
    }
  };

  const handleNextSection = () => {
    if (currentPage === 0) {
      goToSectionPage1(currentSectionPage1 + 1);
    } else {
      goToSectionPage2(currentSectionPage2 + 1);
    }
  };

  const canGoPrev = currentPage === 0 
    ? currentSectionPage1 > 0 
    : currentSectionPage2 > 0;
  
  const canGoNext = currentPage === 0
    ? currentSectionPage1 < page1Sections.length - 1
    : currentSectionPage2 < page2Sections.length - 1;

  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset the entire form? All entered data will be lost.')) {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-0 overflow-hidden">
      <div className="form-wrapper-tst form-page-bg-tst w-full max-w-full mx-auto min-h-screen flex flex-col shadow-xl">
        {/* Form Type Header */}
        <div className="sticky top-0 z-[1000] bg-gradient-to-r from-[#0369a1] via-[#0d9488] to-[#0f766e] text-white px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-center border-b-2 border-[#ffcd00] shadow-lg">
          <div className="flex items-center gap-2">
            <i className="fas fa-file-alt text-xs sm:text-sm"></i>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">TST Gas Checklist</span>
          </div>
        </div>
        {/* Top-Level Navigation Tabs (Page 1 vs Page 2) */}
        <div className="sticky top-[36px] sm:top-[40px] z-[999] bg-gradient-to-r from-[#e8f4fc] to-[#e0f0ff] px-2 sm:px-4 border-b-2 border-[#005288] flex-shrink-0">
          <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
            <button
              onClick={() => goToPage(0)}
              className={`px-2 py-2.5 sm:py-2 bg-transparent font-bold text-sm sm:text-base cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[50px] sm:min-w-[60px] justify-center touch-manipulation ${
                currentPage === 0
                  ? 'bg-white text-[#005288] border-2 border-[#ffcd00] border-b-2 border-b-[#ffcd00] rounded-t-lg'
                  : 'text-[#1a202c] border-2 border-transparent border-b-2 border-b-transparent active:bg-[rgba(255,255,255,0.8)]'
              }`}
            >
              <i className={`fas fa-file-alt text-sm sm:text-base ${currentPage === 0 ? 'text-[#ffcd00]' : 'text-[#005288]'}`}></i>
              <span>1</span>
            </button>
            <button
              onClick={() => goToPage(1)}
              className={`px-2 py-2.5 sm:py-2 bg-transparent font-bold text-sm sm:text-base cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[50px] sm:min-w-[60px] justify-center touch-manipulation ${
                currentPage === 1
                  ? 'bg-white text-[#005288] border-2 border-[#ffcd00] border-b-2 border-b-[#ffcd00] rounded-t-lg'
                  : 'text-[#1a202c] border-2 border-transparent border-b-2 border-b-transparent active:bg-[rgba(255,255,255,0.8)]'
              }`}
            >
              <i className={`fas fa-file-alt text-sm sm:text-base ${currentPage === 1 ? 'text-[#ffcd00]' : 'text-[#005288]'}`}></i>
              <span>2</span>
            </button>
          </div>
        </div>

        {/* Section-Level Navigation Tabs (Within Each Page) */}
        {currentPage === 0 && (
          <div className="sticky top-[82px] sm:top-[88px] z-[998] bg-white px-2 sm:px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
            <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
              {page1Sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => goToSectionPage1(index)}
                  className={`px-2 py-2 sm:py-1.5 bg-transparent font-semibold text-xs sm:text-sm cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[85px] sm:min-w-[100px] justify-center touch-manipulation ${
                    currentSectionPage1 === index
                      ? 'text-[#005288] border-2 border-[#005288] border-b-2 border-b-[#005288] bg-[#e8f4fc] rounded-t-md'
                      : 'text-gray-600 border-2 border-transparent border-b-2 border-b-transparent active:bg-gray-50'
                  }`}
                >
                  <i className={`fas ${section.icon} text-xs sm:text-sm`}></i>
                  <span className="hidden xs:inline">{section.label}</span>
                  <span className="xs:hidden text-[10px]">{section.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentPage === 1 && (
          <div className="sticky top-[82px] sm:top-[88px] z-[998] bg-white px-2 sm:px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
            <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
              {page2Sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => goToSectionPage2(index)}
                  className={`px-2 py-2 sm:py-1.5 bg-transparent font-semibold text-xs sm:text-sm cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[85px] sm:min-w-[100px] justify-center touch-manipulation ${
                    currentSectionPage2 === index
                      ? 'text-[#005288] border-2 border-[#005288] border-b-2 border-b-[#005288] bg-[#e8f4fc] rounded-t-md'
                      : 'text-gray-600 border-2 border-transparent border-b-2 border-b-transparent active:bg-gray-50'
                  }`}
                >
                  <i className={`fas ${section.icon} text-xs sm:text-sm`}></i>
                  <span className="hidden xs:inline">{section.label}</span>
                  <span className="xs:hidden text-[10px]">{section.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pages Container - flex-1 min-h-0 so content + bottom bar fit without extra gap (WS Overhauling style) */}
        <div className="w-full overflow-y-auto overflow-x-hidden relative flex-1 min-h-0">
          {/* PAGE 1: GENERAL INFORMATION */}
          {currentPage === 0 && (
            <div className="w-full p-0 bg-white relative overflow-y-auto">
              <BackButton />

              {/* Section Content Container - Horizontal Scroll */}
              <div className="w-full overflow-hidden relative h-full">
                <div
                  className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
                  style={{
                    width: `${page1Sections.length * 100}%`,
                    transform: `translateX(-${currentSectionPage1 * (100 / page1Sections.length)}%)`,
                  }}
                >
                  {/* Section 1: Visit Information & Service Engineer */}
                  <div className="w-full p-2.5 overflow-y-auto h-full" style={{ width: `${100 / page1Sections.length}%` }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 h-full">
                      {/* Left Column - Visit Information */}
                      <div className="flex flex-col h-full">
                        <div className="form-card relative overflow-hidden h-full">
                          <div className="form-section-title">
                            <i className="fas fa-calendar-alt"></i>
                            <span>VISIT INFORMATION</span>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2.5 mb-2.5">
                            <div className="flex-1">
                              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                                DATE OF VISIT
                              </label>
                              <input
                                type="date"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                                defaultValue={new Date().toISOString().split('T')[0]}
                              />
                            </div>
                            <div className="flex-1">
                              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                                MCO NUMBER
                              </label>
                              <input
                                type="text"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                                placeholder="MCO-XXXXX"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2.5 mb-2.5">
                            <div className="flex-1">
                              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                                WORK ORDER NO.
                              </label>
                              <input
                                type="text"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                                placeholder="WO-XXXXX"
                              />
                            </div>
                            <div className="flex-1">
                              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                                CONCERN PSSE
                              </label>
                              <input
                                type="text"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                                placeholder="Concern details"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2.5 mb-0">
                            <div className="flex-1">
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
                            <div className="flex-1">
                              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                                SL. NO.
                              </label>
                              <input
                                type="text"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                                placeholder="Serial Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Service Engineer */}
                      <div className="flex flex-col h-full">
                        <div className="form-card relative overflow-hidden h-full">
                          <div className="form-section-title">
                            <i className="fas fa-users"></i>
                            <span>SERVICE ENGINEER&apos;S NAME</span>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2.5 mb-2.5">
                            <div className="flex-1">
                              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                                ENGINEER 1
                              </label>
                              <input
                                type="text"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                                placeholder="Engineer 1"
                              />
                            </div>
                            <div className="flex-1">
                              <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                                ENGINEER 2
                              </label>
                              <input
                                type="text"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                                placeholder="Engineer 2"
                              />
                            </div>
                          </div>
                          <div className="mb-2.5">
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
                  </div>

                  {/* Section 2: Job Details & Customer Complaint */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page1Sections.length}%` }}>
                    <div className="flex flex-col gap-2 h-full">
                      {/* Job Details Section */}
                      <div className="form-card relative overflow-hidden flex-1 flex flex-col h-full">
                        <div className="form-section-title">
                          <i className="fas fa-clipboard-list"></i>
                          <span>JOB DETAILS</span>
                        </div>
                        <div className="flex-1 overflow-auto min-h-0">
                          <TimeTable rows={timeRows} onRowChange={handleTimeRowChange} />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 flex-shrink-0">
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

                        {/* Customer Complaint */}
                        <div className="form-card relative overflow-hidden flex-shrink-0">
                          <div className="form-section-title">
                            <i className="fas fa-exclamation-circle"></i>
                            <span>CUSTOMER COMPLAINT/PROBLEM DESCRIPTION</span>
                          </div>
                          <textarea
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium min-h-[120px] resize-none transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Describe the complaint/problem..."
                          />
                        </div>
                    </div>
                  </div>

                  {/* Section 3: Equipment Operation Data */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page1Sections.length}%` }}>
                    <div className="form-card relative overflow-hidden h-full flex flex-col">
                      <div className="form-section-title">
                        <i className="fas fa-cogs"></i>
                        <span>EQUIPMENT OPERATION DATA</span>
                      </div>
                      <div className="flex-1 overflow-auto space-y-2 min-h-0 w-full">
                        <DataTable
                          headers={['ENGINE MODEL', 'SMU', 'VOLT/FEQ', 'OIL BRAND']}
                          rows={[
                            [
                              { inputType: 'text', placeholder: 'Model' },
                              { inputType: 'text', placeholder: 'SMU' },
                              { inputType: 'text', placeholder: 'Volt/Freq' },
                              { inputType: 'text', placeholder: 'Oil Brand' },
                            ],
                          ]}
                        />
                        <DataTable
                          headers={['SERIAL NO', 'LOAD [KW]', 'RPM', 'MAN TEMP.']}
                          rows={[
                            [
                              { inputType: 'text', placeholder: 'Serial No' },
                              { inputType: 'number', placeholder: 'KW' },
                              { inputType: 'number', placeholder: 'RPM' },
                              { inputType: 'text', placeholder: 'Temp' },
                            ],
                          ]}
                        />
                        <DataTable
                          headers={['ARR NO', 'LOAD AMP', 'OIL PRESSURE', 'J/W TEMP']}
                          rows={[
                            [
                              { inputType: 'text', placeholder: 'ARR No' },
                              { inputType: 'number', placeholder: 'Amp' },
                              { inputType: 'text', placeholder: 'Pressure' },
                              { inputType: 'text', placeholder: 'Temp' },
                            ],
                          ]}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Cylinder Temperature */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page1Sections.length}%` }}>
                    <div className="form-card h-full flex flex-col">
                      <div className="form-section-title">
                        <i className="fas fa-thermometer-half"></i>
                        <span>CYLINDER TEMPERATURE</span>
                      </div>
                      <div className="flex-1 overflow-auto space-y-2 min-h-0 w-full">
                        <CylinderGrid startNumber={1} endNumber={10} label="CYLINDER NUMBER 1-10" />
                        <CylinderGrid startNumber={11} endNumber={20} label="CYLINDER NUMBER 11-20" />
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Compression Test */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page1Sections.length}%` }}>
                    <div className="form-card h-full flex flex-col">
                      <div className="form-section-title">
                        <i className="fas fa-compress"></i>
                        <span>COMPRESSION TEST</span>
                      </div>
                      <div className="flex-shrink-0 mb-2">
                        <div className="text-sm font-bold text-[#1a202c] mb-1.5">MEASURE:</div>
                        <CheckboxGroup
                          options={[
                            { id: 'comp-test-yes', label: 'YES' },
                            { id: 'comp-test-no', label: 'NO' },
                          ]}
                          type="radio"
                          name="compression-test"
                        />
                      </div>
                      <div className="flex-1 overflow-auto space-y-2 min-h-0 w-full">
                        <div className="text-sm font-bold text-[#1a202c] mb-1.5">CYLINDER PRESSURES (PSL/KPA):</div>
                        <CylinderGrid startNumber={1} endNumber={10} label="" unit="PSI" />
                        <CylinderGrid startNumber={11} endNumber={20} label="" unit="PSI" />
                      </div>
                    </div>
                  </div>

                  {/* Section 6: Measurements & Checks */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page1Sections.length}%` }}>
                    <div className="form-card h-full flex flex-col">
                      <div className="form-section-title">
                        <i className="fas fa-tasks"></i>
                        <span>MEASUREMENTS & CHECKS</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            AIR FILTER RESTRICTION
                          </label>
                          <CheckboxGroup
                            options={[
                              { id: 'air-filter-yes', label: 'YES' },
                              { id: 'air-filter-no', label: 'NO' },
                            ]}
                            type="radio"
                            name="air-filter"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            FUEL PRESSURE AFTER PRV:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Pressure"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            TURBO INLET TEMP(°C/°F):
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Temperature"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            INLET TEMP(°C/°F):
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Temperature"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            ENGINE ROOM TEMPERATURE:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Temperature"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            AIR INLET TO ALTERNATOR:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Temperature"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            AIR INLET TO ENGINE:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Temperature"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            ALTERNATOR BEARING TEMPERATURE:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Temperature"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            ALTERNATOR WINDING TEMPERATURE:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Temperature"
                          />
                        </div>
                      </div>
                      <div className="mt-2 flex-shrink-0">
                        <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                          LEAKAGE OF COOLANT, LUBRICANT AND FUEL:
                        </label>
                        <CheckboxGroup
                          options={[
                            { id: 'leakage-yes', label: 'YES' },
                            { id: 'leakage-no', label: 'NO' },
                          ]}
                          type="radio"
                          name="leakage"
                        />
                        <div className="mt-2">
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            IF YES PLEASE MENTION:
                          </label>
                          <textarea
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium min-h-[80px] resize-none transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Describe leakage details..."
                          />
                        </div>
                      </div>
                      <div className="mt-2.5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            ANY VIBRATION:
                          </label>
                          <CheckboxGroup
                            options={[
                              { id: 'vibration-yes', label: 'YES' },
                              { id: 'vibration-no', label: 'NO' },
                            ]}
                            type="radio"
                            name="vibration"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            ENGINE MOUNTING CONDITION:
                          </label>
                          <CheckboxGroup
                            options={[
                              { id: 'mounting-ok', label: 'OK' },
                              { id: 'mounting-not-ok', label: 'NOT OK' },
                            ]}
                            type="radio"
                            name="mounting"
                          />
                        </div>
                      </div>
                      <div className="mt-2 flex-shrink-0">
                        <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                          COMPENSATOR CONDITION OF EXHAUST LINE:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                          placeholder="Condition"
                        />
                      </div>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 flex-shrink-0">
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            FUEL LINE:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Condition"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            COOLANT LINE:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                            placeholder="Condition"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page Footer */}
              <div className="mt-2 text-center text-[#4a5568] text-xs sm:text-sm border-t border-[#cbd5e0] bg-[#e8f4fc] py-1.5 px-2">
                Page 1 of 2
              </div>
            </div>
          )}

          {/* PAGE 2: CUSTOMER COPY */}
          {currentPage === 1 && (
            <div className="w-full p-0 bg-white relative overflow-y-auto">
              <BackButton />

              {/* Section Content Container - Horizontal Scroll */}
              <div className="w-full overflow-hidden relative h-full">
                <div
                  className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
                  style={{
                    width: `${page2Sections.length * 100}%`,
                    transform: `translateX(-${currentSectionPage2 * (100 / page2Sections.length)}%)`,
                  }}
                >
                  {/* Section 1: Work Performed */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page2Sections.length}%` }}>
                    <div className="form-card h-full flex flex-col">
                      <div className="form-section-title">
                        <i className="fas fa-file-alt"></i>
                        <span>DETAILS OF WORK PERFORMED</span>
                      </div>
                      <textarea
                        className="w-full flex-1 p-2.5 border border-[#cbd5e0] rounded text-base font-medium resize-none transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                        placeholder="Describe work performed..."
                      />
                    </div>
                  </div>

                  {/* Section 2: Spare Parts */}
                  <div className="w-full p-2 overflow-y-auto h-full flex flex-col gap-2" style={{ width: `${100 / page2Sections.length}%` }}>
                    <div className="form-card flex-1 flex flex-col">
                      <div className="form-section-title flex-shrink-0">
                        <i className="fas fa-tools"></i>
                        <span>SPARE PARTS USED</span>
                      </div>
                      <textarea
                        className="w-full flex-1 p-2.5 border border-[#cbd5e0] rounded text-base font-medium resize-none transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                        placeholder="List spare parts used..."
                      />
                    </div>
                    <div className="form-card flex-1 flex flex-col">
                      <div className="form-section-title flex-shrink-0">
                        <i className="fas fa-lightbulb"></i>
                        <span>FUTURE WORK/PARTS RECOMMENDATION</span>
                      </div>
                      <textarea
                        className="w-full flex-1 p-2.5 border border-[#cbd5e0] rounded text-base font-medium resize-none transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                        placeholder="Future recommendations..."
                      />
                    </div>
                  </div>

                  {/* Section 3: Results & Revenue */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page2Sections.length}%` }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
                      <div className="form-card h-full flex flex-col">
                        <div className="form-section-title flex-shrink-0">
                          <i className="fas fa-check-circle"></i>
                          <span>RESULTS: (+/-)</span>
                        </div>
                        <CheckboxGroup
                          options={[
                            { id: 'result-completed', label: 'COMPLETED' },
                            { id: 'result-new-problem', label: 'NEW PROBLEM DEVELOPED' },
                            { id: 'result-continued-parts', label: 'CONTINUED a) FOR PARTS' },
                            { id: 'result-continued-customer', label: 'CONTINUED b) FOR CUSTOMER' },
                            { id: 'result-not-solved', label: 'CONTINUED c) NOT YET SOLVED' },
                          ]}
                          type="checkbox"
                          name="results"
                        />
                      </div>

                      <div className="form-card h-full flex flex-col">
                        <div className="form-section-title flex-shrink-0">
                          <i className="fas fa-file-invoice-dollar"></i>
                          <span>REVENUE TYPE: (+/-)</span>
                        </div>
                        <CheckboxGroup
                          options={[
                            { id: 'revenue-warranty', label: 'WARRANTY' },
                            { id: 'revenue-free', label: 'FREE MAINTENANCE' },
                            { id: 'revenue-policy', label: 'POLICY ALLOWANCE' },
                            { id: 'revenue-sales', label: 'SALES PROMOTION' },
                          ]}
                          type="checkbox"
                          name="revenue-type"
                        />
                        <div className="mt-2.5">
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            BILL TO:
                          </label>
                          <CheckboxGroup
                            options={[
                              { id: 'bill-customer', label: 'CUSTOMER' },
                              { id: 'bill-others', label: 'OTHERS' },
                            ]}
                            type="radio"
                            name="bill-to"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Financial Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 flex-shrink-0">
                      <div className="form-card">
                        <div className="form-section-title text-center">
                          <i className="fas fa-money-bill"></i>
                          <span>Bill Amount</span>
                        </div>
                        <input
                          type="number"
                          className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                          placeholder="Amount"
                        />
                      </div>
                      <div className="form-card">
                        <div className="form-section-title text-center">
                          <i className="fas fa-file-invoice"></i>
                          <span>Invoice Number</span>
                        </div>
                        <input
                          type="text"
                          className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                          placeholder="Invoice No"
                        />
                      </div>
                      <div className="form-card">
                        <div className="form-section-title text-center">
                          <i className="fas fa-receipt"></i>
                          <span>Money Receipt No.</span>
                        </div>
                        <input
                          type="text"
                          className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                          placeholder="MR No"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Customer Comments */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page2Sections.length}%` }}>
                    <div className="form-card">
                      <div className="form-section-title">
                        <i className="fas fa-user-edit"></i>
                        <span>TO BE FILLED BY CUSTOMER REPRESENTATIVE</span>
                      </div>
                      <div className="mb-2.5">
                        <div className="text-sm font-bold text-[#1a202c] mb-1.5">CUSTOMER COMMENTS:</div>
                        <p className="text-sm text-[#4a5568] mb-2.5">Respective customer, your comment is very much essential. Please comment</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-2.5">
                          <div>
                            <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                              1ST ARRIVAL/DEPARTURE TIME
                            </label>
                            <div className="space-y-1.5">
                              <input
                                type="date"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 touch-manipulation"
                                placeholder="Date"
                              />
                              <input
                                type="text"
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 touch-manipulation"
                                placeholder="AM/PM"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                              FINAL DEPARTURE
                            </label>
                            <input
                              type="text"
                              className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 touch-manipulation"
                              placeholder="Time"
                            />
                          </div>
                        </div>

                        <div className="mb-2.5">
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            NO. OF PERSONS ATTENDED:
                          </label>
                          <input
                            type="number"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 touch-manipulation"
                            placeholder="Number"
                          />
                        </div>

                        <div className="mb-2.5 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className="text-sm font-bold text-[#1a202c]">1.</span>
                            <span className="text-sm text-[#1a202c] flex-1">Whether Dormitories/Resthouse provided to our Engineers Yes/No</span>
                            <CheckboxGroup
                              options={[
                                { id: 'dorm-yes', label: 'Yes' },
                                { id: 'dorm-no', label: 'No' },
                              ]}
                              type="radio"
                              name="dormitory"
                            />
                            <span className="text-sm text-[#1a202c] ml-1">For no. of Night:</span>
                            <input
                              type="number"
                              className="w-20 p-2 border border-[#cbd5e0] rounded text-sm sm:text-base h-10 sm:h-9 touch-manipulation"
                              placeholder="Nights"
                            />
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-sm font-bold text-[#1a202c]">2.</span>
                            <div className="flex-1">
                              <span className="text-sm text-[#1a202c]">Other Comments: (if required please use reverse side)</span>
                              <textarea
                                className="w-full p-2.5 border border-[#cbd5e0] rounded text-sm sm:text-base font-medium min-h-[80px] mt-1.5 resize-none touch-manipulation"
                                placeholder="Comments..."
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-2.5">
                          <div className="text-sm font-bold text-[#1a202c] mb-1.5">CUSTOMER COMMENTS:</div>
                          <CheckboxGroup
                            options={[
                              { id: 'customer-satisfied', label: 'SATISFIED' },
                              { id: 'customer-unsatisfied', label: 'UNSATISFIED' },
                            ]}
                            type="radio"
                            name="customer-satisfaction"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          <div>
                            <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                              CUSTOMER REPRESENTATIVE NAME
                            </label>
                            <input
                              type="text"
                              className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 touch-manipulation"
                              placeholder="Name"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                              DESIGNATION
                            </label>
                            <input
                              type="text"
                              className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 touch-manipulation"
                              placeholder="Designation"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                              SIGNATURE, SEAL & DATE
                            </label>
                            <input
                              type="text"
                              className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 touch-manipulation"
                              placeholder="Signature"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Engineer Section */}
                  <div className="w-full p-2 overflow-y-auto h-full" style={{ width: `${100 / page2Sections.length}%` }}>
                    <div className="form-card">
                      <div className="form-section-title">
                        <i className="fas fa-user-tie"></i>
                        <span>ENGINEER & MANAGER SECTION</span>
                      </div>
                      <div className="space-y-2.5">
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            CUSTOMER MAINTAIN LOG SHEET:
                          </label>
                          <input
                            type="text"
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium h-11 sm:h-10 touch-manipulation"
                            placeholder="Log sheet details"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            ENGINEER&apos;S SATISFACTION:
                          </label>
                          <CheckboxGroup
                            options={[
                              { id: 'engineer-satisfied-yes', label: 'YES' },
                              { id: 'engineer-satisfied-no', label: 'NO' },
                            ]}
                            type="radio"
                            name="engineer-satisfaction"
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            REASON:
                          </label>
                          <textarea
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium min-h-[80px] resize-none touch-manipulation"
                            placeholder="Reason..."
                          />
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            SIGNATURE OF SERVICE ENGINEER
                          </label>
                          <div className="border-2 border-dashed border-[#cbd5e0] rounded p-2.5 min-h-[80px] flex items-center justify-center">
                            <span className="text-sm text-[#718096]">Signature Area</span>
                          </div>
                        </div>
                        <div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            REVIEWED THE PERFORMANCE,
                          </label>
                          <div className="mb-1.5">
                            <CheckboxGroup
                              options={[
                                { id: 'review-satisfactory', label: 'A) FOUND IT SATISFACTORY' },
                                { id: 'review-unsatisfactory', label: 'B) UNSATISFACTORY' },
                              ]}
                              type="radio"
                              name="review-performance"
                            />
                          </div>
                          <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                            REASON (USE REVERSE FOR DETAIL COMMENTS)
                          </label>
                          <textarea
                            className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium min-h-[80px] resize-none touch-manipulation"
                            placeholder="Reason..."
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          <div>
                            <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                              SIGNATURE OF MANAGER SERVICE ADMIN:
                            </label>
                            <div className="border-2 border-dashed border-[#cbd5e0] rounded p-2.5 min-h-[80px] flex items-center justify-center">
                              <span className="text-sm text-[#718096]">Signature Area</span>
                            </div>
                          </div>
                          <div>
                            <label className="block font-bold text-[#1a202c] mb-1.5 text-sm uppercase tracking-wide">
                              COMMENTS IF ANY
                            </label>
                            <textarea
                              className="w-full p-2.5 border border-[#cbd5e0] rounded text-base font-medium min-h-[80px] resize-none touch-manipulation"
                              placeholder="Comments..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-2 text-center text-[#4a5568] text-xs sm:text-sm border-t border-[#cbd5e0] bg-[#e8f4fc] py-1.5 px-2">
                <div className="font-semibold mb-0.5 hidden sm:block">
                  ORIGINAL COPY: CUSTOMER&apos;S FILE. COPIES: 1. CUSTOMER. 2. GM(PS). 3. BILLING SECTION. 4. ENGINEER&apos;S FILE PS-SCVR0303
                </div>
                <div className="font-semibold mb-0.5 sm:hidden text-xs">
                  ORIGINAL COPY: CUSTOMER&apos;S FILE
                </div>
                <div>Page 2 of 2</div>
              </div>
            </div>
          )}
        </div>

        {/* Floating Navigation Buttons */}
        <button
          onClick={handlePrevSection}
          disabled={!canGoPrev}
          className={`fixed left-2 top-1/2 -translate-y-1/2 z-[1001] w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg transition-all touch-manipulation ${
            !canGoPrev
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
              : 'bg-white text-[#005288] border-2 border-[#005288] active:bg-[#005288] active:text-white active:scale-95 hover:bg-[#005288] hover:text-white hover:scale-110'
          }`}
          title="Previous Section"
        >
          <i className="fas fa-chevron-left text-sm sm:text-xs"></i>
        </button>
        <button
          onClick={handleNextSection}
          disabled={!canGoNext}
          className={`fixed right-2 top-1/2 -translate-y-1/2 z-[1001] w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg transition-all touch-manipulation ${
            !canGoNext
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
              : 'bg-white text-[#005288] border-2 border-[#005288] active:bg-[#005288] active:text-white active:scale-95 hover:bg-[#005288] hover:text-white hover:scale-110'
          }`}
          title="Next Section"
        >
          <i className="fas fa-chevron-right text-sm sm:text-xs"></i>
        </button>

        {/* Bottom bar: Submit/Reset + footer (WS Overhauling style - single bar, no gap) */}
        <div className="sticky bottom-0 z-[1001] border-t-2 border-[#005288] bg-gradient-to-r from-white via-[#f8fafc] to-[#e8f4fc] px-2 sm:px-4 py-2 sm:py-3 shadow-lg flex-shrink-0">
          <div className="flex flex-col gap-2 sm:gap-3">
            <FormButtons onReset={handleReset} onSubmit={handleSubmit} />
            <div className="text-center text-[#4a5568] text-xs sm:text-[10px]">
              <div className="font-semibold hidden sm:block">BANGLA CAT © 2026 | CUSTOMER VISIT RECORD SHEET (TST GAS) | CONFIDENTIAL DOCUMENT</div>
              <div className="font-semibold sm:hidden">BANGLA CAT © 2026 | TST GAS | CONFIDENTIAL</div>
              <div className="mt-0.5">Document ID: CVRS-TSTGAS-001 | Revision: 1.0 | Page <span>{currentPage + 1}</span> of 2 | Section <span>{currentPage === 0 ? currentSectionPage1 + 1 : currentSectionPage2 + 1}</span> of {currentPage === 0 ? page1Sections.length : page2Sections.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
