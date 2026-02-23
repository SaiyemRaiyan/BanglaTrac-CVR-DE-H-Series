'use client';

interface SignatureBoxProps {
  label: string;
}

function SignatureBox({ label }: SignatureBoxProps) {
  return (
    <div className="flex-1 text-center px-8">
      <div className="font-bold text-[#1a5f9e] mb-4 text-base uppercase tracking-wide">
        {label}
      </div>
      <div className="h-0.5 bg-gray-700 my-6"></div>
      <div className="text-sm text-gray-600">Name & Date</div>
    </div>
  );
}

export default function SignatureSection() {
  return (
    <div className="flex justify-between mt-8 pt-6 border-t-2 border-dashed border-gray-300">
      <SignatureBox label="Signature of Service Engineer" />
      <SignatureBox label="Signature of Customer Representative" />
    </div>
  );
}

