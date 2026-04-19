// app/upload/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UploadPage() {
  // These are just for UI state — no logic yet
  const [hasImage, setHasImage] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Simple header with back button */}
      <div className="max-w-2xl mx-auto px-5 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 text-sm transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto px-5 pb-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Upload receipt</h1>
          <p className="text-gray-500 mt-2">Snap a photo or choose an image</p>
        </div>

        {/* Upload area - shown when no image selected */}
        {!hasImage && (
          <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 p-12 text-center hover:border-gray-400 hover:bg-gray-100 transition cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              {/* Upload icon */}
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium">
                  Click or drag to upload
                </p>
                <p className="text-gray-400 text-sm mt-1">JPG, PNG, or HEIC</p>
              </div>
              <button className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition">
                Browse files
              </button>
            </div>
          </div>
        )}

        {/* Preview area - shown when image is selected but not processing */}
        {hasImage && !isProcessing && (
          <div className="space-y-6">
            {/* Image preview */}
            <div className="bg-gray-100 rounded-2xl p-4">
              <div className="bg-gray-300 rounded-xl h-64 flex items-center justify-center text-gray-500">
                [Receipt preview]
              </div>
              <button className="mt-3 text-sm text-gray-500 hover:text-gray-900 transition">
                Replace image
              </button>
            </div>

            {/* Process button */}
            <button
              onClick={() => setIsProcessing(true)}
              className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition"
            >
              Extract data →
            </button>
          </div>
        )}

        {/* Processing state */}
        {hasImage && isProcessing && (
          <div className="bg-gray-50 rounded-2xl p-12 text-center space-y-4">
            <div className="w-10 h-10 border-3 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-700 font-medium">Reading receipt...</p>
            <p className="text-gray-400 text-sm">About 3 seconds</p>
          </div>
        )}

        {/* File limits */}
        <div className="mt-8 text-center text-xs text-gray-400">
          Max file size 5MB
        </div>
      </div>
    </div>
  );
}
