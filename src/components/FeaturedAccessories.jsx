import React, { useContext } from 'react';
import { DATA } from './context/DataContext';
import { Link } from 'react-router';

function FeaturedAccessories() {
  const { mehsul } = useContext(DATA);

  const accessoryProducts = mehsul
    ? mehsul
        .filter((item) => {
          const cat = item.category?.toLowerCase() || '';
          return cat === 'accessory' || cat === 'accessories' || cat === 'aksesuar';
        })
        .slice(0, 4) 
    : [];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 font-sans">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-left">
        Featured Apple Accessories
      </h2>

      {/* Grid Layout  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {accessoryProducts.length > 0 ? (
          accessoryProducts.map((item) => (
            <Link
              key={item.id}
              to={`/category/${item.category}`}
              className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer min-h-[380px] group"
            >
              {/* Məhsul Şəkli */}
              <div className="h-48 w-full flex items-center justify-center mb-6">
                <img
                  src={item.img || item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Məhsul Məlumatları */}
              <div>
                <span className="text-[11px] font-bold text-orange-600 tracking-wider block mb-1 uppercase">
                  {item.badge || 'NEW'}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                  {item.title}
                </h3>
                
                <p className="text-xs font-medium text-gray-600 mb-6">
                  {item.subtitle || `Shop ${item.title}`}
                </p>
                
                <p className="text-xs text-gray-500 font-semibold">
                  From {typeof item.price === 'number' ? `${item.price} ₼` : item.price}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-sm col-span-full text-center py-8">
            No accessories found.
          </p>
        )}
      </div>
    </section>
  );
}

export default FeaturedAccessories;