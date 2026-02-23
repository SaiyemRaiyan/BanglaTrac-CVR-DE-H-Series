'use client';

interface TableCell {
  label?: string;
  inputType?: 'text' | 'number' | 'date';
  placeholder?: string;
  value?: string;
  colspan?: number;
}

interface DataTableProps {
  headers: string[];
  rows: TableCell[][];
  className?: string;
}

export default function DataTable({ headers, rows, className = '' }: DataTableProps) {
  return (
    <div className="w-full overflow-x-auto -webkit-overflow-scrolling-touch rounded-lg border border-[#e2e8f0] shadow-sm overflow-hidden">
      <table className={`w-full border-collapse my-0 text-xs sm:text-sm min-w-full ${className}`}>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="bg-gradient-to-r from-[#005288] via-[#0e5a8a] to-[#1a5f9e] text-white px-3 py-2.5 sm:py-2 text-left font-bold text-xs sm:text-sm uppercase tracking-wide border-b border-white/20 whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className={rowIdx % 2 === 1 ? 'bg-[#f8fafc]' : 'bg-white'}>
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-3 py-2 border-b border-[#e2e8f0] min-h-[2.75rem] sm:min-h-0"
                  colSpan={cell.colspan}
                >
                  {cell.label ? (
                    <strong className="text-xs sm:text-sm text-[#1a202c]">{cell.label}</strong>
                  ) : (
                    <input
                      type={cell.inputType || 'text'}
                      className="form-input w-full min-h-[2.5rem] sm:min-h-0 py-1.5 text-sm sm:text-base"
                      placeholder={cell.placeholder}
                      defaultValue={cell.value}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

