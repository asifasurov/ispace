import React, { useContext } from 'react';
import { Link } from 'react-router'; // 1. Link import edildi
import { DATA } from './context/DataContext';

function ProductCategories() {
  const { mehsul } = useContext(DATA);

  const uniqueCategories = mehsul
    ? mehsul.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.category === item.category)
      )
    : [];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 font-sans">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-left">
        View all Apple products
      </h2>

      <div className="flex md:grid md:grid-cols-4 lg:grid-cols-8 gap-4 overflow-x-auto pb-4 md:pb-0 [scrollbar-width:none] [::-webkit-scrollbar]:hidden">
        {uniqueCategories.map((item) => (
          /* 2. div əvəzinə Link istifadə olunur */
          <Link
            key={item.id || item.category}
            to={`/category/${item.category}`}
            className="flex-shrink-0 w-[110px] md:w-auto flex flex-col items-center text-center group cursor-pointer p-2 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="h-20 w-full flex items-center justify-center mb-3">
              <img
                src={item.image}
                alt={item.category}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight">
              {item.category}
            </h3>
            <p className="text-[11px] md:text-xs text-gray-500 mt-1 whitespace-nowrap">
              From {item.price} ₼
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductCategories;