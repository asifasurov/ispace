import React, { useContext } from 'react';
import { DATA } from './context/DataContext';

function SeeWhatsNew() {
  const { mehsul } = useContext(DATA);

  const uniqueCategoryProducts = mehsul
    ? mehsul.filter(
        (item, index, self) =>
          item.category &&
          index === self.findIndex((t) => t.category === item.category)
      )
    : [];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 font-sans">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-left">
        See what's new
      </h2>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:pb-0 [scrollbar-width:none] [::-webkit-scrollbar]:hidden">
        {uniqueCategoryProducts.length > 0 ? (
          uniqueCategoryProducts.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div>
                {/* Şəkil */}
                <div className="h-48 w-full flex items-center justify-center mb-6">
                  <img
                    src={item.img || item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Status və Başlıq */}
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                  {item.badge || 'NEW'}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-gray-800 mt-1 line-clamp-1">
                  {item.subtitle || item.category}
                </p>
              </div>

              {/* Qiymət Məlumatı */}
              <p className="text-xs text-gray-500 mt-6 leading-relaxed font-semibold">
                From {typeof item.price === 'number' ? `${item.price} ₼` : item.price}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm col-span-full text-center py-8">
            No new products available.
          </p>
        )}
      </div>
    </section>
  );
}

export default SeeWhatsNew;