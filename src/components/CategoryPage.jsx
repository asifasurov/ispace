import { useParams, Link } from "react-router"; 
import { useContext, useState, useMemo } from "react";
import { DATA } from "./context/DataContext";
import { BASKET } from "./context/Basketcontext";

function CategoryPage() {
  const { categoryName } = useParams();
  const { mehsul } = useContext(DATA);
  const {addBasket} = useContext(BASKET)

  const [selectedFilters, setSelectedFilters] = useState({});
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const categoryProducts = useMemo(() => {
    return mehsul
      ? mehsul.filter(
          (item) => item.category?.toLowerCase() === categoryName?.toLowerCase()
        )
      : [];
  }, [mehsul, categoryName]);

  const dynamicFilterOptions = useMemo(() => {
    const options = {};

    categoryProducts.forEach((product) => {
      if (product.filt) {
        Object.entries(product.filt).forEach(([key, value]) => {
          if (!options[key]) {
            options[key] = new Set();
          }
          if (value) options[key].add(value);
        });
      }
    });

    const formattedOptions = {};
    Object.keys(options).forEach((key) => {
      formattedOptions[key] = Array.from(options[key]);
    });

    return formattedOptions;
  }, [categoryProducts]);

  const handleFilterChange = (filterKey, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[filterKey] || [];
      const isSelected = currentValues.includes(value);

      const updatedValues = isSelected
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [filterKey]: updatedValues,
      };
    });
  };

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((product) => {
      const price = Number(product.price) || 0;
      if (minPrice && price < Number(minPrice)) return false;
      if (maxPrice && price > Number(maxPrice)) return false;

      for (const [key, selectedValues] of Object.entries(selectedFilters)) {
        if (selectedValues.length > 0) {
          const productValue = product.filt?.[key];
          if (!selectedValues.includes(productValue)) {
            return false;
          }
        }
      }

      return true;
    });
  }, [categoryProducts, selectedFilters, minPrice, maxPrice]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 min-h-[60vh] font-sans text-gray-900">
      <h1 className="text-3xl md:text-4xl font-semibold capitalize mb-6 pb-4 border-b border-gray-200">
        {categoryName}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sol Filter Paneli */}
        <div className="w-full lg:w-64 flex-shrink-0 text-xs">
          <div className="py-4 border-b border-gray-200">
            <div className="font-semibold text-gray-800 mb-2">Price, ₼</div>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="From"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="To"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full border border-gray-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {Object.entries(dynamicFilterOptions).map(([filterKey, options]) => (
            <div key={filterKey} className="py-3.5 border-b border-gray-200">
              <span className="font-semibold text-gray-800 uppercase tracking-wider block mb-2">
                {filterKey}
              </span>
              <div className="flex flex-col gap-1.5">
                {options.map((optionValue) => {
                  const isChecked =
                    selectedFilters[filterKey]?.includes(optionValue) || false;

                  return (
                    <label
                      key={optionValue}
                      className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-600 capitalize"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleFilterChange(filterKey, optionValue)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <span>{String(optionValue).replace(/-/g, " ")}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sağ Məhsul Bölməsi */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs text-gray-500 font-medium">
              {filteredProducts.length} Products
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-6">
              {filteredProducts.map((product) => {
                const numericPrice = Number(product.price) || 0;
                const monthlyPrice = Math.round(numericPrice / 24);
                const formattedPrice = numericPrice.toLocaleString("fr-FR");

                return (
                  <div
                    key={product.id}
                    className="group relative flex flex-col justify-between items-center text-center p-3 rounded-xl transition duration-200 hover:shadow-md border border-transparent hover:border-gray-100"
                  >
                    {/* Müqayisə ikonu */}
                    <button
                      aria-label="Compare product"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Müqayisə funksiyası buraya
                      }}
                      className="text-gray-400 hover:text-gray-700 mb-4 transition-colors z-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v17.25m0 0l-3.75-3.75M12 20.25l3.75-3.75M3 12h18"
                        />
                      </svg>
                    </button>

                    {/* Məhsul Keçid Linki  */}
                    <Link
                      to={`/product/${product.slug}`}
                      className="w-full flex flex-col items-center flex-grow justify-between cursor-pointer"
                    >
                      {/* Məhsul Şəkli */}
                      <div className="w-full h-44 sm:h-52 flex items-center justify-center mb-4 px-2">
                        <img
                          src={product.image }
                          alt={product.title}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="w-full flex flex-col items-center flex-grow justify-between">
                        {/* Promosyon / Etiketlər Bölməsi */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-medium leading-tight mb-2">
                          {product.isNew && (
                            <span className="text-[#d9480f] font-bold">NEW</span>
                          )}
                          <span className="text-indigo-600 font-semibold">0 | 0 | 21</span>
                          <span className="text-emerald-600 font-semibold">3% STUDENT BENEFIT</span>
                        </div>

                        {/* Məhsul Başlığı */}
                        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-3 line-clamp-2 leading-snug max-w-[240px]">
                          {product.title}
                        </h3>

                        {/* Qiymət Bölməsi */}
                        <div className="mb-4">
                          <p className="text-gray-900 font-bold text-base sm:text-lg mb-0.5">
                            {formattedPrice} ₼
                          </p>
                          <p className="text-gray-500 text-[11px] sm:text-xs">
                            From {monthlyPrice} ₼/mon. for 24 months
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Əlavə et Düyməsi  */}
                    <button
                      onClick={() => addBasket(product.id, product.title, product.price, product.image, product.category )}
                      className="bg-[#0071e3] hover:bg-blue-600 active:scale-95 text-white font-medium text-xs sm:text-sm py-2.5 px-6 rounded-full transition-all duration-200 mt-2 z-10"
                    >
                      Add to cart
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">
              Seçilmiş filterlərə uyğun məhsul tapılmadı.
            </p>
          )}
        </main>
      </div>
    </div>
  );
}

export default CategoryPage;