import React, { createContext, useState, useEffect } from "react";

export const BASKET = createContext();

function Basketcontext({ children }) {
  // 1. LocalStorage-dən səbəti oxuyuruq
  const [basket, setBasket] = useState(() => {
    try {
      const saved = localStorage.getItem("basket");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 2. Səbət hər dəfə dəyişdikdə LocalStorage-i yeniləyirik
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  // 3. Səbətə məhsul əlavə etmək (Həm obyekt, həm tək-tək argument dəstəkləyir)
  const addBasket = (idOrProduct, title, price, image, category) => {
    const product =
      typeof idOrProduct === "object" && idOrProduct !== null
        ? idOrProduct
        : { id: idOrProduct, title, price, image, category };

    setBasket((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  // 4. Məhsulun sayını 1 vahid azaltmaq
  const decreaseQuantity = (id) => {
    setBasket((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: (item.count || 1) - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // 5. Məhsulu səbətdən tamamilə silmək
  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  // 6. Səbəti tam təmizləmək
  const clearBasket = () => {
    setBasket([]);
  };

  // 7. Ümumi məbləğ hesablanması
  const totalPrice = basket.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (item.count || 1),
    0
  );

  // 8. Səbətdəki ümumi məhsul sayısı (Badge üçün)
  const totalCount = basket.reduce(
    (acc, item) => acc + (item.count || 1),
    0
  );

  return (
    <BASKET.Provider
      value={{
        basket,
        setBasket,
        addBasket,
        decreaseQuantity,
        removeFromBasket,
        clearBasket,
        totalPrice,
        totalCount,
      }}
    >
      {children}
    </BASKET.Provider>
  );
}

export default Basketcontext;