import { useParams, Navigate } from "react-router-dom";
import Header from "../components/Header";
import HomeMain from "../components/HomeMain";

function Home({
  products,
  quantity,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
  cart,
  addToCart,
  totalQuantity,
  deleteFromCart,
}) {
  const { category } = useParams();
  const categories = [...new Set(products.map((p) => p.category))];
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  if (category && !categories.includes(category)) {
    return <Navigate to="*" />;
  }

  return (
    <>
      <Header
        deleteFromCart={deleteFromCart}
        products={products}
        cart={cart}
        totalQuantity={totalQuantity}
      />
      <HomeMain
        products={filteredProducts}
        quantity={quantity}
        setQuantity={setQuantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cart={cart}
        addToCart={addToCart}
      />
    </>
  );
}

export default Home;
