'use client';

import { useState } from 'react';
import FormSection from '@/components/FormSection';

interface Page1Props {
  currentSection: number;
}

export default function Page1({ currentSection }: Page1Props) {
  const [formData, setFormData] = useState({
    // Work Order Section
    workOrderNo: '',
    mcoNo: '',
    typeOfRepair: '',
    date: new Date().toISOString().split('T')[0],
    
    // Service Engineer Section
    engineerName1: '',
    engineerId1: '',
    engineerName2: '',
    engineerId2: '',
    engineerName3: '',
    engineerId3: '',
    
    // Customer Info Section
    customerName: '',
    location: '',
    
    // Time Tracking Section
    startTime1: '',
    startDate1: new Date().toISOString().split('T')[0],
    travelTime1: '',
    stopTime1: '',
    stopDate1: new Date().toISOString().split('T')[0],
    startTime2: '',
    startDate2: new Date().toISOString().split('T')[0],
    travelTime2: '',
    stopTime2: '',
    stopDate2: new Date().toISOString().split('T')[0],
    startTime3: '',
    startDate3: new Date().toISOString().split('T')[0],
    travelTime3: '',
    stopTime3: '',
    stopDate3: new Date().toISOString().split('T')[0],
    
    // Working Time Section
    workingStartTime1: '',
    workingStartDate1: new Date().toISOString().split('T')[0],
    workingStopTime1: '',
    workingStopDate1: new Date().toISOString().split('T')[0],
    workingStartTime2: '',
    workingStartDate2: new Date().toISOString().split('T')[0],
    workingStopTime2: '',
    workingStopDate2: new Date().toISOString().split('T')[0],
    workingStartTime3: '',
    workingStartDate3: new Date().toISOString().split('T')[0],
    workingStopTime3: '',
    workingStopDate3: new Date().toISOString().split('T')[0],
    workingHours: '',
    
    // Travel Time Details Section
    travelDate: new Date().toISOString().split('T')[0],
    driverName: '',
    vehicleNo: '',
    startKM: '',
    endKM: '',
    totalKM: '',
    travelHours: '',
    
    // Customer Complaint
    complaint: '',
    
    // Equipment Data
    engineModel: '',
    srNo: '',
    arrNo: '',
    load: '',
    rpm: '',
    smu: '',
    voltage: '',
    ojBand: '',
    ojPressure: '',
    ojTemp: '',
    
    // Additional Info
    concern: '',
    recommendations: '',
    signature1: '',
    signature2: '',
    signature3: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Work Order
        return (
          <FormSection title="Work Order Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Work Order No.</label>
                <input
                  type="text"
                  name="workOrderNo"
                  value={formData.workOrderNo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter work order number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">MCO No.</label>
                <input
                  type="text"
                  name="mcoNo"
                  value={formData.mcoNo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter MCO number"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Type of Repair</label>
                <select
                  name="typeOfRepair"
                  value={formData.typeOfRepair}
                  onChange={handleInputChange as any}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Select type</option>
                  <option value="top-end">Top-End Overhauling</option>
                  <option value="in-frame">In-Frame Overhauling</option>
                  <option value="crankshaft">Crankshaft Overhauling</option>
                  <option value="complete">Complete Overhauling</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </FormSection>
        );
      case 1: // Service Engineer
        return (
          <FormSection title="Service Engineer's Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Service Engineer 1 Name</label>
                <input
                  type="text"
                  name="engineerName1"
                  value={formData.engineerName1}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Service Engineer 1 ID</label>
                <input
                  type="text"
                  name="engineerId1"
                  value={formData.engineerId1}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter ID"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Service Engineer 2 Name</label>
                <input
                  type="text"
                  name="engineerName2"
                  value={formData.engineerName2}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Service Engineer 2 ID</label>
                <input
                  type="text"
                  name="engineerId2"
                  value={formData.engineerId2}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter ID"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Service Engineer 3 Name</label>
                <input
                  type="text"
                  name="engineerName3"
                  value={formData.engineerName3}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Service Engineer 3 ID</label>
                <input
                  type="text"
                  name="engineerId3"
                  value={formData.engineerId3}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter ID"
                />
              </div>
            </div>
          </FormSection>
        );
      case 2: // Customer Info
        return (
          <FormSection title="Customer Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Customer's Name</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter location"
                />
              </div>
            </div>
          </FormSection>
        );
      case 3: // Time Tracking
        return (
          <FormSection title="Travelling Time">
            <div className="space-y-4">
              {[1, 2, 3].map((row) => (
                <div key={row} className="grid grid-cols-1 md:grid-cols-5 gap-3 p-3 bg-gray-50 rounded-lg">
                  <div>
                    <label className="text-xs font-semibold">Start Time</label>
                    <input
                      type="time"
                      name={`startTime${row}`}
                      value={formData[`startTime${row}` as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Date</label>
                    <input
                      type="date"
                      name={`startDate${row}`}
                      value={formData[`startDate${row}` as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Travelling Time</label>
                    <input
                      type="text"
                      name={`travelTime${row}`}
                      value={formData[`travelTime${row}` as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded text-sm"
                      placeholder="Hrs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Stop Time</label>
                    <input
                      type="time"
                      name={`stopTime${row}`}
                      value={formData[`stopTime${row}` as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Date</label>
                    <input
                      type="date"
                      name={`stopDate${row}`}
                      value={formData[`stopDate${row}` as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-2 py-2 border rounded text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FormSection>
        );
      case 4: // Travel & Work Time
        return (
          <FormSection title="Working Time & Travel Details">
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">Working Time</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((row) => (
                  <div key={row} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <label className="text-xs font-semibold">Start Time</label>
                      <input
                        type="time"
                        name={`workingStartTime${row}`}
                        value={formData[`workingStartTime${row}` as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-2 py-2 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold">Date</label>
                      <input
                        type="date"
                        name={`workingStartDate${row}`}
                        value={formData[`workingStartDate${row}` as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-2 py-2 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold">Stop Time</label>
                      <input
                        type="time"
                        name={`workingStopTime${row}`}
                        value={formData[`workingStopTime${row}` as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-2 py-2 border rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold">Date</label>
                      <input
                        type="date"
                        name={`workingStopDate${row}`}
                        value={formData[`workingStopDate${row}` as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-2 py-2 border rounded text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">Travel Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Driver Name</label>
                  <input
                    type="text"
                    name="driverName"
                    value={formData.driverName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter driver name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Vehicle No.</label>
                  <input
                    type="text"
                    name="vehicleNo"
                    value={formData.vehicleNo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter vehicle number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Travel Date</label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Start KM</label>
                  <input
                    type="number"
                    name="startKM"
                    value={formData.startKM}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="KM"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">End KM</label>
                  <input
                    type="number"
                    name="endKM"
                    value={formData.endKM}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="KM"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Total KM</label>
                  <input
                    type="number"
                    name="totalKM"
                    value={formData.totalKM}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="KM"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Total Hours</label>
                  <input
                    type="text"
                    name="travelHours"
                    value={formData.travelHours}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Hrs"
                  />
                </div>
              </div>
            </div>
          </FormSection>
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}
