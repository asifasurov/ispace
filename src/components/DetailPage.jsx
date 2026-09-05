import React, { useContext } from 'react';
import { useParams } from 'react-router'; 
import { GiScales } from 'react-icons/gi';
import { FiInfo } from 'react-icons/fi';
import { DATA } from './context/DataContext';
import { BASKET } from './context/Basketcontext';

function DetailPage() {
  const params = useParams();
  const paramValue = params.productDetail || params.slug || params.id;

  const { mehsul } = useContext(DATA);
  const { addBasket } = useContext(BASKET);

  const product = mehsul?.find(
    (item) => String(item.id) === String(paramValue) || item.slug === paramValue
  );

  if (!product) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center text-gray-500 font-sans">
        Məhsul tapılmadı və ya yüklənir...
      </div>
    );
  }

  const memoryList = Array.isArray(product.memory)
    ? product.memory
    : product.memory || product.storage
    ? [product.memory || product.storage]
    : [];

  const seriesList = Array.isArray(product.series)
    ? product.series
    : product.series || product.model
    ? [product.series || product.model]
    : [];

  const colors = Array.isArray(product.colors)
    ? product.colors
    : product.color
    ? [product.color]
    : [];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Sol Tərəf - Məhsul Şəkli */}
        <div className="w-full flex items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm min-h-[420px] md:min-h-[520px]">
          <img
            src={product.image || product.img}
            alt={product.title}
            className="max-h-[450px] w-auto object-contain transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Sağ Tərəf - Məhsul Detalları */}
        <div className="flex flex-col space-y-6">
          <div>
            {product.badge && (
              <div className="flex items-center gap-3 mb-2 text-xs font-bold tracking-wider uppercase">
                <span className="text-blue-600">{product.badge}</span>
              </div>
            )}

            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              {product.title}
            </h1>

            {product.sku && (
              <p className="text-xs text-gray-400 mt-2">
                SKU: {product.sku}
              </p>
            )}

            <button className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-gray-800 transition cursor-pointer mt-3">
              <GiScales className="w-4 h-4" />
              <span>Compare</span>
            </button>
          </div>

          {/* Qiymət Bloku */}
          <div className="space-y-1">
            <div className="text-3xl font-bold text-gray-900">
              {typeof product.price === 'number' ? `${product.price} ₼` : product.price}
            </div>
            {product.installment && (
              <p className="text-xs text-gray-600 font-medium">
                {product.installment}
              </p>
            )}
          </div>

          {/* Datadan Gələn Rəng Hissəsi */}
          {colors.length > 0 && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Color - <span className="font-semibold text-gray-900">{colors[0]}</span>
              </label>
              <div className="flex items-center gap-2">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-semibold border border-blue-600 text-blue-600 bg-blue-50/30"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Datadan Gələn Seriya Hissəsi */}
          {seriesList.length > 0 && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">Series</label>
              <div className="flex flex-col gap-2">
                {seriesList.map((series, index) => (
                  <div
                    key={index}
                    className="w-full py-3 px-4 rounded-xl text-xs font-medium border border-blue-600 text-gray-900 bg-blue-50/20 shadow-sm"
                  >
                    {series}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Datadan Gələn Yaddaş Hissəsi */}
          {memoryList.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <label className="text-xs font-medium text-gray-700">Memory</label>
                <FiInfo className="w-3.5 h-3.5 text-gray-400 cursor-pointer" />
              </div>
              <div className="flex flex-col gap-2">
                {memoryList.map((mem, index) => (
                  <div
                    key={index}
                    className="w-full py-3 px-4 rounded-xl text-xs font-semibold border border-blue-600 text-gray-900 bg-blue-50/20 shadow-sm"
                  >
                    {mem}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Səbətə Əlavə Et Düyməsi */}
          <div className="pt-4">
            <button
              onClick={() => addBasket(product)}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
            >
              Add to Basket
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DetailPage;