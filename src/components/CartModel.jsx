import React, { useContext } from "react";
import { BASKET } from "./context/Basketcontext";

export function CartModal({ isOpen, onClose }) {
  const {
    basket,
    addBasket,
    decreaseQuantity,
    removeFromBasket,
    clearBasket,
    totalPrice,
  } = useContext(BASKET);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md h-full flex flex-col p-6 shadow-2xl relative">
        {/* Başlıq */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Səbətim</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Məhsullar Siyahısı */}
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-4">
          {basket.length === 0 ? (
            <p className="text-center text-gray-500 my-auto">
              Səbətiniz boşdur.
            </p>
          ) : (
            basket.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3 border rounded-xl bg-gray-50"
              >
                <img
                  src={item.image || item.img}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-xs text-gray-900 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-blue-600 font-bold text-sm mt-0.5">
                    {item.price} ₼
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="text-xs font-semibold">{item.count}</span>
                    <button
                      onClick={() => addBasket(item)}
                      className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="text-gray-400 hover:text-red-600 transition p-1 text-sm"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Alt Hissə - Məbləğ */}
        {basket.length > 0 && (
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
            <div className="flex justify-between items-center font-bold text-base">
              <span>Cəmi məbləğ:</span>
              <span className="text-blue-600">
                {totalPrice.toLocaleString("fr-FR")} ₼
              </span>
            </div>

            <button className="w-full bg-[#0071e3] hover:bg-blue-600 text-white font-medium py-3 rounded-full transition">
              Sifarişi rəsmiləşdir
            </button>

            <button
              onClick={clearBasket}
              className="w-full text-xs text-red-500 hover:underline text-center"
            >
              Səbəti təmizlə
            </button>
          </div>
        )}
      </div>
    </div>
  );
}