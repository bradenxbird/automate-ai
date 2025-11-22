"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold">Talk With Us</h2>
        <p className="text-gray-600 mt-2">
          Leave your email and we’ll reach out to help automate your business.
        </p>

        <input
          type="email"
          placeholder="you@example.com"
          className="mt-4 w-full px-4 py-2 border rounded-md"
        />

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => alert("Submitted!")}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}