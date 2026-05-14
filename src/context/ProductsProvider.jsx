import {  useState, useEffect } from "react";
import { ProductsContext } from "./ProductsContext";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
   const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/products.json");
      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories }}>
      {children}
    </ProductsContext.Provider>
  );
}

