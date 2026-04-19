'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 sm:px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <path d="M8 7h8" />
              <path d="M8 12h8" />
              <path d="M8 17h5" />
            </svg>
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            ReceiptSnap
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            How it works
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Pricing
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1.5">
            Log in
          </button>
          <button className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded-md hover:bg-gray-800">
            Sign up free
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-gray-100 space-y-2">
          <a href="#" className="block text-gray-700 py-2">
            Features
          </a>
          <a href="#" className="block text-gray-700 py-2">
            How it works
          </a>
          <a href="#" className="block text-gray-700 py-2">
            Pricing
          </a>
          <div className="pt-2 space-y-2">
            <button className="w-full text-gray-700 py-2 text-left">
              Log in
            </button>
            <button className="w-full bg-gray-900 text-white py-2 rounded-md">
              Sign up free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
