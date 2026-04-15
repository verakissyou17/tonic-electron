import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Could not fetch products.");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
  }, [cart]);

  const increaseQuantity = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantity((prev) => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      return {
        ...prev,
        [id]: current - 1,
      };
    });
  };

  function addToCart(productId, quantity) {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.productId === productId);
      if (existing) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        return [...prevCart, { productId, quantity }];
      }
    });
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              totalQuantity={totalQuantity}
              products={products}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              cart={cart}
              addToCart={addToCart}
              F
            />
          }
        />
        <Route
          path="/category/:category"
          element={
            <Home
              totalQuantity={totalQuantity}
              products={products}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              cart={cart}
              addToCart={addToCart}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
