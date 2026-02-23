'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import FormButtons from '@/components/FormButtons';

export default function PMGasForm() {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Section navigation within Page 1
  const [currentSectionPage1, setCurrentSectionPage1] = useState(0);
  const page1Sections = [
    { id: 'visit-info', label: 'VISIT INFO', icon: 'fa-calendar-alt' },
    { id: 'revenue-job', label: 'REVENUE & JOB', icon: 'fa-clipboard-list' },
    { id: 'customer-complain', label: 'CUSTOMER COMPLAIN', icon: 'fa-exclamation-circle' },
    { id: 'unit-operation', label: 'UNIT OPERATION', icon: 'fa-cogs' },
    { id: 'work-1-8', label: 'WORK 1-8', icon: 'fa-tasks' },
    { id: 'work-9-16', label: 'WORK 9-16', icon: 'fa-tasks' },
  ];
  
  // Section navigation within Page 2
  const [currentSectionPage2, setCurrentSectionPage2] = useState(0);
  const page2Sections = [
    { id: 'work-17-24', label: 'WORK 17-24', icon: 'fa-tasks' },
    { id: 'work-25-32', label: 'WORK 25-32', icon: 'fa-tasks' },
    { id: 'work-33-37', label: 'WORK 33-37', icon: 'fa-tasks' },
  ];
  
  // Section navigation within Page 3
  const [currentSectionPage3, setCurrentSectionPage3] = useState(0);
  const page3Sections = [
    { id: 'work-38-41', label: 'WORK 38-41', icon: 'fa-tasks' },
    { id: 'spare-parts', label: 'SPARE PARTS', icon: 'fa-tools' },
    { id: 'future-work', label: 'FUTURE WORK', icon: 'fa-lightbulb' },
    { id: 'cylinder-temp', label: 'CYLINDER TEMP', icon: 'fa-thermometer-half' },
    { id: 'remarks-comments', label: 'REMARKS & COMMENTS', icon: 'fa-comments' },
    { id: 'signatures', label: 'SIGNATURES', icon: 'fa-signature' },
  ];
  
  // Section navigation within Page 4
  const [currentSectionPage4, setCurrentSectionPage4] = useState(0);
  const page4Sections = [
    { id: 'general-info', label: 'GENERAL INFO', icon: 'fa-info-circle' },
    { id: 'mechanical', label: 'MECHANICAL', icon: 'fa-cogs' },
    { id: 'electrical', label: 'ELECTRICAL', icon: 'fa-bolt' },
    { id: 'comments-signatures', label: 'COMMENTS & SIGNATURES', icon: 'fa-comments' },
  ];
  
  // Section navigation within Page 5
  const [currentSectionPage5, setCurrentSectionPage5] = useState(0);
  const page5Sections = [
    { id: 'items-1-4', label: 'ITEMS 1-4', icon: 'fa-list' },
    { id: 'items-5-8', label: 'ITEMS 5-8', icon: 'fa-list' },
    { id: 'items-9-13', label: 'ITEMS 9-13', icon: 'fa-list' },
    { id: 'signatures', label: 'SIGNATURES', icon: 'fa-signature' },
  ];
  
  // Section navigation within Page 6
  const [currentSectionPage6, setCurrentSectionPage6] = useState(0);
  const page6Sections = [
    { id: 'general-info', label: 'GENERAL INFO', icon: 'fa-info-circle' },
    { id: 'items-1-7', label: 'ITEMS 1-7', icon: 'fa-list' },
    { id: 'items-8-14', label: 'ITEMS 8-14', icon: 'fa-list' },
    { id: 'signatures', label: 'SIGNATURES', icon: 'fa-signature' },
  ];

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < 6) {
      setCurrentPage(pageIndex);
      // Reset section when switching pages
      if (pageIndex === 0) {
        setCurrentSectionPage1(0);
      } else if (pageIndex === 1) {
        setCurrentSectionPage2(0);
      } else if (pageIndex === 2) {
        setCurrentSectionPage3(0);
      } else if (pageIndex === 3) {
        setCurrentSectionPage4(0);
      } else if (pageIndex === 4) {
        setCurrentSectionPage5(0);
      } else if (pageIndex === 5) {
        setCurrentSectionPage6(0);
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

  const goToSectionPage3 = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < page3Sections.length) {
      setCurrentSectionPage3(sectionIndex);
    }
  };

  const goToSectionPage4 = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < page4Sections.length) {
      setCurrentSectionPage4(sectionIndex);
    }
  };

  const goToSectionPage5 = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < page5Sections.length) {
      setCurrentSectionPage5(sectionIndex);
    }
  };

  const goToSectionPage6 = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < page6Sections.length) {
      setCurrentSectionPage6(sectionIndex);
    }
  };

  const handlePrevSection = () => {
    if (currentPage === 0) {
      if (currentSectionPage1 > 0) {
        goToSectionPage1(currentSectionPage1 - 1);
      }
    } else if (currentPage === 1) {
      if (currentSectionPage2 > 0) {
        goToSectionPage2(currentSectionPage2 - 1);
      } else {
        goToPage(0);
      }
    } else if (currentPage === 2) {
      if (currentSectionPage3 > 0) {
        goToSectionPage3(currentSectionPage3 - 1);
      } else {
        goToPage(1);
      }
    } else if (currentPage === 3) {
      if (currentSectionPage4 > 0) {
        goToSectionPage4(currentSectionPage4 - 1);
      } else {
        goToPage(2);
      }
    } else if (currentPage === 4) {
      if (currentSectionPage5 > 0) {
        goToSectionPage5(currentSectionPage5 - 1);
      } else {
        goToPage(3);
      }
    } else if (currentPage === 5) {
      if (currentSectionPage6 > 0) {
        goToSectionPage6(currentSectionPage6 - 1);
      } else {
        goToPage(4);
      }
    }
  };

  const handleNextSection = () => {
    if (currentPage === 0) {
      if (currentSectionPage1 < page1Sections.length - 1) {
        goToSectionPage1(currentSectionPage1 + 1);
      } else {
        goToPage(1);
      }
    } else if (currentPage === 1) {
      if (currentSectionPage2 < page2Sections.length - 1) {
        goToSectionPage2(currentSectionPage2 + 1);
      } else {
        goToPage(2);
      }
    } else if (currentPage === 2) {
      if (currentSectionPage3 < page3Sections.length - 1) {
        goToSectionPage3(currentSectionPage3 + 1);
      } else {
        goToPage(3);
      }
    } else if (currentPage === 3) {
      if (currentSectionPage4 < page4Sections.length - 1) {
        goToSectionPage4(currentSectionPage4 + 1);
      } else {
        goToPage(4);
      }
    } else if (currentPage === 4) {
      if (currentSectionPage5 < page5Sections.length - 1) {
        goToSectionPage5(currentSectionPage5 + 1);
      } else {
        goToPage(5);
      }
    } else if (currentPage === 5) {
      if (currentSectionPage6 < page6Sections.length - 1) {
        goToSectionPage6(currentSectionPage6 + 1);
      }
    }
  };

  const canGoPrev = currentPage === 0 
    ? currentSectionPage1 > 0 
    : currentPage === 1
    ? currentSectionPage2 > 0 || currentPage > 0
    : currentPage === 2
    ? currentSectionPage3 > 0 || currentPage > 0
    : currentPage === 3
    ? currentSectionPage4 > 0 || currentPage > 0
    : currentPage === 4
    ? currentSectionPage5 > 0 || currentPage > 0
    : currentSectionPage6 > 0 || currentPage > 0;
  
  const canGoNext = currentPage === 0
    ? currentSectionPage1 < page1Sections.length - 1 || currentPage < 5
    : currentPage === 1
    ? currentSectionPage2 < page2Sections.length - 1 || currentPage < 5
    : currentPage === 2
    ? currentSectionPage3 < page3Sections.length - 1 || currentPage < 5
    : currentPage === 3
    ? currentSectionPage4 < page4Sections.length - 1 || currentPage < 5
    : currentPage === 4
    ? currentSectionPage5 < page5Sections.length - 1 || currentPage < 5
    : currentSectionPage6 < page6Sections.length - 1;

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
      <div className="form-wrapper-pm form-page-bg-pm w-full max-w-full mx-auto min-h-screen flex flex-col shadow-xl">
        {/* Form Type Header – TST-style: gradient, shadow, responsive */}
        <div className="sticky top-0 z-[1000] bg-gradient-to-r from-[#004269] via-[#005288] to-[#1a5f9e] text-white px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-center border-b-2 border-[#ffcd00] shadow-lg">
          <div className="flex items-center gap-2">
            <i className="fas fa-file-alt text-sm sm:text-base"></i>
            <span className="text-sm sm:text-base font-bold uppercase tracking-wide">PM Gas Checklist</span>
          </div>
        </div>
        {/* Top-Level Navigation Tabs – TST-style (Page 1-6) */}
        <div className="sticky top-[40px] sm:top-[44px] z-[999] bg-gradient-to-r from-[#e8f4fc] to-[#e0f0ff] px-2 sm:px-4 border-b-2 border-[#005288] flex-shrink-0">
          <div className="relative">
            <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
              {[0, 1, 2, 3, 4, 5].map((pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => goToPage(pageIndex)}
                  className={`px-2 py-2.5 sm:py-2 bg-transparent font-bold text-sm sm:text-base cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[50px] sm:min-w-[60px] justify-center touch-manipulation ${
                    currentPage === pageIndex
                      ? 'bg-white text-[#005288] border-2 border-[#ffcd00] border-b-2 border-b-[#ffcd00] rounded-t-lg'
                      : 'text-[#1a202c] border-2 border-transparent border-b-2 border-b-transparent active:bg-[rgba(255,255,255,0.8)]'
                  }`}
                >
                  <i className={`fas fa-file-alt text-sm sm:text-base ${currentPage === pageIndex ? 'text-[#ffcd00]' : 'text-[#005288]'}`}></i>
                  {pageIndex + 1}
                </button>
              ))}
            </div>
            {/* Fade gradient on right edge for mobile */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:hidden bg-gradient-to-l from-[#e8f4fc] to-transparent pointer-events-none"></div>
            {/* Page indicator for mobile - positioned to avoid back button */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 sm:hidden bg-white/90 px-2 py-0.5 rounded-full text-[9px] font-semibold text-[#005288] border border-[#005288]/20 shadow-sm">
              {currentPage + 1}/6
            </div>
          </div>
        </div>

        {/* Section-Level Navigation Tabs – TST-style (Within Each Page) */}
        {currentPage === 0 && (
          <div className="sticky top-[86px] sm:top-[92px] z-[998] bg-white px-2 sm:px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
            <div className="relative">
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
              {/* Fade gradient on right edge for mobile */}
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:hidden bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              {/* Section indicator for mobile */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:hidden bg-white/90 px-1.5 py-0.5 rounded-full text-[8px] font-semibold text-gray-600 border border-gray-200 shadow-sm">
                {currentSectionPage1 + 1}/{page1Sections.length}
              </div>
            </div>
          </div>
        )}

        {currentPage === 1 && (
          <div className="sticky top-[86px] sm:top-[92px] z-[998] bg-white px-2 sm:px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
            <div className="relative">
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
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:hidden bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:hidden bg-white/90 px-1.5 py-0.5 rounded-full text-[8px] font-semibold text-gray-600 border border-gray-200 shadow-sm">
                {currentSectionPage2 + 1}/{page2Sections.length}
              </div>
            </div>
          </div>
        )}

        {currentPage === 2 && (
          <div className="sticky top-[86px] sm:top-[92px] z-[998] bg-white px-2 sm:px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
            <div className="relative">
              <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
                {page3Sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => goToSectionPage3(index)}
                    className={`px-2 py-2 sm:py-1.5 bg-transparent font-semibold text-xs sm:text-sm cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[85px] sm:min-w-[100px] justify-center touch-manipulation ${
                      currentSectionPage3 === index
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
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:hidden bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:hidden bg-white/90 px-1.5 py-0.5 rounded-full text-[8px] font-semibold text-gray-600 border border-gray-200 shadow-sm">
                {currentSectionPage3 + 1}/{page3Sections.length}
              </div>
            </div>
          </div>
        )}

        {currentPage === 3 && (
          <div className="sticky top-[86px] sm:top-[92px] z-[998] bg-white px-2 sm:px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
            <div className="relative">
              <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
                {page4Sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => goToSectionPage4(index)}
                    className={`px-2 py-2 sm:py-1.5 bg-transparent font-semibold text-xs sm:text-sm cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[85px] sm:min-w-[100px] justify-center touch-manipulation ${
                      currentSectionPage4 === index
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
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:hidden bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:hidden bg-white/90 px-1.5 py-0.5 rounded-full text-[8px] font-semibold text-gray-600 border border-gray-200 shadow-sm">
                {currentSectionPage4 + 1}/{page4Sections.length}
              </div>
            </div>
          </div>
        )}

        {currentPage === 4 && (
          <div className="sticky top-[86px] sm:top-[92px] z-[998] bg-white px-2 sm:px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
            <div className="relative">
              <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
                {page5Sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => goToSectionPage5(index)}
                    className={`px-2 py-2 sm:py-1.5 bg-transparent font-semibold text-xs sm:text-sm cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[85px] sm:min-w-[100px] justify-center touch-manipulation ${
                      currentSectionPage5 === index
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
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:hidden bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:hidden bg-white/90 px-1.5 py-0.5 rounded-full text-[8px] font-semibold text-gray-600 border border-gray-200 shadow-sm">
                {currentSectionPage5 + 1}/{page5Sections.length}
              </div>
            </div>
          </div>
        )}

        {currentPage === 5 && (
          <div className="sticky top-[86px] sm:top-[92px] z-[998] bg-white px-2 sm:px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
            <div className="relative">
              <div className="flex overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-hide">
                {page6Sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => goToSectionPage6(index)}
                    className={`px-2 py-2 sm:py-1.5 bg-transparent font-semibold text-xs sm:text-sm cursor-pointer transition-all whitespace-nowrap border-b-2 flex items-center gap-1 min-w-[85px] sm:min-w-[100px] justify-center touch-manipulation ${
                      currentSectionPage6 === index
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
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:hidden bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:hidden bg-white/90 px-1.5 py-0.5 rounded-full text-[8px] font-semibold text-gray-600 border border-gray-200 shadow-sm">
                {currentSectionPage6 + 1}/{page6Sections.length}
              </div>
            </div>
          </div>
        )}

        {/* Pages Container - flex-1 min-h-0 so content + bottom bar fit without extra gap */}
        <div className="w-full overflow-y-auto overflow-x-hidden relative flex-1 min-h-0">
          {/* PAGE 1 */}
          {currentPage === 0 && (
            <div className="w-full form-page-content bg-white relative overflow-y-auto">
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
                  <Page1 currentSection={currentSectionPage1} />
                </div>
              </div>

              {/* Page Footer */}
              <div className="mt-2 text-center text-[#4a5568] text-xs sm:text-sm border-t border-[#cbd5e0] bg-[#e8f4fc] py-1.5 px-2 rounded-b">
                Page 1 of 6
              </div>
            </div>
          )}

          {/* PAGE 2 */}
          {currentPage === 1 && (
            <div className="w-full form-page-content bg-white relative overflow-y-auto">
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
                  <Page2 currentSection={currentSectionPage2} />
                </div>
              </div>

              {/* Page Footer */}
              <div className="mt-2 text-center text-[#4a5568] text-xs sm:text-sm border-t border-[#cbd5e0] bg-[#e8f4fc] py-1.5 px-2">
                Page 2 of 6
              </div>
            </div>
          )}

          {/* PAGE 3 */}
          {currentPage === 2 && (
            <div className="w-full form-page-content bg-white relative overflow-y-auto">
              <BackButton />

              {/* Section Content Container - Horizontal Scroll */}
              <div className="w-full overflow-hidden relative h-full">
                <div
                  className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
                  style={{
                    width: `${page3Sections.length * 100}%`,
                    transform: `translateX(-${currentSectionPage3 * (100 / page3Sections.length)}%)`,
                  }}
                >
                  <Page3 currentSection={currentSectionPage3} />
                </div>
              </div>

              {/* Page Footer */}
              <div className="mt-2 text-center text-[#4a5568] text-xs sm:text-sm border-t border-[#cbd5e0] bg-[#e8f4fc] py-1.5 px-2">
                <div className="font-semibold mb-0.5 hidden sm:block">
                  ORIGINAL COPY CUSTOMER&apos;S FILE. COPIES: 1. CUSTOMER. 2. Director (PS). 3. BILING SECTION. 4. ENGINEERS FILE
                </div>
                <div className="font-semibold mb-0.5 sm:hidden text-xs">
                  ORIGINAL COPY CUSTOMER&apos;S FILE
                </div>
                <div>Page 3 of 6</div>
              </div>
            </div>
          )}

          {/* PAGE 4 */}
          {currentPage === 3 && (
            <div className="w-full form-page-content bg-white relative overflow-y-auto">
              <BackButton />

              {/* Section Content Container - Horizontal Scroll */}
              <div className="w-full overflow-hidden relative h-full">
                <div
                  className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
                  style={{
                    width: `${page4Sections.length * 100}%`,
                    transform: `translateX(-${currentSectionPage4 * (100 / page4Sections.length)}%)`,
                  }}
                >
                  <Page4 currentSection={currentSectionPage4} />
                </div>
              </div>

              {/* Page Footer */}
              <div className="mt-2 text-center text-[#4a5568] text-xs sm:text-sm border-t border-[#cbd5e0] bg-[#e8f4fc] py-1.5 px-2">
                Page 4 of 6
              </div>
            </div>
          )}

          {/* PAGE 5 */}
          {currentPage === 4 && (
            <div className="w-full form-page-content bg-white relative overflow-y-auto">
              <BackButton />

              {/* Section Content Container - Horizontal Scroll */}
              <div className="w-full overflow-hidden relative h-full">
                <div
                  className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
                  style={{
                    width: `${page5Sections.length * 100}%`,
                    transform: `translateX(-${currentSectionPage5 * (100 / page5Sections.length)}%)`,
                  }}
                >
                  <Page5 currentSection={currentSectionPage5} />
                </div>
              </div>

              {/* Page Footer */}
              <div className="mt-2 text-center text-[#4a5568] text-xs sm:text-sm border-t border-[#cbd5e0] bg-[#e8f4fc] py-1.5 px-2">
                Page 5 of 6
              </div>
            </div>
          )}

          {/* PAGE 6 */}
          {currentPage === 5 && (
            <div className="w-full form-page-content bg-white relative overflow-y-auto">
              <BackButton />

              {/* Section Content Container - Horizontal Scroll */}
              <div className="w-full overflow-hidden relative h-full">
                <div
                  className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] h-full"
                  style={{
                    width: `${page6Sections.length * 100}%`,
                    transform: `translateX(-${currentSectionPage6 * (100 / page6Sections.length)}%)`,
                  }}
                >
                  <Page6 currentSection={currentSectionPage6} />
                </div>
              </div>

              {/* Page Footer */}
              <div className="mt-2 text-center text-[#4a5568] text-xs sm:text-sm border-t border-[#cbd5e0] bg-[#e8f4fc] py-1.5 px-2">
                Page 6 of 6
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

        {/* Bottom bar: footer + Submit/Reset (WS Overhauling style - single bar, no gap) */}
        <div className="sticky bottom-0 z-[1001] border-t-2 border-[#005288] bg-gradient-to-r from-white via-[#f8fafc] to-[#e8f4fc] px-2 sm:px-4 py-2 sm:py-3 shadow-lg flex-shrink-0">
          <div className="flex flex-col gap-2 sm:gap-3">
            <FormButtons onReset={handleReset} onSubmit={handleSubmit} />
            <div className="text-center text-[#4a5568] text-[9px] sm:text-[10px]">
              <div className="font-semibold hidden sm:block">BANGLA CAT © 2026 | SERVICE COPY (PM GAS) | CONFIDENTIAL DOCUMENT</div>
              <div className="font-semibold sm:hidden">BANGLA CAT © 2026 | PM GAS | CONFIDENTIAL</div>
              <div className="mt-0.5">Document ID: SC-PMGAS-001 | Revision: 1.0 | Page <span>{currentPage + 1}</span> of 6 | Section <span>{currentPage === 0 ? currentSectionPage1 + 1 : currentPage === 1 ? currentSectionPage2 + 1 : currentPage === 2 ? currentSectionPage3 + 1 : currentPage === 3 ? currentSectionPage4 + 1 : currentPage === 4 ? currentSectionPage5 + 1 : currentSectionPage6 + 1}</span> of {currentPage === 0 ? page1Sections.length : currentPage === 1 ? page2Sections.length : currentPage === 2 ? page3Sections.length : currentPage === 3 ? page4Sections.length : currentPage === 4 ? page5Sections.length : page6Sections.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
