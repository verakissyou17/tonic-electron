import { useState, useEffect, useMemo } from "react";
import { CartContext } from "./CartContext";
import { useProducts } from "../context/useProducts.js";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const { products } = useProducts();

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

  const matchingItems = useMemo(() => {
    if (!products || products.length === 0) return [];

    return cart
      .map((cartItem) => {
        const product = products.find(
          (product) => product.id === cartItem.productId,
        );
        return { ...cartItem, product };
      })
      .filter((item) => item.product);
  }, [cart, products]);


 const totalCart = useMemo(() => {
  return matchingItems.reduce((prev, curr) => {
    return prev + (curr.product.price / 100) * curr.quantity
  }, 0)
 }, [matchingItems])

  const totalQuantity = useMemo(() => {
    return matchingItems.reduce((prev, curr) => prev + curr.quantity, 0);
  }, [matchingItems]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        matchingItems,
        totalCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
