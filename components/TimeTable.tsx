'use client';

import { useState } from 'react';

interface TimeRow {
  timeStart: string;
  date: string;
  description: string;
  timeStop: string;
  hours: string;
  engineer?: string;
}

interface TimeTableProps {
  rows: TimeRow[];
  onRowChange: (index: number, field: string, value: string) => void;
  engineerList?: string[];
}

const calculateHours = (timeStart: string, timeStop: string): string => {
  if (!timeStart || !timeStop) return '';
  const [startHour, startMin] = timeStart.split(':').map(Number);
  const [stopHour, stopMin] = timeStop.split(':').map(Number);
  const startTotalMin = startHour * 60 + startMin;
  const stopTotalMin = stopHour * 60 + stopMin;
  let diffMin = stopTotalMin - startTotalMin;
  if (diffMin < 0) diffMin += 24 * 60;
  const hours = (diffMin / 60).toFixed(1);
  return hours;
};

export default function TimeTable({ rows, onRowChange, engineerList = ['Select Engineer', 'Farhan Arafat', 'Nadia Rahman', 'Mohammad Hasan', 'Ahmed Ali', 'Engineer A', 'Engineer B'] }: TimeTableProps) {
  const [applyToAll, setApplyToAll] = useState(false);
  const [applyTime, setApplyTime] = useState({ timeStart: '', timeStop: '', description: '' });

  const handleApplyToAll = () => {
    if (!applyTime.timeStart || !applyTime.timeStop) return;
    const newHours = calculateHours(applyTime.timeStart, applyTime.timeStop);
    rows.forEach((_, idx) => {
      onRowChange(idx, 'timeStart', applyTime.timeStart);
      onRowChange(idx, 'timeStop', applyTime.timeStop);
      onRowChange(idx, 'description', applyTime.description);
      onRowChange(idx, 'hours', newHours);
    });
  };

  const handleTimeChange = (index: number, field: string, value: string) => {
    onRowChange(index, field, value);
    if (field === 'timeStart' || field === 'timeStop') {
      const startTime = field === 'timeStart' ? value : rows[index].timeStart;
      const stopTime = field === 'timeStop' ? value : rows[index].timeStop;
      if (startTime && stopTime) {
        const newHours = calculateHours(startTime, stopTime);
        onRowChange(index, 'hours', newHours);
      }
    }
  };

  return (
    <div className="w-full">
      {/* Apply to All Section */}
      <div className="bg-gradient-to-r from-[#e8f4fc] to-[#f0f8ff] border-2 border-[#005288] rounded-lg p-3 mb-3">
        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <input
            type="checkbox"
            checked={applyToAll}
            onChange={(e) => setApplyToAll(e.target.checked)}
            className="w-4 h-4 accent-[#005288]"
          />
          <span className="font-bold text-[12px] sm:text-[13px] text-[#005288] uppercase">
            Apply Same Time for All Engineers
          </span>
        </label>
        {applyToAll && (
          <div className="grid grid-cols-4 gap-2 mb-2">
            <div>
              <label className="block text-[10px] font-bold text-[#005288] mb-1">Start</label>
              <input
                type="time"
                className="w-full p-1.5 border border-gray-300 rounded text-[11px] focus:outline-none focus:border-[#005288]"
                value={applyTime.timeStart}
                onChange={(e) => setApplyTime({ ...applyTime, timeStart: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#005288] mb-1">Stop</label>
              <input
                type="time"
                className="w-full p-1.5 border border-gray-300 rounded text-[11px] focus:outline-none focus:border-[#005288]"
                value={applyTime.timeStop}
                onChange={(e) => setApplyTime({ ...applyTime, timeStop: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#005288] mb-1">Description</label>
              <input
                type="text"
                className="w-full p-1.5 border border-gray-300 rounded text-[11px] focus:outline-none focus:border-[#005288]"
                placeholder="Desc"
                value={applyTime.description}
                onChange={(e) => setApplyTime({ ...applyTime, description: e.target.value })}
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleApplyToAll}
                className="w-full px-2 py-1.5 bg-gradient-to-r from-[#005288] to-[#1a5f9e] text-white rounded text-[10px] font-bold hover:from-[#154a7a] transition-all"
              >
                APPLY ALL
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Time Table */}
      <div className="w-full overflow-x-auto -webkit-overflow-scrolling-touch">
        <table className="w-full border-collapse my-1 text-[10px] sm:text-[11px] min-w-full">
        <thead>
          <tr>
            <th className="bg-gradient-to-r from-[#005288] to-[#1a7fba] text-white p-1.5 text-left font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wide border border-gray-200 whitespace-nowrap">
              ENGINEER
            </th>
            <th className="bg-gradient-to-r from-[#005288] to-[#1a7fba] text-white p-1.5 text-left font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wide border border-gray-200 whitespace-nowrap">
              TIME START
            </th>
            <th className="bg-gradient-to-r from-[#005288] to-[#1a7fba] text-white p-1.5 text-left font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wide border border-gray-200 whitespace-nowrap">
              DATE
            </th>
            <th className="bg-gradient-to-r from-[#005288] to-[#1a7fba] text-white p-1.5 text-left font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wide border border-gray-200 whitespace-nowrap">
              DESCRIPTION
            </th>
            <th className="bg-gradient-to-r from-[#005288] to-[#1a7fba] text-white p-1.5 text-left font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wide border border-gray-200 whitespace-nowrap">
              TIME STOP
            </th>
            <th className="bg-gradient-to-r from-[#005288] to-[#1a7fba] text-white p-1.5 text-left font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wide border border-gray-200 whitespace-nowrap">
              HOURS
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              <td className="p-1.5 border border-gray-200 bg-white h-10 sm:h-9 min-w-[120px]">
                <select
                  className="w-full p-1 border border-gray-300 rounded text-[10px] sm:text-[11px] font-medium h-8 sm:h-7 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  value={row.engineer || ''}
                  onChange={(e) => onRowChange(rowIdx, 'engineer', e.target.value)}
                >
                  {engineerList.map((eng) => (
                    <option key={eng} value={eng}>{eng}</option>
                  ))}
                </select>
              </td>
              <td className="p-1.5 border border-gray-200 bg-white h-10 sm:h-9">
                <input
                  type="time"
                  className="w-full p-1 border border-gray-300 rounded text-[10px] sm:text-[11px] font-medium h-8 sm:h-7 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  value={row.timeStart}
                  onChange={(e) => handleTimeChange(rowIdx, 'timeStart', e.target.value)}
                />
              </td>
              <td className="p-1.5 border border-gray-200 bg-white h-10 sm:h-9">
                <input
                  type="date"
                  className="w-full p-1 border border-gray-300 rounded text-[10px] sm:text-[11px] font-medium h-8 sm:h-7 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  value={row.date}
                  onChange={(e) => onRowChange(rowIdx, 'date', e.target.value)}
                />
              </td>
              <td className="p-1.5 border border-gray-200 bg-white h-10 sm:h-9">
                <input
                  type="text"
                  className="w-full p-1 border border-gray-300 rounded text-[10px] sm:text-[11px] font-medium h-8 sm:h-7 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  placeholder="Description"
                  value={row.description}
                  onChange={(e) => onRowChange(rowIdx, 'description', e.target.value)}
                />
              </td>
              <td className="p-1.5 border border-gray-200 bg-white h-10 sm:h-9">
                <input
                  type="time"
                  className="w-full p-1 border border-gray-300 rounded text-[10px] sm:text-[11px] font-medium h-8 sm:h-7 transition-all focus:outline-none focus:border-[#005288] touch-manipulation"
                  value={row.timeStop}
                  onChange={(e) => handleTimeChange(rowIdx, 'timeStop', e.target.value)}
                />
              </td>
              <td className="p-1.5 border border-gray-200 bg-white h-10 sm:h-9 bg-gradient-to-r from-[#e8f4fc] to-[#f0f8ff]">
                <div className="text-[10px] sm:text-[11px] font-bold text-[#005288] text-center">
                  {row.hours}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
