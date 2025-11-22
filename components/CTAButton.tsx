"use client";

interface Props {
  label: string;
  onClick?: () => void;
  secondary?: boolean;
}

export default function CTAButton({ label, onClick, secondary }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition ${
        secondary
          ? "border border-gray-300 text-gray-800 hover:bg-gray-100"
          : "bg-purple-600 text-white hover:bg-purple-700"
      }`}
    >
      {label}
    </button>
  );
}