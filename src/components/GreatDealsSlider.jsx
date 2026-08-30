import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router'; // və ya 'react-router-dom'
import { GiScales } from "react-icons/gi";
import { DATA } from './context/DataContext';
import { BASKET } from './context/Basketcontext';

function GreatDealsSlider() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { mehsul } = useContext(DATA);
  const { addBasket } = useContext(BASKET);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [mehsul]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10 font-sans relative group">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
        Great deals for the new school year
      </h2>

      {/* Sol Ox Düyməsi */}
      {canScrollLeft && (
        <button
          onClick={() => handleScroll('left')}
          aria-label="Previous"
          className="hidden md:flex absolute left-2 top-[55%] -translate-y-1/2 z-20 w-11 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-full items-center justify-center shadow-lg transition-all cursor-pointer active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Sağ Ox Düyməsi */}
      {canScrollRight && (
        <button
          onClick={() => handleScroll('right')}
          aria-label="Next"
          className="hidden md:flex absolute right-2 top-[55%] -translate-y-1/2 z-20 w-11 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-full items-center justify-center shadow-lg transition-all cursor-pointer active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Slider Konteyneri */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [::-webkit-scrollbar]:hidden snap-x snap-mandatory px-2 md:px-8"
      >
        {mehsul && mehsul.map((item) => (
          <div
            key={item.id}
            className="snap-center flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl p-6 flex flex-col justify-between items-center text-center relative border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/card"
          >
            {/* Müqayisə İkonu (Z-index ilə Link-in üstündə saxlanılır) */}
            <button 
              aria-label="Compare" 
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer z-10"
            >
              <GiScales className="w-5 h-5" />
            </button>

            {/* Kliklənən Məhsul Keçid Sahəsi */}
            <Link
              to={`/product/${item.slug || item.id}`}
              className="w-full flex flex-col items-center flex-grow justify-between cursor-pointer"
            >
              {/* Şəkil */}
              <div className="h-52 w-full flex items-center justify-center mb-4">
                <img 
                  src={item.img || item.image} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain pointer-events-none group-hover/card:scale-105 transition-transform duration-300" 
                />
              </div>

              {/* Məhsul Məlumatı */}
              <div className="flex flex-col items-center flex-grow justify-between w-full">
                <div>
                  {item.badge && (
                    <span className={`text-[11px] font-bold tracking-wider block mb-2 uppercase ${item.badgeColor || 'text-blue-500'}`}>
                      {item.badge}
                    </span>
                  )}
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-3 min-h-[40px]">
                    {item.title}
                  </h3>
                </div>

                <div className="w-full mb-4">
                  <p className="text-base font-bold text-gray-900">
                    {typeof item.price === 'number' ? `${item.price} ₼` : item.price}
                  </p>
                </div>
              </div>
            </Link>

            {/* Səbətə Əlavə Etmə Düyməsi (Link kənarındadır, səhifə dəyişmir) */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                addBasket(item);
              }}
              className="w-full px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors cursor-pointer active:scale-95 z-10"
            >
              Buy now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GreatDealsSlider;