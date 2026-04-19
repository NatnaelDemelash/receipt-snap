'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 px-4">
      <header className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 px-5 py-3">
        <div className="flex items-center justify-between">
          {/* Logo left side */}
          <div className="flex items-center gap-2">
            {/* Green pulse dot */}
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm font-mono uppercase tracking-wider text-gray-900 font-semibold">
              ReceiptSnap
            </span>
          </div>

          {/* Desktop Navigation - center */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Sign in
            </a>
            <button className="bg-gray-900 text-white px-4 py-1.5 rounded-xl text-sm hover:bg-gray-800 transition shadow-sm">
              Get started
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 rounded-lg hover:bg-gray-100 transition"
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
          <div className="md:hidden mt-3 pt-3 border-t border-gray-100 space-y-3">
            <a href="#" className="block text-gray-700 text-sm py-1">
              Pricing
            </a>
            <a href="#" className="block text-gray-700 text-sm py-1">
              Sign in
            </a>
            <button className="w-full bg-gray-900 text-white py-2 rounded-xl text-sm mt-2">
              Get started
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
