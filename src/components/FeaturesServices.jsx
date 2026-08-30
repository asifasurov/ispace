import React from 'react';

function FeaturesServices() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-12 font-sans border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        <div className="flex flex-col items-center text-center px-4">
          <div className="mb-4 text-gray-800">
            <svg className="w-10 h-10 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
            Get expert service and support
          </h3>
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed mb-4">
            From setting up your device to recovering your Apple ID to replacing the screen, Apple Support has you covered.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center gap-1 group">
            Learn more 
            <span className="transition-transform group-hover:translate-x-0.5">&gt;</span>
          </a>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <div className="mb-4 text-blue-600">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="2" y1="10" x2="22" y2="10" strokeWidth="1.5" />
              <rect x="5" y="14" width="3" height="2" rx="0.5" fill="currentColor" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
            Financing and Credit Plans
          </h3>
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed mb-4">
            With our credit programs, Apple easily fits into your budget.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center gap-1 group">
            Learn more 
            <span className="transition-transform group-hover:translate-x-0.5">&gt;</span>
          </a>
        </div>

        <div className="flex flex-col items-center text-center px-4">
          <div className="mb-4 text-gray-800">
            <svg className="w-10 h-10 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h4l3 3v5a1 1 0 01-1 1h-1m-6 0a2 2 0 004 0m-5 0a2 2 0 01-4 0" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
            Buy online, pick up in store
          </h3>
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed mb-4">
            Place your order online and pick it up at a local Store.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center gap-1 group">
            Learn more 
            <span className="transition-transform group-hover:translate-x-0.5">&gt;</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default FeaturesServices;