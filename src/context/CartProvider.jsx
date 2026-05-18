import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId, quantity) => {
    const qty = Number(quantity) || 0;
    if (qty <= 0) return;

    setCart((prev) => {
      const existing = prev.find((i) => i.productId === productId);

      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + qty } : i,
        );
      }

      return [...prev, { productId, quantity: qty }];
    });
  };

  const deleteFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.productId !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

