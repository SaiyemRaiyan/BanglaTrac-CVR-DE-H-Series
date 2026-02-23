'use client';

import { useState } from 'react';

export default function Page12() {
  const emptyRow = {
    partsName: '',
    partsNo: '',
    requiredQty: '',
    receivedQty: '',
    usedQty: '',
    unit: '',
    status: '',
    remarks: '',
  };

  const [rows, setRows] = useState(Array.from({ length: 30 }, () => ({ ...emptyRow })));

  const handleChange = (index: number, field: string, value: string) => {
    const clone = [...rows];
    // @ts-ignore
    clone[index][field] = value;
    setRows(clone);
  };

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-bold text-[#005288]">Used Parts Report</h3>
        <p className="text-xs text-gray-500">(Fill parts used during repair/overhauling)</p>
      </div>

      {/* Customer info on last page */}
      <div className="mb-4 bg-white p-3 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div>
            <label className="block text-xs font-semibold mb-1">Customer Name</label>
            <input className="w-full px-2 py-1 border rounded text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Delivery Challan No.</label>
            <input className="w-full px-2 py-1 border rounded text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Date</label>
            <input type="date" className="w-full px-2 py-1 border rounded text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">MCO & W/O</label>
            <input className="w-full px-2 py-1 border rounded text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Engine Serial No.</label>
            <input className="w-full px-2 py-1 border rounded text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Engine Model</label>
            <input className="w-full px-2 py-1 border rounded text-sm" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border rounded-lg bg-white shadow-sm">
        <table className="w-full min-w-[980px] text-sm border-collapse">
          <thead>
            <tr className="bg-[#f3f7fb]">
              <th className="p-2 border">S/L no.</th>
              <th className="p-2 border">Parts Name</th>
              <th className="p-2 border">Parts no.</th>
              <th className="p-2 border">Required Parts Qty.</th>
              <th className="p-2 border">Received Parts Qty.</th>
              <th className="p-2 border">Used Parts Qty.</th>
              <th className="p-2 border">Unit</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-[#fbfeff]">
                <td className="p-2 border text-center">{idx + 1}</td>
                <td className="p-1 border">
                  <input
                    value={r.partsName}
                    onChange={(e) => handleChange(idx, 'partsName', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                  />
                </td>
                <td className="p-1 border">
                  <input
                    value={r.partsNo}
                    onChange={(e) => handleChange(idx, 'partsNo', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                  />
                </td>
                <td className="p-1 border">
                  <input
                    value={r.requiredQty}
                    onChange={(e) => handleChange(idx, 'requiredQty', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                  />
                </td>
                <td className="p-1 border">
                  <input
                    value={r.receivedQty}
                    onChange={(e) => handleChange(idx, 'receivedQty', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                  />
                </td>
                <td className="p-1 border">
                  <input
                    value={r.usedQty}
                    onChange={(e) => handleChange(idx, 'usedQty', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                  />
                </td>
                <td className="p-1 border">
                  <input
                    value={r.unit}
                    onChange={(e) => handleChange(idx, 'unit', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                  />
                </td>
                <td className="p-1 border">
                  <input
                    value={r.status}
                    onChange={(e) => handleChange(idx, 'status', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                  />
                </td>
                <td className="p-1 border">
                  <input
                    value={r.remarks}
                    onChange={(e) => handleChange(idx, 'remarks', e.target.value)}
                    className="w-full px-2 py-1 border border-gray-200 rounded text-sm"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
        <div>
          <div className="font-semibold">Team Leader:</div>
          <div className="mt-2">Name: ____________________</div>
          <div className="mt-1">Signature: ____________________</div>
        </div>
        <div>
          <div className="font-semibold">Delivery By (Customer):</div>
          <div className="mt-2">Name: ____________________</div>
          <div className="mt-1">Signature: ____________________</div>
        </div>
        <div>
          <div className="font-semibold">Authorize Signature:</div>
          <div className="mt-2">Name: ____________________</div>
          <div className="mt-1">Signature: ____________________</div>
        </div>
      </div>
    </div>
  );
}
