import { useState, useEffect } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import HomeMain from "../components/HomeMain";
import { useProducts } from "../context/useProducts";
import SearchBar from "../components/SearchBar";

function Home() {
  const { products, categories } = useProducts();
  const { category } = useParams();

  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();

  useEffect(() => {
    setSearchTerm("");
    setInputValue("");
  }, [location.key]);

  if (category && !categories.includes(category)) {
    return <Navigate to="*" />;
  }

  const displayedProducts = products.filter((p) => {
    const matchesCategory = !category || p.category === category;

    const matchesSearch =
      !searchTerm.trim() ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const hasResults = displayedProducts.length > 0;

  return (
    <>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchTerm={setSearchTerm}
      />
      {hasResults ? (
        <HomeMain products={displayedProducts} />
      ) : (
        <h1 style={{textAlign: "center"}}>Not found</h1>
      )}
    </>
  );
}

export default Home;
