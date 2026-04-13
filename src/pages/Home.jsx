import Header from "../components/Header";
import HomeMain from "../components/HomeMain";

function Home({ products, quantity, increaseQuantity, decreaseQuantity }) {
  return (
    <>
      <Header />
      <HomeMain
        products={products}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </>
  );
}

export default Home;
