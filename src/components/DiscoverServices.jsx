import React from 'react';

function DiscoverServices() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 font-sans">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-left">
        Discover services and more
      </h2>

      {/* Grid / Horizontal Scroll Konteyneri */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 [scrollbar-width:none] [::-webkit-scrollbar]:hidden">
        
        {/* 1. BACK TO SCHOOL */}
        <div className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-auto bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-[180px]">
          <div>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-2">
              BACK TO SCHOOL
            </span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
              Special offers on <span className="text-blue-600">Apple devices.</span>
            </h3>
          </div>
        </div>

        {/* 2. DELIVERY AND PICKUP */}
        <div className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-auto bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-[180px]">
          <div>
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
              DELIVERY AND PICKUP
            </span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
              <span className="text-gray-400 font-normal">Order online</span> and get home delivery.
            </h3>
          </div>
        </div>

        {/* 3. FINANCING */}
        <div className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-auto bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-[180px]">
          <div>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-2">
              FINANCING
            </span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
              Get special financing. <span className="text-blue-600">Pay over time, interest-free.</span>
            </h3>
          </div>
        </div>

        {/* 4. SALE */}
        <div className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-auto bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-[180px]">
          <div>
            <span className="text-[11px] font-bold text-green-600 uppercase tracking-wider block mb-2">
              SALE
            </span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
              <span className="text-green-600">Find low everyday prices and buy</span> online for delivery or in-store pick-up.
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DiscoverServices;