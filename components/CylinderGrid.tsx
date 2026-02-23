'use client';

interface CylinderGridProps {
  startNumber: number;
  endNumber: number;
  label: string;
  unit?: string;
  onValueChange?: (cylinder: number, value: string) => void;
}

export default function CylinderGrid({
  startNumber,
  endNumber,
  label,
  unit = '°C/°F',
  onValueChange,
}: CylinderGridProps) {
  const cylinders = Array.from({ length: endNumber - startNumber + 1 }, (_, i) => startNumber + i);

  return (
    <div className="w-full my-2">
      {label && <div className="text-xs sm:text-sm font-bold text-[#005288] mb-1.5">{label}</div>}
      <div className="w-full grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
        {cylinders.map((num) => (
          <div
            key={num}
            className="border border-[#e2e8f0] p-2 text-center bg-gradient-to-b from-white to-[#f8fafc] rounded-lg shadow-sm"
          >
            <div className="font-extrabold text-[#005288] mb-1 text-xs sm:text-sm">{num}</div>
            <input
              type="text"
              className="form-input w-full p-1.5 text-center text-sm min-h-[2.5rem] sm:min-h-0"
              placeholder={unit}
              onChange={(e) => onValueChange?.(num, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

