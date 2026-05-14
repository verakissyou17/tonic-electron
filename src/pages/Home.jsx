import { useParams, Navigate } from "react-router-dom";
import HomeMain from "../components/HomeMain";
import { useProducts } from "../context/useProducts";

function Home() {
  const { products, categories } = useProducts();
  const { category } = useParams();
 

  const displayedProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  if (category && !categories.includes(category)) {
    return <Navigate to="*" />;
  }

  return <HomeMain displayedProducts={displayedProducts}  />;
}

export default Home;
