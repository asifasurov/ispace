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

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

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

  const decreaseQuantity = (id) => {
    setBasket((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, count: (item.count || 1) - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const totalPrice = basket.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (item.count || 1),
    0
  );

  const totalCount = basket.reduce(
    (acc, item) => acc + (item.count || 1),
    0
  );

  return (
    <BASKET.Provider
      value={{
        basket, setBasket, addBasket, decreaseQuantity,removeFromBasket, clearBasket, totalPrice, totalCount,}}
    >
      {children}
    </BASKET.Provider>
  );
}

export default Basketcontext;