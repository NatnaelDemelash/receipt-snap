'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);

  const goToUploadPage = () => {
    router.push('/upload');
  };

  return (
    <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
      {/* Main Heading - improved word spacing */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center text-gray-900 leading-[1.2] tracking-[-0.02em]">
        STOP <span className="inline-block mx-1">TYPING</span>,<br />
        START <span className="inline-block mx-1">SNAPPING</span>.
      </h1>

      {/* Subheading - shorter, punchier, better spacing */}
      <p className="text-sm sm:text-base text-gray-500 text-center max-w-md mx-auto mt-6 uppercase tracking-wide">
        PAPER RECEIPTS → CLEAN CSV
      </p>
      <p className="text-xs text-gray-400 text-center max-w-sm mx-auto mt-2 uppercase tracking-wide">
        IN 3 SECONDS. NO TYPING.
      </p>

      {/* Buttons with icons - uppercase text */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10">
        <button
          className="px-6 py-2.5 bg-gray-900 text-white rounded-md text-xs uppercase tracking-wide hover:bg-gray-800 transition flex items-center justify-center gap-2"
          onClick={goToUploadPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          GET STARTED FREE
        </button>

        <button
          onClick={() => setIsDemoPlaying(true)}
          className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md text-xs uppercase tracking-wide hover:bg-gray-50 transition flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          WATCH DEMO
        </button>
      </div>

      {/* Demo Modal */}
      {isDemoPlaying && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setIsDemoPlaying(false)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                HOW IT WORKS
              </h3>
              <button
                onClick={() => setIsDemoPlaying(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
            <div className="p-6 text-center">
              <div className="bg-gray-100 rounded-lg p-8 mb-4">
                <span className="text-4xl">📸</span>
                <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide">
                  SNAP → EXTRACT → CSV
                </p>
              </div>
              <p className="text-xs text-gray-600 uppercase tracking-wide">
                DEMO VIDEO COMING SOON
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Simple stats - uppercase */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-gray-100 pt-8">
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">3 SEC</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wide">
            PER RECEIPT
          </div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">CSV</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wide">
            INSTANT EXPORT
          </div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">NO TYPING</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wide">
            FULLY AUTOMATIC
          </div>
        </div>
      </div>

      {/* Receipt Preview Card */}
      <div className="mt-12 max-w-2xl mx-auto">
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
            </div>
            <span className="text-[10px] text-gray-500 text-center flex-1 uppercase tracking-wide">
              RECEIPT PREVIEW
            </span>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Receipt mock */}
              <div className="bg-gray-50 rounded p-4 border border-gray-200">
                <div className="text-[10px] text-gray-400 mb-2 uppercase tracking-wide">
                  📷 RECEIPT PHOTO
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-1.5 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-1.5 bg-gray-300 rounded w-full"></div>
                  <div className="h-1.5 bg-gray-300 rounded w-2/3"></div>
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 uppercase">TOTAL:</span>
                      <span className="font-medium text-gray-900">$47.28</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extracted data */}
              <div>
                <div className="text-[10px] text-gray-400 mb-2 uppercase tracking-wide">
                  ✓ EXTRACTED DATA
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-gray-100 pb-1.5">
                    <span className="text-gray-500 uppercase">STORE</span>
                    <span className="text-gray-900">WHOLE FOODS</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1.5">
                    <span className="text-gray-500 uppercase">DATE</span>
                    <span className="text-gray-900">DEC 15, 2024</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-1.5">
                    <span className="text-gray-500 uppercase">AMOUNT</span>
                    <span className="text-gray-900 font-medium">$47.28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 uppercase">TAX</span>
                    <span className="text-gray-900">$3.78</span>
                  </div>
                  <button className="w-full mt-3 text-[10px] bg-gray-900 text-white py-1.5 rounded uppercase tracking-wide hover:bg-gray-800">
                    EXPORT TO CSV →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
