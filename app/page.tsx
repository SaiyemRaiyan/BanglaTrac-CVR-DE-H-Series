'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewFormDialog from '@/components/NewFormDialog';
import { formStorage, CompletedForm } from '@/lib/formStorage';
import sampleForms from '@/lib/sampleForms';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [completedForms, setCompletedForms] = useState<CompletedForm[]>([]);
  const [showNewFormDialog, setShowNewFormDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        localStorage.removeItem('bangla_cat_completed_forms');
      } catch (e) {
        console.warn('Could not clear localStorage key:', e);
      }

      sampleForms.forEach((form) => {
        formStorage.saveForm(form);
      });

      const forms = formStorage.getAllForms();
      setCompletedForms(forms);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredForms = completedForms.filter((form) =>
    form.formTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.visitInfo.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.visitInfo.mcoNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.visitInfo.workOrderNo?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedForms = [...filteredForms].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const { key, direction } = sortConfig;
    let aValue: any, bValue: any;
    
    switch(key) {
      case 'formTitle':
        aValue = a.formTitle;
        bValue = b.formTitle;
        break;
      case 'dateOfVisit':
        aValue = a.visitInfo.dateOfVisit ? new Date(a.visitInfo.dateOfVisit).getTime() : 0;
        bValue = b.visitInfo.dateOfVisit ? new Date(b.visitInfo.dateOfVisit).getTime() : 0;
        break;
      case 'mcoNumber':
        aValue = a.visitInfo.mcoNumber || '';
        bValue = b.visitInfo.mcoNumber || '';
        break;
      case 'workOrderNo':
        aValue = a.visitInfo.workOrderNo || '';
        bValue = b.visitInfo.workOrderNo || '';
        break;
      default:
        return 0;
    }
    
    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const requestSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getStatusColor = (dateString?: string) => {
    if (!dateString) return 'bg-gray-50 text-gray-600 border-l-4 border-gray-300';
    const daysDiff = Math.floor((new Date().getTime() - new Date(dateString).getTime()) / (1000 * 3600 * 24));
    if (daysDiff < 7) return 'bg-green-50 text-green-700 border-l-4 border-green-400';
    if (daysDiff < 30) return 'bg-amber-50 text-amber-700 border-l-4 border-amber-400';
    return 'bg-rose-50 text-rose-700 border-l-4 border-rose-400';
  };

  const getStatusText = (dateString?: string) => {
    if (!dateString) return 'No date';
    const daysDiff = Math.floor((new Date().getTime() - new Date(dateString).getTime()) / (1000 * 3600 * 24));
    if (daysDiff === 0) return 'Today';
    if (daysDiff === 1) return 'Yesterday';
    if (daysDiff < 7) return `${daysDiff} days ago`;
    if (daysDiff < 30) return `${Math.floor(daysDiff / 7)} weeks ago`;
    return `${Math.floor(daysDiff / 30)} months ago`;
  };

  const stats = {
    total: completedForms.length,
    recent: completedForms.filter(f => 
      f.visitInfo.dateOfVisit && 
      new Date(f.visitInfo.dateOfVisit).getTime() > new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    ).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Eye-Catching Dynamic Background Texture */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
        
        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
        <svg className="absolute bottom-0 w-full h-32 text-white/30" preserveAspectRatio="none" viewBox="0 0 1440 74">
          <path fill="currentColor" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Light Theme Header with Gradient Border */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b-2 border-transparent relative"
        style={{
          backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4 group">
              <div className="relative w-32 h-12 sm:w-40 sm:h-16">
                <Image
                  src="/BCAT.png"
                  alt="Bangla CAT Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-all duration-300 drop-shadow-md"
                  priority
                />
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Forms Management System
                </h1>
                <p className="text-xs text-gray-500">Enterprise Dashboard</p>
              </div>
            </div>

            {/* Modern Stats */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-800">
                  {stats.total}
                </div>
                <div className="text-xs text-gray-500">Total Forms</div>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">
                  {stats.recent}
                </div>
                <div className="text-xs text-gray-500">This Week</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Search Section with Gradient Border */}
        <div className="mb-8 animate-fadeIn">
          <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm p-8 border-2 border-transparent shadow-xl"
            style={{
              backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}>
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Form Explorer</h2>
              <p className="text-gray-600 mb-6">Search and manage your field reports with advanced filtering</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, customer, MCO or work order..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                
                <button
                  onClick={() => setShowNewFormDialog(true)}
                  className="px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  New Form
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
              <div className="w-20 h-20 border-4 border-pink-200 border-b-pink-500 rounded-full animate-spin absolute inset-0" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>
        ) : (
          <>
            {/* Dynamic Table with Visible Column Borders */}
            <div className="relative group animate-fadeUp">
              <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-transparent shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    {/* Table Header with Visible Borders */}
                    <thead>
                      <tr className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
                        {[
                          { key: 'formTitle', label: 'Form Details', icon: '📋', width: '25%' },
                          { key: 'dateOfVisit', label: 'Visit Date', icon: '📅', width: '15%' },
                          { key: 'mcoNumber', label: 'MCO Number', icon: '🔢', width: '15%' },
                          { key: 'workOrderNo', label: 'Work Order', icon: '⚙️', width: '15%' },
                          { key: 'status', label: 'Status', icon: '✨', width: '15%' },
                          { key: 'actions', label: 'Actions', icon: '🔍', width: '15%' }
                        ].map((header, index) => (
                          <th
                            key={header.key}
                            onClick={() => header.key !== 'actions' && header.key !== 'status' && requestSort(header.key)}
                            className={`px-6 py-5 text-left border-r-2 border-b-2 border-gray-200 last:border-r-0 ${
                              header.key !== 'actions' && header.key !== 'status' 
                                ? 'cursor-pointer hover:bg-white/50 transition-colors' 
                                : ''
                            }`}
                            style={{ width: header.width }}
                          >
                            <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm uppercase tracking-wider">
                              <span className="text-lg">{header.icon}</span>
                              <span>{header.label}</span>
                              {sortConfig?.key === header.key && (
                                <span className="ml-1 text-purple-600 font-bold">
                                  {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                </span>
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    
                    {/* Table Body with Visible Borders */}
                    <tbody className="divide-y-2 divide-gray-200">
                      {sortedForms.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-20 text-center border-r-2 border-gray-200 last:border-r-0">
                            <div className="flex flex-col items-center gap-4">
                              <div className="text-6xl animate-bounce-slow">🔍</div>
                              <p className="text-gray-500 text-lg">No forms found matching your search</p>
                              <button
                                onClick={() => setSearchTerm('')}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-all"
                              >
                                Clear Search
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        sortedForms.map((form, idx) => (
                          <tr
                            key={form.id}
                            className={`group/row relative transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50/80 hover:via-purple-50/80 hover:to-pink-50/80 ${
                              idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                            }`}
                            style={{ animationDelay: `${idx * 50}ms` }}
                            onMouseEnter={() => setHoveredRow(form.id)}
                            onMouseLeave={() => setHoveredRow(null)}
                          >
                            <td className="px-6 py-5 border-r-2 border-gray-200">
                              <div className="flex items-center gap-4">
                                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${
                                  form.formType === 'pm-gas' 
                                    ? 'from-blue-400 to-cyan-400'
                                    : form.formType === 'tst-gas'
                                    ? 'from-purple-400 to-pink-400'
                                    : 'from-amber-400 to-orange-400'
                                } p-0.5 transition-all duration-300 ${
                                  hoveredRow === form.id ? 'scale-110 rotate-3 shadow-lg' : ''
                                }`}>
                                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                                    <span className="text-xl">
                                      {form.formType === 'pm-gas' ? '🔧' : form.formType === 'tst-gas' ? '⚡' : '🛠️'}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-800 text-lg">
                                    {form.formTitle}
                                  </div>
                                  <div className="text-sm text-gray-500 flex items-center gap-2">
                                    <span>{form.visitInfo.customerName || 'No customer'}</span>
                                    {form.visitInfo.customerName && (
                                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                    )}
                                    <span className="text-gray-400">ID: {form.id.slice(0, 8)}</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            
                            <td className="px-6 py-5 border-r-2 border-gray-200">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-400">📆</span>
                                <span className="text-gray-700 font-medium">
                                  {form.visitInfo.dateOfVisit 
                                    ? new Date(form.visitInfo.dateOfVisit).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric'
                                      })
                                    : 'N/A'}
                                </span>
                              </div>
                            </td>
                            
                            <td className="px-6 py-5 border-r-2 border-gray-200">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-400">🔢</span>
                                <span className="font-mono text-gray-700 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">
                                  {form.visitInfo.mcoNumber || 'N/A'}
                                </span>
                              </div>
                            </td>
                            
                            <td className="px-6 py-5 border-r-2 border-gray-200">
                              <div className="flex items-center gap-2">
                                <span className="text-gray-400">⚙️</span>
                                <span className="font-mono text-gray-600">
                                  {form.visitInfo.workOrderNo || 'N/A'}
                                </span>
                              </div>
                            </td>
                            
                            <td className="px-6 py-5 border-r-2 border-gray-200">
                              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${getStatusColor(form.visitInfo.dateOfVisit)}`}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{
                                  backgroundColor: form.visitInfo.dateOfVisit && 
                                    new Date(form.visitInfo.dateOfVisit).getTime() > new Date().getTime() - 7 * 24 * 60 * 60 * 1000 
                                    ? '#10b981' : '#f59e0b'
                                }}></span>
                                <span className="text-sm font-medium">
                                  {getStatusText(form.visitInfo.dateOfVisit)}
                                </span>
                              </div>
                            </td>
                            
                            <td className="px-6 py-5">
                              <Link href={`/forms/view/${form.id}`}>
                                <button className="relative group/btn overflow-hidden px-5 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105">
                                  <span className="relative z-10 flex items-center gap-2">
                                    <span>View</span>
                                    <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                                  </span>
                                </button>
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Table Footer with Borders */}
                <div className="border-t-2 border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-4">
                      <span>Showing <span className="text-gray-800 font-semibold">{sortedForms.length}</span> of <span className="text-gray-800 font-semibold">{completedForms.length}</span> forms</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>Page 1 of 1</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-400 cursor-not-allowed border border-gray-200" disabled>←</button>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-400 cursor-not-allowed border border-gray-200" disabled>→</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Footer with Light Theme */}
        <footer className="mt-12 text-center animate-fadeIn">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border-2 border-transparent shadow-lg"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}>
            <span className="text-gray-600">© 2026 Bangla CAT</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-gray-700">Enterprise Forms Management</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-gray-600">v2.0</span>
          </div>
        </footer>
      </main>

      {/* New Form Dialog */}
      <NewFormDialog 
        isOpen={showNewFormDialog} 
        onClose={() => setShowNewFormDialog(false)} 
      />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}