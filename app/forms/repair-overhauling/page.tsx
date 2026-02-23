'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';
import FormButtons from '@/components/FormButtons';

export default function RepairOverhaulingForm() {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Section navigation within Page 1
  const [currentSectionPage1, setCurrentSectionPage1] = useState(0);
  const page1Sections = [
    { id: 'work-order', label: 'WORK ORDER', icon: 'fa-file-alt' },
    { id: 'service-engineer', label: 'SERVICE ENGINEER', icon: 'fa-user' },
    { id: 'customer-info', label: 'CUSTOMER INFO', icon: 'fa-building' },
    { id: 'time-tracking', label: 'TIME TRACKING', icon: 'fa-clock' },
    { id: 'travel-work', label: 'TRAVEL & WORK TIME', icon: 'fa-car' },
  ];
  
  // Section navigation within Page 2
  const [currentSectionPage2, setCurrentSectionPage2] = useState(0);
  const page2Sections = [
    { id: 'visit-info', label: 'VISIT INFO', icon: 'fa-calendar' },
    { id: 'customer-visit', label: 'CUSTOMER VISIT', icon: 'fa-building' },
    { id: 'engine-data', label: 'ENGINE DATA', icon: 'fa-cogs' },
    { id: 'overhauling-type', label: 'OVERHAULING TYPE', icon: 'fa-tools' },
  ];
  
  // Section navigation within Page 3
  const [currentSectionPage3, setCurrentSectionPage3] = useState(0);
  const page3Sections = [
    { id: 'removal-disassembly', label: 'REMOVAL & DISASSEMBLY', icon: 'fa-hammer' },
    { id: 'assemble-engine', label: 'ASSEMBLE ENGINE', icon: 'fa-cogs' },
    { id: 'in-frame-removal', label: 'IN-FRAME REMOVAL', icon: 'fa-tools' },
    { id: 'in-frame-assembly', label: 'IN-FRAME ASSEMBLY', icon: 'fa-cogs' },
  ];
  
  // Section navigation within Page 4
  const [currentSectionPage4, setCurrentSectionPage4] = useState(0);
  const page4Sections = [
    { id: 'basic-params', label: 'BASIC PARAMS', icon: 'fa-list' },
    { id: 'cylinder-temps', label: 'CYLINDER TEMPS', icon: 'fa-thermometer' },
    { id: 'electrical-params', label: 'ELECTRICAL', icon: 'fa-bolt' },
  ];
  
  // Section navigation within Page 5
  const [currentSectionPage5, setCurrentSectionPage5] = useState(0);
  const page5Sections = [
    { id: 'electrical-data', label: 'ELECTRICAL DATA', icon: 'fa-bolt' },
    { id: 'connecting-rod', label: 'CONNECTING ROD', icon: 'fa-link' },
  ];
  
  // Section navigation within Pages 6-11 (Inspection items)
  const [currentSectionPage6, setCurrentSectionPage6] = useState(0);
  const page6Sections = [
    { id: 'crankshaft', label: 'CRANKSHAFT', icon: 'fa-cogs' },
    { id: 'oil-jet', label: 'OIL JET', icon: 'fa-droplet' },
    { id: 'con-rod-bolt', label: 'CON. ROD BOLT', icon: 'fa-bolt' },
    { id: 'bearing', label: 'BEARING', icon: 'fa-ring' },
    { id: 'cam-lube', label: 'CAM LUBE', icon: 'fa-oil-can' },
  ];

  const [currentSectionPage7, setCurrentSectionPage7] = useState(0);
  const page7Sections = [
    { id: 'piston', label: 'PISTON', icon: 'fa-cogs' },
    { id: 'liner', label: 'LINER', icon: 'fa-scroll' },
    { id: 'spacer-plate', label: 'SPACER PLATE', icon: 'fa-square' },
    { id: 'cyl-head-tight', label: 'CYL HEAD TIGHT', icon: 'fa-bolt' },
    { id: 'lifter', label: 'LIFTER', icon: 'fa-arrow-up' },
  ];

  const [currentSectionPage8, setCurrentSectionPage8] = useState(0);
  const page8Sections = [
    { id: 'cam-cover', label: 'CAM COVER', icon: 'fa-shield' },
    { id: 'exhaust-manifold', label: 'EXHAUST MANIFOLD', icon: 'fa-wind' },
    { id: 'intake-elbow', label: 'INTAKE ELBOW', icon: 'fa-arrow-down' },
    { id: 'channel', label: 'CHANNEL', icon: 'fa-square' },
    { id: 'exhaust-bypass', label: 'EXHAUST BY-PASS', icon: 'fa-random' },
  ];

  const [currentSectionPage9, setCurrentSectionPage9] = useState(0);
  const page9Sections = [
    { id: 'throttle', label: 'THROTTLE', icon: 'fa-gauge' },
    { id: 'roker-arm-left', label: 'ROKER ARM LEFT', icon: 'fa-arm' },
    { id: 'roker-arm-right', label: 'ROKER ARM RIGHT', icon: 'fa-arm' },
    { id: 'bridge', label: 'BRIDGE', icon: 'fa-bridge' },
    { id: 'valve-lash', label: 'VALVE LASH', icon: 'fa-ruler' },
  ];

  const [currentSectionPage10, setCurrentSectionPage10] = useState(0);
  const page10Sections = [
    { id: 'aftercooler', label: 'AFTERCOOLER', icon: 'fa-fan' },
    { id: 'jacket-temp', label: 'JACKET TEMP', icon: 'fa-thermometer' },
    { id: 'water-manifold', label: 'WATER MANIFOLD', icon: 'fa-water' },
    { id: 'jacket-pump', label: 'JACKET PUMP', icon: 'fa-pump' },
    { id: 'aux-pump', label: 'AUX PUMP', icon: 'fa-pump' },
  ];

  const [currentSectionPage11, setCurrentSectionPage11] = useState(0);
  const page11Sections = [
    { id: 'turbocharger', label: 'TURBOCHARGER', icon: 'fa-rocket' },
    { id: 'lube-oil-pump', label: 'LUBE OIL PUMP', icon: 'fa-pump' },
    { id: 'spark-plug', label: 'SPARK PLUG', icon: 'fa-spark' },
    { id: 'transformer', label: 'TRANSFORMER', icon: 'fa-bolt' },
    { id: 'final-check', label: 'FINAL CHECK', icon: 'fa-check-circle' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <Page1 currentSection={currentSectionPage1} />;
      case 1:
        return <Page2 currentSection={currentSectionPage2} />;
      case 2:
        return <Page3 currentSection={currentSectionPage3} />;
      case 3:
        return <Page4 currentSection={currentSectionPage4} />;
      case 4:
        return <Page5 currentSection={currentSectionPage5} />;
      case 5:
        return <Page6 currentSection={currentSectionPage6} />;
      case 6:
        return <Page7 currentSection={currentSectionPage7} />;
      case 7:
        return <Page8 currentSection={currentSectionPage8} />;
      case 8:
        return <Page9 currentSection={currentSectionPage9} />;
      case 9:
        return <Page10 currentSection={currentSectionPage10} />;
      case 10:
        return <Page11 currentSection={currentSectionPage11} />;
      case 11:
        return <Page12 />;
      default:
        return <Page1 currentSection={currentSectionPage1} />;
    }
  };

  const getCurrentSections = () => {
    switch (currentPage) {
      case 0: return page1Sections;
      case 1: return page2Sections;
      case 2: return page3Sections;
      case 3: return page4Sections;
      case 4: return page5Sections;
      case 5: return page6Sections;
      case 6: return page7Sections;
      case 7: return page8Sections;
      case 8: return page9Sections;
      case 9: return page10Sections;
      case 10: return page11Sections;
      case 11: return [];
      default: return [];
    }
  };

  const getCurrentSectionState = () => {
    switch (currentPage) {
      case 0: return [currentSectionPage1, setCurrentSectionPage1];
      case 1: return [currentSectionPage2, setCurrentSectionPage2];
      case 2: return [currentSectionPage3, setCurrentSectionPage3];
      case 3: return [currentSectionPage4, setCurrentSectionPage4];
      case 4: return [currentSectionPage5, setCurrentSectionPage5];
      case 5: return [currentSectionPage6, setCurrentSectionPage6];
      case 6: return [currentSectionPage7, setCurrentSectionPage7];
      case 7: return [currentSectionPage8, setCurrentSectionPage8];
      case 8: return [currentSectionPage9, setCurrentSectionPage9];
      case 9: return [currentSectionPage10, setCurrentSectionPage10];
      case 10: return [currentSectionPage11, setCurrentSectionPage11];
      case 11: return [0, () => {}];
      default: return [0, () => {}];
    }
  };

  const sections = getCurrentSections();
  const [currentSection, setCurrentSection] = getCurrentSectionState() as [number, (value: number) => void];

  const handleSectionChange = (index: number) => {
    setCurrentSection(index);
  };

  const pageNames = [
    'Page 1: CVR Form',
    'Page 2: Customer Visit Sheet',
    'Page 3: Check Lists',
    'Page 4: Parameters',
    'Page 5: Electrical Data',
    'Page 6: Inspection Items',
    'Page 7: Inspection Items',
    'Page 8: Inspection Items',
    'Page 9: Inspection Items',
    'Page 10: Inspection Items',
    'Page 11: Inspection Items',
    'Page 12: Used Parts Report',
  ];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 11) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset the entire form? All entered data will be lost.')) {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f8ff] via-[#f0f2f5] to-[#e8f4fc] p-0 overflow-hidden">
      <div className="form-wrapper-overhaul form-page-bg-overhaul w-full max-w-full mx-auto min-h-screen flex flex-col shadow-2xl">
        {/* Form Type Header – TST-style: gradient, shadow, responsive (WS Overhauling theme) */}
        <div className="sticky top-0 z-[1000] bg-gradient-to-r from-[#0c4a6e] via-[#075985] to-[#0369a1] text-white px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between border-b-2 border-[#f59e0b] shadow-lg">
          <div className="flex items-center gap-2">
            <i className="fas fa-wrench text-sm sm:text-base"></i>
            <span className="text-sm sm:text-base font-bold uppercase tracking-wide">Repair & Overhauling</span>
          </div>
          <BackButton />
        </div>

        {/* Top-Level Navigation Tabs – TST-style (Page 1-12) */}
        <div className="sticky top-[40px] sm:top-[44px] z-[999] bg-gradient-to-r from-[#e8f4fc] to-[#e0f0ff] px-2 sm:px-4 border-b-2 border-[#005288] flex-shrink-0">
          <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
              {Array.from({ length: 12 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`px-2 py-2.5 sm:py-2 bg-transparent font-bold text-sm sm:text-base cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[50px] sm:min-w-[60px] justify-center touch-manipulation ${
                    currentPage === i
                      ? 'bg-white text-[#005288] border-2 border-[#ffcd00] border-b-2 border-b-[#ffcd00] rounded-t-lg'
                      : 'text-[#1a202c] border-2 border-transparent border-b-2 border-b-transparent active:bg-[rgba(255,255,255,0.8)]'
                  }`}
                >
                  <i className={`fas fa-file-alt text-sm sm:text-base ${currentPage === i ? 'text-[#ffcd00]' : 'text-[#005288]'}`}></i>
                  <span>{i + 1}</span>
                </button>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:hidden bg-gradient-to-l from-[#e8f4fc] to-transparent pointer-events-none"></div>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 sm:hidden bg-white/90 px-2 py-0.5 rounded-full text-[9px] font-semibold text-[#005288] border border-[#005288]/20 shadow-sm">
              {currentPage + 1}/12
            </div>
          </div>
        </div>

        {/* Main Content Area – section tabs scroll with content (TST-style) */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {/* Section-Level Navigation Tabs – TST-style (scrolls with content) */}
          {sections.length > 0 && (
            <div className="bg-white px-2 sm:px-3 border-b border-gray-200 shadow-sm">
              <div className="relative overflow-hidden">
                <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionChange(index)}
                      className={`px-2 py-2 sm:py-1.5 bg-transparent font-semibold text-xs sm:text-sm cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[85px] sm:min-w-[100px] justify-center touch-manipulation ${
                        currentSection === index
                          ? 'text-[#0c4a6e] border-2 border-[#0c4a6e] border-b-2 border-b-[#0c4a6e] bg-[#e0f2fe] rounded-t-md'
                          : 'text-gray-600 border-2 border-transparent border-b-2 border-b-transparent active:bg-gray-50'
                      }`}
                    >
                      <i className={`fas ${section.icon} text-xs sm:text-sm`}></i>
                      <span className="hidden xs:inline">{section.label}</span>
                      <span className="xs:hidden text-[10px]">{section.label.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              </div>
            </div>
          )}
          <div className="form-page-content px-2 sm:px-4 py-4 sm:py-6">
            {renderPage()}
          </div>
        </div>

        {/* Bottom Navigation and Controls – TST-style bar */}
        <div className="sticky bottom-0 z-[1001] border-t-2 border-[#005288] bg-gradient-to-r from-white via-[#f8fafc] to-[#e8f4fc] px-2 sm:px-4 py-3 sm:py-4 shadow-lg flex-shrink-0">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#005288] to-[#1a5f9e] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentPage + 1) / 12) * 100}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-gray-300 to-gray-400 text-white hover:from-gray-400 hover:to-gray-500 active:scale-95 shadow-md hover:shadow-lg disabled:shadow-none"
              >
                <i className="fas fa-chevron-left text-xs sm:text-sm"></i>
                <span className="hidden sm:inline font-bold">Previous</span>
              </button>

              <div className="flex-1 text-center px-2">
                <p className="text-xs sm:text-sm font-bold text-[#005288] bg-white/60 px-2 py-1.5 rounded-lg backdrop-blur">
                  {pageNames[currentPage]}
                </p>
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === 11}
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-[#005288] to-[#1a5f9e] text-white hover:from-[#003d66] hover:to-[#154a7a] active:scale-95 shadow-md hover:shadow-lg disabled:shadow-none"
              >
                <span className="hidden sm:inline font-bold">Next</span>
                <i className="fas fa-chevron-right text-xs sm:text-sm"></i>
              </button>
            </div>

            {/* Form Buttons */}
            <FormButtons onReset={handleReset} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
