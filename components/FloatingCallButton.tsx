"use client";

import "../styles/FloatingCallButton.css";

import { useEffect, useState } from "react";

export default function FloatingCallButton() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    setShowBubble(true);
    setTimeout(() => setShowBubble(false), 8000); 
  }, []);

  return (
    <>
      {showBubble && ( 
        <div
          className="
  fixed bottom-24 right-6
  px-4 py-2.5
  rounded-2xl
  text-sm font-medium text-gray-900
  bg-white/80 backdrop-blur-xl 
  border border-white/40
  shadow-[0_6px_20px_rgba(0,0,0,0.10)]
  z-50 
  bubble-anim
"
        >
          Book a demo over the phone! 📆
        </div>
      )}

      <button 
        className="
          fixed bottom-6 right-6
          w-16 h-16 rounded-full
          bg-purple-600 text-white
          shadow-xl
          flex items-center justify-center
          z-50
          transition-transform duration-300
          hover:scale-105
        "
        onClick={() => alert('Calling AI Agent...')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8'
          viewBox='0 0 24 24'
          fill='white'
        >
          <path d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011-.24c1.12.37 2.33.57 3.59.57a1 1 0 011 1v3.49a1 1 0 01-.91 1c-10.45.83-19-7.72-18.17-18.17a1 1 0 011-.91H7a1 1 0 011 1c0 1.26.2 2.47.57 3.59a1 1 0 01-.24 1l-2.7 2.7z' />
        </svg>
      </button>
    </>
  );
}