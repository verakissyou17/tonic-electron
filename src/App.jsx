import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);

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

  const increaseQuantity = () => {
    if(quantity > 1000) return;
    setQuantity((prev) => (prev += 1));
  };

  const decreaseQuantity = () => {
    if(quantity <= 0) return;
    setQuantity((prev) => (prev -= 1));
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route
          path="/category/:category"
          element={
            <ProductsPage
              products={products}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
