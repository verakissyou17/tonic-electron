import Header from "../components/Header";
import HomeMain from "../components/HomeMain";

function Home({ products }) {
  return (
    <>
      <Header />
      <HomeMain products={products} />
    </>
  );
}

export default Home;
