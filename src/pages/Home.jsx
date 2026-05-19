import { useState} from "react";
import { useParams, Navigate, useSearchParams } from "react-router-dom";
import HomeMain from "../components/HomeMain";
import { useProducts } from "../context/useProducts";
import SearchBar from "../components/SearchBar";

function Home() {
  const { products, categories } = useProducts();

  const { category } = useParams();
  const [searchParams] = useSearchParams();
   const searchTerm = searchParams.get("search") || "";

  const [inputValue, setInputValue] = useState("");

  if (category && !categories.includes(category)) {
    return <Navigate to="*" />;
  }

  const displayedProducts = products.filter((p) => {
      if (searchTerm.trim()) {
      return p.name.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return !category || p.category === category;
  });

  const hasResults = displayedProducts.length > 0;

  return (
    <>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
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
