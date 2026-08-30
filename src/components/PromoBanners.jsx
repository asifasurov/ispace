import React from 'react';

function PromoBanners() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 font-sans space-y-6">
      
      {/* 1. Trade In */}
      <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center min-h-[300px]">
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img 
            src="https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/h:728/rt:fill/plain/s3://cms/static-pages/17/1d/171d5580fcaaf03498073adf7346e3a3/neo00408_1.webp" 
            alt="Trade In" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trade In</h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-xs leading-relaxed">
            Upgrade your MacBook and iPhone via Trade In on iSpace
          </p>
          <button className="px-8 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer">
            Select
          </button>
        </div>
      </div>

      {/* 2. Loyalty Program */}
      <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden flex flex-col-reverse md:flex-row items-center min-h-[300px]">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Loyalty Program</h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-xs leading-relaxed">
            Shop at iSpace - get more bonuses. Exchange your bonuses for up to 30% on new purchases.
          </p>
          <button className="px-8 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer">
            Select
          </button>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img 
            src="https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/h:728/rt:fill/plain/s3://cms/rich-block/9e/ee/9eeeb3684b367ae3bdb856f60f0d8517/20250107_dsc04861_1_1.webp" 
            alt="Loyalty Program" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. Blog */}
      <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center min-h-[300px]">
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img 
            src="https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/h:728/rt:fill/plain/s3://cms/rich-block/f8/5f/f85fafb86bd30f1753eded15317ef171/image_1_1.webp" 
            alt="Blog" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Blog</h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-xs leading-relaxed">
            News, press releases, lifehacks, reviews and other useful information
          </p>
          <button className="px-8 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-600 hover:text-white transition cursor-pointer">
            Select
          </button>
        </div>
      </div>

    </section>
  );
}

export default PromoBanners;