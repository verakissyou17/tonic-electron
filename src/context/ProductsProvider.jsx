import { useState, useEffect, useMemo } from "react";
import { ProductsContext } from "./ProductsContext";
import { fetchProducts } from "../services/fetchtProducts";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProducts();
      setProducts(data);
    }
    fetchData();
  }, []);

  const value = useMemo(
    () => ({
      products,
      categories,
    }),
    [products, categories],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
